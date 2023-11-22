import './Rating.css'
import starColor1 from '../../assets/star1.png'
import starColor2 from '../../assets/star2.png'

function Rating({ rating }) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        const starColor = i < rating ? starColor1 : starColor2;
        stars.push(
            <img key={i} src={starColor} alt="notation" className="span-rating" />
        );
    }

    return <div className="container-rating">{stars}</div>;
}

export default Rating