// 3rd parties
import { StylesProvider } from '@material-ui/core';
import { 
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';
import Page404 from './pages/Page404';

// components
import Home from './pages/Home';

export default function AppPage() {

  return (
    <StylesProvider injectFirst>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Page404 />} path="*"/>
        </Routes>
      </Router>
    </StylesProvider>  
  );
}