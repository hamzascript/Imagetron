const express = require('express');
const app = express();
const axios = require('axios')

function run() {
    app.get('/', (req, res) => {
        res.send("hello");
    });
    
    app.get('/api/nsfw', async (req, res) => {
        const options = {
            method: 'POST',
            url: 'https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '4b5b89665fmshb1d37ce94074356p1037b8jsna948613faab9',
                'X-RapidAPI-Host': 'nsfw-images-detection-and-classification.p.rapidapi.com'
            },
            data: {
                url: 'https://media.discordapp.net/attachments/1221364911121105009/1244455528155840594/20220730_rft_wnbrstl_thegrove_cherokeest_trw_0513.png?ex=66552d06&is=6653db86&hm=3c6213ff8ecfaf9205088c1a07396dc6682a5545456e9d1c406d781099b84089&=&format=webp&quality=lossless&width=408&height=350'
            }
        }
        try {
            const response = await axios.request(options);
            res.send(response.data)
        } catch (error) {
            console.error(error);
            res.status(500).send('An error occurred while processing the image.');
        }
    });
    
    app.listen(3000, () => console.log('running on port 3000'));
}

module.exports = { run }; 

