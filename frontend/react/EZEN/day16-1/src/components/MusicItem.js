import React from 'react';
import './MusicItem.css'
import { FaChevronUp,FaChevronDown,FaEquals } from "react-icons/fa";

const MusicItem = ({item,onOpen}) => {
    return (
        <>
                <tr onClick={() => onOpen(item.rank)}>
                     <td>{item.rank}</td>
                    <td>
                        <img src={item.poster} width="50" alt={item.title}/>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.singer}</td>
                    <td>
                       {/*상승 유지 하강*/}
                       {item.state === "상승" && <FaChevronUp/>}                     
                       {item.state === "유지" && <FaEquals/>}                     
                       {item.state === "하강" && <FaChevronDown/>}                     
                    </td>
                </tr>
        </>
    );
};

export default MusicItem;
