function ContactsList() {
    return (
        <>
            <div id="contacts-list" className="flex-grow-1 bg-white overflow-auto">
                <ul className="m-0 p-0">
                    <li className="media">
                        <figure>
                            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" alt="Michele" />
                        </figure>
                        <div className="h6 media-text">
                            <div>Michele</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ContactsList