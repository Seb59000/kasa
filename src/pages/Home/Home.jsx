import Banner from '../../components/Banner/Banner';
import image from '../../assets/banner/banner-home.jpg'

function Home() {
    return (
        <div>
            <Banner
                image={image}
                alt='Littoral'
                page="home"
            />
        </div>
    )
}

export default Home