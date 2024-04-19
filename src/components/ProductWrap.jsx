import { useState } from 'react';
import axios from 'axios';
import './css/ProductWrap.css'
import Item from './Item';

const ProductWrap = ({itemData, changeItemData}) => {
    const [itemCount, setItemCount] = useState(2);
    const [moreCount, setMoreCount] = useState(0);
    
    return (
        <div className="ProductWrap">
            <div className='product_wrap_item'>
                {itemData.map((a, i)=> {
                    return (
                        <Item key={a.id} itemData={itemData[i]}/>
                    )
                })}
            </div>
            {
                moreCount == 3
                ? null
                :<button onClick={()=>{
                    setItemCount(itemCount + 1);
                    setMoreCount(moreCount + 1);
                    axios.get(`https://JoSungHyeon.github.io/shop-data/data${itemCount}.json`).then((result)=>{
                        let copy = [...itemData, ...result.data];
                        changeItemData(copy);
                    })
                }}>MORE</button>
            }
            
        </div>
    )
}

export default ProductWrap;