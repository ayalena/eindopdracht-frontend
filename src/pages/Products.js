import React from "react";
import Product from "../components/Product";
import logo from '../assets/logo.png';
import PageHeader from "../components/PageHeader";
import './Products.css';


function Products() {

    return (
        <>
            <PageHeader icon={logo} title="Products"/>
            <main>

                <Product
                    icon={logo}
                    name="Herb mix 1"
                    cost="10$"
                    description="This mix consists of...."
                />
                <Product
                    icon={logo}
                    name="Herb mix 2"
                    cost="10$"
                    description="This mix consists of...."
                />
                <Product
                    icon={logo}
                    name="Herb mix 3"
                    cost="10$"
                    description="This mix consists of...."
                />

            </main>
        </>
    );
}

export default Products;
