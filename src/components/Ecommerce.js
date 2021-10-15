import React from 'react'
import NavigationTopMenu from './NavigationTopMenu'
import ProductItem from './ProductItem'
import ListOfItems from './ListOfItems'

function Ecommerce() {
    return (
        <>
            <div className="Header" style={{ height: '120px' }}>
                <NavigationTopMenu />
            </div>

            <ListOfItems/>
        </>

    )
}

export default Ecommerce

