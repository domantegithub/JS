console.log("Kartojimas");
//1 -istraukiam forma;
// 2-pridedam Listener
//3- funckija
//4 istraukiam reiksmes
const SalaryCheckerForm = document.querySelector("form");
SalaryCheckerForm.addEventListener("submit", handleSalaryCheckerForm);

function handleSalaryCheckerForm(event) {
    event.preventDefault();
    const field =document.querySelector("select[name=workingField]").value;
    //istraukiam position reiksmes
    const position =document.querySelector("input[name=position]").value;
    const gender = document.querySelector("input[name=gender]:checked").value;
    const experience = document.querySelector("input[name=experience]").value;
    console.log(position.value);//patikrinam ar ismeta reiksme irasyta
    console.log(field.value);
    console.log(gender.value);
    console.log(experience.value);

    //Apsirašome logiką, kiek kas uzdirba, t.y. pasirinkus ismes atsakyma
//management -48000, IT-91000, construction-66000, farmacy-128000;
//women gets 17% less then man
// experience: 0-2 range minus 50%, 2-5-mid; 5< ranga 50%

    if (field === "management") { //position pasirinktas management ismesk man atsakyma
        const genderSalary = calculateGenderSalary(gender, 48000);
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
        
        alert(`Average Salary is ${genderSalary}`);
    } else if (field==="it") {
        const genderSalary = calculateGenderSalary(gender, 91000);
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
       
        alert(`Average Salary is ${genderSalary}`);
    } else if (field==="construction") {
        const genderSalary = calculateGenderSalary(gender, 60000);
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
       
        alert(`Average Salary is ${genderSalary}`);
    } else {
        const genderSalary = calculateGenderSalary(gender, 128000);
        const finalSalary = calculateExperienceSalary(experience, genderSalary);
       
        alert(`Average Salary is ${genderSalary}`);
    }
}

function calculateGenderSalary(gender, salary) {
    if (gender==="male") {
        return salary;
    } else if (gender==="female") { //jei randam gender moteri- mazinam atlyginima
        return salary * 0.83;
    } else {
        return salary * 0.91;
    }
}

function calculateExperienceSalary(experience, salary) {
    const flooredExperience=Math.floor(experience); //kad suapvalintu skaiciu
    if (experience >= 0 && experience <= 2) {
        return salary * 0.5;
    } else if (flooredExperience >=3 && flooredExperience <=5) {
        return salary;
    } else {
        return salary * 1.5;
    }
}