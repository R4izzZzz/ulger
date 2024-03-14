import { useState } from "react";

export default function Home(){
    const[value, setValue] = useState('')
    return(
        <div className="flex justify-center items-center flex-col h-screen bg-pink-500 text-white">
            <input value={value} onChange={(e) => {setValue(e.target.value)}} className="border text-black"></input>
            <button onClick={()=>setValue('')}> Clear</button>
            <p>{value}</p>
        </div>
    )
}