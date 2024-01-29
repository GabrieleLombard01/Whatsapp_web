function UserSection() {
    return (
        <>
            <div id="user-section" className="flex-shrink-0 d-flex justify-content-between">
                <div className="media">
                    <figure>
                        <img src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" alt="Gabriele Lombardo" />
                    </figure>
                    <div className="h6 media-text">Gabriele Lombardo</div>
                </div>
                <div className="w-25 text-muted d-flex justify-content-around align-items-center">
                    <i className="fa-solid fa-circle-notch" role="button"></i>
                    <i className="fa-solid fa-comment-alt" role="button"></i>
                    <i className="fa-solid fa-ellipsis-v" role="button"></i> 
                </div>
            </div>
        </>
    )
}

export default UserSection