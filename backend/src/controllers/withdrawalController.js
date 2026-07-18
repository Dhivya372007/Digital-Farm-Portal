import mrlCalculator from "../services/mrlCalculator.js";


/*
|--------------------------------------------------------------------------
| Calculate Withdrawal Period
|--------------------------------------------------------------------------
*/

const calculateWithdrawal = async (req, res) => {

  try {

    const {
      drug_id,
      treatment_date
    } = req.body;


    /*
    |--------------------------------------------------------------------------
    | Validate Request Data
    |--------------------------------------------------------------------------
    */

    if (!drug_id || !treatment_date) {

      return res.status(400).json({

        success: false,

        message:
          "drug_id and treatment_date are required",

        data: null

      });

    }



    /*
    |--------------------------------------------------------------------------
    | Call Service
    |--------------------------------------------------------------------------
    */

    const result =
      await mrlCalculator.calculateWithdrawal({

        drug_id,

        treatment_date

      });



    /*
    |--------------------------------------------------------------------------
    | Success Response
    |--------------------------------------------------------------------------
    */

    return res.status(200).json({

      success: true,

      message:
        "Withdrawal calculation completed",

      data: result

    });



  } catch (error) {


    return res.status(500).json({

      success: false,

      message:
        error.message ||
        "Unable to calculate withdrawal",

      data: null

    });


  }

};



export default {

  calculateWithdrawal

};