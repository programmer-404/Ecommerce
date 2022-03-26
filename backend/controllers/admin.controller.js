const db = require("../dbConnection")
const encrypt_decrypt = require("../encrypt_decrypt")

async function validateRequest(body, apiName) {
    if (!body.username || (apiName == "resetPassword" && body.newPassword) || ((apiName == "register" || apiName == "login") && !body.password) || (apiName == "register" && !body.adminType)) {
        return { status: false, message: "initial parameters missing" };
    }

    return { status: true }
}

module.exports.registerAdmin = async (req, res, next) => {
    try {
        let validation = await validateRequest(req.body, "register")
        if (!validation.status) return validation;

        let duplicateUser = await checkUsername(req.body.username, "duplicate")
        if (!duplicateUser.status) return duplicateUser;

        let register = await addAdmin(req.body)

        return register
    } catch (error) {
        console.log(error)
        return { status: false, message: "connection timed out !!" }
    }
}

module.exports.loginAdmin = async (req, res, next) => {
    try {
        let validation = await validateRequest(req.body, "login");
        if (!validation.status) return validation;

        let login = await checkLogin(req.body)
        return login
    } catch (error) {
        console.log(error)
        return { status: false, message: "connection timed out !!" }
    }
}

module.exports.resetPassword = async (req, res, next) => {
    try {
        let validation = await validateRequest(req.body, "resetPassword")
        if (!validation.status) return validation;

        let validusername = await checkUsername(req.body.username, "validate");
        if (!validusername.status) return validusername

        let Passwordreset = await setPassword(req.body);
        return Passwordreset
    } catch (error) {
        console.log(error)
        return { status: false, message: "connection timed out !!" }
    }
}

async function setPassword(body) {
    body.password = await encrypt_decrypt.encrypt(body.newPassword);
    let query = "update admin set password =" + body.password + "where ad_username=" + body.username;
    let result = await db.executequery(query);
    if (result.affectedRows > 0) return { status: true, message: "Password Reset Successfully" }

    return { status: false, message: "Oop's Something Went Wrong!! please try again." }

}

async function checkLogin(body) {
    let validusername = await checkUsername(body.username, "validate");
    if (!validusername.status) return validusername
    let password = await encrypt_decrypt.decrypt(validusername.data[0].ad_password)
    if (password == body.password) return { status: true, message: "Login Successful" }

    return { status: false, message: "Please Enter Correct Password" }

}

async function checkUsername(username, action) {
    let query = "select * from admin where ad_username=" + username;
    let result = db.executequery(query);
    if (action == "duplicate") {
        if (result.length > 0) return { status: false, message: "Admin Already Exist's" };

        return { status: true }
    }
    if (action == "validate") {
        if (result.length == 0) return { status: false, message: "Please Enter Valid Username" }

        return { status: true, data: result[0] }
    }
}

async function addAdmin(body) {
    body.password = await encrypt_decrypt.encrypt(body.password)
    let query = `insert into admin 
                 (ad_username, ad_password, mobile_no, address, first_name, last_name, is_admin_active, is_admin_blocked, admin_type, date_of_birth,
                  creation_time) values 
                 (?,?,?,?,?,?,?,?,?,?,
                  ?)`
    let values = [body.username, body.password, body.mobile_no, body.address, body.fname, body.lname, 1, 0, body.ad_type, body.dob,
                  new Date()]
    let result = await db.executevaluesquery(query, values);
    if (result.affectedRows > 0) return { status: true, message: "Admin Registered Successfully" }

    return { status: false, message: "Admin Registration Failed" }
}