/*
|--------------------------------------------------------------------------
| Drug Repository
|--------------------------------------------------------------------------
*/


const getAllDrugs = async () => {

    return [];

};



const getDrugById = async (id) => {

    return {

        drug_id: id

    };

};



const createDrug = async (drugData) => {

    return drugData;

};



const updateDrug = async (id, drugData) => {

    return {

        drug_id: id,

        ...drugData

    };

};



const deleteDrug = async (id) => {

    return {

        drug_id: id

    };

};



export default {

    getAllDrugs,

    getDrugById,

    createDrug,

    updateDrug,

    deleteDrug

};