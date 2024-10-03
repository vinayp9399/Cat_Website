import { useState, useEffect } from 'react';
import '../css/productdetails.css'
import axios from 'axios'

const Productdetails =()=>{
  const product = localStorage.getItem('product');
  // const userid = localStorage.getItem('id');
  const product1 = JSON.parse(product)
  const [IsLoading, setIsLoading] = useState(true);

    return(
    <>
    {
                    IsLoading===false ?
                    <div style={{height:"800px"}}>
                    <div className="loader">
                    </div></div>
                    : 
      <><div class = "card12">
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img class="imgs" src={`https://cdn2.thecatapi.com/images/${product1.reference_image_id}.jpg`} alt = "product image"/>
            </div>
          </div>
          
        </div>
        <div class = "product-content">
          <h1 class = "product-title">{product1.name}</h1>

          <div class = "product-detail">
            <h2>about this bread: </h2>
            <p>{product1.description}</p><br />
            <h4>Ratings:</h4>
            <ul style={{marginLeft:"-62px", fontSize:"17px"}}>
              <li>Adaptability: <span>{product1.adaptability}</span></li>
              <li>Affection Level: <span>{product1.affection_level}</span></li>
              <li>Child Friendly: <span>{product1.child_friendly}</span></li>
              <li>Energy Level: <span>{product1.energy_level}</span></li>
              <li>Intelligence: <span>{product1.intelligence}</span></li>
            </ul>
          </div>


          
        </div>
      </div></>}
   
    </>
    )
}

export default Productdetails