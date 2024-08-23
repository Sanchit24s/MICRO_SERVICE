const bcrypt = require("bcrypt");
const prisma = require("../config/db.config");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class AuthController {
    static async register(req, res) {
        try {
            const payload = req.body;
            const salt = bcrypt.genSaltSync(10);
            payload.password = bcrypt.hashSync(payload.password, salt);

            const user = await prisma.user.create({
                data: payload,
            });

            return res.json({ message: "Account created successfully.", user });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong. Please try again!" });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await prisma.user.findUnique({
                where: {
                    email: email,
                },
            });

            if (user) {
                if (!bcrypt.compareSync(password, user.password)) {
                    return res.status(401).json({ message: "Invalid Credentials" });
                }

                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                };

                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "3d",
                });

                return res.json({
                    message: "Logged in successfully",
                    access_token: `Bearer ${token}`,
                });
            }

            return res.status(401).json({ message: "Invalid Credentials" });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Something went wrong. Please try again!" });
        }
    }

    static async user(req, res) {
        const user = req.user;
        return res.status(200).json({ user: user });
    }
}

module.exports = AuthController;
