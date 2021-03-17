router.post('/', upload.single("upload_file_input"), (req, res) => {
    var tempPath = req.file.path;
    //const targetPath = path.join(__dirname, "./uploads/image.png");
    var pathSave = path.join(__dirname, '../public/images/upload/image.jpg');

    console.log(tempPath);

    try{
        fs.renameSync(tempPath, pathSave);        
    }
    catch(err){
        console.log(err);
    }

    res.send('send file successfull ' + pathSave);
});
