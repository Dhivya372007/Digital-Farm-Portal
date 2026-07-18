import {
    validateRequiredFields,
    validateEmail,
    validationErrorResponse
} from "../utils/validation.js";


/*
|--------------------------------------------------------------------------
| Register User
|--------------------------------------------------------------------------
*/

const registerUser = async (req, res) => {

    try {

        const validation =
            validateRequiredFields(
                req.body,
                [
                    "name",
                    "email",
                    "role"
                ]
            );


        if (!validation.valid) {

            return validationErrorResponse(
                res,
                validation.errors
            );

        }



        const {
            name,
            email,
            role
        } = req.body;



        if (!validateEmail(email)) {

            return validationErrorResponse(
                res,
                [
                    "Invalid email format"
                ]
            );

        }



        return res.status(201).json({

            success: true,

            message:
                "User registered successfully",

            data: {

                name,

                email,

                role

            }

        });



    } catch(error) {

        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to register user",

            data:null

        });

    }

};



/*
|--------------------------------------------------------------------------
| Login User
|--------------------------------------------------------------------------
*/

const loginUser = async (req,res)=>{


    try {


        const validation =
            validateRequiredFields(
                req.body,
                [
                    "email"
                ]
            );


        if (!validation.valid) {


            return validationErrorResponse(
                res,
                validation.errors
            );


        }



        const {
            email
        } = req.body;



        if (!validateEmail(email)) {


            return validationErrorResponse(
                res,
                [
                    "Invalid email format"
                ]
            );


        }



        return res.status(200).json({

            success:true,

            message:
                "Login successful",

            data:{

                user:{

                    email,

                    role:"farmer"

                },

                token:
                    "demo-token"

            }

        });



    } catch(error){


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Unable to login",

            data:null

        });


    }


};



export default {

    registerUser,

    loginUser

};