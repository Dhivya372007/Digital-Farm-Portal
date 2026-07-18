/*
|--------------------------------------------------------------------------
| Alert Controller
|--------------------------------------------------------------------------
*/


const getAllAlerts = async (req, res) => {

  try {

    return res.status(200).json({

      success: true,

      message: "Alerts fetched successfully",

      data: []

    });


  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message || "Unable to fetch alerts",

      data: null

    });

  }

};



const getAlertById = async (req, res) => {

  try {

    const { id } = req.params;


    if (!id) {

      return res.status(400).json({

        success: false,

        message: "Alert id is required",

        data: null

      });

    }


    return res.status(200).json({

      success: true,

      message: "Alert fetched successfully",

      data: {

        alert_id: id,

        type: "WITHDRAWAL_WARNING",

        message:
          "Animal cannot be sold before withdrawal period ends"

      }

    });


  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message || "Unable to fetch alert",

      data: null

    });

  }

};



const createAlert = async (req, res) => {

  try {

    const {
      animal_id,
      message
    } = req.body;


    if (!animal_id || !message) {

      return res.status(400).json({

        success: false,

        message:
          "animal_id and message are required",

        data: null

      });

    }


    return res.status(201).json({

      success: true,

      message:
        "Alert created successfully",

      data: {

        animal_id,

        message

      }

    });


  } catch (error) {

    return res.status(500).json({

      success: false,

      message:
        error.message || "Unable to create alert",

      data: null

    });

  }

};



export default {

  getAllAlerts,

  getAlertById,

  createAlert

};