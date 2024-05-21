import { useEffect, useState } from 'react';
import axios from 'axios';
import './css/ProductWrap.css'
import Item from './Item';
import Recent from './Recent';

const ProductWrap = ({itemData, changeItemData}) => {
    const [moreCount, setMoreCount] = useState(0);

    return (
        <div className="ProductWrap">
            <Recent itemData={itemData} />
            <div className='product_wrap_item'>
                {itemData.map((a, key)=> {
                    return (
                        <Item key={key} itemData={itemData[key]}/>
                    )
                })}
            </div>
            {
                moreCount == 3
                ? null
                :<button onClick={()=>{
                    setMoreCount(moreCount + 1);
                    /* axios.get(`https://JoSungHyeon.github.io/shop-data/data${itemCount}.json`).then((result)=>{
                        let copy = [...itemData, ...result.data];
                        changeItemData(copy);
                    }) */
                }}>MORE</button>
            }
            
        </div>
    )
}

export default ProductWrap;