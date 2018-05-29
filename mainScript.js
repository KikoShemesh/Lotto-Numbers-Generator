/**
 * Created by MOSHE on 19-Jul-17.
 */
var mySet = new Set();
var result = "";
var nums = 6;
var rangeFrom = 1;
var rangeTo = 37;
if (localStorage.getItem("numbersToGenerate") !== null) {
    nums = localStorage.getItem("numbersToGenerate");
}
if (localStorage.getItem("rangeNumberTo") !== null && localStorage.getItem("rangeNumberFrom")) {
    rangeFrom = localStorage.getItem("rangeNumberFrom");
    rangeTo = localStorage.getItem("rangeNumberTo");

}

function getRandomNumber() {
    var a = Math.round(Math.random() * (rangeTo - rangeFrom) + 1);
    return a;
}

$("#generateNum").click(function() {
    $("#text").html(result);
    mySet.clear();
    while (mySet.size < nums) {
        mySet.add(getRandomNumber());
    }

    for (var i = 0; i < nums; i++) {};


    for (let item of mySet) {
        result += item + " ";
    };
    $("#text").html(result);
    result = " ";
});

$("#settingBtn").click(function() {
    window.location.href = 'setting.html';
})