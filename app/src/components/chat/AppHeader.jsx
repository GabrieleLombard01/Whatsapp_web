function Header({ selectedContact }) {
    return (
        <>
            <header className="bg-light-gray flex-shrink-0 d-flex justify-content-between">
                <div className="media">
                    <figure>
                        <img src={selectedContact ? selectedContact.avatar : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt={selectedContact ? selectedContact.name : "Michele"} />
                    </figure>
                    <div className="h6 media-text">
                        <div>{selectedContact ? selectedContact.name : "Michele"}</div>
                        <div className="mb-0 fw-light">
                            <small>Ultimo accesso: </small>
                        </div>
                    </div>
                </div>
                <div className="me-3 d-flex text-muted align-items-center justify-content-around">
                    <i className="fa-solid fa-search ms-3"></i>
                    <i className="fa-solid fa-paperclip ms-3"></i>
                    <i className="fa-solid fa-ellipsis-v ms-3"></i>
                </div>
            </header>
        </>
    );
}

export default Header;
