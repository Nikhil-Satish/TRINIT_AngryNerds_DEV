// app.js 
const express = require('express'); 
const multer = require('multer'); 
const path = require('path'); 
const fs = require('fs'); 
const execSync = require('child_process').execSync;

const app = express(); 
const port = 8000; 

app.use(express.urlencoded({extended:true}));

const storage = multer.diskStorage({ 
destination: (req, file, cb) => { 
	cb(null, '../src/input'); 
}, 
filename: (req, file, cb) => { 
	// const fileName = `${Date.now()}-${file.originalname}`; 
    const fileName = 'trial.zip';
	cb(null, fileName); 
}, 
}); 

const upload = multer({ storage }); 

app.get('/', (req, res) => { 
res.render('index') 
}); 

app.post('/upload', upload.single('trial.zip'), (req, res) => { 
  const shell = execSync('cd ..; ./backend/automate', { encoding: 'utf-8'});

  console.log(shell);
	res.redirect('/') 
}); 

app.listen(port, () => { 
console.log(`Server is running on port ${port}`); 
}); 
