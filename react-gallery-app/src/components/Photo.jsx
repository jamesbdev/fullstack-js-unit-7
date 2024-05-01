    import React from "react";

    const Photo = (props) => {
        const photoId = props.photo.id;
        const serverId = props.photo.server;
        const siteUrl = "https://live.staticflickr.com/";
        const secret = props.photo.secret;
        const size = "w";
        const src = `${siteUrl}${serverId}/${photoId}_${secret}.jpg`;
        const title = props.photo.title;
      

        return (
            <>
            <li>
                <img src={src} alt={title}/>
            </li>
            </>
        )
    }

    export default Photo;