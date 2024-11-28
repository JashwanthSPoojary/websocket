import { useEffect, useRef, useState } from "react";

const App = () => {

  const inputref = useRef();
  const [socket,setSocket] = useState();
  

  const sendMessage = () =>{
    if(!socket){
      return null;
    }
    socket.send(inputref.current.value)
  }
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:9090")
    if(!ws){
      return
    }
    setSocket(ws)
    ws.onmessage = ((event)=>{
      alert("the message is "+event.data)
    })
  },[])
  return ( 
    <div className="">
      <input ref={inputref} type="text" />
      <button onClick={sendMessage}>submit</button>
    </div>
   );
}
 
export default App;