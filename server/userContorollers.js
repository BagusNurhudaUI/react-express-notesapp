
const registerUser = async (req, res) => {
    const {name, email, password, etc, pic} = req.body

    res.json({
        name, email
    })
}

module.exports = registerUser