import React from 'react'

function ProductItem({ property: { title, description, contact, image }}) {
  return (
    <div className='property-card'>
        <h4>{title}</h4>
        <p><b>Description:</b> {description.substring(0, 30) + '...'}</p>
        <p><b>Contact:</b> {contact}</p>
        <img src={image} alt="property" height={200} width={300}/>
        <div style={{ textAlign: 'start'}}>
            <button>Contact Owner</button>
            <button>Delete Property</button>
        </div>
    </div>
  )
}

export default ProductItem