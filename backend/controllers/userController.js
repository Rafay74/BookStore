import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const register = async (req, res) => {
    const title = "register ::"
    try {
        const { name, email, password } = req.body

        // Check if user already exists with the provided email
        const userExisted = await User.findOne({ email })
        if (userExisted) {
            return res.status(400).json({ message: "User already exists!" })
        }

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 10)

        // Create a new user with the hashed password
        const newUser = new User({ name, email, password: hashedPassword })
        const createUser = await newUser.save()

        if (createUser) {
            return res.status(201).json({
                message: "Sign Up successful",
                user: {
                    _id: createUser._id,
                    name: createUser.name,
                    email: createUser.email,
                }
            })
        }
    } catch (error) {
        console.log({ title: title + 'error', details: error })
        res.status(500).json({ message: "Something went wrong while registering user" })
    }
}

export const login = async (req, res) => {
    const title = "login ::"
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide both email and password" })
        }

        // Find the user by email
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        // Compare the hashed password with the provided password
        const isMatch = await bcryptjs.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' })
        }

        // If authentication succeeds, return success response
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        console.log({ title: title + 'error', details: error })
        res.status(500).json({ message: "Something went wrong during login" })
    }
}
