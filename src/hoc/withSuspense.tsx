import React from 'react';
import Preloader from '../components/preloader/Preloader';

type PropsType = {}

export const withSuspense = (WrappedComponent: React.ComponentType<PropsType>) => {
    return (props: PropsType) => {
        return <React.Suspense fallback={<Preloader />}>
        <WrappedComponent {...props} />
    </React.Suspense>
    };
};
 