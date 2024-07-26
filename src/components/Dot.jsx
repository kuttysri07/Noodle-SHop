
import "./Dot.css"

const Dot = ({count,setCount}) => {

  

  return (
    <div className="dotcontainer">
        <div  onClick={()=>setCount(1)} className={count=== 1 ?"dot":"dot red"}></div>
        <div  onClick={()=>setCount(2)} className={count=== 2 ?"dot":"dot red"}></div>
        <div  onClick={()=>setCount(3)} className={count=== 3 ?"dot":"dot red"}></div>
    </div>
  )
}

export default Dot