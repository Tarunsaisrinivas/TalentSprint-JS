import React from "react";

const AddRecipe = () => {
    const [input, setInput] = React.useState("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(input);

    }
    return <div>



        <form className="max-w-sm mx-auto">
            <div className="mb-5">
                <label for="Title" className="block mb-2 text-sm font-medium text-black">Your Title</label>
                <input type="text" id="Title" onChange={(e) => setInput(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter title name" required />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your Description</label>
                <input type="text" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="description" required />
            </div>
          
            <button type="submit" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>

    </div>;
};

export default AddRecipe;
