function Header() {
    return (
        <>
            {/* chat header */}
            <header className="bg-light-gray flex-shrink-0 d-flex justify-content-between">
                <div className="media">
                    <figure>
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Michele" />
                    </figure>
                    <div className="h6 media-text">
                        <div>Michele</div>
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
    )
}

export default Header