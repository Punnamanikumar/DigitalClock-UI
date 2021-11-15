function timer() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // let d=today.get

    m = checkTime(m);
    s = checkTime(s);


    const h1 = document.getElementById("hours")
    h1.innerText = (h - 12) + "\n" + "hrs";
    console.log(h1.innerText);



    const m1 = document.getElementById("minutes")
    m1.innerText = m + "\n" + "min";
    console.log(m1.innerText);

    const s1 = document.getElementById("seconds")
    s1.innerText = s + "\n" + "sec";
    console.log(s1.innerText);
    setTimeout(timer, 1000);

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i;
    }
}