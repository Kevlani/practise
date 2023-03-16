import React from 'react'
import { useSyncExternalStore } from 'react'
function subscribe(back) {
    window.addEventListener('online', back);
    window.addEventListener('offline', back);
    return () => {
        window.removeEventListener('online', back);
        window.removeEventListener('offline', back);
    };
}
    function useOnlineStatus() {
        return useSyncExternalStore(
            subscribe,
            () => navigator.onLine,
            () => true
        );
    }
    export default useOnlineStatus


// main ==>
// import { useEffect, useState } from 'react'
// import React from 'react';
//  function useOnlineStatus() {
//     const [isOnline,setisOnline] = useState(true);
//     useEffect(()=>{
//         function handleOnline(){
//             setisOnline(true);
//         }
//         function handleOffline(){
//             setisOnline(false);
//         }
//         window.addEventListener('online',handleOnline);
//         window.addEventListener('offline',handleOffline);
//         return()=>{
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline',handleOffline);
//         };
//     },[]);
//   return isOnline;
// }
// export default useOnlineStatus;

// ==> app.js
// import useOnlineStatus from './customhooks/useOnlineStatus';

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? ' Online' : 'Offline'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();
//   function handleSaveClick() {
//     console.log('Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }


