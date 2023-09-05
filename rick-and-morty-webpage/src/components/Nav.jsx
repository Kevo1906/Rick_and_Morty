import SearchBar from "./SearchBar"

function Nav({onSearch}){
    let randomId = Math.floor(Math.random()*825+1)
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button onClick={() => onSearch(randomId)}>Random</button>
        </div>
    )

}

export default Nav