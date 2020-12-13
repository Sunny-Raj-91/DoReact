import React, { useEffect, useState } from 'react';
type Props = {
 name : string
};

const UseEffectHook : React.FC<Props> = ({name} : Props) => {

    const [count,setCount]= useState(0)
    const [inpName,setName] = useState(name)
    
    useEffect(()=>{
        document.title = `Clicked ${count} times`
        console.log('re-rendered')
    },[count])

    return (
      <div>
        <button onClick={() => setCount(count+1)} >Clicked {count} times</button>
        <input type = 'text' value={inpName} onChange={(e)=>setName(e.target.value)}></input>
      </div>
    );
  
};
export default UseEffectHook;
