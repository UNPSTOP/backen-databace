// // middleware/apiAuth.js
// const API_KEY = process.env.API_KEY; // Store securely

// function apiAuth(req, res, next) {
//     const key = req.headers['x-api-key'];
//     if (key && key === API_KEY) {
//         return next();
//     }
//     res.status(401).json({ error: "Unauthorized" });
// }

// module.exports = apiAuth;