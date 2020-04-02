function akanName() {
    event.preventDefault();

    function image(thisImg) {
        var img = document.createElement("IMG");
        img.src = "images/" + thisImg;
        document.getElementById('container1').appendChild(img);
    }

    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var cc = (yy - 1) / 100 + 1;
    var maleName = ["Kwesi", "Kojo", "Kwabena", "Kweku", "Yaw", "Kofi", "Kwame"];
    var femaleName = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var result =
        parseInt( (cc / 4) - 2 * cc - 1) + ((5 * yy / 4) + ((26 * (mm + 1) / 10)) + dd) % 7;


    if (document.getElementById("gender").checked) {
        var gender = "male";
    } else {
        var gender = "female";
    }
    if (mm < 1 || mm > 12) {
        alert("Invalid Month");
    } else if ((mm == 2 && dd > 29) && (0 == yy % 4)) {
        alert("Please Enter a Valid Date!")
    } else if ((mm == 2 && dd > 28) && (0 != yy % 4)) {
        alert("Please Enter a Valid Date or Year! The Year Entered Was Not A Leap Year")
    } else if ((mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 8 || mm == 10 || mm == 12 ) && (dd < 1 || dd > 31)) {
        alert("Invalid Date!");
    } else if ((mm == 4 || mm == 6 || mm == 9 || mm == 11 ) && (dd < 1 || dd > 30)) {
        alert("Invalid Date. This Month Has Only 30 Days" );
    } else if (mm === "------") {
        alert("Please Select A Month!")
    } else if (yy=="" || isNaN(yy) || yy.length!==4 && yy < 1000 || yy > 10000) {
        alert("Please Enter A Valid Year!")
    } else if (Math.round(result) == 0 && gender === "male") {
        image('malesunday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Sunday. Your akan name is " + maleName[0];
    } else if (Math.round(result) == 0 && gender === "female") {
        image('femalesunday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Sunday. Your akan name is " + femaleName[0];
    } else if (Math.round(result) == 1 && gender === "male") {
        image('malemonday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Monday. Your akan name is " + maleName[1];
    } else if (Math.round(result) == 1 && gender === "female") {
        image('femalemonday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Monday. Your akan name is " + femaleName[1];
    } else if (Math.round(result) == 2 && gender === "male") {
        image('maletuesday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Tuesday. Your akan name is " + maleName[2];
    } else if (Math.round(result) == 2 && gender === "female") {
        image('femaletuesday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Tuesday. Your akan name is " + femaleName[2];
    } else if (Math.round(result) == 3 && gender === "male") {
        image('malewednesday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Wednesday. Your akan name is " + maleName[3];
    } else if (Math.round(result) == 3 && gender === "female") {
        image('femalewednesday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Wednesday. Your akan name is " + femaleName[3];
    } else if (Math.round(result) == 4 && gender === "male") {
        image('malethursday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Thursday. Your akan name is " + maleName[4];
    } else if (Math.round(result) == 4 && gender === "female") {
        image('femalethursday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Thursday. Your akan name is " + femaleName[4];
    } else if (Math.round(result) == 5 && gender === "male") {
        image('malefriday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Friday. Your akan name is " + maleName[5];
    } else if (Math.round(result) == 5 && gender === "female") {
        image('femalefriday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Friday. Your akan name is " + femaleName[5];
    } else if (Math.round(result) == 6 && gender === "male") {
        image('malesaturday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Saturday. Your akan name is " + maleName[6];
    } else if (Math.round(result) == 6 && gender === "female") {
        image('femalesaturday.jpg');
        document.getElementById("results").innerHTML =
            "You were born on Saturday. Your akan name is " + femaleName[6];
    } else {
        alert("Fill in all required fields");
    }
    document.getElementById("container1").reset();
}