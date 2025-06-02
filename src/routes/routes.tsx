import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ROUTES } from '@shared/constants';


import { App } from '@app/App';
import MainPage from '@pages/mainPage';

export const routes = createBrowserRouter([
    {
        element: <App />,
        children: [
            { index: true, path: ROUTES.root, element: <Navigate to={ROUTES.home} replace /> },
            {
                handle: 'MainPage',
                path: ROUTES.home,
                children: [{ index: true, element: <MainPage /> }],
            }
        ],
    },
],
    {
        /** base url 설정 */
        basename: '/',
    },
);
