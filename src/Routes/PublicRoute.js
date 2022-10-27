import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Courses from "../Pages/Courses/Courses";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import CoursesList from "../Pages/Courses/CoursesList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        { path: '/blog', element: <Blog></Blog> },
        { path: '/faq', element: <FAQ></FAQ> },
        { path: '/aboutUs', element: <AboutUs></AboutUs> },
        {
            path: '/checkout/:id',
            element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
            loader: async ({ params }) => {
                return fetch(`https://learning-platform-server-ten.vercel.app/courses/${params.id}`)
            }

        },
        {
            path: '/courses',
            element: <Courses></Courses>,
            children: [
                {
                    path: '/courses',
                    element: <CoursesList></CoursesList>,
                    loader: () => {
                        return fetch('https://learning-platform-server-ten.vercel.app/courses')
                    }
                },
                {
                    path: '/courses/coursesdetails/:id',
                    element: <CoursesDetails></CoursesDetails>,
                    loader: async ({ params }) => {
                        return fetch(`https://learning-platform-server-ten.vercel.app/courses/${params.id}`)
                    }
                },
                {
                    path: '/courses/categories/coursesDetails/:id',
                    element: <CoursesDetails></CoursesDetails>,
                    loader: async ({ params }) => {
                        return fetch(`https://learning-platform-server-ten.vercel.app/categories/${params.id}`)
                    }
                }
            ]
        }

    ]
}])

export default router;