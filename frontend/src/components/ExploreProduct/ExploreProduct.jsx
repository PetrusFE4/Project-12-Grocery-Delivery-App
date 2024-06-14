import React from 'react'
import './ExploreProduct.css'
import { menu_list } from '../../assets/assets'

const ExploreProduct = ({category,setCategory}) => {

  return (
    <div className='explore-product' id='explore-product'>
      <h1>Explore Our Product</h1>
      <p className='explore-product-text'>Lets Explore Oure Fresh Menu</p>
      <div className="explore-product-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-product-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreProduct
