// write you're code here
import Company from "./Class/Company";
import Employee from "./Class/Employee";
import {ICompany, IEmployee} from "@/Interfaces";
// @ts-ignore
import faker from 'faker';


let app = document.getElementById("app");
let ul = document.createElement('ul');
let form = document.getElementById('submit');
let select = document.getElementById('companies');

let companies: ICompany[] = [];
let employees: IEmployee[] = [];

for (let i = 0; i < faker.random.number({'min': 5, 'max': 10}); i++) {
    const company = new Company(employees, faker.company.companyName(), faker.address.city(), faker.internet.url(), faker.address.zipCode());
    companies.push(company);
    for (let i = 0; i < faker.random.number({'min': 5, 'max': 10}); i++) {
        const employee = new Employee(company, faker.lorem.text(), faker.internet.email(), faker.name.firstName(), faker.name.lastName(), faker.phone.phoneNumber());
        employees.push(employee);
    }
}
/**
 * .forEach & .map sert à faire une boucle.
 * @url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
companies.forEach(company => {
    /**
     * Création des section pour les entreprise
     */
    let section = document.createElement('section');
    section.innerHTML = `
        <h3>${company.name}</h3>
        <div>
          <span>${company.region} - ${company.zipCode}</span><br>
          <span><a href="${company.website}">website</a></span>
        </div>
        <div>
          <h4>Employees</h4>
          <ul>
            ${company.employee.map(employee => `<li><strong>${employee.first_name} ${employee.last_name}</strong> : ${employee.email} - ${employee.phone} <br> ${employee.description}</li>`).join("\n")}
          </ul>
        </div>
    `;
    app.appendChild(section);
    /**
     * création des différente option pour la balise <select>
     */
    let option = document.createElement('option');
    option.value = company.name;
    option.innerText = company.name;
    select.appendChild(option);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    let first_name = (<HTMLInputElement>document.getElementById("first_name")).value ;
    let last_name = (<HTMLInputElement>document.getElementById("last_name")).value;
    let email = (<HTMLInputElement>document.getElementById("email")).value;
    let phone = (<HTMLInputElement>document.getElementById("phone")).value;
    let company = (<HTMLInputElement>document.getElementById("companies")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let result = companies.find(compani => compani.name === company);
    const employee = new Employee(result, description, email, first_name, last_name, phone);
    employees.push(employee);
})

