const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: {type: String , required: true },
    package: {type: Number , required: true },
    benefits: {type: String , required: true },
    it: {type: Boolean , required: true },
    sector: {type: String , required: true },
    backlogLimit: {type: Number , required: true },
    ageLimit: {type: Number , required: true },
    role: {type: String , required: true },
    proccess: {type: String , required: true },
    url: {type: String , required: true },
    monthofapp: {type: String , required: true }
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;
