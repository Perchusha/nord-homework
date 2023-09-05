import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { selectTheme } from './redux/selectors';
import { SideBar, Login, Welcome, Servers, Logout, Settings } from './modules';
import { ContentWrapper, AppWrapper } from './styled';

const App = () => {
  const { theme } = useSelector(selectTheme);
  const Router =
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? BrowserRouter
      : HashRouter;

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Router>
          <SideBar />
          <ContentWrapper>
            <Routes>
              <Route path="" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/servers" element={<Servers />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </ContentWrapper>
        </Router>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
