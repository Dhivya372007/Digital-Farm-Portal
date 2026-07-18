import drugRepository from "../repositories/drugRepository.js";
import {
    validateRequiredFields,
    validationErrorResponse
} from "../utils/validation.js";

/*
|--------------------------------------------------------------------------
| Get All Drugs
|--------------------------------------------------------------------------
*/

const getAllDrugs = async (req, res) => {

    try {

        const drugs = await drugRepository.getAllDrugs();

        return res.status(200).json({

            success: true,

            message: "Drugs fetched successfully",

            data: drugs

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message || "Unable to fetch drugs",

            data: null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Get Drug By ID
|--------------------------------------------------------------------------
*/

const getDrugById = async (req, res) => {

    try {

        const { id } = req.params;

        if (!id) {

            return validationErrorResponse(
                res,
                [
                    "drug id is required"
                ]
            );

        }

        const drug = await drugRepository.getDrugById(id);

        return res.status(200).json({

            success: true,

            message: "Drug fetched successfully",

            data: drug

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message || "Unable to fetch drug",

            data: null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Create Drug
|--------------------------------------------------------------------------
*/

const createDrug = async (req, res) => {

    try {

        const validation = validateRequiredFields(
            req.body,
            [
                "drug_name"
            ]
        );

        if (!validation.valid) {

            return validationErrorResponse(
                res,
                validation.errors
            );

        }

        const drug = await drugRepository.createDrug(req.body);

        return res.status(201).json({

            success: true,

            message: "Drug created successfully",

            data: drug

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message || "Unable to create drug",

            data: null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Update Drug
|--------------------------------------------------------------------------
*/

const updateDrug = async (req, res) => {

    try {

        const { id } = req.params;

        if (!id) {

            return validationErrorResponse(
                res,
                [
                    "drug id is required"
                ]
            );

        }

        const drug = await drugRepository.updateDrug(id, req.body);

        return res.status(200).json({

            success: true,

            message: "Drug updated successfully",

            data: drug

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message || "Unable to update drug",

            data: null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Delete Drug
|--------------------------------------------------------------------------
*/

const deleteDrug = async (req, res) => {

    try {

        const { id } = req.params;

        if (!id) {

            return validationErrorResponse(
                res,
                [
                    "drug id is required"
                ]
            );

        }

        const drug = await drugRepository.deleteDrug(id);

        return res.status(200).json({

            success: true,

            message: "Drug deleted successfully",

            data: drug

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message || "Unable to delete drug",

            data: null

        });

    }

};



export default {

    getAllDrugs,

    getDrugById,

    createDrug,

    updateDrug,

    deleteDrug

};