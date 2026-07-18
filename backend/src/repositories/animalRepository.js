import supabase from "../config/db.js";

/*
|--------------------------------------------------------------------------
| Animal Repository
|--------------------------------------------------------------------------
| Database operations for animals.
|--------------------------------------------------------------------------
*/

const getAllAnimals = async () => {

    const { data, error } = await supabase
        .from("animals")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const getAnimalById = async (id) => {

    const { data, error } = await supabase
        .from("animals")
        .select("*")
        .eq("animal_id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const createAnimal = async (animalData) => {

    const { data, error } = await supabase
        .from("animals")
        .insert(animalData)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const updateAnimal = async (id, animalData) => {

    const { data, error } = await supabase
        .from("animals")
        .update(animalData)
        .eq("animal_id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



const deleteAnimal = async (id) => {

    const { data, error } = await supabase
        .from("animals")
        .delete()
        .eq("animal_id", id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;

};



export default {

    getAllAnimals,

    getAnimalById,

    createAnimal,

    updateAnimal,

    deleteAnimal

};