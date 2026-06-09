const https = require('https');
const fs = require('fs');

const TOKEN = 'YOUR_FIGMA_TOKEN_HERE';
const FILE_KEY = 'N4z9g1hbNAc5EdfM6ubuXL';
// Children of frame 22:2 "9 humans"
const IDS = '22:3,22:4,22:10,22:11,22:18,22:24,22:30,22:36,22:42,22:48,22:54';

const options = {
    hostname: 'api.figma.com',
    path: `/v1/images/${FILE_KEY}?ids=${IDS}&format=svg`,
    method: 'GET',
    headers: {
        'X-Figma-Token': TOKEN
    }
};

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('URLs retrieved successfully');
            fs.writeFileSync('figma_assets_9humans.json', data);
        } else {
            console.error(`Error: ${res.statusCode} - ${data}`);
        }
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
