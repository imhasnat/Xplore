import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Courses from "../Pages/Courses/Courses";
import CoursesDetails from "../Pages/Courses/CoursesDetails";
import CoursesList from "../Pages/Courses/CoursesList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";


const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        { path: '/', element: <Home></Home> },
        // { path: '/home', element: <Home></Home> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> },
        {
            path: '/courses',
            element: <Courses></Courses>,
            children: [
                {
                    path: '/courses',
                    element: <CoursesList></CoursesList>,
                    loader: () => {
                        return fetch('http://localhost:5000/courses')
                    }
                },
                {
                    path: '/courses/coursesdetails/:id',
                    element: <CoursesDetails></CoursesDetails>,
                    loader: async ({ params }) => {
                        return fetch(`http://localhost:5000/courses/${params.id}`)
                    }
                },
                // {
                //     path: '/coursesDetails/:id',
                //     element: <CoursesDetails></CoursesDetails>,
                //     loader: async ({ params }) => {
                //         return fetch(`http://localhost:5000/categories/${params.id}`)
                //     }
                // }
            ]
        }

    ]
}])

export default router;