import { useNavigate } from "react-router-dom";
import './css/Item.css'

const saveItem = (itemNumber) => {
    let outData;
    if(localStorage.getItem('watched') !== null) {
        outData = localStorage.getItem('watched');
        outData = JSON.parse(outData);
        if(outData.length == "3") {
            outData.shift();
        }
        outData.push(itemNumber);
        outData = new Set(outData);
        outData = Array.from(outData);
        localStorage.setItem('watched', JSON.stringify(outData));
    }
}

const Item = ({itemData}) => {
    const navigate = useNavigate();

    return (
        <div
            className="Item"
            onClick={()=>{
            navigate(`/product/${itemData.id}`);
            saveItem(itemData.id)}}
            value={itemData.type}
        >
            <img src={`https://JoSungHyeon.github.io/shop-data/img/${itemData.id}.png`} />
            <p className="item_title">{itemData.title}</p>
            <p>₩ {itemData.price.toLocaleString()}</p>
        </div>
    )
};

export default Item;