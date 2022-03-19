import React from 'react';
import Product from '../product/Product';
import './home.css'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_img' src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="" />
            
            <div className='home_row'>
            <Product 
                id="2323" 
                title="제품1입니다"
                price={3000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={5}
                />

            <Product 
                id="2323" 
                title="제품2입니다"
                price={2000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={3}
                />
            </div>
            <div className='home_row'>
            <Product 
                id="2323" 
                title="제품3입니다"
                price={1000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={5}
                />
            <Product 
                id="2323" 
                title="제품4입니다"
                price={2000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={1}
                />

            </div>
            <div className='home_row'>
            <Product 
                id="2323" 
                title="제품1입니다"
                price={3000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={1}
                />
                            <Product 
                id="2323" 
                title="제품1입니다"
                price={3000}
                image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/Fuji_Dash_en_US._SY304_CB641328052_.jpg'
                rating={1}
                />
            </div>

            </div>
        </div>
    );
}

export default Home;