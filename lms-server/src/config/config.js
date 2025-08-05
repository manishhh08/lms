export const config= {
    port: process.env.PORT || 4001,
    mongoOption:{
        url: process.env.MONGO_URL || "mongodb://localhost:27017/lms-db",
    },
//     jwt:{
//         secret: process.env.JWT_SECRET || "SECRET_KEY",
//         expiresIn: process.env.JWT_EXPIRES_IN || "1d",
//     }
}