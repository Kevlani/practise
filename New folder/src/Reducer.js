// import React, { useReducer } from 'react'


// function reducer(state, action) {
//     if (action.type === 'increment_salary') {
//         return {
//             salary: state.salary + 5000
//         };
//     }
//     throw Error('unknown action.');
// }
// function Reducer() {
//     const [state, dispatch] = useReducer(reducer, { salary: 150 });

// return (
//     <>
//         <button onClick={() => dispatch({ type: 'increment_salary' })}>
//             Total Balance
//         </button>
//         <p> your account balance are {state.salary} ruppes.</p>
//     </>
// );
// }

// export default Reducer
import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case'increment_age':{
            return{
                name: state.name,
                age: state.age + 1
            };
        }
        case 'changed-name':{
            return{
                name: action.nextname,
                age: state.age
            }
        }
    }
    throw Error('unknown action:' + action.type);
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer,{name: "vinayak" , age: 10});
    function handleButtonClick(){
        dispatch({
            type:'increment_age'
        });
    }
    function handleInputchange(e){
        dispatch({
            type: 'changed-name',
            nextname: e.target.value
        });
    }
    function handleInputchange2(e){
        dispatch({
            type: 'changed-name',
            nextname: e.target.value
        });
    }
  return (
    <div>
    <h1> reducer</h1>
      <input 
      value={state.name}
      onChange={handleInputchange}/><br/>
      <input 
      type='number'
      value={state.age}
      onChange={handleInputchange2}/><br/>
      <button onClick={handleButtonClick}> press</button>
      <p> your name {state.name} and age {state.age}</p>
    </div>

  )
}

export default Reducer


