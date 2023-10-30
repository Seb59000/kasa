import { useParams } from 'react-router-dom'

function Logement() {
    const { id } = useParams()

    return (
        <div>
            <h2>Logements</h2>
            <h3>Logement {id}</h3>
        </div>
    )
}

export default Logement