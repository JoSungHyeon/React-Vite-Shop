import { useEffect, useState } from 'react';
import Footer from './Footer';
import './css/ItemInfo.css'
import { useParams } from 'react-router-dom';

const ItemInfo = ({ itemData }) => {
    const params = useParams();
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => setIsLoading(false), 50);

    return (
        <div className="ItemInfo">
            <h5>제품상세</h5>
            <div className='ItemInfo_img'>
                {
                    isLoading === false
                    ? itemData[params.id - 1].imgName.map((a, key)=>{
                        return(
                            <img src={`https://JoSungHyeon.github.io/shop-data/img/${a}.png`} key={key}/>
                        )
                    })
                    : null
                }
            </div>
            <Footer />
        </div>
    )
}

export default ItemInfo;