import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import logo from '../../assets/logo-with-name.png';
import {useHistory} from 'react-router-dom';
import './Home.css';
import Footer from "../../components/Footer/Footer";

function HomePage() {
    const history = useHistory();

    function handleClick() {
        history.push("/bookings");
    }

    return (
        <>
            <PageHeader icon={logo} title="Acupuncture By Kim"/>
            <div className="page-container">


                <section className="section">
                    <p>
                        Acupuncture by Kim was founded in XXXX by Kim Tran. Kim studied at XXXX and has mastered the art
                        of
                        acupuncture. ABK's vision is to make acupuncture available to everyone.
                    </p>

                    <p>
                        Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam
                        nemo
                        nulla
                        possimus provident,
                        quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem
                        impedit
                        obcaecati quis repudiandae!
                    </p>

                    <p>
                        Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque
                        fuga
                        hic inventore ipsa magnam
                        provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic
                        inventore
                        iste laudantium libero magnam
                        mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas
                        quisquam
                        quos rem sapiente sequi
                        similique sint vero?
                    </p>

                    <p>
                        Accusamus aliquam aliquid blanditiis consequatur est et minima mollitia neque
                        non, odit perspiciatis placeat
                        provident quos, similique sit totam vero. Beatae consequatur cupiditate rerum?
                    </p>

                    <p>
                        Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque
                        fuga
                        hic inventore ipsa magnam
                        provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic
                        inventore
                        iste laudantium libero magnam
                        mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas
                        quisquam
                        quos rem sapiente sequi
                        similique sint vero?
                    </p>

                </section>

                <button
                    type="button"
                    onClick={handleClick}
                >
                    BOOK NOW!
                </button>

            </div>
        <Footer/>
        </>
    );
}

export default HomePage;