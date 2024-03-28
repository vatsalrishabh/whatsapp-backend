// OTPgenerator.js

function generateEmailOTP() {
    // Define the length of the OTP
    const otpLength = 6;
    // Define the range of characters for the OTP (0-9)
    const characters = '0123456789';
    // Initialize an empty string to store the OTP
    let otp = '';

    // Generate the OTP by randomly selecting characters from the character set
    for (let i = 0; i < otpLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    // Return the generated OTP
    return otp;
}


module.exports = generateEmailOTP;
