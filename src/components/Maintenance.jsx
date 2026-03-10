import React from 'react';

const Maintenance = ({ estimatedEndTime }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full border-t-4 border-orange-500">
                <div className="text-6xl mb-4">🛠️</div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">We'll be back soon!</h1>
                <p className="text-gray-600 mb-6 font-medium">
                    Bhimaya Foods is currently undergoing scheduled maintenance to improve your experience.
                    Please check back again shortly.
                </p>

                {estimatedEndTime && (
                    <div className="bg-orange-50 border border-orange-200 rounded p-3 mb-6">
                        <p className="text-sm text-orange-800 font-bold">Estimated Completion</p>
                        <p className="text-lg text-orange-600 font-semibold">
                            {new Date(estimatedEndTime).toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })}
                        </p>
                    </div>
                )}

                <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
                <p className="text-xs text-gray-400 mt-6 mt-6">
                    Thank you for your patience!
                </p>
            </div>
        </div>
    );
};

export default Maintenance;
