const express=require("express");
const router=express.Router();
const bodyParser=require("body-parser");
const middleware=require("./middleware")

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json());

router.post("/adminRegister",middleware.registerAdmin);
router.post("/adminLogin",middleware.loginAdmin);
router.post("/adminResetPassword",middleware.resetPasswordAdmin)
router.post("/addBrand",middleware.addBrand)
router.get("/getBrands",middleware.getBrands)
router.post("/getBrandByName",middleware.getBrandByName)

router.get("/",function(req,res,next){ res.send("hello world"); })

module.exports = router