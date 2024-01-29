function Footer() {
    return (
        <>
            {/* chat footer */}
            <footer className="flex-shrink-0 container-fluid pt-3 pb-3">
                <div className="row h-100 align-items-center">
                    <div className="col-1 d-flex justify-content-center">
                        <i className="fa-regular fa-smile fa-2x text-muted" role="button"></i>
                    </div>
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder="Scrivi un messaggio" />
                    </div>
                    <div className="col-1 d-flex justify-content-center">
                        <i className="fa-solid fa-microphone fa-2x text-muted" role="button"></i>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer