const adminController = require("./controllers/admin.controller")
const BrandClass = require("./controllers/brand.controller")

module.exports.registerAdmin = async (req, res, next) => {
    let registerResponse = adminController.registerAdmin(req, res, next);
    res.send(registerResponse);
}

module.exports.loginAdmin = async (req, res, next) => {
    let loginResponse = adminController.loginAdmin(req, res, next);
    res.send(loginResponse);
}

module.exports.resetPasswordAdmin = async (req, res, next) => {
    let passwordResetResponse = adminController.resetPassword(req, res, next);
    res.send(passwordResetResponse);
}

module.exports.addBrand = async (req, res, next) => {
    let brand = new BrandClass(req)
    let addBrandResponse = await brand.addBrand(req, res, next);
    res.send(addBrandResponse)
}

module.exports.getBrands = async (req, res, next) => {
    let brand = new BrandClass(req)
    let getBrandResponse = await brand.getBrands(req, res, next);
    res.send(getBrandResponse)
}

module.exports.getBrandByName=async (req,res,next)=>{
    let brand = new BrandClass(req)
    let BrandByNameResponse = await brand.getBrandByName(req, res, next);
    res.send(BrandByNameResponse)
}