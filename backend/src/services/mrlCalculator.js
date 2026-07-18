import withdrawalRepository from "../repositories/withdrawalRepository.js";


/*
|--------------------------------------------------------------------------
| MRL Calculator Service
|--------------------------------------------------------------------------
*/


const calculateWithdrawal = async ({
    drug_id,
    treatment_date
}) => {


    /*
    |--------------------------------------------------------------------------
    | Fetch Withdrawal Rule
    |--------------------------------------------------------------------------
    */

    const withdrawalRule =
        await withdrawalRepository.getWithdrawalRuleByDrugId(
            drug_id
        );


    if (!withdrawalRule) {

        throw new Error(
            "Withdrawal rule not found for drug"
        );

    }



    /*
    |--------------------------------------------------------------------------
    | Calculate Withdrawal End Date
    |--------------------------------------------------------------------------
    */


    const treatmentDate =
        new Date(treatment_date);


    const withdrawalEndDate =
        new Date(treatmentDate);


    withdrawalEndDate.setDate(
        treatmentDate.getDate()
        +
        withdrawalRule.withdrawal_days
    );



    /*
    |--------------------------------------------------------------------------
    | Calculate Remaining Days
    |--------------------------------------------------------------------------
    */


    const today =
        new Date();


    const remainingTime =
        withdrawalEndDate - today;


    const remainingDays =
        Math.max(
            0,
            Math.ceil(
                remainingTime /
                (1000 * 60 * 60 * 24)
            )
        );



    /*
    |--------------------------------------------------------------------------
    | Compliance Status
    |--------------------------------------------------------------------------
    */


    const status =
        remainingDays > 0
            ? "RISK"
            : "SAFE";



    return {

        drug: {

            drug_id

        },


        treatment_date,


        withdrawal: {

            withdrawal_days:
                withdrawalRule.withdrawal_days,


            withdrawal_end_date:
                withdrawalEndDate
                    .toISOString()
                    .split("T")[0]

        },


        compliance: {

            remaining_days:
                remainingDays,


            status,


            residue_limit:
                withdrawalRule.residue_limit

        }

    };

};



export default {

    calculateWithdrawal

};