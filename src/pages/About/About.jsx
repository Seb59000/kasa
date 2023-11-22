import Banner from '../../components/Banner/Banner.jsx'
import Collapse from '../../components/Collapse/Collapse.jsx'
import image from '../../assets/banner/banner-about.jpg'
import texts from '../../data/texts.json'
import './About.css';

function About() {
    document.title = "A propos"

    return (
        <main>
            <div id='banner-container'>
                <Banner
                    image={image}
                    alt='Falaise face à la mer'
                />
            </div>
            <section className='container'>
                <div className='container'>
                    <Collapse label="Fiabilité" text={texts.txt1} />
                    <Collapse label="Respect" text={texts.txt2} />
                    <Collapse label="Service" text={texts.txt3} />
                    <Collapse label="Sécurité" text={texts.txt4} />
                </div>
            </section>
        </main>
    )
}

export default About