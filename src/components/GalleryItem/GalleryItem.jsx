import axios from 'axios';
import React, {useState} from 'react';


function GalleryItem({images, fetchGallery}) {

    const [toggle, setToggle] = useState(false);

    const updateLikeCount = () => {
        axios.put(`/gallery/likes/${images.id}`)
        .then((response) => {
            console.log(response);
            fetchGallery();
        })
        .catch((error) => {
            console.log(`Error updating likes ${error}`);
        })
    }

    const itemDescription = () => {
        if (toggle === false) {
            return (
                <div className="galleryItem">
                    {<img key={images.id} src={images.path} onClick={() => setToggle(!toggle)} />}
                </div>
            )
        }else if (toggle === true) {
            return (
                <div className="imageDescription" style={{width: 200, height: 200, backgroundColor: 'black', color: 'white'}} onClick={() => setToggle(!toggle)}>
                    {images.description}
                </div>
            )
        }
    }

    return (
        <div className="galleryItem">
            {itemDescription()}
            <br />
            <br />
            <button onClick={(e) => updateLikeCount(e)}>{images.likes} people like this image!</button>
        </div>
    )

}

export default GalleryItem;