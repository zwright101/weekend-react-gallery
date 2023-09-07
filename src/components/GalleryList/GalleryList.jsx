import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList({ galleryList, setGalleryList }) {

    const fetchGallery = () => {
        axios.get('/gallery')
            .then((response) => {
                setGalleryList(response.data);
            })
            .catch((error) => {
                console.log(`Error getting data ${error}`);
            });
    }

    useEffect(() => {
        fetchGallery();
    }, []);

    return (
        <div className="galleryList">
            {galleryList.map((images) => (
                <GalleryItem
                    images={images}
                    fetchGallery={fetchGallery}
                />
            ))}
        </div>
    )
}

export default GalleryList;
