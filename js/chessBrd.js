/**
 * Created by acer on 2/7/2017.
 */
/* Event fired on the drag target */
document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
   // document.getElementById("demo").innerHTML = "Started to drag the p element.";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    if ($("#whitePawn").parent().children().length == 2 ) {
        $("#whitePawn").replaceWith($("#whitePawn").next())
    }
    else if($("#whitePawn").children().length == 1){
        $("#whitePawn").replaceWith($("#whitePawn").children())
    }
    if ($("#whitePawn1").parent().children().length == 2 ) {
        $("#whitePawn1").replaceWith($("#whitePawn1").next())
    }
    else if($("#whitePawn1").children().length == 1){
        $("#whitePawn1").replaceWith($("#whitePawn1").children())
    }
    if ($("#whitePawn2").parent().children().length == 2 ) {
        $("#whitePawn2").replaceWith($("#whitePawn2").next())
    }
    else if($("#whitePawn2").children().length == 1){
        $("#whitePawn2").replaceWith($("#whitePawn2").children())
    }
    if ($("#whitePawn3").parent().children().length == 2 ) {
        $("#whitePawn3").replaceWith($("#whitePawn3").next())
    }
    else if($("#whitePawn3").children().length == 1){
        $("#whitePawn3").replaceWith($("#whitePawn3").children())
    }
    if ($("#whitePawn4").parent().children().length == 2 ) {
        $("#whitePawn4").replaceWith($("#whitePawn4").next())
    }
    else if($("#whitePawn4").children().length == 1){
        $("#whitePawn4").replaceWith($("#whitePawn4").children())
    }
    if ($("#whitePawn5").parent().children().length == 2 ) {
        $("#whitePawn5").replaceWith($("#whitePawn5").next())
    }
    else if($("#whitePawn5").children().length == 1){
        $("#whitePawn5").replaceWith($("#whitePawn5").children())
    }
    if ($("#whitePawn6").parent().children().length == 2 ) {
        $("#whitePawn6").replaceWith($("#whitePawn6").next())
    }
    else if($("#whitePawn6").children().length == 1){
        $("#whitePawn6").replaceWith($("#whitePawn6").children())
    }
    if ($("#whitePawn7").parent().children().length == 2 ) {
        $("#whitePawn7").replaceWith($("#whitePawn7").next())
    }
    else if($("#whitePawn7").children().length == 1){
        $("#whitePawn7").replaceWith($("#whitePawn7").children())
    }
    if ($("#whitePawn8").parent().children().length == 2 ) {
        $("#whitePawn8").replaceWith($("#whitePawn8").next())
    }
    else if($("#whitePawn8").children().length == 1){
        $("#whitePawn8").replaceWith($("#whitePawn8").children())
    }
    if ($("#whiteRook").parent().children().length == 2 ) {
        $("#whiteRook").replaceWith($("#whiteRook").next())
    }
    else if($("#whiteRook").children().length == 1){
        $("#whiteRook").replaceWith($("#whiteRook").children())
    }
    if ($("#whiteRook1").parent().children().length == 2 ) {
        $("#whiteRook1").replaceWith($("#whiteRook1").next())
    }
    else if($("#whiteRook1").children().length == 1){
        $("#whiteRook1").replaceWith($("#whiteRook1").children())
    }
    if ($("#blackBishop").parent().children().length == 2 ) {
        $("#blackBishop").replaceWith($("#blackBishop").next())
    }
    else if($("#blackBishop").children().length == 1){
        $("#blackBishop").replaceWith($("#blackBishop").children())
    }
    if ($("#blackBishop1").parent().children().length == 2 ) {
        $("#blackBishop1").replaceWith($("#blackBishop1").next())
    }
    else if($("#blackBishop1").children().length == 1){
        $("#blackBishop1").replaceWith($("#blackBishop1").children())
    }

    if ($("#whiteNite").parent().children().length == 2 ) {
        $("#whiteNite").replaceWith($("#whiteNite").next())
    }
    else if($("#whiteNite").children().length == 1){
        $("#whiteNite").replaceWith($("#whiteNite").children())
    }
    if ($("#whiteNite1").parent().children().length == 2 ) {
        $("#whiteNite1").replaceWith($("#whiteNite1").next())
    }
    else if($("#whiteNite1").children().length == 1){
        $("#whiteNite1").replaceWith($("#whiteNite1").children())
    }
    if ($("#blackKing").parent().children().length == 2 ) {
        $("#blackKing").replaceWith($("#blackKing").next())
    }
    else if($("#blackKing").children().length == 1){
        $("#blackKing").replaceWith($("#blackKing").children())
    }
    if ($("#blackQueen").parent().children().length == 2 ) {
        $("#blackQueen").replaceWith($("#blackQueen").next())
    }
    else if($("#blackQueen").children().length == 1){
        $("#blackQueen").replaceWith($("#blackQueen").children())
    }

    if ($("#blackPawn").parent().children().length == 2 ) {
        $("#blackPawn").replaceWith($("#blackPawn").next())
    }
    else if($("#blackPawn").children().length == 1){
        $("#blackPawn").replaceWith($("#blackPawn").children())
    }
    if ($("#blackPawn1").parent().children().length == 2 ) {
        $("#blackPawn1").replaceWith($("#blackPawn1").next())
    }
    else if($("#blackPawn1").children().length == 1){
        $("#blackPawn1").replaceWith($("#blackPawn1").children())
    }
    if ($("#blackPawn2").parent().children().length == 2 ) {
        $("#blackPawn2").replaceWith($("#blackPawn2").next())
    }
    else if($("#blackPawn2").children().length == 1){
        $("#blackPawn2").replaceWith($("#blackPawn2").children())
    }
    if ($("#blackPawn3").parent().children().length == 2 ) {
        $("#blackPawn3").replaceWith($("#blackPawn3").next())
    }
    else if($("#blackPawn3").children().length == 1){
        $("#blackPawn3").replaceWith($("#blackPawn3").children())
    }
    if ($("#blackPawn4").parent().children().length == 2 ) {
        $("#blackPawn4").replaceWith($("#blackPawn4").next())
    }
    else if($("#blackPawn4").children().length == 1){
        $("#blackPawn4").replaceWith($("#blackPawn4").children())
    }
    if ($("#blackPawn5").parent().children().length == 2 ) {
        $("#blackPawn5").replaceWith($("#blackPawn5").next())
    }
    else if($("#blackPawn5").children().length == 1){
        $("#blackPawn5").replaceWith($("#blackPawn5").children())
    }
    if ($("#blackPawn6").parent().children().length == 2 ) {
        $("#blackPawn6").replaceWith($("#blackPawn6").next())
    }
    else if($("#blackPawn6").children().length == 1){
        $("#blackPawn6").replaceWith($("#blackPawn6").children())
    }
    if ($("#blackPawn7").parent().children().length == 2 ) {
        $("#blackPawn7").replaceWith($("#blackPawn7").next())
    }
    else if($("#blackPawn7").children().length == 1){
        $("#blackPawn7").replaceWith($("#blackPawn7").children())
    }
    if ($("#blackPawn8").parent().children().length == 2 ) {
        $("#blackPawn8").replaceWith($("#blackPawn8").next())
    }
    else if($("#blackPawn8").children().length == 1){
        $("#blackPawn8").replaceWith($("#blackPawn8").children())
    }
    if ($("#blackRook").parent().children().length == 2 ) {
        $("#blackRook").replaceWith($("#blackRook").next())
    }
    else if($("#blackRook").children().length == 1){
        $("#blackRook").replaceWith($("#blackRook").children())
    }
    if ($("#blackRook1").parent().children().length == 2 ) {
        $("#blackRook1").replaceWith($("#blackRook1").next())
    }
    else if($("#blackRook1").children().length == 1){
        $("#blackRook1").replaceWith($("#blackRook1").children())
    }
    if ($("#blackBishop").parent().children().length == 2 ) {
        $("#blackBishop").replaceWith($("#blackBishop").next())
    }
    else if($("#blackBishop").children().length == 1){
        $("#blackBishop").replaceWith($("#blackBishop").children())
    }
    if ($("#blackBishop1").parent().children().length == 2 ) {
        $("#blackBishop1").replaceWith($("#blackBishop1").next())
    }
    else if($("#blackBishop1").children().length == 1){
        $("#blackBishop1").replaceWith($("#blackBishop1").children())
    }

    if ($("#blackNite").parent().children().length == 2 ) {
        $("#blackNite").replaceWith($("#blackNite").next())
    }
    else if($("#blackNite").children().length == 1){
        $("#blackNite").replaceWith($("#blackNite").children())
    }
    if ($("#blackNite1").parent().children().length == 2 ) {
        $("#blackNite1").replaceWith($("#blackNite1").next())
    }
    else if($("#blackNite1").children().length == 1){
        $("#blackNite1").replaceWith($("#blackNite1").children())
    }
    if ($("#blackKing").parent().children().length == 2 ) {
        $("#blackKing").replaceWith($("#blackKing").next())
    }
    else if($("#blackKing").children().length == 1){
        $("#blackKing").replaceWith($("#blackKing").children())
    }
    if ($("#blackQueen").parent().children().length == 2 ) {
        $("#blackQueen").replaceWith($("#blackQueen").next())
    }
    else if($("#blackQueen").children().length == 1){
        $("#blackQueen").replaceWith($("#blackQueen").children())
    }


    //document.getElementById("demo").innerHTML = "The p element was dropped";
});
$(document).ready(function () {

})
/*$("#whitePawn").on("click",function () {




);*/
$(document).ready(function () {

 {



$("#whiteRook").mouseenter(function () {

    if($("#whiteRook").parent().attr("id")=="th"){$("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th1"){$("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th2"){$("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th3"){$("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th8,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th4"){$("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th8,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th5"){$("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th8,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th6"){$("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th8,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th7"){$("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th8,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th8"){$("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th9"){$("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th10"){$("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th11"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th12"){$("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th13"){$("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th14"){$("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th15"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th16"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th17"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th18"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th19"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th20"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th21"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th22"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th23"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th24"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th25"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th26"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th27"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th28"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th29"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th30"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th31"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th32"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th33"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th34"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th35"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th36"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th37"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th38"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th39"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th40"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th41"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th42"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th43"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th44"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th45"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th46"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th47"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th48"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th49"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th50"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th51"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th52"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th53"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th54"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th55"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63").css("backgroundColor","#F7D7F1")}

    if($("#whiteRook").parent().attr("id")=="th56"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th57"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th58"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th59"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th60"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th61"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th62"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54").css("backgroundColor","#F7D7F1")}
    if($("#whiteRook").parent().attr("id")=="th63"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55").css("backgroundColor","#F7D7F1")}


})
     $("#whiteRook1").mouseenter(function () {

         if($("#whiteRook1").parent().attr("id")=="th"){$("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th1"){$("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th2"){$("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th3"){$("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th11,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th4"){$("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th12,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th5"){$("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th13,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th6"){$("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th14,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th7"){$("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th15,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th8"){$("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th9"){$("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th10"){$("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th11"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th12"){$("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th13"){$("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th14"){$("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th15"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th16"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th17"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th18"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th19"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th20"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th21"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th22"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th23"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th24"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th25"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th26"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th27"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th28"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th29"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th30"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th31"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th32"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th33"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th34"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th35"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th36"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th37"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th38"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th39"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th40"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th41"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th42"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th43"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th44"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th45"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th46"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th47"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th48"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th49"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th50"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th51"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th52"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th53"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th54"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th55"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63").css("backgroundColor","#F7D7F1")}

         if($("#whiteRook1").parent().attr("id")=="th56"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th57"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th58"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th59"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th60"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th61"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th62"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54").css("backgroundColor","#F7D7F1")}
         if($("#whiteRook1").parent().attr("id")=="th63"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55").css("backgroundColor","#F7D7F1")}


     })

     $("#blackRook").mouseenter(function () {

         if($("#blackRook").parent().attr("id")=="th"){$("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th1"){$("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th2"){$("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th3"){$("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th8,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th4"){$("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th8,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th5"){$("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th8,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th6"){$("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th8,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th7"){$("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th8,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th8"){$("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th9"){$("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th10"){$("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th11"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th12"){$("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th13"){$("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th14"){$("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th15"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th16"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th17"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th18"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th19"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th20"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th21"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th22"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th23"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th24"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th25"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th26"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th27"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th28"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th29"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th30"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th31"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th32"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th33"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th34"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th35"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th36"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th37"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th38"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th39"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th40"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th41"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th42"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th43"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th44"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th45"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th46"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th47"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th48"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th49"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th50"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th51"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th52"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th53"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th54"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th55"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook").parent().attr("id")=="th56"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th57"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th58"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th59"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th60"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th61"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th62"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54").css("backgroundColor","#F7D7F1")}
         if($("#blackRook").parent().attr("id")=="th63"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55").css("backgroundColor","#F7D7F1")}


     })


     $("#blackRook1").mouseenter(function () {

         if($("#blackRook1").parent().attr("id")=="th"){$("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th1"){$("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th2"){$("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th3"){$("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th8,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th4"){$("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th8,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th5"){$("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th8,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th6"){$("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th8,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th7"){$("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th8,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th8"){$("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th9"){$("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th10"){$("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th11"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th12"){$("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th13"){$("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th14"){$("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th15"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th16"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th17"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th18"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th19"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th20"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th21"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th22"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th23"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th24"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th25"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th26"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th27"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th28"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th29"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th30"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th31"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th32"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th33"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th34"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th35"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th36"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th37"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th38"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th39"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th40"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th41"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th42"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th43"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th44"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th45"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th46"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th47"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th48"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th49"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th50"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th51"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th52"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th53"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th54"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th55"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63").css("backgroundColor","#F7D7F1")}

         if($("#blackRook1").parent().attr("id")=="th56"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th57"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th58"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th59"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th60"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th61"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th62"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54").css("backgroundColor","#F7D7F1")}
         if($("#blackRook1").parent().attr("id")=="th63"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55").css("backgroundColor","#F7D7F1")}


     })

     $(document).ready(function () {
         $("#whiteBishop").mouseenter(function () {
             if($("#whiteBishop").parent().attr("id")=="th "){$("#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th1"){$("#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th2"){$("#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th3"){$("#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th4"){$("#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th5"){$("#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th6"){$("#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th7"){$("#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th8"){$("#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th9"){$("#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th10"){$("#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th11"){$("#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th12"){$("#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th13"){$("#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th14"){$("#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th15"){$("#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th16"){$("#th2,#th9,#th25,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th17"){$("#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th18"){$("#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th19"){$("#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th20"){$("#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th21"){$("#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th22"){$("#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th23"){$("#th5,#th14,#th30,#th37,#th44,#th41,#th58").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th24"){$("#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th25"){$("#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th26"){$("#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th27"){$("#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th28"){$("#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th29"){$("#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th30"){$("#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th31"){$("#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th32"){$("#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th33"){$("#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th34"){$("#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th35"){$("#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th36"){$("#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th37"){$("#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th38"){$("#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th39"){$("#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th40"){$("#th5,#th12,#th19,#th26,#th33,th49,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th41"){$("#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th42"){$("#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th43"){$("#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th44"){$("#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th45"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th46"){$("#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th47"){$("#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th48"){$("#th6,#th13,#th20,#th22,#th34,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th49"){$("#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th50"){$("#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th51"){$("#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th52"){$("#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th53"){$("#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th54"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th55"){$("#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop").parent().attr("id")=="th56"){$("#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th57"){$("#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th58"){$("#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th59"){$("#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th60"){$("#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th61"){$("#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th62"){$("#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop").parent().attr("id")=="th63"){$("#th,#th9,#th18,#th27,#th36,#th54,#th54").css("backgroundColor","#F7D7F1")}



         })
         $("#whiteBishop1").mouseenter(function () {
             if($("#whiteBishop1").parent().attr("id")=="th "){$("#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th1"){$("#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th2"){$("#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th3"){$("#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th4"){$("#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th5"){$("#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th6"){$("#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th7"){$("#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th8"){$("#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th9"){$("#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th10"){$("#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th11"){$("#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th12"){$("#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th13"){$("#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th14"){$("#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th15"){$("#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th16"){$("#th2,#th9,#th25,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th17"){$("#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th18"){$("#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th19"){$("#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th20"){$("#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th21"){$("#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th22"){$("#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th23"){$("#th5,#th14,#th30,#th37,#th44,#th41,#th58").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th24"){$("#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th25"){$("#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th26"){$("#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th27"){$("#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th28"){$("#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th29"){$("#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th30"){$("#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th31"){$("#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th32"){$("#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th33"){$("#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th34"){$("#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th35"){$("#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th36"){$("#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th37"){$("#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th38"){$("#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th39"){$("#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th40"){$("#th5,#th12,#th19,#th26,#th33,th49,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th41"){$("#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th42"){$("#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th43"){$("#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th44"){$("#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th45"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th46"){$("#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th47"){$("#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th48"){$("#th6,#th13,#th20,#th22,#th34,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th49"){$("#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th50"){$("#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th51"){$("#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th52"){$("#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th53"){$("#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th54"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th55"){$("#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor","#F7D7F1")}

             if($("#whiteBishop1").parent().attr("id")=="th56"){$("#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th57"){$("#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th58"){$("#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th59"){$("#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th60"){$("#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th61"){$("#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th62"){$("#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteBishop1").parent().attr("id")=="th63"){$("#th,#th9,#th18,#th27,#th36,#th54,#th54").css("backgroundColor","#F7D7F1")}



         })

         $("#blackBishop").mouseenter(function () {
             if($("#blackBishop").parent().attr("id")=="th "){$("#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th1"){$("#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th2"){$("#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th3"){$("#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th4"){$("#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th5"){$("#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th6"){$("#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th7"){$("#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th8"){$("#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th9"){$("#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th10"){$("#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th11"){$("#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th12"){$("#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th13"){$("#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th14"){$("#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th15"){$("#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th16"){$("#th2,#th9,#th25,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th17"){$("#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th18"){$("#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th19"){$("#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th20"){$("#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th21"){$("#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th22"){$("#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th23"){$("#th5,#th14,#th30,#th37,#th44,#th41,#th58").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th24"){$("#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th25"){$("#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th26"){$("#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th27"){$("#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th28"){$("#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th29"){$("#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th30"){$("#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th31"){$("#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th32"){$("#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th33"){$("#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th34"){$("#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th35"){$("#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th36"){$("#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th37"){$("#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th38"){$("#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th39"){$("#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th40"){$("#th5,#th12,#th19,#th26,#th33,th49,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th41"){$("#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th42"){$("#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th43"){$("#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th44"){$("#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th45"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th46"){$("#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th47"){$("#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th48"){$("#th6,#th13,#th20,#th22,#th34,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th49"){$("#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th50"){$("#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th51"){$("#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th52"){$("#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th53"){$("#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th54"){$("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th55"){$("#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor","#F7D7F1")}

             if($("#blackBishop").parent().attr("id")=="th56"){$("#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th57"){$("#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th58"){$("#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th59"){$("#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th60"){$("#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th61"){$("#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th62"){$("#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackBishop").parent().attr("id")=="th63"){$("#th,#th9,#th18,#th27,#th36,#th54,#th54").css("backgroundColor","#F7D7F1")}

         })
         $("#whiteNite").mouseenter(function () {

             if (($("#whiteNite").parent().attr("id") == "th")) {
                 $("#th10,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th7")) {
                 $("#th13,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th56")) {
                 $("#th41,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th63")) {
                 $("#th46,#th53").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th1")) {
                 $("#th11,#th16,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th2")) {
                 $("#th8,#th12,#th17,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th3")) {
                 $("#th9,#th13,#th18,#th20").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th4")) {
                 $("#th10,#th14,#th19,#th21").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th5")) {
                 $("#th11,#th15,#th20,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th6")) {
                 $("#th12,#th21,#th23").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th8")) {
                 $("#th2,#th18,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th16")) {
                 $("#th1,#th10,#th26,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th24")) {
                 $("#th18,#th9,#th34,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th32")) {
                 $("#th17,#th26,#th42,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th40")) {
                 $("#th34,#th350,#th25,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th48")) {
                 $("#th42,#th58,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th15")) {
                 $("#th5,#th21,#th30").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th23")) {
                 $("#th16,#th13,#th29,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th31")) {
                 $("#th14,#th46,#th21,#th37").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th39")) {
                 $("#th22,#th54,#th29,#th45").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th47")) {
                 $("#th30,#th62,#th37,#th53").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th55")) {
                 $("#th61,#th45,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th57")) {
                 $("#th40,#th42,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th58")) {
                 $("#th41,#th43,#th52,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th59")) {
                 $("#th42,#th44,#th53,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th60")) {
                 $("#th43,#th45,#th53,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th61")) {
                 $("#th44,#th46,#th51,#th55").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th62")) {
                 $("#th45,#th47,#th52").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th9")) {
                 $("#th24,#th26,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th10")) {
                 $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th11")) {
                 $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th12")) {
                 $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th13")) {
                 $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th14")) {
                 $("#th29,#th31,#th4,#th20").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th17")) {
                 $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th18")) {
                 $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th19")) {
                 $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th20")) {
                 $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th21")) {
                 $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th22")) {
                 $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th25")) {
                 $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th26")) {
                 $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th27")) {
                 $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th28")) {
                 $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th29")) {
                 $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th30")) {
                 $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th33")) {
                 $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th34")) {
                 $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th35")) {
                 $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th36")) {
                 $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th37")) {
                 $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th38")) {
                 $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th41")) {
                 $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th42")) {
                 $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th43")) {
                 $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th44")) {
                 $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th45")) {
                 $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th46")) {
                 $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite").parent().attr("id") == "th49")) {
                 $("#th32,#th34,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th50")) {
                 $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th51")) {
                 $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th52")) {
                 $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th53")) {
                 $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite").parent().attr("id") == "th54")) {
                 $("#th37,#th39,#th44,#th60").css("background-color", "#F7D7F1")
             }

         })
         //White knight 2
         $("#whiteNite1").mouseenter(function () {

             if (($("#whiteNite1").parent().attr("id") == "th")) {
                 $("#th10,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th7")) {
                 $("#th13,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th56")) {
                 $("#th41,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th63")) {
                 $("#th46,#th53").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th1")) {
                 $("#th11,#th16,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th2")) {
                 $("#th8,#th12,#th17,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th3")) {
                 $("#th9,#th13,#th18,#th20").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th4")) {
                 $("#th10,#th14,#th19,#th21").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th5")) {
                 $("#th11,#th15,#th20,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th6")) {
                 $("#th12,#th21,#th23").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th8")) {
                 $("#th2,#th18,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th16")) {
                 $("#th1,#th10,#th26,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th24")) {
                 $("#th18,#th9,#th34,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th32")) {
                 $("#th17,#th26,#th42,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th40")) {
                 $("#th34,#th350,#th25,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th48")) {
                 $("#th42,#th58,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th15")) {
                 $("#th5,#th21,#th30").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th23")) {
                 $("#th16,#th13,#th29,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th31")) {
                 $("#th14,#th46,#th21,#th37").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th39")) {
                 $("#th22,#th54,#th29,#th45").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th47")) {
                 $("#th30,#th62,#th37,#th53").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th55")) {
                 $("#th61,#th45,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th57")) {
                 $("#th40,#th42,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th58")) {
                 $("#th41,#th43,#th52,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th59")) {
                 $("#th42,#th44,#th53,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th60")) {
                 $("#th43,#th45,#th53,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th61")) {
                 $("#th44,#th46,#th51,#th55").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th62")) {
                 $("#th45,#th47,#th52").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th9")) {
                 $("#th24,#th26,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th10")) {
                 $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th11")) {
                 $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th12")) {
                 $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th13")) {
                 $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th14")) {
                 $("#th29,#th31,#th4,#th20").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th17")) {
                 $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th18")) {
                 $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th19")) {
                 $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th20")) {
                 $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th21")) {
                 $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th22")) {
                 $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th25")) {
                 $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th26")) {
                 $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th27")) {
                 $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th28")) {
                 $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th29")) {
                 $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th30")) {
                 $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th33")) {
                 $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th34")) {
                 $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th35")) {
                 $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th36")) {
                 $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th37")) {
                 $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th38")) {
                 $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th41")) {
                 $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th42")) {
                 $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th43")) {
                 $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th44")) {
                 $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th45")) {
                 $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th46")) {
                 $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "#F7D7F1")
             }

             if (($("#whiteNite1").parent().attr("id") == "th49")) {
                 $("#th32,#th34,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th50")) {
                 $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th51")) {
                 $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th52")) {
                 $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th53")) {
                 $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#whiteNite1").parent().attr("id") == "th54")) {
                 $("#th37,#th39,#th44,#th60").css("background-color", "#F7D7F1")
             }

         })
         //Black knight 1
         $("#blackNite").mouseenter(function () {

             if (($("#blackNite").parent().attr("id") == "th")) {
                 $("#th10,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th7")) {
                 $("#th13,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th56")) {
                 $("#th41,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th63")) {
                 $("#th46,#th53").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th1")) {
                 $("#th11,#th16,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th2")) {
                 $("#th8,#th12,#th17,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th3")) {
                 $("#th9,#th13,#th18,#th20").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th4")) {
                 $("#th10,#th14,#th19,#th21").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th5")) {
                 $("#th11,#th15,#th20,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th6")) {
                 $("#th12,#th21,#th23").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th8")) {
                 $("#th2,#th18,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th16")) {
                 $("#th1,#th10,#th26,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th24")) {
                 $("#th18,#th9,#th34,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th32")) {
                 $("#th17,#th26,#th42,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th40")) {
                 $("#th34,#th350,#th25,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th48")) {
                 $("#th42,#th58,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th15")) {
                 $("#th5,#th21,#th30").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th23")) {
                 $("#th16,#th13,#th29,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th31")) {
                 $("#th14,#th46,#th21,#th37").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th39")) {
                 $("#th22,#th54,#th29,#th45").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th47")) {
                 $("#th30,#th62,#th37,#th53").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th55")) {
                 $("#th61,#th45,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th57")) {
                 $("#th40,#th42,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th58")) {
                 $("#th41,#th43,#th52,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th59")) {
                 $("#th42,#th44,#th53,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th60")) {
                 $("#th43,#th45,#th53,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th61")) {
                 $("#th44,#th46,#th51,#th55").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th62")) {
                 $("#th45,#th47,#th52").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th9")) {
                 $("#th24,#th26,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th10")) {
                 $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th11")) {
                 $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th12")) {
                 $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th13")) {
                 $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th14")) {
                 $("#th29,#th31,#th4,#th20").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th17")) {
                 $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th18")) {
                 $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th19")) {
                 $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th20")) {
                 $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th21")) {
                 $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th22")) {
                 $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th25")) {
                 $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th26")) {
                 $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th27")) {
                 $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th28")) {
                 $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th29")) {
                 $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th30")) {
                 $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th33")) {
                 $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th34")) {
                 $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th35")) {
                 $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th36")) {
                 $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th37")) {
                 $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th38")) {
                 $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th41")) {
                 $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th42")) {
                 $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th43")) {
                 $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th44")) {
                 $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th45")) {
                 $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th46")) {
                 $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite").parent().attr("id") == "th49")) {
                 $("#th32,#th34,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th50")) {
                 $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th51")) {
                 $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th52")) {
                 $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th53")) {
                 $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite").parent().attr("id") == "th54")) {
                 $("#th37,#th39,#th44,#th60").css("background-color", "#F7D7F1")
             }

         })


         //Black knight 2
         $("#blackNite1").mouseenter(function () {

             if (($("#blackNite1").parent().attr("id") == "th")) {
                 $("#th10,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th7")) {
                 $("#th13,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th56")) {
                 $("#th41,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th63")) {
                 $("#th46,#th53").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th1")) {
                 $("#th11,#th16,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th2")) {
                 $("#th8,#th12,#th17,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th3")) {
                 $("#th9,#th13,#th18,#th20").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th4")) {
                 $("#th10,#th14,#th19,#th21").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th5")) {
                 $("#th11,#th15,#th20,#th22").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th6")) {
                 $("#th12,#th21,#th23").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th8")) {
                 $("#th2,#th18,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th16")) {
                 $("#th1,#th10,#th26,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th24")) {
                 $("#th18,#th9,#th34,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th32")) {
                 $("#th17,#th26,#th42,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th40")) {
                 $("#th34,#th350,#th25,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th48")) {
                 $("#th42,#th58,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th15")) {
                 $("#th5,#th21,#th30").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th23")) {
                 $("#th16,#th13,#th29,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th31")) {
                 $("#th14,#th46,#th21,#th37").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th39")) {
                 $("#th22,#th54,#th29,#th45").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th47")) {
                 $("#th30,#th62,#th37,#th53").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th55")) {
                 $("#th61,#th45,#th38").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th57")) {
                 $("#th40,#th42,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th58")) {
                 $("#th41,#th43,#th52,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th59")) {
                 $("#th42,#th44,#th53,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th60")) {
                 $("#th43,#th45,#th53,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th61")) {
                 $("#th44,#th46,#th51,#th55").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th62")) {
                 $("#th45,#th47,#th52").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th9")) {
                 $("#th24,#th26,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th10")) {
                 $("#th25,#th27,#th4,#th20,#th,#th16").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th11")) {
                 $("#th26,#th28,#th5,#th21,#th1,#th17").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th12")) {
                 $("#th27,#th29,#th6,#th22,#th2,#th18").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th13")) {
                 $("#th28,#th30,#th7,#th23,#th3,#th19").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th14")) {
                 $("#th29,#th31,#th4,#th20").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th17")) {
                 $("#th32,#th34,#th11,#th27,#th,#th2").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th18")) {
                 $("#th33,#th35,#th12,#th28,#th1,#th3,#th8,#th24").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th19")) {
                 $("#th34,#th36,#th13,#th29,#th2,#th4,#th9,#th25").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th20")) {
                 $("#th35,#th37,#th14,#th30,#th3,#th5,#th10,#th26").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th21")) {
                 $("#th36,#th38,#th15,#th31,#th4,#th6,#th11,#th27").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th22")) {
                 $("#th37,#th39,#th5,#th7,#th12,#th28").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th25")) {
                 $("#th8,#th10,#th40,#th42,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th26")) {
                 $("#th9,#th11,#th41,#th43,#th20,#th36,#th16,#th32").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th27")) {
                 $("#th10,#th12,#th42,#th44,#th21,#th37,#th17,#th33").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th28")) {
                 $("#th11,#th13,#th43,#th45,#th22,#th38,#th18,#th34").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th29")) {
                 $("#th12,#th14,#th44,#th46,#th23,#th39,#th19,#th35").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th30")) {
                 $("#th13,#th15,#th45,#th47,#th20,#th36").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th33")) {
                 $("#th16,#th18,#th48,#th50,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th34")) {
                 $("#th17,#th19,#th49,#th51,#th28,#th44,#th24,#th40").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th35")) {
                 $("#th18,#th20,#th50,#th52,#th29,#th45,#th25,#th41").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th36")) {
                 $("#th19,#th21,#th51,#th53,#th30,#th46,#th26,#th42").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th37")) {
                 $("#th20,#th22,#th52,#th54,#th31,#th47,#th27,#th43").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th38")) {
                 $("#th21,#th23,#th53,#th55,#th28,#th44").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th41")) {
                 $("#th24,#th26,#th56,#th58,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th42")) {
                 $("#th25,#th27,#th57,#th59,#th36,#th52,#th32,#th48").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th43")) {
                 $("#th26,#th28,#th58,#th60,#th37,#th53,#th33,#th49").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th44")) {
                 $("#th27,#th29,#th59,#th61,#th38,#th54,#th34,#th50").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th45")) {
                 $("#th28,#th30,#th60,#th62,#th39,#th55,#th35,#th51").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th46")) {
                 $("#th29,#th31,#th61,#th63,#th36,#th2").css("background-color", "#F7D7F1")
             }

             if (($("#blackNite1").parent().attr("id") == "th49")) {
                 $("#th32,#th34,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th50")) {
                 $("#th33,#th35,#th44,#th60,#th40,#th56").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th51")) {
                 $("#th34,#th36,#th45,#th61,#th41,#th57").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th52")) {
                 $("#th35,#th37,#th46,#th62,#th42,#th58").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th53")) {
                 $("#th36,#th38,#th47,#th63,#th43,#th59").css("background-color", "#F7D7F1")
             }
             if (($("#blackNite1").parent().attr("id") == "th54")) {
                 $("#th37,#th39,#th44,#th60").css("background-color", "#F7D7F1")
             }

         })


         $("#blackBishop1").mouseenter(function () {
            if ($("#blackBishop1").parent().attr("id") == "th ") {
                $("#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th1") {
                $("#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th2") {
                $("#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th3") {
                $("#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th4") {
                $("#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th5") {
                $("#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th6") {
                $("#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th7") {
                $("#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th8") {
                $("#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th9") {
                $("#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th10") {
                $("#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th11") {
                $("#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th12") {
                $("#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th13") {
                $("#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th14") {
                $("#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th15") {
                $("#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th16") {
                $("#th2,#th9,#th25,#th34,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th17") {
                $("#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th18") {
                $("#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th19") {
                $("#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th20") {
                $("#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th21") {
                $("#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th22") {
                $("#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th23") {
                $("#th5,#th14,#th30,#th37,#th44,#th41,#th58").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th24") {
                $("#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th25") {
                $("#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th26") {
                $("#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th27") {
                $("#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th28") {
                $("#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th29") {
                $("#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th30") {
                $("#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th31") {
                $("#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th32") {
                $("#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th33") {
                $("#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th34") {
                $("#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th35") {
                $("#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th36") {
                $("#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th37") {
                $("#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th38") {
                $("#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th39") {
                $("#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th40") {
                $("#th5,#th12,#th19,#th26,#th33,th49,#th58").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th41") {
                $("#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th42") {
                $("#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th43") {
                $("#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th44") {
                $("#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th45") {
                $("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th46") {
                $("#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th47") {
                $("#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th48") {
                $("#th6,#th13,#th20,#th22,#th34,#th57").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th49") {
                $("#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th50") {
                $("#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th51") {
                $("#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th52") {
                $("#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th53") {
                $("#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th54") {
                $("#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th55") {
                $("#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor", "#F7D7F1")
            }

            if ($("#blackBishop1").parent().attr("id") == "th56") {
                $("#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th57") {
                $("#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th58") {
                $("#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th59") {
                $("#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th60") {
                $("#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th61") {
                $("#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th62") {
                $("#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor", "#F7D7F1")
            }
            if ($("#blackBishop1").parent().attr("id") == "th63") {
                $("#th,#th9,#th18,#th27,#th36,#th54,#th54").css("backgroundColor", "#F7D7F1")
            }


        })
         $("#whiteQueen").mouseenter(function () {
             if ($("#whiteQueen").parent().attr("id") == "th") {
                 $("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th1") {
                 $("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57,#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th2") {
                 $("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58,#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th3") {
                 $("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th11,#th19,#th27,#th35,#th43,#th51,#th59,#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th4") {
                 $("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th12,#th20,#th28,#th36,#th44,#th52,#th60,#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th5") {
                 $("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th13,#th21,#th29,#th37,#th45,#th53,#th61,#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th6") {
                 $("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th14,#th22,#th30,#th38,#th46,#th54,#th62,#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th7") {
                 $("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th15,#th23,#th31,#th39,#th47,#th55,#th63,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th8") {
                 $("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56,#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th9") {
                 $("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57,#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th10") {
                 $("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58,#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th11") {
                 $("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59,#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th12") {
                 $("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60,#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th13") {
                 $("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61,#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th14") {
                 $("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62,#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th15") {
                 $("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63,#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th16") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56,#th2,#th9,#th17,#th25,#th34,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th17") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57,#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62,#th8").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th18") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58,#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th19") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59,#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th20") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60,#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th21") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61,#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th22") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62,#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th23") {
                 $("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63,#th5,#th14,#th30,#th37,#th44,#th58").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th24") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56,#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th25") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57,#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th26") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58,#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th27") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59,#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th28") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60,#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th29") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61,#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th30") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62,#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th31") {
                 $("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63,#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th32") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56,#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th33") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57,#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th34") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58,#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th35") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59,#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th36") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60,#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th37") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61,#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th38") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62,#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th39") {
                 $("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63,#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th40") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56,#th5,#th12,#th19,#th26,#th33,th49,#th58,#th49").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th41") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57,#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th42") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58,#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th43") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59,#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th44") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60,#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th45") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61,#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th46") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62,#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th47") {
                 $("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63,#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th48") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56,#th6,#th13,#th20,#th34,#th57,#th27,#th41").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th49") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57,#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th50") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58,#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th51") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59,#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th52") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60,#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th53") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61,#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th54") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62,#th,#th9,#th18,#th27,#th36,#th54,#th63,#th45,#th38,#th52,#th61,#th47").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th55") {
                 $("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63,#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor", "#F7D7F1")
             }

             if ($("#whiteQueen").parent().attr("id") == "th56") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48,#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th57") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th58") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th59") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th60") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th61") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th62") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor", "#F7D7F1")
             }
             if ($("#whiteQueen").parent().attr("id") == "th63") {
                 $("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th,#th9,#th18,#th27,#th36,#th54,#th54,#th45").css("backgroundColor", "#F7D7F1")
             }
         })

             $("#blackQueen").mouseenter(function () {
             if($("#blackQueen").parent().attr("id")=="th"){$("#th1,#th2,#th3,#th4,#th5,#th6,#th7,#th8,#th16,#th24,#th32,#th40,#th48,#th56,#th9,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th1"){$("#th,#th2,#th3,#th4,#th5,#th6,#th7,#th9,#th17,#th25,#th33,#th41,#th49,#th57,#th10,#th19,#th28,#th37,#th46,#th55,#th8").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th2"){$("#th,#th1,#th3,#th4,#th5,#th6,#th7,#th10,#th18,#th26,#th34,#th42,#th50,#th58,#th11,#th20,#th29,#th38,#th47,#th9,#th16").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th3"){$("#th,#th2,#th1,#th4,#th5,#th6,#th7,#th11,#th19,#th27,#th35,#th43,#th51,#th59,#th12,#th21,#th30,#th39,#th10,#th17,#th24").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th4"){$("#th,#th2,#th3,#th1,#th5,#th6,#th7,#th12,#th20,#th28,#th36,#th44,#th52,#th60,#th13,#th22,#th31,#th11,#th18,#th25,#th32").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th5"){$("#th,#th2,#th3,#th4,#th1,#th6,#th7,#th13,#th21,#th29,#th37,#th45,#th53,#th61,#th14,#th23,#th12,#th19,#th26,#th33,#th40").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th6"){$("#th,#th2,#th3,#th4,#th5,#th1,#th7,#th14,#th22,#th30,#th38,#th46,#th54,#th62,#th15,#th13,#th20,#th27,#th34,#th41,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th7"){$("#th,#th2,#th3,#th4,#th5,#th6,#th1,#th15,#th23,#th31,#th39,#th47,#th55,#th63,#th14,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th8"){$("#th9,#th10,#th11,#th12,#th13,#th14,#th15,#th,#th16,#th24,#th32,#th40,#th48,#th56,#th1,#th17,#th26,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th9"){$("#th8,#th10,#th11,#th12,#th13,#th14,#th15,#th1,#th17,#th25,#th33,#th41,#th49,#th57,#th,#th2,#th16,#th18,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th10"){$("#th8,#th9,#th11,#th12,#th13,#th14,#th15,#th2,#th18,#th26,#th34,#th42,#th50,#th58,#th1,#th3,#th17,#th24,#th19,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th11"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th15,#th3,#th19,#th27,#th35,#th43,#th51,#th59,#th2,#th4,#th18,#th25,#th32,#th20,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th12"){$("#th8,#th9,#th10,#th11,#th13,#th14,#th15,#th4,#th20,#th28,#th36,#th44,#th52,#th60,#th3,#th5,#th19,#th26,#th33,#th40,#th21,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th13"){$("#th8,#th9,#th10,#th12,#th11,#th14,#th15,#th5,#th21,#th29,#th37,#th45,#th53,#th61,#th4,#th6,#th20,#th27,#th34,#th41,#th48,#th22,#th31").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th14"){$("#th8,#th9,#th10,#th12,#th13,#th11,#th15,#th6,#th22,#th30,#th38,#th46,#th54,#th62,#th5,#th7,#th23,#th21,#th28,#th35,#th42,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th15"){$("#th8,#th9,#th10,#th12,#th13,#th14,#th11,#th7,#th23,#th31,#th39,#th47,#th55,#th63,#th6,#th22,#th29,#th36,#th43,#th50,#th57").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th16"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th,#th8,#th24,#th32,#th40,#th48,#th56,#th2,#th9,#th17,#th25,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th17"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th1,#th9,#th25,#th33,#th41,#th49,#th57,#th3,#th10,#th24,#th26,#th35,#th44,#th53,#th62,#th8").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th18"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th2,#th10,#th26,#th34,#th42,#th50,#th58,#th4,#th11,#th,#th9,#th25,#th32,#th27,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th19"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th3,#th11,#th27,#th35,#th43,#th51,#th59,#th1,#th10,#th12,#th5,#th26,#th33,#th40,#th28,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th20"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th4,#th12,#th28,#th36,#th44,#th52,#th60,#th2,#th11,#th6,#th13,#th27,#th34,#th41,#th48,#th29,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th21"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th5,#th13,#th29,#th37,#th45,#th53,#th61,#th3,#th12,#th7,#th14,#th28,#th35,#th42,#th49,#th56,#th30,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th22"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th6,#th14,#th30,#th38,#th46,#th54,#th62,#th4,#th13,#th15,#th29,#th36,#th43,#th50,#th57,#th31").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th23"){$("#th16,#th17,#th18,#th19,#th20,#th21,#th22,#th23,#th7,#th15,#th31,#th39,#th47,#th55,#th63,#th5,#th14,#th30,#th37,#th44,#th58").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th24"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th,#th8,#th16,#th32,#th40,#th48,#th56,#th3,#th10,#th17,#th33,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th25"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th1,#th9,#th17,#th33,#th41,#th49,#th57,#th16,#th4,#th11,#th18,#th32,#th34,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th26"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th2,#th10,#th18,#th34,#th42,#th50,#th58,#th8,#th17,#th5,#th12,#th19,#th33,#th40,#th35,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th27"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th3,#th11,#th19,#th35,#th43,#th51,#th59,#th,#th9,#th18,#th34,#th41,#th48,#th6,#th13,#th20,#th36,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th28"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th4,#th12,#th20,#th36,#th44,#th52,#th60,#th1,#th10,#th19,#th7,#th14,#th21,#th35,#th42,#th49,#th56,#th37,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th29"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th5,#th13,#th21,#th37,#th45,#th53,#th61,#th2,#th11,#th20,#th15,#th22,#th36,#th43,#th50,#th57,#th38,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th30"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th6,#th14,#th22,#th38,#th46,#th54,#th62,#th3,#th12,#th21,#th23,#th37,#th44,#th41,#th58,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th31"){$("#th24,#th25,#th26,#th27,#th28,#th29,#th30,#th31,#th7,#th15,#th23,#th39,#th47,#th55,#th63,#th4,#th13,#th22,#th38,#th45,#th52,#th59").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th32"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th,#th8,#th16,#th24,#th40,#th48,#th56,#th4,#th11,#th18,#th25,#th41,#th50,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th33"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th1,#th9,#th17,#th25,#th41,#th49,#th57,#th24,#th5,#th12,#th19,#th26,#th40,#th42,#th51,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th34"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th2,#th10,#th18,#th26,#th42,#th50,#th58,#th16,#th25,#th6,#th13,#th20,#th22,#th41,#th48,#th43,#th52,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th35"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th3,#th11,#th19,#th27,#th43,#th51,#th59,#th8,#th17,#th26,#th7,#th14,#th21,#th28,#th42,#th49,#th56,#th44,#th53,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th36"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th4,#th12,#th20,#th28,#th44,#th52,#th60,#th,#th9,#th18,#th27,#th15,#th22,#th29,#th43,#th50,#th57,#th45,#th54,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th37"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th5,#th13,#th21,#th29,#th45,#th53,#th61,#th1,#th10,#th19,#th28,#th23,#th30,#th44,#th51,#th58,#th46,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th38"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th6,#th14,#th22,#th30,#th46,#th54,#th62,#th2,#th11,#th20,#th29,#th31,#th45,#th52,#th59,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th39"){$("#th32,#th33,#th34,#th35,#th36,#th37,#th38,#th39,#th7,#th15,#th23,#th31,#th47,#th55,#th63,#th3,#th12,#th21,#th30,#th46,#th53,#th60").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th40"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th,#th8,#th16,#th24,#th32,#th48,#th56,#th5,#th12,#th19,#th26,#th33,th49,#th58,#th49").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th41"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th1,#th9,#th17,#th25,#th33,#th49,#th57,#th32,#th50,#th59,#th6,#th13,#th20,#th22,#th34,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th42"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th2,#th10,#th18,#th26,#th34,#th50,#th58,#th24,#th33,#th51,#th60,#th7,#th14,#th21,#th28,#th35,#th49,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th43"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th3,#th11,#th19,#th27,#th35,#th51,#th59,#th16,#th25,#th34,#th52,#th61,#th15,#th22,#th29,#th36,#th50,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th44"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th4,#th12,#th20,#th28,#th36,#th52,#th60,#th8,#th17,#th26,#th35,#th53,#th62,#th23,#th30,#th37,#th51,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th45"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th5,#th13,#th21,#th29,#th37,#th53,#th61,#th,#th9,#th18,#th27,#th36,#th54,#th63,#th31,#th38,#th52,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th46"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th6,#th14,#th22,#th30,#th38,#th54,#th62,#th1,#th10,#th19,#th28,#th37,#th55,#th39,#th53,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th47"){$("#th40,#th41,#th42,#th43,#th44,#th45,#th46,#th47,#th7,#th15,#th23,#th31,#th39,#th55,#th63,#th2,#th11,#th20,#th29,#th38,#th54,#th61").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th48"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th,#th8,#th16,#th24,#th32,#th40,#th56,#th6,#th13,#th20,#th34,#th57,#th27,#th41").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th49"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th1,#th9,#th17,#th25,#th33,#th41,#th57,#th40,#th58,#th7,#th14,#th21,#th28,#th35,#th42,#th56").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th50"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th2,#th10,#th18,#th26,#th34,#th42,#th58,#th32,#th41,#th59,#th15,#th22,#th29,#th36,#th43,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th51"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th3,#th11,#th19,#th27,#th35,#th43,#th59,#th24,#th33,#th42,#th60,#th23,#th30,#th37,#th44,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th52"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th4,#th12,#th20,#th28,#th36,#th44,#th60,#th16,#th25,#th34,#th43,#th61,#th31,#th38,#th45,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th53"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th5,#th13,#th21,#th29,#th37,#th45,#th61,#th8,#th17,#th26,#th35,#th44,#th62,#th39,#th46,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th54"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th6,#th14,#th22,#th30,#th38,#th46,#th62,#th,#th9,#th18,#th27,#th36,#th54,#th63,#th45,#th38,#th52,#th61,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th55"){$("#th48,#th49,#th50,#th51,#th52,#th53,#th54,#th55,#th7,#th15,#th23,#th31,#th39,#th47,#th63,#th1,#th10,#th19,#th28,#th37,#th46,#th62").css("backgroundColor","#F7D7F1")}

             if($("#blackQueen").parent().attr("id")=="th56"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th,#th8,#th16,#th24,#th32,#th40,#th48,#th7,#th14,#th21,#th28,#th35,#th42,#th49").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th57"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th1,#th9,#th17,#th25,#th33,#th41,#th49,#th15,#th22,#th29,#th36,#th43,#th50,#th48").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th58"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th2,#th10,#th18,#th26,#th34,#th42,#th50,#th40,#th49,#th23,#th30,#th37,#th44,#th51").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th59"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th3,#th11,#th19,#th27,#th35,#th43,#th51,#th32,#th41,#th50,#th31,#th38,#th45,#th52").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th60"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th4,#th12,#th20,#th28,#th36,#th44,#th52,#th24,#th33,#th42,#th51,#th39,#th46,#th53").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th61"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th5,#th13,#th21,#th29,#th37,#th45,#th53,#th16,#th25,#th34,#th43,#th52,#th47,#th54").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th62"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th6,#th14,#th22,#th30,#th38,#th46,#th54,#th8,#th17,#th26,#th35,#th44,#th53,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackQueen").parent().attr("id")=="th63"){$("#th56,#th57,#th58,#th59,#th60,#th61,#th62,#th63,#th7,#th15,#th23,#th31,#th39,#th47,#th55,#th,#th9,#th18,#th27,#th36,#th54,#th54,#th45").css("backgroundColor","#F7D7F1")}


         })
         $("#whiteKing").mouseenter(function () {
             if($("#whiteKing").parent().attr("id")=="th"){$("#th1,#th8,#th9").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th1"){$("#th,#th8,#th9,#th10,#th2").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th2"){$("#th1,#th9,#th10,#th11,#th3").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th3"){$("#th2,#th10,#th11,#th12,#th4").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th4"){$("#th3,#th11,#th12,#th13,#th5").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th5"){$("#th4,#th12,#th13,#th14,#th6").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th6"){$("#th5,#th13,#th14,#th15,#th7").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th7"){$("#th6,#th14,#th15").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th8"){$("#th,#th1,#th9,#th17,#th16").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th9"){$("#th,#th1,#th2,#th8,#th10,#th16,#th17,#th18").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th10"){$("#th1,#th2,#th3,#th9,#th11,#th17,#th18,#th19").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th11"){$("#th2,#th3,#th4,#th10,#th12,#th18,#th19,#th20").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th12"){$("#th3,#th4,#th5,#th11,#th13,#th19,#th20,#th21").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th13"){$("#th4,#th5,#th6,#th12,#th14,#th21,#th22,#th20").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th14"){$("#th5,#th6,#th7,#th13,#th15,#th21,#th22,#th23").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th15"){$("#th6,#th7,#th14,#th22,#th23").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th16"){$("#th8,#th9,#th17,#th24,#th25").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th17"){$("#th8,#th9,#th10,#th16,#th18,#th24,#th25,#th26").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th18"){$("#th9,#th10,#th11,#th17,#th19,#th25,#th26,#th27").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th19"){$("#th10,#th11,#th12,#th18,#th20,#th26,#th27,#th28").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th20"){$("#th11,#th12,#th13,#th19,#th21,#th27,#th28,#th29").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th21"){$("#th12,#th13,#th14,#th20,#th22,#th28,#th29,#th30").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th22"){$("#th13,#th14,#th15,#th21,#th23,#th29,#th30,#th31").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th23"){$("#th14,#th15,#th22,#th30,#th31").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th24"){$("#th16,#th17,#th25,#th32,#th33").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th25"){$(" #th16,#th17,#th18,#th24,#th26,#th32,#th33,#th34").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th26"){$("#th17,#th18,#th19,#th25,#th27,#th34,#th35,#th33").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th27"){$("#th18,#th19,#th20,#th26,#th28,#th34,#th35,#th36").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th28"){$("#th19,#th20,#th21,#th27,#th29,#th35,#th36,#th37").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th29"){$("#th20,#th21,#th22,#th28,#th30,#th36,#th37,#th38").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th30"){$("#th21,#th22,#th23,#th29,#th31,#th37,#th38,#th39").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th31"){$("#th22,#th23,#th30,#th38,#th39").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th32"){$("#th24,#th25,#th33,#th40,#th41").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th33"){$("#th24,#th25,#th26,#th32,#th34,#th40,#th41,#th42").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th34"){$("#th25,#th26,#th27,#th33,#th35,#th41,#th42,#th43").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th35"){$("#th26,#th27,#th28,#th34,#th36,#th42,#th43,#th44").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th36"){$("#th27,#th28,#th29,#th35,#th37,#th43,#th44,#th45").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th37"){$("#th28,#th29,#th30,#th36,#th38,#th44,#th45,#th46").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th38"){$("#th29,#th30,#th31,#th37,#th39,#th45,#th46,#th47").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th39"){$("#th30,#th31,#th38,#th46,#th47").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th40"){$("#th32,#th33,#th41,#th48,#th49").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th41"){$("#th32,#th33,#th34,#th40,#th42,#th48,#th49,#th50").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th42"){$("#th33,#th34,#th35,#th41,#th43,#th49,#th50,#th51").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th43"){$("#th34,#th35,#th36,#th42,#th44,#th50,#th51,#th52").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th44"){$("#th35,#th36,#th37,#th43,#th45,#th51,#th52,#th53").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th45"){$("#th36,#th37,#th38,#th44,#th46,#th52,#th53,#th54").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th46"){$("#th37,#th38,#th39,#th45,#th47,#th53,#th54,#th55").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th47"){$("#th38,#th39,#th46,#th54,#th55").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th48"){$("#th40,#th41,#th49,#th56,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th49"){$("#th40,#th41,#th42,#th48,#th50,#th56,#th57,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th50"){$("#th41,#th42,#th43,#th49,#th51,#th57,#th58,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th51"){$("#th42,#th43,#th44,#th50,#th52,#th58,#th59,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th52"){$("#th43,#th44,#th45,#th51,#th53,#th59,#th60,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th53"){$("#th44,#th45,#th46,#th52,#th54,#th60,#th61,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th54"){$("#th45,#th46,#th47,#th53,#th55,#th61,#th62,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th55"){$("#th46,#th47,#th54,#th62,#th63").css("backgroundColor","#F7D7F1")}

             if($("#whiteKing").parent().attr("id")=="th56"){$("#th48,#th49,#th57").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th57"){$("#th48,#th49,#th50,#th56,#th58").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th58"){$("#th49,#th50,#th51,#th57,#th59").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th59"){$("#th50,#th51,#th52,#th58,#th60").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th60"){$("#th52,#th53,#th51,#th59,#th61").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th61"){$("#th52,#th53,#th54,#th60,#th62").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th62"){$("#th53,#th54,#th55,#th61,#th63").css("backgroundColor","#F7D7F1")}
             if($("#whiteKing").parent().attr("id")=="th63"){$("#th54,#th55,#th62").css("backgroundColor","#F7D7F1")}
         })
         $("#blackKing").mouseenter(function () {
             if($("#blackKing").parent().attr("id")=="th"){$("#th1,#th8,#th9").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th1"){$("#th,#th8,#th9,#th10,#th2").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th2"){$("#th1,#th9,#th10,#th11,#th3").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th3"){$("#th2,#th10,#th11,#th12,#th4").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th4"){$("#th3,#th11,#th12,#th13,#th5").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th5"){$("#th4,#th12,#th13,#th14,#th6").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th6"){$("#th5,#th13,#th14,#th15,#th7").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th7"){$("#th6,#th14,#th15").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th8"){$("#th,#th1,#th9,#th17,#th16").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th9"){$("#th,#th1,#th2,#th8,#th10,#th16,#th17,#th18").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th10"){$("#th1,#th2,#th3,#th9,#th11,#th17,#th18,#th19").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th11"){$("#th2,#th3,#th4,#th10,#th12,#th18,#th19,#th20").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th12"){$("#th3,#th4,#th5,#th11,#th13,#th19,#th20,#th21").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th13"){$("#th4,#th5,#th6,#th12,#th14,#th21,#th22,#th20").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th14"){$("#th5,#th6,#th7,#th13,#th15,#th21,#th22,#th23").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th15"){$("#th6,#th7,#th14,#th22,#th23").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th16"){$("#th8,#th9,#th17,#th24,#th25").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th17"){$("#th8,#th9,#th10,#th16,#th18,#th24,#th25,#th26").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th18"){$("#th9,#th10,#th11,#th17,#th19,#th25,#th26,#th27").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th19"){$("#th10,#th11,#th12,#th18,#th20,#th26,#th27,#th28").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th20"){$("#th11,#th12,#th13,#th19,#th21,#th27,#th28,#th29").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th21"){$("#th12,#th13,#th14,#th20,#th22,#th28,#th29,#th30").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th22"){$("#th13,#th14,#th15,#th21,#th23,#th29,#th30,#th31").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th23"){$("#th14,#th15,#th22,#th30,#th31").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th24"){$("#th16,#th17,#th25,#th32,#th33").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th25"){$(" #th16,#th17,#th18,#th24,#th26,#th32,#th33,#th34").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th26"){$("#th17,#th18,#th19,#th25,#th27,#th34,#th35,#th33").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th27"){$("#th18,#th19,#th20,#th26,#th28,#th34,#th35,#th36").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th28"){$("#th19,#th20,#th21,#th27,#th29,#th35,#th36,#th37").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th29"){$("#th20,#th21,#th22,#th28,#th30,#th36,#th37,#th38").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th30"){$("#th21,#th22,#th23,#th29,#th31,#th37,#th38,#th39").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th31"){$("#th22,#th23,#th30,#th38,#th39").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th32"){$("#th24,#th25,#th33,#th40,#th41").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th33"){$("#th24,#th25,#th26,#th32,#th34,#th40,#th41,#th42").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th34"){$("#th25,#th26,#th27,#th33,#th35,#th41,#th42,#th43").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th35"){$("#th26,#th27,#th28,#th34,#th36,#th42,#th43,#th44").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th36"){$("#th27,#th28,#th29,#th35,#th37,#th43,#th44,#th45").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th37"){$("#th28,#th29,#th30,#th36,#th38,#th44,#th45,#th46").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th38"){$("#th29,#th30,#th31,#th37,#th39,#th45,#th46,#th47").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th39"){$("#th30,#th31,#th38,#th46,#th47").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th40"){$("#th32,#th33,#th41,#th48,#th49").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th41"){$("#th32,#th33,#th34,#th40,#th42,#th48,#th49,#th50").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th42"){$("#th33,#th34,#th35,#th41,#th43,#th49,#th50,#th51").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th43"){$("#th34,#th35,#th36,#th42,#th44,#th50,#th51,#th52").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th44"){$("#th35,#th36,#th37,#th43,#th45,#th51,#th52,#th53").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th45"){$("#th36,#th37,#th38,#th44,#th46,#th52,#th53,#th54").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th46"){$("#th37,#th38,#th39,#th45,#th47,#th53,#th54,#th55").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th47"){$("#th38,#th39,#th46,#th54,#th55").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th48"){$("#th40,#th41,#th49,#th56,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th49"){$("#th40,#th41,#th42,#th48,#th50,#th56,#th57,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th50"){$("#th41,#th42,#th43,#th49,#th51,#th57,#th58,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th51"){$("#th42,#th43,#th44,#th50,#th52,#th58,#th59,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th52"){$("#th43,#th44,#th45,#th51,#th53,#th59,#th60,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th53"){$("#th44,#th45,#th46,#th52,#th54,#th60,#th61,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th54"){$("#th45,#th46,#th47,#th53,#th55,#th61,#th62,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th55"){$("#th46,#th47,#th54,#th62,#th63").css("backgroundColor","#F7D7F1")}

             if($("#blackKing").parent().attr("id")=="th56"){$("#th48,#th49,#th57").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th57"){$("#th48,#th49,#th50,#th56,#th58").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th58"){$("#th49,#th50,#th51,#th57,#th59").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th59"){$("#th50,#th51,#th52,#th58,#th60").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th60"){$("#th52,#th53,#th51,#th59,#th61").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th61"){$("#th52,#th53,#th54,#th60,#th62").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th62"){$("#th53,#th54,#th55,#th61,#th63").css("backgroundColor","#F7D7F1")}
             if($("#blackKing").parent().attr("id")=="th63"){$("#th54,#th55,#th62").css("backgroundColor","#F7D7F1")}
         })
         $("#whitePawn").mouseenter(function () {

             if (($("#whitePawn").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn1").mouseenter(function () {

             if (($("#whitePawn1").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn1").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn1").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn1").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn1").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn1").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn1").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn2").mouseenter(function () {

             if (($("#whitePawn2").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn2").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn2").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn2").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn2").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn2").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn2").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn").mouseenter(function () {

             if (($("#whitePawn3").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn3").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn3").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn3").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn3").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn3").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn3").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn4").mouseenter(function () {

             if (($("#whitePawn4").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn4").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn4").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn4").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn4").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn4").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn4").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn5").mouseenter(function () {

             if (($("#whitePawn5").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn5").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn5").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn5").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn5").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn5").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn5").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}



         });

         $("#whitePawn6").mouseenter(function () {

             if (($("#whitePawn6").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn6").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn6").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn6").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn6").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn6").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn6").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}




         });

         $("#whitePawn7").mouseenter(function () {

             if (($("#whitePawn7").parent().attr("id") ==  "th8")) {$("#th16,#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th9")) {$("#th17,#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th10" )){$("#th18,#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th11")) {$("#th19,#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th12")){$("#th20,#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th13")){$("#th21,#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th14")){$("#th22,#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th15")){$("#th23,#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn7").parent().attr("id") ==  "th16")){$("#th24").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th17")){$("#th25").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th18")) {$("#th26").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th19")){$("#th27").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th20")){$("#th28").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th21")){$("#th29").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th22")){$("#th30").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th23")){$("#th31").css("background-color", "#F7D7F1")}

             if (($("#whitePawn7").parent().attr("id") ==  "th24")){$("#th32").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th25")){$("#th33").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th26")){$("#th34").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th27")){$("#th35").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th28")){$("#th36").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th29")){$("#th37").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th30")){$("#th38").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th31")){$("#th39").css("background-color", "#F7D7F1")}

             if (($("#whitePawn7").parent().attr("id") ==  "th32")){$("#th40").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th33")){$("#th41").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th34")){$("#th42").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th35")){$("#th43").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th36")){$("#th44").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th37")){$("#th45").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th38")){$("#th46").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th39")){$("#th47").css("background-color", "#F7D7F1")}

             if (($("#whitePawn7").parent().attr("id") ==  "th40")){$("#th48").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th41")){$("#th49").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th42")){$("#th50").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th43")){$("#th51").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th44")){$("#th52").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th45")){$("#th53").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th46")){$("#th54").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th47")){$("#th55").css("background-color", "#F7D7F1")}

             if (($("#whitePawn7").parent().attr("id") ==  "th48")){$("#th56").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th49")){$("#th57").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th50")){$("#th58").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th51")){$("#th59").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th52")){$("#th60").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th53")){$("#th61").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th54")){$("#th62").css("background-color", "#F7D7F1")}
             if (($("#whitePawn7").parent().attr("id") ==  "th55")){$("#th63").css("background-color", "#F7D7F1")}

         });


     })
     $("#blackPawn").mouseenter(function () {

         if (($("#blackPawn").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn1").mouseenter(function () {

         if (($("#blackPawn1").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn1").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn1").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn1").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn1").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn1").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn1").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn2").mouseenter(function () {

         if (($("#blackPawn2").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn2").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn2").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn2").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn2").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn2").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn2").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn3").mouseenter(function () {

         if (($("#blackPawn3").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn3").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn3").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn3").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn3").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn3").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn3").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn4").mouseenter(function () {

         if (($("#blackPawn4").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn4").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn4").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn4").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn4").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn4").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn4").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn5").mouseenter(function () {

         if (($("#blackPawn5").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn5").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn5").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn5").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn5").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn5").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn5").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}



     });

     $("#blackPawn6").mouseenter(function () {

         if (($("#blackPawn6").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn6").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn6").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn6").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn6").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn6").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn6").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}




     });

     $("#blackPawn7").mouseenter(function () {

         if (($("#blackPawn7").parent().attr("id") ==  "th48")) {$("#th40,#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th49")) {$("#th41,#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th50" )){$("#th42,#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th51")) {$("#th43,#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th52")){$("#th44,#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th53")){$("#th45,#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th54")){$("#th46,#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th55")){$("#th47,#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn7").parent().attr("id") ==  "th40")){$("#th32").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th41")){$("#th33").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th42")) {$("#th34").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th43")){$("#th35").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th44")){$("#th36").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th45")){$("#th37").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th46")){$("#th38").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th47")){$("#th39").css("background-color", "#F7D7F1")}

         if (($("#blackPawn7").parent().attr("id") ==  "th32")){$("#th24").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th33")){$("#th25").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th34")){$("#th26").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th35")){$("#th27").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th36")){$("#th28").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th37")){$("#th29").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th38")){$("#th30").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th39")){$("#th31").css("background-color", "#F7D7F1")}

         if (($("#blackPawn7").parent().attr("id") ==  "th24")){$("#th16").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th25")){$("#th17").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th26")){$("#th18").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th27")){$("#th19").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th28")){$("#th20").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th29")){$("#th21").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th30")){$("#th22").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th31")){$("#th23").css("background-color", "#F7D7F1")}

         if (($("#blackPawn7").parent().attr("id") ==  "th16")){$("#th8").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th17")){$("#th9").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th18")){$("#th10").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th19")){$("#th11").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th20")){$("#th12").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th21")){$("#th13").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th22")){$("#th14").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th23")){$("#th15").css("background-color", "#F7D7F1")}

         if (($("#blackPawn7").parent().attr("id") ==  "th8")){$("#th").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th9")){$("#th1").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th10")){$("#th2").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th11")){$("#th3").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th12")){$("#th4").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th13")){$("#th5").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th14")){$("#th6").css("background-color", "#F7D7F1")}
         if (($("#blackPawn7").parent().attr("id") ==  "th15")){$("#th7").css("background-color", "#F7D7F1")}

     });

    $("#whiteRook,#whiteBishop,#whiteBishop1,#whiteNite,#whiteNite1,#whiteKing,#whiteQueen," +
        "#whitePawn,#whitePwan1,#whitePawn2,#whitePawn3,#whitePawn4,#whitePawn5,#whitePawn6,#whitePawn7," +
        "#blackNite,#blackNite1,#blackBishop1,#blackBishop,#blackQueen,#blackKing,#whiteRook1,#blackRook,#blackRook1," +
        "#blackPawn,#blackPawn1,#blackPawn2,#blackPawn3,#blackPawn4,#blackPawn5,#blackPawn6,#blackPawn7").mouseleave(function () {
        $("#th").css("backgroundColor","white")
        $("#th1").css("backgroundColor","#a96910")
        $("#th2").css("backgroundColor","white")
        $("#th3").css("backgroundColor","#a96910")
        $("#th4").css("backgroundColor","white")
        $("#th5").css("backgroundColor","#a96910")
        $("#th6").css("backgroundColor","white")
        $("#th7").css("backgroundColor","#a96910")

        $("#th8").css("backgroundColor","#a96910")
        $("#th9").css("backgroundColor","white")
        $("#th10").css("backgroundColor","#a96910")
        $("#th11").css("backgroundColor","white")
        $("#th12").css("backgroundColor","#a96910")
        $("#th13").css("backgroundColor","white")
        $("#th14").css("backgroundColor","#a96910")
        $("#th15").css("backgroundColor","white")

        $("#th16").css("backgroundColor","white")
        $("#th17").css("backgroundColor","#a96910")
        $("#th18").css("backgroundColor","white")
        $("#th19").css("backgroundColor","#a96910")
        $("#th20").css("backgroundColor","white")
        $("#th21").css("backgroundColor","#a96910")
        $("#th22").css("backgroundColor","white")
        $("#th23").css("backgroundColor","#a96910")

        $("#th24").css("backgroundColor","#a96910")
        $("#th25").css("backgroundColor","white")
        $("#th26").css("backgroundColor","#a96910")
        $("#th27").css("backgroundColor","white")
        $("#th28").css("backgroundColor","#a96910")
        $("#th29").css("backgroundColor","white")
        $("#th30").css("backgroundColor","#a96910")
        $("#th31").css("backgroundColor","white")

        $("#th32").css("backgroundColor","white")
        $("#th33").css("backgroundColor","#a96910")
        $("#th34").css("backgroundColor","white")
        $("#th35").css("backgroundColor","#a96910")
        $("#th36").css("backgroundColor","white")
        $("#th37").css("backgroundColor","#a96910")
        $("#th38").css("backgroundColor","white")
        $("#th39").css("backgroundColor","#a96910")

        $("#th40").css("backgroundColor","#a96910")
        $("#th41").css("backgroundColor","white")
        $("#th42").css("backgroundColor","#a96910")
        $("#th43").css("backgroundColor","white")
        $("#th44").css("backgroundColor","#a96910")
        $("#th45").css("backgroundColor","white")
        $("#th46").css("backgroundColor","#a96910")
        $("#th47").css("backgroundColor","white")

        $("#th48").css("backgroundColor","white")
        $("#th49").css("backgroundColor","#a96910")
        $("#th50").css("backgroundColor","white")
        $("#th51").css("backgroundColor","#a96910")
        $("#th52").css("backgroundColor","white")
        $("#th53").css("backgroundColor","#a96910")
        $("#th54").css("backgroundColor","white")
        $("#th55").css("backgroundColor","#a96910")

        $("#th56").css("backgroundColor","#a96910")
        $("#th57").css("backgroundColor","white")
        $("#th58").css("backgroundColor","#a96910")
        $("#th59").css("backgroundColor","white")
        $("#th60").css("backgroundColor","#a96910")
        $("#th61").css("backgroundColor","white")
        $("#th62").css("backgroundColor","#a96910")
        $("#th63").css("backgroundColor","white")
    })
}});