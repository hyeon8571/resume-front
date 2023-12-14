const express = require("express");
const app = express();
const cors = require('cors');

const port = 5120;

app.use(cors());

app.listen(port, () => {
    console.log("서버 실행");
})

app.get("/", (req, resp)=>{
    resp.sendFile(__dirname + '/resume.html');
});
