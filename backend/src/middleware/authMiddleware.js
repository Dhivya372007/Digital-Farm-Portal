import supabase from "../config/db.js";


const authMiddleware = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({

                success: false,

                message: "Authorization token required",

                data: null

            });

        }



        const token = authHeader.split(" ")[1];


        if (!token) {

            return res.status(401).json({

                success: false,

                message: "Invalid authorization format",

                data: null

            });

        }



        const {
            data,
            error
        } = await supabase.auth.getUser(token);



        if (error || !data.user) {

            return res.status(401).json({

                success: false,

                message: "Invalid or expired token",

                data: null

            });

        }



        req.user = data.user;


        next();



    } catch(error) {


        return res.status(500).json({

            success:false,

            message:
                error.message ||
                "Authentication failed",

            data:null

        });


    }

};



export default authMiddleware;