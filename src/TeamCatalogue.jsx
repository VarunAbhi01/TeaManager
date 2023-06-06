import { useState } from "react";

// we will use javascript arrow functions to create a header function here.
const TeamCatalogue = ({selectedTeam,employees,setTeam} ) => {

    const [groupedEmployees,setGroupedData] = useState(teamCatalogue());

    function teamCatalogue()
// or can be derived as teamCatalogue => ( )  {    }
    {
         var teams = [];

        var teamAMembers = employees.filter( (employee) =>  employee.teamName === "TeamA" ) ;
        var teamA = { team: "TeamA", members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
        teams.push(teamA);

        var teamBMembers = employees.filter( (employee) =>  employee.teamName === "TeamB" );
        var teamB = { team: "TeamB", members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
        teams.push(teamB);

        var teamCMembers = employees.filter( (employee) =>  employee.teamName === "TeamC" );
        var teamC = { team: "TeamC", members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
        teams.push(teamC);

        var teamDMembers = employees.filter( (employee) =>  employee.teamName === "TeamD" );
        var teamD = { team: "TeamD", members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
        teams.push(teamD);

        return teams;
    }

    function handleTeamClick(event){
        var transformedGroupData = groupedEmployees?.map( (groupedData) => groupedData.team ===event.currentTarget.id 
                                        ? {...groupedData,collapsed: !groupedData.collapsed}
                                        :groupedData);
        setGroupedData(transformedGroupData);
    // DOUBTTTTTTTTTTTTTTTTTTTTTTTTTT
        setTeam(event.currentTarget.id);
    }
    // returning HTML code 
        return(
            <main className="container">
                {
                    groupedEmployees?.map( (item) => {
                        return (
                            <div key={item.team} className="card mt-2" style={{cursor:"pointer"}}>
                            <h4 id ={item.team} className="card-header text-secondary big-white" onClick={handleTeamClick}
                                >Team Name: {item.team} </h4>
     {/* DOUBTTTTTTTTTTTTTTTTTTTTTTTTTT    */}
       <div id={"collapse_" + item.team} className={ item.collapsed === true ? "collapse" : "" } >
                            <hr />
                            {
                                item.members.map( (member) =>{
                                    return(
                                        <div className="mt-2">
                                            <h5 className="card-title mt-2">
                                                <span className="text-dark">Full Name:{member.fullName}</span>
                                                </h5>
                                                <p>Designation: {member.designation}</p>
                                                </div>  
                                    );
                                })
                            }
                                </div>
                                </div>
                    )
                            })
                            }
            </main>
        )
    }
    
    // now exporting this Header function from this file
    export default TeamCatalogue
    