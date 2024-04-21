import loginModel from "../models/loginModel.js";

export const getPosts = async (req, res) => {
  try {
    const login = await loginModel.find();

    console.log("login: ", login);
    console.log("req: ", req.method);

    res.status(200).json(login);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  console.log("req method: ", req.method);
  console.log("req: ", req.body);

  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await loginModel.findOne({ username: email });
    if (existingUser) {
      console.log("user exists");
      return res.status(400).json({ message: "Email already exists" });
    }

    console.log("new user reached");
    const newUser = new loginModel({
      firstName: firstName,
      lastName: lastName,
      username: email,
      password: password,
    });
    await newUser.save();
    console.log("new user created");

    res.status(201).json(newUser);
  } catch (error) {
    console.log("getting this error");
    res.status(409).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginModel.findOne({ username: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials." });
    }
    res.status(200).json({ message: "Sign in successful!" });
  } catch (error) {
    res.status(500).json({ message: "Server error.", error });
  }
};
