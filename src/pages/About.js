import React from 'react';
import PageHeader from '../components/PageHeader';
import logo from '../assets/logo.png';
import './About.css';


function AboutPage() {
    return (
        <div className="page-container">
            <PageHeader icon={logo} title="About" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloribus facilis iste placeat praesentium sint voluptatem.
                Architecto at, maiores?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloribus facilis iste placeat praesentium sint voluptatem.
                Architecto at, maiores?
            </p>
            <p>
                Aliquid asperiores autem labore neque nobis quibusdam reiciendis soluta totam veniam voluptates? Debitis delectus enim labore
                necessitatibus saepe! Aperiam, cum debitis doloremque ipsam iure non odio quo quod repellendus sit soluta tempora totam?
                Alias dicta dolore eaque error quibusdam reiciendis vitae voluptas.
            </p>
            <p>
                Cupiditate maxime praesentium ratione recusandae soluta. Aspernatur expedita natus perferendis quos unde vero voluptatum.
                Aperiam architecto blanditiis dolore eaque eius fugit ipsa minima nam neque, nostrum odio praesentium, quibusdam rem repellat
                repudiandae rerum temporibus unde vel. Accusantium animi dignissimos dolores ducimus eos est hic magni, molestias officiis quibusdam?
                Eos perferendis voluptate voluptates.
            </p>
        </div>
    );
}

export default AboutPage;