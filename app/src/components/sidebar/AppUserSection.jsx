import React from 'react';
import data from '../../data/data.json';  

function UserSection() {
    const { user } = data;  

    return (
        <>
            <div id="user-section" className="flex-shrink-0 d-flex justify-content-between">
                <div className="media">
                    <figure>
                        <img src={user.avatar} alt={user.name} /> 
                    </figure>
                    <div className="h6 media-text">{user.name}</div> 
                </div>
                <div className="w-25 text-muted d-flex justify-content-around align-items-center">
                    <i className="fa-solid fa-circle-notch" role="button"></i>
                    <i className="fa-solid fa-comment-alt" role="button"></i>
                    <i className="fa-solid fa-ellipsis-v" role="button"></i> 
                </div>
            </div>
        </>
    );
}

export default UserSection;
