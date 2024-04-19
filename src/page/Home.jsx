import { useContext } from 'react'
import { ItemStateContext } from '../App'
import Header from '../components/Header'
import Banner from '../components/Banner'
import GoodsList from '../components/GoodsList'
import ProductWrap from '../components/ProductWrap'

const Home = ({changeItemData}) => {
    const itemData = useContext(ItemStateContext);

    return (
        <>
            <Header />
            <Banner />
            <GoodsList />
            <ProductWrap itemData={itemData} changeItemData={changeItemData} />
        </>
    )
}

export default Home;