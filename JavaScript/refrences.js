const publicAPI = {
    PS : document.getElementById("primary"),
    SC : document.getElementById("secoundary"),
    Clear : document.getElementById("Clear"),
    BracketCounter : document.getElementById("Open-Bracket-Count"),
    SecoundButtons : document.getElementsByClassName("secoundStream"),
    FirstButtons : document.getElementsByClassName("firstButtons"),
    SecoundMarkButton : document.getElementById("second-nd"),
    MemorySection : document.getElementById("memory-show"),
    DegBtn : document.getElementById("DegBtn"),

    // trigno extra buttons
    TrignoNormal : document.getElementsByClassName("normal"),
    TrignoInverse : document.getElementsByClassName("inverse"),
    TrignoHyper : document.getElementsByClassName("hyper"),
}

const OPERATOR = [ "+", "-", "*", "/" ];
let secoundActivated = true;
let secoundInTrignoActivated = false;
let hyperInTrignoActivated = false;
let isDegree = true;
const Memory = [];