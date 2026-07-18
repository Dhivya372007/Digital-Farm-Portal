import supabase from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Drug Entry Repository
|--------------------------------------------------------------------------
| Database operations for the drug_entries table.
|--------------------------------------------------------------------------
*/

const getAllDrugEntries = async () => {

    const { data, error } = await supabase
        .from("drug_entries")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const getDrugEntryById = async (id) => {

    const { data, error } = await supabase
        .from("drug_entries")
        .select("*")
        .eq("entry_id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const createDrugEntry = async (entryData) => {

    const { data, error } = await supabase
        .from("drug_entries")
        .insert(entryData)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const updateDrugEntry = async (id, entryData) => {

    const { data, error } = await supabase
        .from("drug_entries")
        .update(entryData)
        .eq("entry_id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const deleteDrugEntry = async (id) => {

    const { data, error } = await supabase
        .from("drug_entries")
        .delete()
        .eq("entry_id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



export default {

    getAllDrugEntries,

    getDrugEntryById,

    createDrugEntry,

    updateDrugEntry,

    deleteDrugEntry

};