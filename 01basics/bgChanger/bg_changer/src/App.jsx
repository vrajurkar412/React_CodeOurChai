import { useState } from "react"



function App() {
 const[color,setColor]=useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> 
      {/* vaibhav */}
     
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2">
      <div className="fixed flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-2xl">

    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>BLack</button>
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
 
      </div>
     </div>
    </div>
       
    </>
  )
}

export default App
