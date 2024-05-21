import { useContext, useEffect, useState } from 'react'
import { ItemStateContext } from '../App'
import Header from '../components/Header'
import Banner from '../components/Banner'
import GoodsList from '../components/GoodsList'
import ProductWrap from '../components/ProductWrap'
import Recent from '../components/Recent'
import Footer from '../components/Footer'

const Home = () => {
    const itemData = useContext(ItemStateContext)
    console.log(itemData)
    return (
        <>
            <Header />
            <Banner />
            <GoodsList />
            <ProductWrap itemData={itemData} />
            <Footer />
        </>
    )
}

export default Home;