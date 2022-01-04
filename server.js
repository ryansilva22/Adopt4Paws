let express = require('express');
let app = express();
let bodyParser = require('express');
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log("Listening on http://localhost:" + PORT + "..."));
app.use(express.static('www'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));        
