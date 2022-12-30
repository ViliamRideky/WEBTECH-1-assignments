function myFunction() {
    const x = document.getElementById("viliamRideky");
    if (x.type === "hidden") {
        x.type = "text";
    } else {
        x.type = "hidden";
    }
}

function show() {
    document.getElementById('sportsThings').style.display = 'block';
}

function noshow() {
    document.getElementById('sportsThings').style.display = 'none';
}


function show1() {
    const checkBox = document.getElementById('other');
    const input = document.getElementById('showOtherText');
    if (checkBox.checked == true) {
        input.style.display = "block";
    } else {
        input.style.display = "none";
    }
}

function getType(townSelect) {

    let select2 = document.getElementById("sel2");
    let select3 = document.getElementById("sel3");

    select2.innerHTML = "";
    select3.innerHTML = "";

    document.getElementById("townModal").innerHTML = "";

    console.log(select2.children[2]);

    let choice = document.createElement("option");
    let outdoor = document.createElement("option");
    let indoor = document.createElement("option");
    switch (townSelect.value) {
        case ("100 Bratislava"):
            document.getElementById("townModal").innerHTML =
                "Bratislava";


            choice.value = "choice";
            outdoor.value = "outdoor";
            indoor.value = "indoor";

            choice.innerHTML = "--- Typ športoviska---"
            outdoor.innerHTML = "Vonkajšie športovisko";
            indoor.innerHTML = "Vnútroné športovisko";

            select2.appendChild(choice);
            select2.appendChild(outdoor);
            select2.appendChild(indoor);

            break;
        case ("80 Trenčín"):
            document.getElementById("townModal").innerHTML =
                "Trenčín";
            choice.value = "choice";
            outdoor.value = "outdoor";
            indoor.value = "indoor";

            choice.innerHTML = "--- Typ športoviska---"
            outdoor.innerHTML = "Vonkajšie športovisko";
            indoor.innerHTML = "Vnútroné športovisko";

            select2.appendChild(choice);
            select2.appendChild(outdoor);
            select2.appendChild(indoor);

            break;
        case ("60 Humenné"):

            document.getElementById("townModal").innerHTML =
                "Humenné";

            choice.value = "choice";
            outdoor.value = "outdoor";
            indoor.value = "indoor";

            choice.innerHTML = "--- Typ športoviska---"
            outdoor.innerHTML = "Vonkajšie športovisko";
            indoor.innerHTML = "Vnútroné športovisko";

            select2.appendChild(choice);
            select2.appendChild(outdoor);
            select2.appendChild(indoor);

            break;
    }

}

function getPlayground(typeSelect) {

    let select3 = document.getElementById("sel3");
    select3.innerHTML = "";

    document.getElementById("sportsGroundModal").innerHTML = "";

    document.getElementById("typeModal").innerHTML = "";

    switch (typeSelect.value) {
        case ("outdoor"):

            document.getElementById("sportsGroundModal").innerHTML =
                "Vonkajšie športovisko";

            let grass = document.createElement("option");
            let ngrass = document.createElement("option");


            grass.value = "grass";
            ngrass.value = "ngrass";

            grass.innerHTML = "Tráva";
            ngrass.innerHTML = "Umelá tráva";

            select3.appendChild(grass);
            select3.appendChild(ngrass);

            break;
        case ("indoor"):
            document.getElementById("sportsGroundModal").innerHTML =
                "Vnútorné športovisko";

            let hall = document.createElement("option");
            let gym = document.createElement("option");

            hall.value = "hall";
            gym.value = "gym";

            hall.innerHTML = "Hala";
            gym.innerHTML = "Posilňovňa"

            select3.appendChild(hall);
            select3.appendChild(gym);
            break;
    }

}

function getTypeOfGround() {
    let type = document.getElementById("typeModal");
    let select = document.getElementById("sel3");

    let choosenType = select.options[select.selectedIndex];

    type.innerHTML = choosenType.innerHTML;
}

function optionSelected(select) {
    let time = document.getElementById("timeModal");
    select.style.border = " 2px solid yellowgreen";

    let choosenTime = select.options[select.selectedIndex];

    time.innerHTML = choosenTime.innerHTML;
}

function getMaxDate() {
    let today = new Date();

    let current_month = today.getMonth() + 1;
    let current_day = today.getDate();
    let current_year = today.getFullYear();
    let date_input = document.querySelector('#birthday');

    if (current_month < 10)
        current_month = '0' + current_month.toString();
    if (current_day < 10)
        current_day = '0' + current_day.toString();

    let maxDate = current_year + '-' + current_month + '-' + current_day;
    date_input.setAttribute('max', maxDate);

}

function getMinDate() {
    let today = new Date();

    let current_month = today.getMonth() + 1;
    let current_day = today.getDate();
    let current_year = today.getFullYear();
    let date_input = document.querySelector('#date');

    if (current_month < 10)
        current_month = '0' + current_month.toString();
    if (current_day < 10)
        current_day = '0' + current_day.toString();

    let minDate = current_year + '-' + current_month + '-' + current_day;
    date_input.setAttribute('min', minDate);
}

