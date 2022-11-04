const clinicService = require("../services/clinicService");

let createClinic = async (req, res) => {
    try {
        let infor = await clinicService.createClinic(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getAllCinic = async (req, res) => {
    try {
        let infor = await clinicService.getAllCinic();
        return res.status(200).json(infor);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

let getDatailClinicById = async (req, res) => {
    try {
        let infor = await clinicService.getDatailClinicById(req.query.id);
        return res.status(200).json(infor);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            message: 'Error from server...'
        })
    }
}

module.exports = {
    createClinic: createClinic,
    getAllCinic: getAllCinic,
    getDatailClinicById: getDatailClinicById
} 