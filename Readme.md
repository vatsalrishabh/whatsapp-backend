<h1>📱 Integrating WhatsApp OTP API into a Monolithic Architecture</h1>

<p>This project integrates WhatsApp-based OTP functionality into a monolithic Node.js backend using <code>whatsapp-web.js</code>, <code>mongoose</code>, <code>nodemailer</code>, and <code>socket.io</code>.</p>

<hr />

<h2>📁 Project Structure</h2>

<pre>
project-root/
│
├── controllers/
│   └── whatsapp.controller.js      &lt;-- WhatsApp logic
│
├── models/
│   └── Otp.js                      &lt;-- Mongoose OTP schema
│
├── routes/
│   └── whatsapp.routes.js          &lt;-- All API endpoints
│
├── utils/
│   └── emailService.js             &lt;-- Nodemailer configuration
│
├── app.js                          &lt;-- Entry point
└── package.json
</pre>

<hr />

<h2>📦 Installation & Dependencies</h2>

<p>Run the following command to install all necessary dependencies:</p>

<pre><code>npm i cors socket.io express mongoose qrcode dotenv nodemailer nodemon whatsapp-web.js</code></pre>

<hr />
<br/>

<>
<h2>⚙️ app.js Setup</h2>

<p>In <code>app.js</code>, configure the server with the following code:</p>

<pre><code>
const express = require('express');        // 1. Express server
const http = require('http');              // 2. HTTP server
const Server = require('socket.io');       // 3. Socket.IO server

const app = express();
const server = http.createServer(app);     // 4. Wrap Express app in HTTP server

const io = new Server(server, {
  cors: {
    origin: "*",
  }
}); // 5. Initialize Socket.IO

// Export for external use (like in controllers)
module.exports.io = io;
module.exports.app = app;
module.exports.server = server;

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
</code></pre>

<hr />
