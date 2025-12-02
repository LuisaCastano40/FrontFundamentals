import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";

const router = createBrowserRouter(routes);

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading page ...</div>}>
            <RouterProvider router={router}/>
        </Suspense>
    )
}
