import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const LifeCycleEx1 = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    
    // const [count, setCount] = useState(0);
    useEffect(() => {
        if (loading) {
            setLoading(true);
        }
        async function fetchData() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await response.json();
            setLoading(false);
            setData(data);
            console.log(data);

        }
        fetchData();
    }, []);

    return <>

        <h1>{loading ? <Loading /> : "Data Fetched"}</h1>

        <h1>LifeCycleEx1</h1>
        {/* need to show details
     */}
        {/* {data.map((post, index) => (
        <p key={index}>{post.title}</p>
     ))} */}
        <div className="flex flex-col">


            <div className="flex flex-col">
                <table className="border text-center">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((post, index) => (
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.name}</td>
                                <td>{post.email}</td>
                                <td>{post.address.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>

    </>;
};

export default LifeCycleEx1;
