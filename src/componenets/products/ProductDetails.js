import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import style from "./ProductsDetails.module.css"
import DataContext from '../context/DataContext'

const ProductDetails = () => {

    const ctx = useContext(DataContext);
    console.log(ctx.productsList);

    const para = useParams();

    let data = ctx.productsList.filter( (val) => {
        return val.title === para.productID
    });
    console.log(data);
    
  return (

    <div className={style.container}>
        <div className={style.title}>
            Product Details
        </div>
        <div className={style.bodyContainer}>
            <div className={style.imgContainer}> 
            <img src={data[0].imageUrl} alt={data[0].title}/>
            </div>
            <div className={style.textContainer}> 
            <div className={style.title}>{para.productID}</div>
            <div className={style.price}>$: {data[0].price}</div>
            </div>
        </div>

        
    </div>
  )
}

export default ProductDetails