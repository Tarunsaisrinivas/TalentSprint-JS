import React from "react";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">

            <div className="w-10 h-10 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>


            <div className="flex space-x-1 text-xl font-semibold text-gray-700">
                <span className="animate-bounce">L</span>
                <span className="animate-bounce [animation-delay:0.1s]">o</span>
                <span className="animate-bounce [animation-delay:0.2s]">a</span>
                <span className="animate-bounce [animation-delay:0.3s]">d</span>
                <span className="animate-bounce [animation-delay:0.4s]">i</span>
                <span className="animate-bounce [animation-delay:0.5s]">n</span>
                <span className="animate-bounce [animation-delay:0.6s]">g</span>
                <span className="animate-bounce [animation-delay:0.7s]">.</span>
                <span className="animate-bounce [animation-delay:0.8s]">.</span>
                <span className="animate-bounce [animation-delay:0.9s]">.</span>
            </div>
        </div>
    );
};

export default Loading;
