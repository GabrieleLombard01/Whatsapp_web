function Notifications() {
    return (
        <>
            <div id="notifications" className="bg-light-blue flex-shrink-0">
                <div className="media">
                    <div className="media-icon">
                        <i className="fa-solid fa-bell-slash"></i>
                    </div>
                    <div className="media-text">
                        <div>Ricevi notifiche di nuovi messaggi</div>
                        <div className="fs-6 text-decoration-underline" role="button">
                            <small>Attiva le notifiche desktop</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notifications