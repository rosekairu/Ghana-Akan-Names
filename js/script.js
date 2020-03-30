function displayAkanName()
let akanform = document.getElementById("akanform");

akanform.addEventListener("submit", (e) => {

    e.preventDefault();



    gender = document.getElementById("gender").value

    yearOfBirth = document.getElementById("year").value
    monthOfBirth = document.getElementById("month").value
    dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);



    let yearOfBirth = dateOfBirth.getFullYear();

    let monthOfBirth = dateOfBirth.getMonth() + 1;

    let dateOfBirth = dateOfBirth.getDate();



    CC = yearOfBirth.toString().substr(0, 2);

    YY = yearOfBirth.toString().substr(2, 2);

    MM = monthOfBirth

    DD = dayOfBirth



    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;



    dayOfTheWeek = parseInt(dayOfTheWeek);



    let akanName;



    femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];

    maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];



    let birthDay;



    if (dayOfTheWeek == 0 && gender == "female") {

        birthDay = "Saturday";

        akanName = femaleAkanNames[0];

    } else if (dayOfTheWeek == 0 && gender == "male") {

        birthDay = "Saturday";

        akanName = maleAkanNames[0];




    } else if (dayOfTheWeek == 1 && gender == "female") {

        birthDay = "Sunday";

        akanName = femaleAkanNames[1];

    } else if (dayOfTheWeek == 1 && gender == "male") {

        birthDay = "Sunday";

        akanName = maleAkanNames[1];




    } else if (dayOfTheWeek == 2 && gender == "female") {

        birthDay = "Monday";

        akanName = femaleAkanNames[2];

    } else if (dayOfTheWeek == 2 && gender == "male") {

        birthDay = "Monday";

        akanName = maleAkanNames[2];




    } else if (dayOfTheWeek == 3 && gender == "female") {

        birthDay = "Tuesday";

        akanName = femaleAkanNames[3];

    } else if (dayOfTheWeek == 3 && gender == "male") {

        birthDay = "Tuesday";

        akanName = maleAkanNames[3];




    } else if (dayOfTheWeek == 4 && gender == "female") {

        birthDay = "Wednesday";

        akanName = femaleAkanNames[4];

    } else if (dayOfTheWeek == 4 && gender == "male") {

        birthDay = "Wednesday";

        akanName = maleAkanNames[4];




    } else if (dayOfTheWeek == 5 && gender == "female") {

        birthDay = "Thursday";

        akanName = femaleAkanNames[5];

    } else if (dayOfTheWeek == 5 && gender == "male") {

        birthDay = "Thursday";

        akanName = maleAkanNames[5];




    } else if (dayOfTheWeek == 6 && gender == "female") {

        birthDay = "Friday";

        akanName = femaleAkanNames[6];

    } else if (dayOfTheWeek == 6 && gender == "male") {

        birthDay = "Friday";

        akanName = maleAkanNames[6];

    }
     {
        document.getElementById("akanform").innerHTML = "Your akan name is " + akanName + "!"
        alert ("Your akan name is ")
      }

    document.getElementById("akanForm").reset();

});
