import React from 'react'
import "./Faq.css"
import { data } from './Faqdata'
import { useState } from 'react'



 const Faq = () => {
  const [selectFaq,setFaq]=useState(null)

  const handleClick=(index)=>{

    if(selectFaq===index){
      return setFaq(null)
    }

    setFaq(index)

  }
  return (
    <section className='faq'>
      <h1>Good to Know</h1>
      <p>Before Travel To Tanzania</p>

      
      

      <div className="wrapper">
        
        <div className="accordion">
        
          {data.map((item,index)=>{
            return(
              <article className="item" key={index}>
                <div className="title" onClick={()=>handleClick(index)}><h3>{item.question}</h3>
                <span>
                  {selectFaq===index?<i className="fa-solid fa-minus"></i>:<i className="fa-solid fa-plus"></i>}
                  
                  
                </span>
                </div>
                <div className={selectFaq===index?"content show":"content"}>{item.answer}</div>
              </article>
            )
          })}
        </div>
      </div>
       
    </section>
  )
}

export default Faq