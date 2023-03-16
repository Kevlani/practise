import React, { useEffect, useMemo, useState } from 'react'

function Memo() {
    const [number, setnumber] = useState(1)
    const [dark, setdark] = useState(false)
    const doublenumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    function slowFunction(num) {
        console.log("okey", num)
        return [num ,num +1,num + 2]
        // (num * 2),(num * 3), (num * 4)
    }
    const theme = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    },[dark])
    // useEffect(()=>{
    //     console.log("theme called")
    // },[theme])
    return (
        <>
        <h1>Memo</h1>
        
        <input 
        type='number'
        value={number}
        onChange={(e)=>setnumber(parseInt(e.target.value))}
        />
        <button onClick={()=>setdark(prevdark => !prevdark)}>
        dark mode
        </button>
        <div style={theme}>
        {doublenumber}
        </div>
        </>
    )
}

export default Memo
