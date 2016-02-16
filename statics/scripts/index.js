function onloaded(){
    address();
    var now = new Date();
    date(now);
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    year.innerHTML = now.getFullYear();
    month.innerHTML = now.getMonth()+1;
    next(now);
}