function calculateDate() {
    let birthday = document.querySelector('#birthday').value;
    let birthday_date = new Date(birthday);

    let months = Date.now() - birthday_date.getTime();
    let convert_months = new Date(months);

    let year = convert_months.getUTCFullYear(); // UTC -> Universal Coordinated Time = GMT
    let age = document.querySelector('#age');
    let age_calculation = Math.abs(year - 1970); // 1970 pretoze getTime() pocita od -> 1 January 1970 00:00:00 UTC

    age.value = age_calculation;
    age.innerHTML = age_calculation + ' rokov';

}


function validateName() {
    let input_name = document.getElementById("name");
    let validRegex = /^[a-žA-Ž]+$/;

    var fieldSet = input_name.closest("fieldset");
    var charsCounter = fieldSet.querySelector(".chars-left");

    if (input_name.value.match(validRegex)) {
        document.getElementById("name").style.border = "2px solid yellowgreen"
        document.getElementById("err-name").style.display = "none";
        charsCounter.style.display = "none";
    }
    else {
        document.getElementById("name").style.border = "2px solid red"
        document.getElementById("err-name").style.display = "block";
    }
}

function validateSurname() {
    let input_surname = document.getElementById("surname");
    let validRegex = /^[a-žA-Ž]+$/;

    var fieldSet = input_surname.closest("fieldset");
    var charsCounter = fieldSet.querySelector(".chars-left");

    if (input_surname.value.match(validRegex)) {
        document.getElementById("surname").style.border = "2px solid yellowgreen"
        document.getElementById("err-surname").style.display = "none";
        charsCounter.style.display = "none"
    }
    else {
        document.getElementById("surname").style.border = "2px solid red"
        document.getElementById("err-surname").style.display = "block";
    }
}

function validateBirthday() {
    let input_birthday = document.getElementById("birthday");

    if (Date.parse(input_birthday.value) <= Date.now()) {
        document.getElementById("birthday").style.border = "2px solid yellowgreen"
        document.getElementById("err-birthday").style.display = "none";
    }
    else {
        document.getElementById("birthday").style.border = "2px solid red"
        document.getElementById("err-birthday").style.display = "block";
    }
}

function testBirthday() {
    validateBirthday();
    calculateDate();
}

function validateEmail() {
    let input = document.getElementById("email");
    let validRegex = /^[a-zA-Z0-9.+-]{3,}@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,4}$/;

    if (input.value.match(validRegex)) {
        document.getElementById("email").style.border = "2px solid yellowgreen"
        document.getElementById("err-mail").style.display = "none";
    }
    else {
        document.getElementById("email").style.border = "2px solid red"
        document.getElementById("err-mail").style.display = "block";
    }
}

function validatePhoneNumber() {
    let input = document.getElementById("phone");
    let validRegex = /^[+]{1}[4]{1}[2]{1}[1]{1}[0-9]{3}[0-9]{3}[0-9]{3}$/;

    if (input.value.match(validRegex)) {
        document.getElementById("phone").style.border = "2px solid yellowgreen"
        document.getElementById("err-phone").style.display = "none";
    }
    else {
        document.getElementById("phone").style.border = "2px solid red"
        document.getElementById("err-phone").style.display = "block";
    }
}

function validatePeopleCount() {
    let input = document.getElementById("count");

    document.getElementById("countModal").innerHTML = "";

    if (input.value >= 1 && input.value <= 22) {
        document.getElementById("count").style.border = "2px solid yellowgreen"
        document.getElementById("err-count").style.display = "none";

        document.getElementById("countModal").innerHTML = input.value;
    }
    else {
        document.getElementById("count").style.border = "2px solid red"
        document.getElementById("err-count").style.display = "block";
    }
}

function validateDateOfReservation() {
    let input_date = document.getElementById("date");
    document.getElementById("dateModal").innerHTML = "";

    if (Date.parse(input_date.value) > Date.now() && Date.parse(input_date.value) < Date.parse('01 Jan 2030 00:00:00 GMT')) {
        document.getElementById("date").style.border = "2px solid yellowgreen"
        document.getElementById("err-date").style.display = "none";

        document.getElementById("dateModal").innerHTML = input_date.value;

    }
    else {
        document.getElementById("date").style.border = "2px solid red"
        document.getElementById("err-date").style.display = "block";

    }
}

function calculatePrice() {

    let input = document.getElementById("sel1");
    let town = input.options[input.selectedIndex].value;

    town = parseInt(town);
    let total = town;

    document.getElementById("priceModal").innerHTML = "";

    let input2 = document.getElementById("count");

    if (input2.value > 14) {
        document.getElementById("price").value = total + 50 + " €";
        document.getElementById("priceModal").innerHTML = price.value;
    }
    else {
        document.getElementById("price").value = total + " €";
        document.getElementById("priceModal").innerHTML = price.value;
    }


}

