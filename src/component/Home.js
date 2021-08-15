import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            {/* Banner */}
           <img className="home__image" src="img/bg.jpg" alt="" />

           {/* Product id, title, price, rating, image */}
           <div className="home__row">
            <Product 
                id="101"
                title="Kent Pristine (11038) 8L RO + UV + UF Water Purifier(White)"
                price={16890}
                rating={4}
                image="img/Kent Pristine.png"
            />
            <Product 
                id="102"
                title="Havells Pro 7 Litre Absoulety safe RO + UV purufied pH balanced water"
                price={12400}
                rating={5}
                image="img/Havells Pro.png"
            />
            </div>
            <div className="home__row">
            <Product 
                id="103"
                title="Kent Excell Plus Ultraviolet Water Purifier -15L"
                price={19500}
                rating={4}
                image="img/Kent Excell Plus.png"
            />
            <Product 
                id="104"
                title="HUL Pureit Advanced Plus RO + UV + MP 6 Stage 5 Liters Water Purifier"
                price={8799}
                rating={4}
                image="img/HUL Pureit Advanced.png"
            />
            <Product 
                id="105"
                title="Pureit by HUL Ultima Mineral 10L RO + UL + MF Water Purifier (Black)"
                price={20745}
                rating={5}
                image="img/HUL Ultima.png"
            />
           </div>
           <div className="home__row">
            <Product 
                id="106"
                title="Hindustan Unilever Pureit Advanced Water Purifier"
                price={3450}
                rating={4}
                image="img/HUL Advanced.png"
            />

           </div>
        </div>

    )
}

export default Home
