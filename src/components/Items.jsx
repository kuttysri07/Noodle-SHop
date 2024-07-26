import React from 'react';
import "./items.css";
import noodels from "../Assets/noodles 3.png";
import noodels1 from "../Assets/noodles 1.png";
import noodels2 from "../Assets/noodles 2.png";
import noodels3 from "../Assets/noodles 4.png";
import noodels4 from "../Assets/noodles 5.png";
import noodels5 from "../Assets/noodles 6.png";
import noodels6 from "../Assets/noodles 7.png";
import noodels7 from "../Assets/noodles 8.png";
import noodels8 from "../Assets/noodles 9.png";
import shopping from "../Assets/shopping2.svg";

const imgset1 = [noodels1, noodels2, noodels3, noodels4];
const imgset2 = [noodels5, noodels6, noodels7, noodels8];
const imgset3 = [noodels, noodels5, noodels8, noodels3];

const nameset1=["Egg Noodles","Chicken Noodles","Udon noodles","Soba noodles"];
const nameset2=["Somen noodles","Shirataki",'Rice noodles',"Glass noodles"];
const nameset3=["Gnocchi","Rigatoni","Tortellini","Bucatini"];



const getImageSet = (count) => {
  if (count === 1) return imgset1;
  if (count === 2) return imgset2;
  if (count === 3) return imgset3;
  return imgset1; 
};

const getNameSet = (count) => {
  if (count === 1) return nameset1;
  if (count === 2) return nameset2;
  if (count === 3) return nameset3;
  return nameset1; 
};

const Items = ({ img, setImg, count, setCount }) => {
  const currentImgSet = getImageSet(count);
  const nameSet=getNameSet(count);

  return (
    <div className='cardcontainer'>
      <div className="card">
        <div className="carditem">
          <img className="eggnoodle" src={currentImgSet[0]} alt="Noodles" />
          <h1>$23</h1>
        </div>
        <div className="cardcontent">
          <h2>{nameSet[0]}</h2>
          <h3>feel it taste it!</h3>
        </div>
        <div className="cardbtn">
          <h4>5.0</h4>
          <img className="shopping" src={shopping} alt="Shopping cart" />
        </div>
      </div>
      <div className="card">
        <div className="carditem">
          <img className="eggnoodle" src={currentImgSet[1]} alt="Noodles" />
          <h1>$23</h1>
        </div>
        <div className="cardcontent">
          <h2>{nameSet[1]}</h2>
          <h3>feel it taste it!</h3>
        </div>
        <div className="cardbtn">
          <h4>5.0</h4>
          <img className="shopping" src={shopping} alt="Shopping cart" />
        </div>
      </div>
      <div className="card">
        <div className="carditem">
          <img className="eggnoodle" src={currentImgSet[2]} alt="Noodles" />
          <h1>$23</h1>
        </div>
        <div className="cardcontent">
          <h2>{nameSet[2]}</h2>
          <h3>feel it taste it!</h3>
        </div>
        <div className="cardbtn">
          <h4>5.0</h4>
          <img className="shopping" src={shopping} alt="Shopping cart" />
        </div>
      </div>
      <div className="card">
        <div className="carditem">
          <img className="eggnoodle" src={currentImgSet[3]} alt="Noodles" />
          <h1>$23</h1>
        </div>
        <div className="cardcontent">
          <h2>{nameSet[3]}</h2>
          <h3>feel it taste it!</h3>
        </div>
        <div className="cardbtn">
          <h4>5.0</h4>
          <img className="shopping" src={shopping} alt="Shopping cart" />
        </div>
      </div>
    </div>
  );
};

export default Items;
