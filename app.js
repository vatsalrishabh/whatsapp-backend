const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal'); // <-- import this
const axios = require('axios');
require('dotenv').config(); // To load OPENAI_API_KEY

const client = new Client();

client.on('qr', (qr) => {
    // Now this will show a scannable QR code in terminal
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Client is ready!');
});

client.on('message', async (msg) => {
    try {
        const userMsg = msg.body;

        const aiResponse = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are Vatsal AI, a helpful and smart assistant who replies in a friendly tone, like a real person. Keep replies short, relevant, and casual.',
                    },
                    {
                        role: 'user',
                        content: userMsg,
                    },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );

        const reply = aiResponse.data.choices[0].message.content;
        msg.reply(reply);
    } catch (error) {
        console.error('⚠️ AI Error:', error.message);
        msg.reply('Sorry, I glitched out for a sec. Try again? 😅');
    }
});

client.initialize();
