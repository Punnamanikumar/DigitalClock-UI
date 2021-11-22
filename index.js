function timer() {
    const today = new Date();
    var h = today.getHours();
    var hh = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    //Check Time
    h = checkHours(h);
    m = checkTime(m);
    s = checkTime(s);
    var a = document.getElementById("hours");
    a.innerText = h;
    var b = document.getElementById("minutes");
    b.innerText = m;
    const c = document.getElementById("seconds");
    c.innerText = s;

    var ampm = document.getElementById("day");
    if (hh >= 12) {
        ampm.innerText = "PM";
    } else if (hh == 0) {
        ampm.innerText = "AM";
    } else {
        ampm.innerText = "AM";
    }
    //  Check Time 
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
    //12HRS Clock Time
    function checkHours(i) {
        if (h > 12) {
            i = i - 12;
        }
        return i;
    }
}


setInterval(timer, 1000);





function wakeUpTime() {

    const today1 = new Date();
    var h1 = today1.getHours();
    console.log(h1);
    const value = document.getElementsByClassName("b2");
    var wku = document.getElementById("wakeup");
    // console.log(wku.value);
    var wkup = wku.options[wku.selectedIndex].innerText;
    var lh = document.getElementById("lunch");
    var lht = lh.options[lh.selectedIndex].innerText;
    var na = document.getElementById("nap");
    var nap = na.options[na.selectedIndex].innerText;

    if (wku.value == "default" && lh.value == "default" && na.value == "default") {
        value[0].innerText = " OOPS Default!!" + "\n" + "OOPS Default!!" + "\n" + "OOPS Default!!";
        document.getElementById("i1").innerText = "SET TIME !!";
        document.getElementById("defaultimg").src = "./images/default.jpg"

    } else if ((wku.value == "default") && (lh.value != "default") && (na.value != "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is " + nap;
        setLunch();

    } else if ((wku.value == "default") && (lh.value == "default") && (na.value != "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "OOPS Default!! " + "\n" + "Nap Time is " + nap;
        setNap();

    } else if ((wku.value != "default") && (lh.value == "default") && (na.value == "default")) {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "OOPS Default!! " + "\n" + "OOPS Default!! ";
        setWakeup();

    } else if ((wku.value != "default") && (lh.value != "default") && (na.value == "default")) {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht + "\n" + "OOPS Default!! ";
        setWakeup();

    } else if ((wku.value == "default") && (lh.value != "default") && (na.value == "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "Lunch Time is " + lht + "\n" + "OOPS Default!! ";
        setLunch();

    } else if ((wku.value != "default") && (lh.value == "default") && (na.value != "default")) {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "OOPS Default!! " + "\n" + "Nap Time is " + nap;
        setWakeup();

    } else {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is " + nap;
    }

    // setInterval(setWakeup, 1000);
    // setInterval(setLunch, 1000);
    // setInterval(setNap, 1000);

    //Change Images for Wakeup
    function setWakeup() {
        if (wku.value == h1 && wku.value < 12) {
            console.log("MATCH");
            document.getElementById("i1").innerText = "Good Morning :) Its Wake Up Time..."
            document.getElementById("defaultimg").src = "./images/wakeup_image.svg"
        } else if (wku.value < 12) {
            document.getElementById("i1").innerText = "Good Morning :)"
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if ((wku.value >= 12 && wku.value < 17) && wku.value == h1) {
            document.getElementById("i1").innerText = "Good Afternoon :)" + "\n" + " Have Some Lunch";
            document.getElementById("defaultimg").src = "./images/lunch_image.svg";

        } else if (wku.value >= 17 && wku.value == h1) {
            document.getElementById("i1").innerText = "Its Nap Time.. :)";
            document.getElementById("defaultimg").src = "./images/goodnight_image.svg"
        } else if (wku.value >= 12 && wku.value <= 16) {
            document.getElementById("i1").innerText = "Good Afternoon :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (wku.value >= 17 && wku.value <= 18) {
            document.getElementById("i1").innerText = "Good Evening :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (wku.value >= 18) {
            document.getElementById("i1").innerText = "Good Night :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if (wku.value == 'default') {
            document.getElementById("i1").innerText = "SET TIME !!";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else {
            document.getElementById("i1").innerText = " "
            document.getElementById("defaultimg").src = "./images/default.jpg"
        }
    }

    // For Lunch Images
    function setLunch() {
        if (lh.value == h1 && lh.value < 12) {
            console.log("MATCH");
            document.getElementById("i1").innerText = "Good Morning :) Its Wake Up Time..."
            document.getElementById("defaultimg").src = "./images/wakeup_image.svg"
        } else if (lh.value < 12) {
            document.getElementById("i1").innerText = "Good Morning :)"
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if ((lh.value >= 12 && lh.value < 17) && lh.value == h1) {
            document.getElementById("i1").innerText = "Good Afternoon :)" + "\n" + " Have Some Lunch";
            document.getElementById("defaultimg").src = "./images/lunch_image.svg";

        } else if (lh.value >= 17 && lh.value == h1) {
            document.getElementById("i1").innerText = "Its Nap Time.. :)";
            document.getElementById("defaultimg").src = "./images/goodnight_image.svg"
        } else if (lh.value >= 12 && lh.value <= 16) {
            document.getElementById("i1").innerText = "Good Afternoon :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (lh.value >= 17 && lh.value <= 18) {
            document.getElementById("i1").innerText = "Good Evening :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (lh.value >= 18) {
            document.getElementById("i1").innerText = "Good Night :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if (lh.value == 'default') {
            document.getElementById("i1").innerText = "SET TIME !!";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else {
            document.getElementById("i1").innerText = " "
            document.getElementById("defaultimg").src = "./images/default.jpg"
        }
    }

    // // //FOR NAP Images
    function setNap() {
        if (na.value == h1 && na.value < 12) {
            console.log("MATCH");
            document.getElementById("i1").innerText = "Good Morning :) Its Nap Time..."
            document.getElementById("defaultimg").src = "./images/wakeup_image.svg"
        } else if (na.value < 12) {
            document.getElementById("i1").innerText = "Good Morning :)"
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if ((na.value >= 12 && na.value < 17) && na.value == h1) {
            document.getElementById("i1").innerText = "Good Afternoon :)" + "\n" + " Have Some Lunch";
            document.getElementById("defaultimg").src = "./images/lunch_image.svg";

        } else if (na.value >= 17 && na.value == h1) {
            document.getElementById("i1").innerText = "Its Nap Time.. :)";
            document.getElementById("defaultimg").src = "./images/goodnight_image.svg"
        } else if (na.value >= 12 && na.value <= 16) {
            document.getElementById("i1").innerText = "Good Afternoon :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (na.value >= 17 && na.value <= 18) {
            document.getElementById("i1").innerText = "Good Evening :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else if (na.value >= 18) {
            document.getElementById("i1").innerText = "Good Night :)";
            document.getElementById("defaultimg").src = "./images/default.jpg"

        } else if (na.value == 'default') {
            document.getElementById("i1").innerText = "SET TIME !!";
            document.getElementById("defaultimg").src = "./images/default.jpg"
        } else {
            document.getElementById("i1").innerText = " "
            document.getElementById("defaultimg").src = "./images/default.jpg"
        }
    }
}