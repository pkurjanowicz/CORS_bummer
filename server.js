const express = require('express');
const request = require('request');

const app = express();

const headers = {
    "Accept": "application/json",
    "app_id": app_id,
    "app_key": api_key
}

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/oxfordrequest/:word', (req, res) => {
request(
    {url: `https://od-api.oxforddictionaries.com/api/v2/lemmas/en/${req.params.word}` ,
    headers: headers,
        },
    (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error'});
    }

        res.json(JSON.parse(body));
    }
)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));




