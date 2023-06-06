// we will use javascript arrow functions to create a header function here.
const NotFound = () => {

    // returning HTML code 
        return(
            <header className="container">
                <div className="row justify-content-center mt-3 mb-4">
                    <div className="col-8">
                    <h1 className="text-danger">404- Page Not Found</h1>
                    </div>
                </div>
            </header>
        )
    }
    
    // now exporting this Header function from this file
    export default NotFound
    