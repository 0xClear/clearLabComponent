 import React from "react";

 export const AccordianItem=({title,body,activeAccordianItemNo,index,fnClick})=>{
           
              return <>
                 <h3 onClick={()=>fnClick(index)} className="text-white bg-dark cursor-pointer">{title}</h3>
                 {activeAccordianItemNo==index && <h5>{body}</h5>}
              </>
         }
         const Accordian=({data})=>{
               const [activeAccordianItemNo,setActiveAccordianItemNo]=React.useState(0);
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
    
        const App=()=>{
        const data=[
            {
                title:'About Sachin',
                body:"Sachin Ramesh Tendulkar, BR AO (listen); pronounced [sətɕin teːɳɖulkəɾ]; born 24 April 1973) is an Indian former international cricketer who captained the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket.[4] He is the all-time highest run-scorer in both ODI and Test cricket with more than 18,000 runs and 15,000 runs, respectively."
            },
            {
                title:'About Messi',
                body:"Lionel Andrés Messi[note 1] (Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi] (listen); born 24 June 1987), also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Major League Soccer club Inter Miami and captains the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards[note 2] and a record six European Golden Shoes, and in 2020 he was named to the Ballon d'Or Dream Team. "
            },
            {
                title:'About Mike Tyson',
                body:"Michael Gerard Tyson (born June 30, 1966) is an American former professional boxer who competed from 1985 to 2005. Nicknamed Iron Mike[4] and Kid Dynamite in his early career, and later known as The Baddest Man on the Planet,[5] Tyson is regarded as one of the greatest heavyweight boxers of all time."
            }
        ]       
        
            return <div>
                <Accordian data={data} />
                </div>
    }