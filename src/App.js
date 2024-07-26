import React, { useState ,useEffect} from 'react'
import Nav from "./components/Nav"
import Home from './components/Home'
import Items from './components/Items'
import Dot from "./components/Dot"
import "./App.css"

const App = () => {

  const [count,setCount]=useState(0);
  const [img,setImg]=useState(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount % 3) + 1); // Cycle through counts 1, 2, and 3
    }, 5000); // Change image every 3 seconds
  
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <Nav/>
      <Home/>
      <Items   img={img} setImg={setImg} count={count} setCount={setCount}  />
      <Dot count={count} setCount={setCount} />
    </div>
  )
}

export default App