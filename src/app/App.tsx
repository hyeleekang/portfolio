import 'react-toastify/dist/ReactToastify.css';

import type { JSX } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import { Outlet } from 'react-router-dom';

export const App = (): JSX.Element => {
    return (
        <div spellCheck={false} className="min-h-screen w-full bg-background">
            <Outlet />
            <ToastContainer
                limit={1}
                autoClose={1500}
                closeButton={false}
                position="top-center"
                transition={Slide}
                hideProgressBar
                className="root-toast-container"
                toastClassName="root-toast"
                closeOnClick
            />
        </div>
    );
};