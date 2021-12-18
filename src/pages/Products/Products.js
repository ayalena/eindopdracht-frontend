import React from "react";
import Product from "../../components/Product/Product";
import logo from '../../assets/logo-with-name.png';
import PageHeader from "../../components/PageHeader/PageHeader";
import './Products.css';
import image1 from "../../assets/abk1.jpg";
import image2 from "../../assets/abk2.jpg";
import blend1 from "../../assets/Blend 1.png";
import blend2 from "../../assets/blend 2.png";
import blend3 from "../../assets/Red Tea.png";
import Footer from "../../components/Footer/Footer";


function Products() {

    return (
        <>
            <PageHeader icon={logo} title="Tea Blends"/>
            <div className="big-container">

                <div className="description-container">
                    <div>
                        <img src={image1} className="image1"/>
                    </div>

                    <div>
                        <article className="article-container">
                            <p>
                                ABK has created multiple healthy tea blends to help boost your
                                immune system.
                            </p>

                            <p>
                                Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa
                                magnam
                                nemo
                                nulla
                                possimus provident,
                                quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem
                                impedit
                                obcaecati quis repudiandae!
                            </p>

                            <p>
                                Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa
                                magnam nemo
                                nulla
                                possimus provident,
                                quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem
                                impedit
                                obcaecati quis repudiandae!
                            </p>
                        </article>
                    </div>

                    <div>
                        <img src={image2} className="image2"/>
                    </div>
                </div>


                <div className="products-container">
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
            <Footer/>
        </>
    );
}

export default Products;
