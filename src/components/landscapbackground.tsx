"use client"

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Create a component that will only be rendered on the client side
const P5Wrapper = dynamic(() => import('./p5wrapper'), {
    ssr: false,
    loading: () => <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
});

export const LandscapeBackground = () => {
    return <P5Wrapper />;
};
