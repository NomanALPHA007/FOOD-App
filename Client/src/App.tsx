import './App.css';
import Login from './auth/login'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import MainLayout from './layout/MainLayout';
import Signup from './auth/Signup';
import ForgetPassword from "./auth/ForgetPassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/VerifyEmail";
import Navbar from "./components/Navbar"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,//use mainlayout or navbar  
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup /> 
      },
      {
        path: "/forget-password",
        element: <ForgetPassword /> 
      },
      {
        path: "/reset-password",
        element: <ResetPassword /> 
      },
      {
        path: "/verify-email",
        element: <VerifyEmail />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="min-h-screen">
      <RouterProvider router={appRouter} />
    </main>
  );
}


export default App;