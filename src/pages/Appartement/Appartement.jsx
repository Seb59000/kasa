import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import logementsList from '../../data/logements.json';
import Collapse from '../../components/Collapse/Collapse.jsx'
import Slideshow from '../../components/Slideshow/Slideshow.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import './Appartement.css'

function Appartement() {
    document.title = "Showroom"

    const { id } = useParams()
    const logementData = logementsList.find(item => item.id === id);

    if (logementData === undefined) {
        return <Navigate to="/error" />;
    }

    const { title, pictures, host, description, rating, location, equipments, tags } = logementData;
    const nameParts = host.name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts[1];
    const equipementsColumn = equipments.map((item) =>
        <p key={item.toString()}>{item}</p>
    );

    return (
        <main>
            <section>
                <Slideshow pictures={pictures} title={title} />
            </section>
            <section id="infos">
                <div className="container-titleTagsProfilRating">
                    <div>
                        <div>
                            <h2>{title}</h2>
                            <p className="location">{location}</p>
                        </div>
                        <div className="tags">
                            <Tag tags={tags} />
                        </div>
                    </div>
                    <div className="container-ratingProfil">
                        <div className="rating">
                            <Rating rating={rating} />
                        </div>
                        <div className="profil">
                            <p className="name" ><span>{firstName} </span><span>{lastName}</span></p>
                            <img className="photo" src={host.picture} alt={host.name} />
                        </div>
                    </div>
                </div>
                <div className="container-descriptionEquipments">
                    <div className="description">
                        <Collapse label="Description" text={description} />
                    </div>
                    <div className="equipments">
                        <Collapse label="Équipements" text={equipementsColumn} />
                    </div>
                </div>
            </section >
        </main >
    )
}

export default Appartement