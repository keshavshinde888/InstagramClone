const express=require("express")
const app=express()
const cors=require('cors')
const {dbConnection}=require("./DB/database.js")
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
const upload = multer({ storage: storage })
app.use(express.json())
app.use(cors())
// app.use(dbConnection)
app.use("/api", require("./Routes/Routes.js"));
app.post('/upload', upload.single('image'), (req, res) => {
if (!req.file) {
res.status(400).send('No file uploaded.');
return;
}})

app.listen(3001,()=>{
    console.log("Server Running")
})