function limit(element, max_chars) {
    var fieldSet = element.closest("fieldset");
    var charsCounter = fieldSet.querySelector(".chars-left");


    if (element.value.length > max_chars) {
        element.value = element.value.slice(0, -1);
        return false;
    }
    charsCounter.innerHTML = (0 + element.value.length) + "/" + max_chars + " znakov";
}

function validateForm() {

    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Meno musí byť vyplnené");
        return false;
    }
    else if (document.getElementById("err-name").style.display == "block") {
        alert("Meno musí byť vyplnené správne, prečítajte si červený text pod tým")
        return false;
    }

    let y = document.forms["myForm"]["surname"].value;
    if (y == "") {
        alert("Priezvisko musí byť vyplnené");
        return false;
    }
    else if (document.getElementById("err-surname").style.display == "block") {
        alert("Priezvisko musí byť vyplnené správne, prečítajte si červený text pod tým")
        return false;
    }

    let z = document.forms["myForm"]["birthday"].value;
    if (z == "") {
        alert("Dátum narodenia musí byť vyplnený");
        return false;
    }
    else if (document.getElementById("err-birthday").style.display == "block") {
        alert("Dátum narodenia musí byť vyplnený správne, prečítajte si červený text pod tým")
        return false;
    }

    let a = document.forms["myForm"]["email"].value;
    if (a == "") {
        alert("Mail musí byť vyplnený");
        return false;
    }
    else if (document.getElementById("err-mail").style.display == "block") {
        alert("Mail musí byť vyplnený správne, prečítajte si červený text pod tým")
        return false;
    }

    let b = document.forms["myForm"]["count"].value;
    if (b == "") {
        alert("Počet ľudí musí byť vyplnený");
        return false;
    }
    else if (document.getElementById("err-count").style.display == "block") {
        alert("Počet ľudí musí byť vyplnený správne, prečítajte si červený text pod tým")
        return false;
    }

    let c = document.forms["myForm"]["sel1"].value;
    if (c == "") {
        alert("Mesto musí byť vyplnené");
        return false;
    }

    let d = document.forms["myForm"]["sel2"].value;
    if (d == "") {
        alert("Typ športoviska musí byť vyplnený");
        return false;
    }

    let e = document.forms["myForm"]["sel3"].value;
    if (e == "") {
        alert("Typ povrchu/priestoru musí byť vyplnený");
        return false;
    }

    let f = document.forms["myForm"]["date"].value;
    if (f == "") {
        alert("Dátum rezervácie musí byť vyplnený");
        return false;
    }
    else if (document.getElementById("err-date").style.display == "block") {
        alert("Dátum rezervácie musí byť vyplnený správne, prečítajte si červený text pod tým")
        return false;
    }

    let g = document.forms["myForm"]["sel4"].value;
    if (g == "") {
        alert("Čas rezervácie musí byť vyplnený");
        return false;
    }


    if (document.getElementById("err-phone").style.display == "block") {
        alert("Ak ste vyplnili aj telefónne číslo, taktiež musí byť vyplnené správne, prečítajte si červený text pod tým")
        return false;
    }

    showModal();
}

function checkSportsThings() {
    let sportsThingsModal = document.getElementById("sportsThingsModal");
    sportsThingsModal.innerHTML = "";

    if (balls.checked) {
        let item = document.createElement("li");
        item.innerHTML = "Lopty";
        sportsThingsModal.appendChild(item);
    }

    if (cones.checked) {
        let item = document.createElement("li");
        item.innerHTML = "Tréningové kužele";
        sportsThingsModal.appendChild(item);
    }

    if (vest.checked) {
        let item = document.createElement("li");
        item.innerHTML = "Rozlišovacie vesty";
        sportsThingsModal.appendChild(item);
    }

    if (goal.checked) {
        let item = document.createElement("li");
        item.innerHTML = "Malé bránky";
        sportsThingsModal.appendChild(item);
    }

    if (weights.checked) {
        let item = document.createElement("li");
        item.innerHTML = "Závažia";
        sportsThingsModal.appendChild(item);
    }

    if (other.checked) {
        let item = document.createElement("li");
        item.innerHTML = document.getElementById("showOtherText").value;
        sportsThingsModal.appendChild(item);
    }
}

function showModal() {

    getTypeOfGround();

    let modal = document.querySelector(".modal");

    if (modal.classList.contains("active")) {
        modal.classList.remove("active");
    } else {
        modal.classList.add("active");
    }

}

function submitForm() {
    let form = document.getElementById("formCheck");
    form.submit();
}

function closeModal() {
    let span = document.getElementsByClassName("close")[0];
    let modal = document.getElementById("modalContent");

    span.onclick = function () {
        modal.style.display = "none";
    }
    showModal();
}