import React from "react";

const LotCard = (props) => {
    return (
        <tr className="hover:bg-gray-100  border-gray-200">
            <td className="px-4 py-4">Intro to CSS</td>
            <td className="px-4 py-4">Intro to JavaScript</td>
            <td className="px-4 py-4">Chris</td>
            <td className="px-4 py-4">1,280</td>
            <td className="px-4 py-4">Intro to CSS</td>
            <td className="px-4 py-4">Adam</td>
            <td className="px-4 py-4">858</td>
        </tr>
    );
}

export default LotCard;