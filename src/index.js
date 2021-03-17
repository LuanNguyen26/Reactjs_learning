import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
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
