function addNewWeField() {


    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 3);

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newnode, weAddButtonOb);
}

function addNewSkill() {


    let newnode = document.createElement("input");
    newnode.classList.add("form-control");
    newnode.classList.add("sField");
    newnode.classList.add("col-md-2");
    newnode.classList.add("mt-2");
    newnode.classList.add("w-25");
    newnode.classList.add("jusitfy-content-around")


    newnode.setAttribute("placeholder", "add your skill");

    let newlabel = document.createElement("label");
    newlabel.classList.add("labelField");

    let skillzOb = document.getElementById("skillz");
    let weAddSkillOb = document.getElementById("weAddSkill");
    skillzOb.insertBefore(newnode, weAddSkillOb);

}

function workExperience() {
    location.href = "work_experience.html";
}

function personal() {
    location.href = "personal_info.html";
}

function addNewInterest() {
    let newleaf = document.createElement("input");
    newleaf.classList.add("form-control");
    newleaf.classList.add("iField");
    newleaf.classList.add("col-md-2");
    newleaf.classList.add("mt-2");
    newleaf.classList.add("w-25");
    newleaf.setAttribute("placeholder", "Add your Interests");


    let interestzob = document.getElementById("Interestz");
    let itFieldob = document.getElementById("weAddInterest");
    interestzob.insertBefore(newleaf, weAddInterest);


}