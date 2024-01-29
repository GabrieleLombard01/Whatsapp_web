function Search() {
    return (
        <>
            <div id="search-contacts" className="p-2 flex-shrink-0">
                <i className="fa-solid fa-search text-muted"></i>
                <input type="text" className="w-100" placeholder="Cerca contatto"/>
            </div>
        </>
    )
}

export default Search