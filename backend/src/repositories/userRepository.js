/*
|--------------------------------------------------------------------------
| User Repository
|--------------------------------------------------------------------------
*/


const findUserByEmail = async (email) => {


    return {

        email,

        role: "farmer"

    };


};



const createUser = async (userData) => {


    return userData;


};



export default {

    findUserByEmail,

    createUser

};