import React from "react";
import "./index.css";
import Employee from "./components/employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployee] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Trading",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloe-1043474.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Jay",
      role: "Networking",
      img: "https://images.pexels.com/photos/2880799/pexels-photo-2880799.jpeg?cs=srgb&dl=pexels-keegan-checks-2880799.jpg&fm=jpg&_gl=1*f61n87*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc1NjYzMC4yLjEuMTY2Njc1NzU1Ni4wLjAuMA..",
    },
    {
      id: 3,
      name: "Marlen",
      role: "Teacher",
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?cs=srgb&dl=pexels-chloe-1043474.jpg&fm=jpg",
    },
    {
      id: 4,
      name: "Stephen",
      role: "Mining Engr",
      img: "https://images.pexels.com/photos/2781201/pexels-photo-2781201.jpeg?cs=srgb&dl=pexels-kaushal-moradiya-2781201.jpg&fm=jpg&_gl=1*1c6fb0z*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc1NjYzMC4yLjEuMTY2Njc1OTYzOC4wLjAuMA..",
    },
    {
      id: 5,
      name: "Michael",
      role: "Doctor",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg&_gl=1*1s1auqz*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc1NjYzMC4yLjEuMTY2Njc1OTU4MS4wLjAuMA..",
    },
    {
      id: 6,
      name: "Kate",
      role: "Botany",
      img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?cs=srgb&dl=pexels-yogendra-singh-3748221.jpg&fm=jpg&_gl=1*79gpnp*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc1NjYzMC4yLjEuMTY2Njc1OTUxNS4wLjAuMA..",
    },
    {
      id: 7,
      name: "Ayoola",
      role: "Farmer",
      img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?cs=srgb&dl=pexels-murat-esibatir-4355346.jpg&fm=jpg&_gl=1*fwuioj*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc1NjYzMC4yLjEuMTY2Njc1OTQzMC4wLjAuMA..",
    },
    {
      id: 8,
      name: "Titilayo",
      role: "Student",
      img: "https://images.pexels.com/photos/5538616/pexels-photo-5538616.jpeg?cs=srgb&dl=pexels-zen-chung-5538616.jpg&fm=jpg&_gl=1*oa3ru*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc2MjM4NC4zLjEuMTY2Njc2MjQxMi4wLjAuMA..",
    },
    {
      id: 9,
      name: "Adnan",
      role: "Mech. Engr",
      img: "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?cs=srgb&dl=pexels-thisisengineering-3912981.jpg&fm=jpg&_gl=1*wiwx8t*_ga*MTU2MzcyOTgxMS4xNjY2NzUzMDU5*_ga_8JE65Q40S6*MTY2Njc2MjM4NC4zLjEuMTY2Njc2MjQ3MS4wLjAuMA..",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployee(updatedEmployees);
  }

  const showEmployees = -true;
  return (
    <div>
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-centre">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployee />
        </>
      ) : (
        <p>You can not see the employees</p>
      )}
      <h1>
        {/* <bold>Hello React</bold> */}
        {/* <Employee /> */}
      </h1>
      <h5>This is my first lesson on REACT courtesy of CALEB Curry</h5>
      <functionalComp />
    </div>
  );
}

export default App;
