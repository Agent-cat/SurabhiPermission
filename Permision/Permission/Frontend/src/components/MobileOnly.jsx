import React from 'react';

const MobileOnly = ({ children }) => {
    const isMobile = window.innerWidth <= 640;

    return (
        <div>
            {isMobile ? (
                children
            ) : (
                <div className="flex flex-col items-center justify-center min-h-screen ">
                    <svg
                        className="w-16 h-16 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-1 6a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="mt-4 text-lg font-semibold text-red-600">
                        Access restricted. Please open on a mobile device.
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                        This is to avoid modification of data by using Dev Tools
                    </p>
                </div>
            )}
        </div>
    );
};

export default MobileOnly; 