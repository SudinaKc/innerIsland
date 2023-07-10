
import Psychologist from "../model/PsychologistModel.js";
// login Psychologist
export const loginPsychologist = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await Psychologist.findByCredentials(email, password);
      // const token = await user.generateToken();
  
      res.status(200).json({
        message: "login success",
        user,
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };


//   get all psychologist

export const getAllPsychologist = async (req, res) => {
    try {
      const users = await Psychologist.find();
      res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve users" });
    }
  };


  // get single psychologist


  export const getPsychologistDetail = async (req, res) => {
  const { id } = req.params;

  try {
    const psychologist = await Psychologist.findById(id);

    if (!psychologist) {
      return res.status(404).json({ error: "Psychologist not found" });
    }

    res.status(200).json(psychologist);
  } catch (error) {
    return res.status(500).json({ error: "Failed to retrieve psychologist" });
  }
};

  