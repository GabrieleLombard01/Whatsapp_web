function Messages() {
    return (
        <>
            {/* chat messages */}
            <section className="flex-grow-1 overflow-auto bg-chat-image">
                <ul className="px-3">
                    <li className="message-container p-3 sent">
                        <div className="message p-2 rounded-3">
                            <p>Hai portato a spasso il cane?</p>
                            <time dateTime="2024-01-03T09:53">29/01/2024 - 16:21</time>
                        </div>
                    </li>
                    <li className="message-container p-3 received">
                        <div className="message p-2 rounded-3">
                            <p>Si!</p>
                            <time dateTime="2024-01-03T09:53">29/01/2024 - 16:24</time>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Messages