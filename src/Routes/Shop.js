import React from 'react';
import { productsData } from "../Components/ProductsData.js"


function Shop() {
  return (
    <div className='shop'>
      <h1 className='sTitle'>Nuestros Productos</h1>
      <div className="productsGrid">
          {productsData.map(product => (
              <div className="item" key={product.id}>
                  <img className='pImage' src={product.img} alt={product.alt} />
                  <h1 className='pTitle'>{product.productName}</h1>
                  <p className="pPrice">{product.price}</p>
                  <p><button>AÑADIR AL CARRITO</button></p>
                </div>
          ))}
      </div>
    </div>
  )
}

export default Shop;