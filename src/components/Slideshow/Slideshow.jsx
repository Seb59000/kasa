import { useState } from 'react'
import Picture from '../../components/Picture/Picture.jsx'
import './Slideshow.css'
import arrow from '../../assets/arrowCollapse.png'

function Slideshow({ pictures, title }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const picturesLength = pictures.length
    let picture = pictures[currentIndex]

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? picturesLength - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === picturesLength - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        picture = pictures[currentIndex]
    };

    return (
        <div className="container-slide">
            <div className="slide-item">
                {picturesLength > 1 && (
                    <div onClick={goToPrevious} className="container-arrowLeft">
                        <span className="span-arrowLeft">
                            <img src={arrow} alt='flèche navigation gauche' />
                        </span>
                    </div>
                )}
                {picturesLength > 1 && (
                    <div onClick={goToNext} className="container-arrowRight">
                        <span className="span-arrowRight">
                            <img src={arrow} alt='flèche navigation droite' />
                        </span>
                    </div>
                )}
                <div className="container-pictures">
                    <Picture
                        src={picture}
                        alt={title}
                        index={currentIndex + 1}
                        picturesLength={picturesLength}
                    />
                </div>
            </div>
        </div>
    );
}

export default Slideshow