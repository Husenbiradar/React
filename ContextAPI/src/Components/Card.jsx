import React from 'react'
import Goku from './img/Goku.jpg'
function Card() {
  return (
    <>
     
         <img src={Goku} className="card-img-top " alt="..."/>
         <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </>
  )
}

export default Card