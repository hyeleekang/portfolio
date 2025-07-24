import { App } from "@app/App";
import MainPage from "@pages/mainPage";
import { ROUTES } from "@shared/constants";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        element: <App />,
        children: [{ index: true, path: ROUTES.root, element: <MainPage /> }],
    },
]);
