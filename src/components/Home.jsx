import "./Home.css"
import noodle from "../Assets/noodles 8.png"

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className="contents">
            <div className="left">
                <img className="food" src={noodle} alt="" /> 
            </div>

            <div className="right">
                <h1>Healthy Noodles</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias illum porro commodi expedita beatae excepturi recusandae totam. Culpa, </p>
                <div className="item">
                <h2>$28</h2> 
                <div className="btn">Order now</div>
                </div>
               
            </div>
            </div>
            <div className="back"></div>   
           
        </div>


    </div>
  )
}

export default Home