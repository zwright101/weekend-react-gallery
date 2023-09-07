import axios from 'axios';
import React, { useState } from 'react';

function GalleryItem({ images, fetchGallery }) {
 
    const [toggle, setToggle] = useState(false);

    // Function to update the like count for an image when the "like" button is clicked.
    const updateLikeCount = () => {
        axios.put(`/gallery/like/${images.id}`)
            .then((response) => {
                console.log(response);
                // After updating the like count, fetch gallery to potentially refresh the data.
                fetchGallery();
            })
            .catch((error) => {
                console.log(`Error updating likes ${error}`);
            });
    }

    // Function to  render the image description or the image itself based on the 'toggle' state.
    const itemDescription = () => {
        if (toggle === false) {
            return (
                <div className="galleryItem">
                    {/* Display the image and attach a click event to toggle the 'toggle' state. */}
                    {<img key={images.id} src={images.path} onClick={() => setToggle(!toggle)} />}
                </div>
            )
        } else if (toggle === true) {
            return (
                <div className="imageDescription" style={{ width: 200, height: 200, backgroundColor: 'black', color: 'white' }} onClick={() => setToggle(!toggle)}>
                    {/* Display the image description and attach a click event to toggle the 'toggle' state. */}
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
            {/* Display a button to like the image and show the current like count. */}
            <button onClick={(e) => updateLikeCount(e)}>{images.likes} people like this image!</button>
        </div>
    )
}

export default GalleryItem;
