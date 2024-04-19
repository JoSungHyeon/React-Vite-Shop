import { useContext } from "react";
import { ItemStateContext } from "../App";
import Header from "../components/Header";
import DetailWrap from "../components/DetailWrap";
import ItemInfo from "../components/ItemInfo";
import Recent from '../components/Recent'

const Product = () => {
    const itemData = useContext(ItemStateContext);
    return (
        <>
            <Header />
            <DetailWrap itemData={itemData}/>
            <ItemInfo />
            <Recent itemData={itemData} />
        </>
    )
}

export default Product;