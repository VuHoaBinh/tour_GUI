import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoute } from 'routes';

const PrivateLayout = () => {
  return (
    <main>
      <AppHeader />
      <Box>
        <Routes>
          {Object.values(privateRoute).map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path='*' element={<Navigate to={privateRoute.home.path} />} />
        </Routes>
      </Box>
      <AppFooter />
    </main>
  );
};

export default PrivateLayout;
