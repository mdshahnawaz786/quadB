import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './search.css'
import Jobcard from '../JobCard/Jobcard'

const Searchpage = () => {

    const dispatch = useDispatch()
  const allJobs = useSelector((storeData) => {
    return storeData.allJobs;
  });

    const [input, setInput] = useState("")


    function serchFn(allJobs,input,dispatch){
        const arr = allJobs.filter((ele)=>{
            if(ele.jobRole.toLowerCase().includes(input.toLowerCase())){
                return ele
            }
        })
        console.log(arr);
        dispatch({
            type: "search",
            payload: arr
        })
    }

  return (
    <>
    <div className='serach'>
        <input type="text" placeholder='serach programming language' value={input} onChange={((e)=>{
            setInput(e.target.value)
        })}/>
        <button onClick={()=>{
            serchFn(allJobs,input,dispatch)
        }}>Search</button>
    </div>
    <div className="cardDiv">
        <Jobcard/>
    </div>
    </>
  )
}

export default Searchpage