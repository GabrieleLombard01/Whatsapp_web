function Layout() {
  

    return (
      <>
        <div className="h-100 d-flex align-items-center justify-content-center">
          <main className="container shadow bg-white">
            <div className="row h-100">
            {/* SIDEBAR SECTION */}
            <section id="sidebar" className="col-4 p-0 h-100 bg-light-gray"></section>
            {/* CHAT SECTION */}
            <section id="chat" className="col-8 p-0 h-100 bg-chat-color"></section>
            </div>
          </main>
        </div>
      </>
    )
  }
  
  export default Layout