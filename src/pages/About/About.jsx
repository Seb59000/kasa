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
                <Collapse page="about" label="Fiabilité" text={texts.txt1} />
                <Collapse page="about" label="Respect" text={texts.txt2} />
                <Collapse page="about" label="Service" text={texts.txt3} />
                <Collapse page="about" label="Sécurité" text={texts.txt4} />
            </section>
        </main>
    )
}

export default About