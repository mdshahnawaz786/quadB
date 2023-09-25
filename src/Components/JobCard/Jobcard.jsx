import React from "react";
import { useSelector } from "react-redux";
import './jobcard.css'
import { useNavigate } from "react-router-dom";


const Jobcard = () => {
    const navigate = useNavigate()
    const search = useSelector((storeData)=>{
      return storeData.search
    })
    console.log(search);
  return <>
    <div className="Card">
        { search && search.length > 0 ? <>
         {search.map((ele)=>{
          return (
            <>
              <div className="cardContainer">
                <h2>{ele.jobRole}</h2>
                <h3>{ele.aboutJob}</h3>
                <p>{ele.disc}</p>
                <div className="btnConatiner">
                <button onClick={()=>{
                  navigate('/apply')
                }}>{ele.apply}</button>
                </div>
              </div>
            </>
          )
         })}
        </> : <><h2>Loading</h2></>}
        
      </div>
  </>;
};

export default Jobcard;
