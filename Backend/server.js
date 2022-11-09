//  --  Imports  Begin --
require('module-alias/register')
const express = require("express");
var cors = require('cors')
const http    = require('http');
const routes  = require("./routes/index");
require("@config/db-connection");
//  --  Imports End    --

const port = 8000;
const app = express();

app.use(cors())
const server = http.createServer(app);
routes(app)


server.listen(process.env.PORT || port, () => {
  console.log(`StudySmart listening at http://localhost:${port} `);
});
