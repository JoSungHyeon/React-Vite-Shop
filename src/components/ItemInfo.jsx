import Footer from './Footer';
import './css/ItemInfo.css'
import { useParams } from 'react-router-dom';

const ItemInfo = () => {
    const params = useParams();
    return (
        <div className="ItemInfo">
            <h5>제품상세</h5>
            <div className='ItemInfo_img'>
                <img src={`https://JoSungHyeon.github.io/shop-data/img/${Number(params.id)}.png`} />
                <img src={`https://JoSungHyeon.github.io/shop-data/img/${Number(params.id)}-1.png`} />
                <img src={`https://JoSungHyeon.github.io/shop-data/img/${Number(params.id)}-2.png`} />
            </div>
            <Footer />
        </div>
    )
}

export default ItemInfo;