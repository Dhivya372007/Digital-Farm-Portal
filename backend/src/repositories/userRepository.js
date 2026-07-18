import supabase from "../config/db.js";

/*
|--------------------------------------------------------------------------
| User Repository
|--------------------------------------------------------------------------
| Uses the profiles table.
|--------------------------------------------------------------------------
*/

const findUserByEmail = async (email) => {

    /*
    |--------------------------------------------------------------
    | NOTE
    |--------------------------------------------------------------
    | The profiles table does not contain an email column.
    | Email belongs to auth.users.
    |
    | Authentication is handled separately by Supabase Auth.
    |
    | This placeholder returns null until the authentication
    | integration stage.
    */

    return null;

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



const createUser = async (profileData) => {

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



const updateUser = async (id, profileData) => {

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



export default {

    findUserByEmail,

    getProfileById,

    createUser,

    updateUser

};