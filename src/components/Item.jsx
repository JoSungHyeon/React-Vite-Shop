import { useNavigate } from "react-router-dom";
import './css/Item.css'

const Item = ({itemData}) => {
    const navigate = useNavigate();

    return (
        <div className="Item" onClick={()=>{
            navigate(`/product/${itemData.id}`)
        }}>
            <img src={`https://JoSungHyeon.github.io/shop-data/img/${itemData.id}.png`} />
            <p className="item_title">{itemData.title}</p>
            <p>₩ {itemData.price.toLocaleString()}</p>
        </div>
    )
};

export default Item;