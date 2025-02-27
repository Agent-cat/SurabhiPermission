const User = require("../models/user.model");

const findUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.body.id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = findUser; 