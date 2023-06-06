
//importing images into the employees component
import femaleProfile from "./images/femaleProfile.jpeg";
import maleProfile from "./images/maleProfile.jpeg";
import Teams from './Teams';


const Employees = ({employees,selectedTeam,handleCardClick,handleTeamSelectionChange}) => {
  
  //----------------------------------------------------------------------------Outputting the employees data in the following format
  return (
    // container is a box that consists of all cards
    <main className="container">
      {/* this is for -----------------------------------------------------------------select / drop down list ----------------- */}
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-2">
          {/* using bootstrap classes for better appearance of select list */}
         <Teams selectedTeam= {selectedTeam}
                handleTeamSelectionChange = { handleTeamSelectionChange} />
        </div>
      </div>
{/* this is for --------------------------------------------------------------------------------------------employees cards display */}
      {/* //this div is for rows of cards, with top and bottom margin specification */}
      <div class="row justify-content-center mt-3 mb-3">
        {/* this div is for specifying columns size of cards i.e. basically a grid has 12 elements nd col -10 means eac */}
        <div class="col-8">
          {/* this is for entire card collection data -------------------------------------------------------------------------------------------------*/}
          <div class="card-collection">
            {
              // this is used to traverse the data
              employees.map((employee) => (
                // this is to -----------------------------------------------------------------------------specify each card outline-
                <div
                  key={employee.id }
                  id={employee.id}
                  className={ (employee.teamName === selectedTeam) ? "card m-2 standout" : "card m-2" }
                  style={{ cursor: "pointer" }}
                  onClick={handleCardClick}
                >
                  {/* profile image in the card------------------------------------ */}
                  {employee.gender === "male" ? (
                    <img src={maleProfile} className="card-img-top" />
                  ) : (
                    <img src={femaleProfile} className="card-img-top" />
                  )}
                  {/* this is to specify the text body in each card-------------------------- */}
                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}
                    </h5>
                    <p className="card-text">
                      <b>Designation: </b>
                      {employee.designation}
                    </p>
                  </div>
                </div>
              ))
            }
            {/* card collection ends ---------------------------------------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </main>
  );
};

// now exporting this Header function from this file
export default Employees;
