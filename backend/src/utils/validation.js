/*
|--------------------------------------------------------------------------
| Validation Utilities
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| Required Field Validation
|--------------------------------------------------------------------------
*/

export const validateRequiredFields = (
    data,
    fields
) => {

    const missingFields = fields.filter(
        field =>
            !data[field]
    );


    if (missingFields.length > 0) {

        return {

            valid: false,

            errors: missingFields.map(
                field => `${field} is required`
            )

        };

    }


    return {

        valid: true,

        errors: []

    };

};



/*
|--------------------------------------------------------------------------
| Email Validation
|--------------------------------------------------------------------------
*/

export const validateEmail = (email) => {


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    return emailRegex.test(email);


};



/*
|--------------------------------------------------------------------------
| Standard Validation Error Response
|--------------------------------------------------------------------------
*/

export const validationErrorResponse = (
    res,
    errors
) => {


    return res.status(400).json({

        success: false,

        message:
            "Validation failed",

        errors,

        data: null

    });


};