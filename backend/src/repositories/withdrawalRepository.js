/*
|--------------------------------------------------------------------------
| Withdrawal Repository
|--------------------------------------------------------------------------
*/


const getWithdrawalRuleByDrugId = async (drug_id) => {


    return {

        drug_id,

        withdrawal_days: 7,

        residue_limit: "0.01 mg/kg"

    };


};



export default {

    getWithdrawalRuleByDrugId

};