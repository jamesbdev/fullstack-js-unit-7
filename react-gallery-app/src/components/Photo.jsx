    import React from "react";

    //displays an individual image for the gallery
    const Photo = (props) => {
        //get data from photo object
        const photoId = props.photo.id;
        const serverId = props.photo.server;
        const siteUrl = "https://live.staticflickr.com/";
        const secret = props.photo.secret;
        const size = "w";
        //construct photo URL
        const src = `${siteUrl}${serverId}/${photoId}_${secret}.jpg`;
        const title = props.photo.title;

        return (
            <>
            {/* render individual photo */}
            <li>
                <img src={src} alt={title}/>
            </li>
            </>
        )
    }

    export default Photo;