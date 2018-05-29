/**
 * Created by MOSHE on 16-Sep-17.
 */
var ntg = 6; //numbers to generate
var rf = 1; //range from 6 is default
var rt = 36;// range to 36 is default


$("#saveBtn").click(function () {
    if($("#rangeTo").val() - $("#rangeFrom").val() < $("#numbers").val() ){
        localStorage.clear();
        alert("The range is to short, please change or use the default settings");

    }
    else {
        ntg = $("#numbers").val();
        rt = $("#rangeTo").val();
        rf = $("#rangeFrom").val();
        console.log("numbers to generate:" + ntg);
        console.log("range number:" + rf + " - " + rt);
        localStorage.setItem("numbersToGenerate", ntg);
        localStorage.setItem("rangeNumberFrom", rf);
        localStorage.setItem("rangeNumberTo", rt);
    }})
$("#mainBtn").click(function () {
    console.log("main button was clicked");
    window.location.href = 'lotto_numbers_gen.html';
})