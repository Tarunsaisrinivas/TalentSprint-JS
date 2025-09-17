import React from "react";
import useFetchData from "../hooks/useFetchData";
import Loading from "./Loading";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const StockTable = () => {
    const { data, loading, error } = useFetchData(
        "https://intradayscreener.com/api/openhighlow/cash"
    );
 
    if (loading)
        return <p className="p-6 text-center text-gray-600"><Loading /></p>;
    if (error)
        return <p className="p-6 text-center text-red-500">Error loading data</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <h2 className="text-xl font-bold p-4 border-b bg-gray-50">
                    Stock Screener (Open High Low)
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm ">
                        <thead className="bg-gray-100 text-gray-700  sticky top-0">
                            <tr>
                                <th className="p-3 text-left border-r">Symbol</th>
                                <th className="p-3 text-left border-r">LTP</th>
                                <th className="p-3 text-left border-r">Change %</th>
                                <th className="p-3 text-left border-r">OI Change %</th>
                                <th className="p-3 text-left border-r">Pivot Deviation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((stock, index) => (
                                <tr
                                    key={index}
                                    className={`border-b  hover:bg-gray-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                        }`}
                                >
                                    <td className="p-3 font-semibold border-r text-gray-800">
                                        {stock.symbol}
                                    </td>

                                    <td className="p-3 border-r">{stock.ltp}</td>

                                    <td
                                        className={`flex items-center p-3 font-medium border-r ${stock.pctChange > 0
                                            ? "text-green-600"
                                            : "text-red-600"
                                            }`}
                                    >
                                        {stock.pctChange > 0 ? <TiArrowSortedUp />
                                            : <TiArrowSortedDown />} {stock.pctChange}%
                                    </td>

                                    <td className="p-3 border-r">
                                        {stock.oiPctChange ? `${stock.oiPctChange}%` : "N/A"}
                                    </td>

                                    <td className="p-3 border-r">
                                        {stock.allScans?.intradayScans?.[0]?.scanName ?? "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StockTable;
