import React, { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/recipes");
                const result = await response.json();
                setData(result.recipes || []);
                console.log(result.recipes || []);
                setLoading(false);
            } catch (err) {
                console.log("API fetching Error", err);
                setError(err);
            } 
        }

        fetchData();
    }, []);

    return (
        { data, loading, error }
    )
};

export default useFetchData;
