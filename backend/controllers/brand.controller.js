const db = require("../dbConnection");

module.exports = class BrandController {
    constructor(req) {
        this.requestBody = req.body
        this.response = { status: false, data: {} }
    }

    async validateRequest() {
        if (!this.requestBody.brandName || !this.requestBody.brandDesc || !this.requestBody.display_status) {
            this.response.message = "Required Parameters Missing"
            return false
        }
        return true
    }

    async addBrand(req, res, next) {
        try {
            let validation = await this.validateRequest()
            if (!validation) return this.response

            let duplicateBrandName = await this.checkDuplicateBrandName()
            if (!duplicateBrandName) return this.response

            return await this.insertBrand()

        } catch (error) {
            console.log("Error", error);
            this.response.message = "Connection Timed Out"
            return this.response
        }
    }

    async getBrands() {
        try {
            let query = "select brand_name,brand_description,is_active from ecommerce.brand";
            let result = await db.executequery(query);
            // console.log("resulttt", JSON.stringify(result));
            this.response.data.brandsArr = result;
            this.response.data.totalBrands = result.length
            if (result.length > 0) {
                this.response.status = true;
                this.response.data.message = "Brands Found"
                return this.response
            }
            this.response.data.message = "No Brands Found"
            return this.response
        } catch (error) {
            console.log("Error", error);
            this.response.data.message = "Connection Timed Out"
            return this.response
        }
    }

    async getBrandByName(){
        try {
            let query="select brand_name,brand_description,is_active from ecommerce.brand where brand_name=?"
            let values=[this.requestBody.brand_name]
            let result=await db.executevaluesquery(query,values);
            console.log("response",result);
            if (result.length > 0) {
                this.response.status = true;
                this.response.data.brand=result[0];
                this.response.data.message = "Brand Found"
                return this.response
            }
            this.response.data.message = "No Brand Found"
            return this.response

        } catch (error) {
            console.log("error",error);
            this.response.data.message = "Connection Timed Out"
            return this.response
        }
    }

    async insertBrand() {
        let query = "insert into ecommerce.brand (brand_name, brand_description, is_active) VALUES (?,?,?) "
        let values = [this.requestBody.brandName, this.requestBody.brandDesc, Number(this.requestBody.display_status)]
        let result = await db.executevaluesquery(query, values)
        if (result.affectedRows > 0) {
            this.response.message = "Brand Added Successfully"
            this.response.status = true
            return this.response
        }
        this.response.message = "Oop's Something Went Wrong"

        return this.response
    }

    async checkDuplicateBrandName() {
        let query = `SELECT * FROM ecommerce.brand WHERE brand_name = "${this.requestBody.brandName}";`
        let result = await db.executequery(query)
        console.log(result);
        if (result.length > 0) {
            // console.log("i am heree");
            this.response.message = "You Cannot Enter Duplicate Brand Name"
            return false
        }
        return true
    }














}