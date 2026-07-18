/*
|--------------------------------------------------------------------------
| Animal Repository
|--------------------------------------------------------------------------
| Database operations for animals.
| Supabase integration will be added later.
|--------------------------------------------------------------------------
*/


const getAllAnimals = async () => {

    return [];

};



const getAnimalById = async (id) => {

    return {

        animal_id: id

    };

};



const createAnimal = async (animalData) => {

    return animalData;

};



const updateAnimal = async (id, animalData) => {

    return {

        animal_id: id,

        ...animalData

    };

};



const deleteAnimal = async (id) => {

    return {

        animal_id: id

    };

};



export default {

    getAllAnimals,

    getAnimalById,

    createAnimal,

    updateAnimal,

    deleteAnimal

};