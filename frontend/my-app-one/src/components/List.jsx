// function ListData(props) {
//    const fruits =["Apple", "Banana"]
//     return (
//         <ul>
//             {fruits.map((fruits, index) => (
//                 <li key={index}>
//                    {fruits}
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default ListData;

import React from "react";

function ListData(props) {
    return (
        <>
        <ul>
            <li>
                {props.name} - {props.color} 
            </li>
        </ul>
        </>
    );
};

export default ListData;

export function CityData(props) {
    return (
        <>
        <ul>
            <li>
                {props.city}
            </li>
        </ul>
        </>
    );
};