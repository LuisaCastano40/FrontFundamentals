
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const TasksPage = lazy(() => import("../pages/TasksPage.jsx"));
const EditTaskPage = lazy(() => import("../pages/EditTaskPage.jsx"));
const CreateTaskPage = lazy(() => import("../pages/CreateTaskPage.jsx"));

export const routes = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <div>Error loading page</div>
    },
    {
        path: '/tasks',
        element: <TasksPage />,
        errorElement: <div>Error loading page</div>
    },
    {
        path: '/create',
        element: <CreateTaskPage />,
        errorElement: <div>Error loading page</div>
    },
    {
        path: '/edit',
        element: <EditTaskPage />,
        errorElement: <div>Error loading page</div>
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    },

]