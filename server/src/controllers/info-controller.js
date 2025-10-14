
const info = (req, res) => {
    return res.status(201).json({
        success: true,
        message: 'API is live',
        error: {},
        data: {},
    });
}

module.exports = {
    info
}