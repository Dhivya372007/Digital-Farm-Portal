import supabase from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Withdrawal Repository
|--------------------------------------------------------------------------
*/

const getWithdrawalRuleByDrugId = async (drugId) => {

    const { data, error } = await supabase
        .from("withdrawal_rules")
        .select(`
            withdrawal_days,
            residue_limit,
            drug_id,
            drugs (
                drug_name,
                category
            )
        `)
        .eq("drug_id", drugId)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};

export default {

    getWithdrawalRuleByDrugId

};