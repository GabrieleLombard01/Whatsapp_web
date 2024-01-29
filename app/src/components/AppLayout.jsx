function Layout() {
  

    return (
      <>
        <div id="content" className="h-100 d-flex align-items-center justify-content-center">
          <main className="container shadow bg-white">
            <div className="row h-100">
            {/* SIDEBAR SECTION */}
            <section id="sidebar" className="col-4 p-0 h-100 bg-light-gray"></section>

            {/* CHAT SECTION */}
            <section id="chat" className="col-8 p-0 h-100 bg-chat-color d-flex flex-column ">
              {/* chat header */}
              <header className="bg-light-gray flex-shrink-0">header</header>
              {/* chat messages */}
              <section className="flex-grow-1 overflow-auto bg-chat-image">messages</section>
              {/* chat footer */}
              <footer className="flex-shrink-0">footer</footer>
            </section>

            </div>
          </main>
        </div>
      </>
    )
  }
  
  export default Layout