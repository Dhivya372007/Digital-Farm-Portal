import {
    validateRequiredFields,
    validationErrorResponse
} from "../utils/validation.js";


/*
|--------------------------------------------------------------------------
| Get All Animals
|--------------------------------------------------------------------------
*/

const getAllAnimals = async (req, res) => {

    try {

        return res.status(200).json({

            success: true,

            message:
                "Animals fetched successfully",

            data: []

        });


    } catch(error) {

        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to fetch animals",

            data:null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Get Animal By ID
|--------------------------------------------------------------------------
*/

const getAnimalById = async (req,res)=>{


    try {


        const {
            id
        } = req.params;



        if(!id){

            return validationErrorResponse(
                res,
                [
                    "animal id is required"
                ]
            );

        }



        return res.status(200).json({

            success:true,

            message:
                "Animal fetched successfully",

            data:{

                animal_id:id,

                tag_number:"TAG001",

                species:"Cattle"

            }

        });



    }catch(error){


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to fetch animal",

            data:null

        });


    }


};



/*
|--------------------------------------------------------------------------
| Create Animal
|--------------------------------------------------------------------------
*/

const createAnimal = async(req,res)=>{


    try {


        const validation =
            validateRequiredFields(
                req.body,
                [
                    "tag_number",
                    "species"
                ]
            );



        if(!validation.valid){

            return validationErrorResponse(
                res,
                validation.errors
            );

        }



        const {
            tag_number,
            species
        } = req.body;



        return res.status(201).json({

            success:true,

            message:
                "Animal created successfully",

            data:{

                tag_number,

                species

            }

        });



    }catch(error){


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to create animal",

            data:null

        });


    }


};



/*
|--------------------------------------------------------------------------
| Update Animal
|--------------------------------------------------------------------------
*/

const updateAnimal = async(req,res)=>{


    try {


        const {
            id
        } = req.params;



        if(!id){

            return validationErrorResponse(
                res,
                [
                    "animal id is required"
                ]
            );

        }



        return res.status(200).json({

            success:true,

            message:
                "Animal updated successfully",

            data:{

                animal_id:id

            }

        });



    }catch(error){


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to update animal",

            data:null

        });


    }


};



/*
|--------------------------------------------------------------------------
| Delete Animal
|--------------------------------------------------------------------------
*/

const deleteAnimal = async(req,res)=>{


    try {


        const {
            id
        } = req.params;



        if(!id){

            return validationErrorResponse(
                res,
                [
                    "animal id is required"
                ]
            );

        }



        return res.status(200).json({

            success:true,

            message:
                "Animal deleted successfully",

            data:{

                animal_id:id

            }

        });



    }catch(error){


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to delete animal",

            data:null

        });


    }


};



export default {

    getAllAnimals,

    getAnimalById,

    createAnimal,

    updateAnimal,

    deleteAnimal

};