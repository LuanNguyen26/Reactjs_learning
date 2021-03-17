  import 'react-perfect-scrollbar/dist/css/styles.css';
import React, { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, Button } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import { useCookies } from 'react-cookie';
import LoginView from 'src/views/auth/LoginView';

const App = () => {
  const [cookies] = useCookies(['token']);
  const [isLogedIn, setIsLogedIn] = useState(false);

  const handleTestCookie = () => {
  };

  useEffect(() => {
    console.log(cookies.token);
    if (cookies && cookies.token) {
      setIsLogedIn(true);
    }
  }, []);

  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {(isLogedIn) ? routing : <LoginView processLogedInState={setIsLogedIn} />}
      <Button onClick={handleTestCookie}>test</Button>
    </ThemeProvider>
  );
};
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

export default App;
