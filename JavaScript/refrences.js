const publicAPI = {
    PS : document.getElementById("primary"),
    SC : document.getElementById("secoundary"),
    Clear : document.getElementById("Clear"),
    BracketCounter : document.getElementById("Open-Bracket-Count"),
    SecoundButtons : document.getElementsByClassName("secoundStream"),
    FirstButtons : document.getElementsByClassName("firstButtons"),
    SecoundMarkButton : document.getElementById("second-nd"),
    TrignoExtraFunction : document.getElementById("trigno-extra-btn"),
    ExtraFunID : document.getElementById("function-extra-btn"),
    TrignoAngle : document.getElementById("trigno-angle"),
    FunctionAngle : document.getElementById("function-angle"),
    Trigno2NdBtnInverseClass : document.getElementsByClassName("inverse-normal"),
    Trigno2NdBtnNormalClass : document.getElementsByClassName("trigno-func"),
    TrignoHypClass : document.getElementsByClassName("trigno-hyp-func"),
    MemorySection : document.getElementById("memory-show"),
}

const OPERATOR = [ "+", "-", "*", "/" ];
let secoundActivated = false;
let trignoActivated = false;
let functionExtraActivated = false;
let secoundInTrignoActivated = false;
let hyperInTrignoActivated = false;
let MemoryShown = false;
const Memory = [];