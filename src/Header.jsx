// we will use javascript arrow functions to create a header function here.
const Header = ( {selectedTeam,teamMemberCount} ) => {

// returning HTML code 
    return(
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                <h1>TeaManager</h1>
            <h4>{selectedTeam} has {teamMemberCount} {teamMemberCount ===1 ? "member" : "members "}</h4>
                </div>
            </div>
        </header>
    )
}

// now exporting this Header function from this file
export default Header
