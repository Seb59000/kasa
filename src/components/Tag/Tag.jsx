import './Tag.css'

function Tag({ tags }) {

    return (
        <div className="containerTags">
            {
                tags.map((tag) => (
                    < div className="tag" >
                        <p>{tag}</p>
                    </div >
                ))
            }
        </div>
    )

}

export default Tag