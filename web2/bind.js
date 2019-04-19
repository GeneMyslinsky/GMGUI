
function GetFP(){
    var fp = returnPath("fileupload");
    NewRow("FP","Filepath DIR",fp,Timestamp(),"success");
}

function Timestamp(){
    var d = new Date();
    var n = d.toTimeString().substring(1,8);
    return n;
    alert(n);
}
eel.expose(wFocus)
function wFocus(){
    window.focus();
}
///////////////////////////////////////////////////////////
////////// TABLE FUNCTIONS - EXPOSED TO PYTHON ///////////
//////////////////////////////////////////////////////////
eel.expose(ClearTable)
function ClearTable(){
    $("#loglist tr>td").remove();

}

eel.expose(NewRow)
function NewRow(d1,d2,d3,d4,type){
    var table = document.getElementById("loglist");

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow();
    
    row.className = type;

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = d1;
    cell2.innerHTML = d2;
    cell3.innerHTML = d3;
    cell4.innerHTML = d4;

    // cell1.className = "success";
    // cell2.innerHTML = "d2";
    // cell3.innerHTML = "d3";
    // cell4.innerHTML = "d4";
}

/// CHANGE THE TEXT OF AN ELEMENT
eel.expose(JSCT);
function JSCT(htmlid,newtext){
    document.getElementById(htmlid).textContent=newtext;
}
eel.expose(JSCT);
function JSCC(htmlid,newclass){
    document.getElementById(htmlid).className=newtext;
}
eel.expose(JSCX);
function JSCX(htmlid,newtext,newclass){
    document.getElementById(htmlid).textContent=newtext;
    document.getElementById(htmlid).className=newclass;
}
//////////////////////////////////////////////////
//////// USE A PYTHON FUNCTION //////////////////
// EX 1 uses python func getTime() //////////////
async function getTime() {
    let value = await eel.getTime()();
    alert(value);
}
// EX 2 uses py function jsprint() which will output whatever in the py print window
eel.expose(USEPY);
async function USEPY(htmlid){
    var input1 = document.getElementById(htmlid).value;
    eel.jsprint(input1)();
}
// EX 3 USES PYTHON'S SYS>EXIT
function CLOSE(){
    eel.closeapp()();
    window.close();
}
////////////////////////////////////////////
///////// FORWARD JS DATA TO PYTHON ////////
function returnInput(htmlid){
    var n =  document.getElementById(htmlid).value;
    return n;
}
function returnPath(htmlid){
    var n =  document.getElementById(htmlid).files[0].path;
    return n;
}
eel.expose(FORWARD);
function FORWARD(htmlid){
    var c = returnInput(htmlid);
    return c;
}
