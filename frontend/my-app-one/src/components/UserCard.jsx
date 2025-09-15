import React from "react";
import user from './UserDetails';

const UserCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {
                    user.map((user, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                        >
                            
                            <img
                                src={user.img}
                                alt="User"
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h1 className="text-xl font-semibold text-gray-800">{user.name}</h1>
                            <h2 className="text-md text-gray-600">Age: {user.age}</h2>
                            <h3 className="text-sm text-gray-500">{user.city}</h3>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default UserCard;