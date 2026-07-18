import withdrawalRepository from "../repositories/withdrawalRepository.js";

/*
|--------------------------------------------------------------------------
| MRL Calculator
|--------------------------------------------------------------------------
*/

const calculateWithdrawal = async ({ drug_id, treatment_date }) => {

    const rule =
        await withdrawalRepository.getWithdrawalRuleByDrugId(drug_id);

    if (!rule) {
        throw new Error("Withdrawal rule not found for drug");
    }

    const treatmentDate = new Date(treatment_date);

    const withdrawalEndDate = new Date(treatmentDate);

    withdrawalEndDate.setDate(
        withdrawalEndDate.getDate() + rule.withdrawal_days
    );

    const today = new Date();

    const remainingDays = Math.ceil(
        (withdrawalEndDate - today) / (1000 * 60 * 60 * 24)
    );

    return {

        drug: {

            drug_id: rule.drug_id,

            drug_name: rule.drugs.drug_name,

            category: rule.drugs.category

        },

        treatment_date,

        withdrawal: {

            withdrawal_days: rule.withdrawal_days,

            withdrawal_end_date:
                withdrawalEndDate.toISOString().split("T")[0]

        },

        compliance: {

            remaining_days: Math.max(remainingDays, 0),

            status:
                remainingDays > 0 ? "RISK" : "SAFE",

            residue_limit: rule.residue_limit

        }

    };

};

export default {

    calculateWithdrawal

};