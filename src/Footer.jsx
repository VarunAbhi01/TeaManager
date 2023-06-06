// we will use javascript arrow functions to create a Footer function here.
const Footer = ( ) => {

    var today = new Date();

    // returning HTML code 
        return(
            <footer className="container">
             <div className="row justify-content-center mt-3 mb-4">
              <div className="col-8">
                <h5>Copyright ©️ {today.getFullYear()} Varun C Abhishek. All Rights Reserved </h5>
              </div>
             </div>
            </footer> 
            )
            
    }
    
    // now exporting this Footer function from this file
    export default Footer
    