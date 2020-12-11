import { userList } from "./data.js";
import { renderEmployeeCard } from "./components/employeeDiv.js";

window.onload = () => {

    const rootDiv = document.getElementById("root");
    userList.then((employees) => {
        
        employees.forEach((employee) => {
            rootDiv.appendChild(renderEmployeeCard(employee));
        });
    });
};