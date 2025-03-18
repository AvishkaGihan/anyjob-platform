import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="relative h-12 w-12">
                <div className="animate-spin absolute w-full h-full border-4 border-gray-200 rounded-full"></div>
                <div
                    className="animate-spin absolute w-full h-full border-4 border-t-blue-green-500 border-r-prussian-blue-500 border-b-ut-orange-500 border-l-selective-yellow-500 rounded-full"
                    style={{ animationDelay: '-0.5s' }}
                ></div>
            </div>
        </div>
    )
}

export default LoadingSpinner;