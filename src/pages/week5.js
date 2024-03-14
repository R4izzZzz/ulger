import {useEffect, useState} from "react";

export default function Home() {

  const [count, setCount] = useState(0);
  const [ calc, setCalc] = useState(1);

  useEffect(() =>{
    setCalc(count*10);
  }, [count]);

  return (
    <div className="flex space-x-4 justify-center mt-96">
      <button  className="border-2 w-18 h-10 border-black bg-cyan-300" onClick={()=> setCount(count+1)}>Click me</button>
      <p className="border-2 bg-pink-500">{count}</p>
      <p>Multiply: {calc}</p>
    </div>
  );
  }