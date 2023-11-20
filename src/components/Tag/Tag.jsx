import './Tag.css'

function Tag({ tags }) {

    return (
        <div className="containerTags">
            {
                tags.map((tag, index) => (
                    < div className="tag" key={index}>
                        <p>{tag}</p>
                    </div >
                ))
            }
        </div>
    )

}

export default Tag