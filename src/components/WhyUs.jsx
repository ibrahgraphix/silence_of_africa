import React from 'react'
import "./Faq.css"
import { data } from './Whyusdata'
import { useState } from 'react'



 const WhyUs = () => {
  const [selectWhyus,setWhyus]=useState(null)

  const handleClick=(index)=>{

    if(selectWhyus===index){
      return setWhyus(null)
    }

    setWhyus(index)

  }
  return (
    <section className='faq'>
      <h1>Why Travel With Silence Of Africa Safari</h1>
      <p>Reason To Travel With Us</p>

      
      

      <div className="wrapper">
        
        <div className="accordion">
        
          {data.map((item,index)=>{
            return(
              <article className="item" key={index}>
                <div className="title" onClick={()=>handleClick(index)}><h3>{item.question}</h3>
                <span>
                  {selectWhyus===index?<i className="fa-solid fa-minus"></i>:<i className="fa-solid fa-plus"></i>}
                  
                  
                </span>
                </div>
                <div className={selectWhyus===index?"content show":"content"}>{item.answer}</div>
              </article>
            )
          })}
        </div>
      </div>
       
    </section>
  )
}

export default WhyUs