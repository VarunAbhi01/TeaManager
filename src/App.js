import React from 'react';
import './App.css';

//importing created functions which are being exported from respective file.
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import Nav from './Nav';
import NotFound from './NotFound';
import TeamCatalogue from './TeamCatalogue';


//useState hook is used to track the state of employee details
import { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom" ;

function App() {

    const [selectedTeam, setTeam] = useState( "TeamA" || [ JSON.parse( localStorage.getItem('selectedTeam') ) ]  );

    // here also frst pref to hardcoded data dnn then only the local data of web 
    const [employees, setEmployees] = useState([
      {
        id: 1,
        fullName: "Varun Abhi",
        designation: "FullStack Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Krishna Priya",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Seetha",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Vivek Nandy",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "Aravind Gaari",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Naina",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "Hari Krishna ",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Keerthana ",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Chaturya faffa",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Beerakay", 
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Amruth Jadhav",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Dasari Feena",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ] || [ JSON.parse( localStorage.getItem('selectedTeam') ) ]);
  
  useEffect( () => {
  
  localStorage.setItem("employeeList", JSON.stringify(employees));
  
  },[employees]);
  
  useEffect( () => {
  
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    
    },[selectedTeam]);
  
  
    // this is for ------------------------------------------------------------------------------------------FUNCTIONS 
    // whenever this func is called the display name in list changes to the selected value
    function handleTeamSelectionChange(event) {
      setTeam(event.target.value);
    }
  
    function handleCardClick(event){  // refer notes 
      const transformedEmployees = employees.map( (employee) => employee.id === parseInt( event.currentTarget.id ) 
                                    ? ( employee.teamName===selectedTeam ) ? {...employee, teamName:" "} : {...employee, teamName : selectedTeam}
                                    : employee );
      setEmployees(transformedEmployees);// to change the state of employees component nd re render in the website.
  }
  
  //// started abh
 
  return (
    
    <Router>
        <Nav />
      <Header selectedTeam = {selectedTeam} 
              teamMemberCount = {( employees.filter((employee) => employee.teamName === selectedTeam) ).length} /> 
      
      <Routes>
// if no address is given
        <Route path = '/'  
            element = {  
                      < Employees     
                        employees = {employees}
                        selectedTeam = {selectedTeam }
                        handleTeamSelectionChange = { handleTeamSelectionChange}
                        handleCardClick = {handleCardClick}
                        />  } >
      </Route> 
//if specific address is given 
      < Route path = "/TeamCatalogue" element={<TeamCatalogue 
                              employees = {employees}
                              selectedTeam = {selectedTeam }
                              setTeam = {setTeam}/>} >
      </Route>
// if invalid address is given to handle that case
      < Route path = "*" element={<NotFound/>} >
      </Route>

      </Routes>
      <Footer/>

      </Router>
    
  );
}

export default App;