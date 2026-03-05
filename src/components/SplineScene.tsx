"use client";

import Spline from '@splinetool/react-spline/next';

export default function SplineScene() {
    return (
        <div className="w-full h-full flex items-center justify-center min-h-[500px]">
            <Spline
                scene="https://prod.spline.design/e7yiB5touWNrcd0p/scene.splinecode"
            />
        </div>
    );
}
