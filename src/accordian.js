 import React, { Fragment, useState } from "react";
 {
    /* The following line can be included in your src/index.js or App.js file */
  }
  import 'bootstrap/dist/css/bootstrap.css';
 
 const AccordianItem=({title,body,activeAccordianItemNo,index,fnClick})=>{

    return < Fragment >
        <h3 onClick={()=>fnClick(index)} className="text-white bg-dark cursor-pointer">{title}</h3>
        {activeAccordianItemNo==index && <h5>{body}</h5>}
    </ Fragment>}
    export const Accordian=({data})=>{
        const [activeAccordianItemNo,setActiveAccordianItemNo]=useState(0);
        const fnClick=(accordianItemNo)=>{
            if(activeAccordianItemNo==accordianItemNo){
                setActiveAccordianItemNo(-1)
                
            }else{
                setActiveAccordianItemNo(accordianItemNo)
            }
        }
        return <>
            {
                data?.map((obj,index)=>{
                return <AccordianItem key={index} {...obj} fnClick={fnClick} index={index} activeAccordianItemNo={activeAccordianItemNo} />
                })
            }
        </>
}