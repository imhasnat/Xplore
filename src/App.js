import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import router from './Routes/PublicRoute';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext)
  return (
    <div className={`${theme}`}>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
