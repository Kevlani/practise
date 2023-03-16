import React, { useEffect, useState } from 'react'

function List({getItems}) {
    const [items,setitems] = useState([])
    useEffect(()=>{
        setitems(getItems())
        console.log('call render')
    },[getItems])
  return items.map(item => <div key ={item}>{item}</div>)
}

export default List
