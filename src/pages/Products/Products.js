import React from "react";
import Product from "../../components/Product/Product";
import logo from '../../assets/logo.png';
import PageHeader from "../../components/PageHeader/PageHeader";
import './Products.css';
import image1 from "../../assets/abk1.jpg";
import image2 from "../../assets/abk2.jpg";
import blend1 from "../../assets/Blend 1.png";
import blend2 from "../../assets/blend 2.png";
import blend3 from "../../assets/Red Tea.png";


function Products() {

    return (
        <>
            <PageHeader title="Tea Blends"/>
            <div className="big-container">

                <div className="description-container">
                    <img src={image1} className="image1 item-a"/>
                    <article className="item item-b">ABK has created multiple healthy tea blends to help boost your immune system.

                        Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam
                        nemo
                        nulla
                        possimus provident,
                        quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem
                        impedit
                        obcaecati quis repudiandae!
                    </article>
                    <img src={image2} className="image2 item-c"/>
                </div>


                <div className="products-container item-d">
                    <Product
                        icon={blend1}
                        name="Herb mix 1"
                        cost="10$"
                        description="This mix consists of...."
                    />
                    <Product
                        icon={blend2}
                        name="Herb mix 2"
                        cost="10$"
                        description="This mix consists of...."
                    />
                    <Product
                        icon={blend3}
                        name="Herb mix 3"
                        cost="10$"
                        description="This mix consists of...."
                    />
                </div>
            </div>
        </>
    );
}

export default Products;
