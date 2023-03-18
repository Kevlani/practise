import React, { useMemo, useState } from 'react'

export default function UseMemoHookExample(){

    const [num,setNum] = useState(0);
    const [togle,setTogle]=useState(false)
    let doSomeHeavyWork= (val)=>{
        for(let i = 0;i<100_00_00;i++){
            if(i%100000 == 0){
                console.log("Doing some extra work inside memoised function")
            }
        }
        return val+2
    }
    let heavilyComputedValue = useMemo(()=>doSomeHeavyWork(num),[num]);

    return (
        <>
        <input type={"text"} value={num} onChange={(e)=>{
            setNum(e.target.value)
        }}/>
        <p>{heavilyComputedValue}</p>
        <input type={"submit"} onClick={(e)=>{
            e.preventDefault();
            console.log("Toggle button is pressed just to triger the re-render")
            setTogle(val=>!val)
        }}
        value={"Togle"}
        />
        </>
    )
}