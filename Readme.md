# 📱 Integrating WhatsApp OTP API into a Monolithic Architecture

This project integrates WhatsApp-based OTP functionality into a monolithic Node.js backend using `whatsapp-web.js`, `mongoose`, `nodemailer`, and `socket.io`.

---

## 📁 Project Structure





project-root/
│
├── controllers/
│   └── whatsapp.controller.js  <-- WhatsApp logic
│
├── models/
|        └── Otp.js  <-- WhatsApp logic
|
├── routes/
│   └── whatsapp.routes.js      <-- All API endpoints
│
├── utils/
│   └── emailService.js         <-- Nodemailer stuff
│
├── app.js                      <-- Entry point
└── package.json



---

## 📦 Installation & Dependencies

Run the following command to install all necessary dependencies:

```bash
npm i cors socket.io express mongoose qrcode dotenv nodemailer nodemon whatsapp-web.js



cc
3. in app.js 
     set :-
     const express = require('express'); //  1. express server 
const http = require('http'); // 2. http server 
const Server = require('socket.io'); // 3. socket server
const app = express();
const server = http.createServer(app);  // 4. express ke app ko http me ghusao aur chhota server banao

const io = new Server(
  server,
  {
    cors: {
      origin: "*",
    }
  }
) // 5. create io 

// Export io so other modules (like controllers) can use it
module.exports.io = io;

// Optionally export app and server if needed elsewhere
module.exports.app = app;
module.exports.server = server;
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


