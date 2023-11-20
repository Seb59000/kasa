import './Picture.css'

function Picture({ src, alt, index, picturesLength }) {

    return (
        <div className="container-image">
            <img src={src} alt={alt} id="image" />
            {picturesLength > 1 ? (
                <p className="container-number">{`${index} / ${picturesLength}`}</p>
            ) : null}
        </div>
    );
}

export default Picture;