


const Search = (News) => {
    return (

        <>
            <div className="search">
                <label htmlFor="input"> {News}</label>
                <input id='input' type="text" placeholder='Search' />
            </div>
        </>
    );
}

export default Search;