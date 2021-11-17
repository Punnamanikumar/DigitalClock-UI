function timer() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // let d=today.get
    h = checkTime1(h)
    m = checkTime(m);
    s = checkTime(s);


    const h1 = document.getElementById("hours")
    h1.innerText = h + "\n" + "hrs";
    // console.log(h1.innerText);



    const m1 = document.getElementById("minutes")
    m1.innerText = m + "\n" + "min";
    // console.log(m1.innerText);

    const s1 = document.getElementById("seconds")
    s1.innerText = s + "\n" + "sec";
    // console.log(s1.innerText);
    setTimeout(timer, 1000);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }

    function checkTime1(i) {
        if (i > 12) {
            i = i - 12;
        }
        return i;
    }

    // function day() {
    //     let d = today.getHours;
    //     if (d < 12) {
    //         console.log("PM");
    //     } else
    //         console.log("AM");

    // }
    // day();
    //FOR AM and PM
    let d = today.getHours;
    var ampm = d >= 12 ? 'AM' : 'PM';
    const e = document.getElementById("day");
    e.innerText = ampm;
}

// function wakeUpTime() {
//     var wkup = document.getElementById("wakeup").value;
//     // console.log(wkup);

//     const wkupvalue = document.getElementsByClassName("b2");
//     wkupvalue[0].innerText = "Wake up Time is " + wkup;
//     // console.log(wkupvalue);
//     if (wkup == "default" || lht == "default") {
//         wkupvalue[0].innerText = " OOPS Default!!";
//     } else {
//         const wkupvalue = document.getElementsByClassName("b2");
//         wkupvalue[0].innerText = "Wake up Time is " + wkup;
//     }

//     function lunchTime() {
//         var lht = document.getElementById("lunch").value;
//         console.log(lht);

//         const lhtvalue = document.getElementsByClassName("b2");
//         lhtvalue[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht;
//         console.log(lhtvalue);

//         if (lht == "default" && wkup == "default") {
//             wkupvalue[0].innerText = " OOPS Default!!" + "\n" + "OOPS Default!!";


//         } else {
//             lhtvalue[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht;
//         }

//     }
//     lunchTime();

//     function napTime() {
//         var nap = document.getElementById("nap").value;
//         console.log(nap);

//         const napvalue = document.getElementsByClassName("b2");
//         napvalue[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is" + nap;
//         console.log(napvalue);

//         if (lht == "default" && wkup == "default" && nap == "default") {
//             napvalue[0].innerText = " OOPS Default!!" + "\n" + "OOPS Default!!" + "\n" + "OOPS Default!!";


//         } else {
//             napvalue[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is" + nap;
//         }

//     }
//     napTime();

// }

//////////////////////////////////////////////////////////////////////

function wakeUpTime() {

    var wkup = document.getElementById("wakeup").value;
    var lht = document.getElementById("lunch").value;
    var nap = document.getElementById("nap").value;
    const value = document.getElementsByClassName("b2");

    if (wkup == "default" && lht == "default" && nap == "default") {
        value[0].innerText = " OOPS Default!!" + "\n" + "OOPS Default!!" + "\n" + "OOPS Default!!";
    } else if ((wkup == "default") && (lht != "default") && (nap != "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is " + nap;

    } else if ((wkup == "default") && (lht == "default") && (nap != "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "OOPS Default!! " + "\n" + "Nap Time is " + nap;

    } else if ((wkup == "default") && (lht == "default") && (nap != "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "OOPS Default!! " + "\n" + "Nap Time is " + nap;

    } else if ((wkup != "default") && (lht == "default") && (nap == "default")) {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "OOPS Default!! " + "\n" + "OOPS Default!! ";

    } else if ((wkup == "default") && (lht != "default") && (nap == "default")) {
        value[0].innerText = "OOPS Default!! " + "\n" + "Lunch Time is " + lht + "\n" + "OOPS Default!! ";

    } else if ((wkup != "default") && (lht == "default") && (nap != "default")) {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "OOPS Default!! " + "\n" + "Nap Time is " + nap;
    } else {
        value[0].innerText = "Wake up Time is " + wkup + "\n" + "Lunch Time is " + lht + "\n" + "Nap Time is " + nap;
    }
    chkwkup();
    chklunch();
    chknap();
    // console.log(lht, nap);

    // if(h==do){

    // }

    // var g = document.getElementsByClassName("name");

    // var wkup2 = document.getElementById("wakeup").getAttributeNames(attributes);
    // console.log(wkup2);


    // console.log(g);


    // function myFunction() {
    //     document.getElementById("demo").innerHTML = x;
    // }
    // var x = document.getElementsByClassName("lunch")[0].getAttribute("class");
    // console.log(x);
    // const today1 = new Date();
    // let ho = today1.getHours();

    function chkwkup() {
        let x = document.getElementById("wakeup").value.slice(0, 2);
        var y = document.getElementById("hours").innerText.slice(0, 2);
        let n = y.toString();

        if (n == x) {
            console.log("match");
            document.getElementById("defaultimg").src = "./images/wakeup_image.svg"
        } else if (x[0] == y[0]) {
            document.getElementById("defaultimg").src = "./images/wakeup_image.svg"

        } else {
            console.log("not match");
            document.getElementById("defaultimg").src = "./images/default.jpg"
        }


    }


    function chklunch() {
        let x = document.getElementById("lunch").value.slice(0, 2);
        var y = document.getElementById("hours").innerText.slice(0, 2);
        let n = y.toString();

        if (n == x) {
            console.log("match");
            document.getElementById("defaultimg").src = "./images/lunch_image.svg";
        } else if (x[0] == y[0]) {
            document.getElementById("defaultimg").src = "./images/lunch_image.svg";

        } else {
            console.log("not match");
            document.getElementById("defaultimg").src = "./images/default.jpg";
        }


    }

    function chknap() {
        // let lht1 = document.getElementById("nap").value.slice(0, 2);
        // console.log(lht1);

        let y = document.getElementById("nap").value.slice(0, 2);
        // var h = parseInt(y);
        // console.log(typeof(h));
        // console.log(y.length);

        var ok = document.getElementById("hours").innerText.slice(0, 2);
        // console.log(ok);
        // console.log(ok.length);
        let n = ok.toString();
        // console.log(typeof(n));
        // console.log(n.length);

        //matching only for 10
        if (n === y) {
            console.log("match");
        } else {
            console.log("not");
        }

        let today = new Date;
        let d = today.getHours;
        let ampm1 = d >= 12 ? 'AM' : 'PM';
        // console.log(ampm1);
        var amorpm = document.getElementById("nap").value;
        let amorpm1 = (amorpm.slice(amorpm.length - 2));
        // console.log(typeof(amorpm));

        if (amorpm1 == ampm1) {
            if (n == y) {
                console.log("match");
                document.getElementById("defaultimg").src = "./images/goodnight_image.svg"
            } else if (y[0] == ok[0]) {
                document.getElementById("defaultimg").src = "./images/goodnight_image.svg"

            } else {
                console.log("not match");
                document.getElementById("defaultimg").src = "./images/default.jpg"
            }
        }




    }




}

// if ( ((HH >= 8) && (HH < 18)) && ((DOW >= 1) && (DOW <= 6)) ) {
//         document.getElementById('logo').src = logos[0];
//       } else {
//         document.getElementById('logo').src = logos[1];
//       }
//     }