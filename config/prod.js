// production keys

module.exports = {
    hotelName: process.env.HOTEL_NAME,
    mongoURI: process.env.MONGO_URI,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    emailPassword: process.env.EMAIL_PASSWORD
};
