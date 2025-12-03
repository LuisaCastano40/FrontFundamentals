import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout/MainLayout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage.jsx"));
const EditTaskPage = lazy(() => import("../pages/EditTaskPage/EditTaskPage.jsx"));
const CreateTaskPage = lazy(() => import("../pages/CreateTaskPage/CreateTaskPage.jsx"));

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>Error loading page</div>,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'tasks',
                element: <TasksPage />
            },
            {
                path: 'create',
                element: <CreateTaskPage />
            },
            {
                path: 'edit/:id',
                element: <EditTaskPage />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to={'/'} />
    }
]