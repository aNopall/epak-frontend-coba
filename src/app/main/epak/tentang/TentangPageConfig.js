import { lazy } from 'react';

const TentangPage = lazy(() => import('./TentangPage'));

const TentangPageConfig = {
    settings: {
    layout: {
        config: {},
    },
    },
    routes: [
    {
        path: 'tentang',
        element: <TentangPage />,
    },
    ],
};

export default TentangPageConfig;
