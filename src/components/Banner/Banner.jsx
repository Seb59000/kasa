import './Banner.css'

function Banner({ image, alt }) {
    return (
        <div id='banner'>
            <img id='banner-img' src={image} alt={alt} />
        </div>
    );
}

export default Banner