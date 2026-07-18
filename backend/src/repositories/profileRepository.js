import supabase from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Profile Repository
|--------------------------------------------------------------------------
| Database operations for the profiles table.
| Authentication is handled separately.
|--------------------------------------------------------------------------
*/

const getAllProfiles = async () => {

    const { data, error } = await supabase
        .from("profiles")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const getProfileById = async (id) => {

    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const createProfile = async (profileData) => {

    const { data, error } = await supabase
        .from("profiles")
        .insert(profileData)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const updateProfile = async (id, profileData) => {

    const { data, error } = await supabase
        .from("profiles")
        .update(profileData)
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const deleteProfile = async (id) => {

    const { data, error } = await supabase
        .from("profiles")
        .delete()
        .eq("id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



export default {

    getAllProfiles,

    getProfileById,

    createProfile,

    updateProfile,

    deleteProfile

};