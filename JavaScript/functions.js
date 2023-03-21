SecoundaryButoonFunction();
Trigno2nd();

// Number function 
function AddNumber(number) {
    if (publicAPI.PS.value == "0") {
        SetPrimaryScreenValue(number.toString());
    } else {
        SetPrimaryScreenValue(GetPrimaryScreenValue().toString() + number.toString());
    }
    ChangeTextOfClearButton(true);
}

//backspace function 
function RemoveFromBack() {
    if (GetPrimaryScreenValue() != "0" && GetPrimaryScreenValue().length >= 2) {
        SetPrimaryScreenValue(GetPrimaryScreenValue().substring(0, GetPrimaryScreenValue().length - 1));
    } else {
        SetPrimaryScreenValue("0");
    }
}

//basic function of multiplication, plus and minus etc
function BasicFunctions(symbol) {
    if (GetSecoundaryScreenValue() == "") {
        SetSecoundaryScreenValue(GetPrimaryScreenValue().toString() + symbol.toString());

    } else {
        const x = GetSecoundaryScreenValue();
        if (x[x.length - 1] == "=") {
            SetSecoundaryScreenValue(publicAPI.PS.value.toString() + symbol.toString())
        } else {
            SetSecoundaryScreenValue(GetSecoundaryScreenValue() + publicAPI.PS.value.toString() + symbol.toString());
        }
    }
    SetPrimaryScreenValue("0");
}

//Equal button function
function EqualOperator() {
    let x = GetSecoundaryScreenValue().toString();
    if (x != "") {
        if (x[x.length - 1] == ")") {
            EvailFunction(x);
        } else if (x[x.length - 1] == "=") {
            // if multiple equal clicked do nothig  
        } else {
            x += GetPrimaryScreenValue().toString();
            EvailFunction(x);
        }
    } else {
        if (publicAPI.PS.value != "0") {
            publicAPI.SC.value = publicAPI.PS.value.toString() + "="
        }
    }
    ClearBracketCounter();
}

// Clear button
function ClearScreen() {
    if (GetPrimaryScreenValue() != "0") {
        SetPrimaryScreenValue("0");
    } else if (GetSecoundaryScreenValue() != "") {
        SetSecoundaryScreenValue("");
    }
    if (GetPrimaryScreenValue() == "0" && GetSecoundaryScreenValue() == "") {
        ChangeTextOfClearButton(false);
        ClearBracketCounter();
    }
}

// Brackets Button Functions
function OpenBracketFunction() {
    const x = GetSecoundaryScreenValue();
    if (x == "" && x[x.length - 1] == "=") {
        SetSecoundaryScreenValue("(");
    } else {
        SetSecoundaryScreenValue(GetSecoundaryScreenValue() + "(");
    }
    IncrementBracketCounter();
}

function CloseBracketFunction() {
    if (GetBracketCount() > 0) {
        SetSecoundaryScreenValue(GetSecoundaryScreenValue().toString() + GetPrimaryScreenValue() + ")");
        DecrementBracketCounter();
    }
}

// Factorial Button function 
function DoFactorial() {
    const number = Number(GetPrimaryScreenValue().toString());
    if (number > 100) {
        SetPrimaryScreenValue("Infinity");
    } else {

        let ans = 1;
        if (number != 0) {
            for (let i = 1; i <= number; i++) {
                ans *= i;
            }
        }
        SetPrimaryScreenValue(ans);
    }
}

// log Function 
function DoLog(string) {
    if (string == "Natural") {
        SetPrimaryScreenValue(Math.log(Number(GetPrimaryScreenValue().toString())));
    } else if (string == "Base10") {
        SetPrimaryScreenValue(Math.log10(Number(GetPrimaryScreenValue().toString())))
    }
}

// Any ^ x function 
function ResToX(num) {
    SetPrimaryScreenValue(num ** Number(GetPrimaryScreenValue().toString()));
}

//Pow of x 
function PowOfX(num) {
    SetPrimaryScreenValue(Number(GetPrimaryScreenValue().toString()) ** (num));
}

// one plus x
function OneUponX() {
    SetPrimaryScreenValue(1 / Number(GetPrimaryScreenValue().toString()));
}

// Mod function
function DoMod() {
    let x = GetPrimaryScreenValue();
    if (x[0] == "(") {
        x = x.substring(1, x.length - 1);
    }
    SetPrimaryScreenValue(Math.abs(Number(x)));
}

// PI value
function WritePIValue() {
    SetPrimaryScreenValue(Math.PI);
}

// e value
function WriteEValue() {
    SetPrimaryScreenValue(Math.E);
}

//for putting "." function
function PutPoint() {
    let pointFound = false;
    const x = GetPrimaryScreenValue().toString();
    for (let i = 0; i < x.length; i++) {
        if (x[i] == ".") {
            pointFound = true;
        }
    }
    if (!pointFound) {
        SetPrimaryScreenValue(GetPrimaryScreenValue().toString() + ".");
    }
}

//Negate funcion or inverse sign function
function NegateFunction() {
    const x = GetPrimaryScreenValue();
    if (x[0] == "(") {
        if (x[1] == "-") {
            const y = "(+" + x.substring(2);
            SetPrimaryScreenValue(y);
        } else {
            const y = "(-" + x.substring(2);
            SetPrimaryScreenValue(y);
        }
    } else {
        if (x[0] == "+") {
            const y = "(-" + x.substring(1);
            SetPrimaryScreenValue(y + ")");
        } else if (x[0] == "-") {
            const y = "(+" + x.substring(1);
            SetPrimaryScreenValue(y + ")");
        } else {
            SetPrimaryScreenValue("(-" + x + ")");
        }
    }
}

// 2nd button function for showing extra buttons in main 
function SecoundaryButoonFunction() {
    if (secoundActivated) {
        for (let i = 0, len = publicAPI.SecoundButtons.length; i < len; i++) {
            publicAPI.SecoundButtons[i].style.display = "none";
            publicAPI.FirstButtons[i].style.display = "inline";
        }
        secoundActivated = false;
        publicAPI.SecoundMarkButton.classList.remove("equal");
    } else {
        for (let i = 0, len = publicAPI.SecoundButtons.length; i < len; i++) {
            publicAPI.SecoundButtons[i].style.display = "inline";
            publicAPI.FirstButtons[i].style.display = "none";
        }
        publicAPI.SecoundMarkButton.classList.add("equal");
        secoundActivated = true;
    }
}

//function of trigno and hyp

function Trigno2nd() {
    if (secoundInTrignoActivated) {
        HideNormal();
        ShowInverse();
        HideHyper();
        secoundInTrignoActivated = false;
    } else {
        ShowNormal();
        HideHyper();
        HideInverse();
        secoundInTrignoActivated = true;
    }
}

function TrignoHyper() {
    if (hyperInTrignoActivated) {
        HideHyper();
        ShowNormal();
        HideInverse();
        hyperInTrignoActivated = false;
    } else {
        ShowHyper();
        HideNormal();
        HideInverse();
        hyperInTrignoActivated = true;
    }
}


//Show and hide method inside a trigno button
function ShowNormal() {
    for (let i = 0, len = publicAPI.TrignoNormal.length; i < len; i++) {
        publicAPI.TrignoNormal[i].style.display = "block";
    }
}

function HideNormal() {
    for (let i = 0, len = publicAPI.TrignoNormal.length; i < len; i++) {
        publicAPI.TrignoNormal[i].style.display = "none";
    }
}

function ShowInverse() {
    for (let i = 0, len = publicAPI.TrignoInverse.length; i < len; i++) {
        publicAPI.TrignoInverse[i].style.display = "block";
    }
}

function HideInverse() {
    for (let i = 0, len = publicAPI.TrignoInverse.length; i < len; i++) {
        publicAPI.TrignoInverse[i].style.display = "none";
    }
}

function ShowHyper() {
    for (let i = 0, len = publicAPI.TrignoHyper.length; i < len; i++) {
        publicAPI.TrignoHyper[i].style.display = "block";
    }
}

function HideHyper() {
    for (let i = 0, len = publicAPI.TrignoHyper.length; i < len; i++) {
        publicAPI.TrignoHyper[i].style.display = "none";
    }
}

// Trignomatry compuation 
function DoTrignoCalculation(str) {
    let x = Number(GetPrimaryScreenValue().toString());
    let y = 0;
    if (isDegree) {
        y = toRadians(x);
    }
    switch (str) {
        //normal
        case "sin":
            SetPrimaryScreenValue(Math.sin(y));
            break;
        case "cos":
            SetPrimaryScreenValue(Math.cos(y));
            break;
        case "tan":
            SetPrimaryScreenValue(Math.tan(y));
            break;
        case "cot":
            SetPrimaryScreenValue(1 / Math.tan(y));
            break;
        case "cosec":
            SetPrimaryScreenValue(1 / Math.sin(y));
            break;
        case "sec":
            SetPrimaryScreenValue(1 / Math.cos(y));
            break;

        //inverse
        case "sin-1":
            if (x > 1 && x < -1) {
                SetPrimaryScreenValue("Invalid Value!");
            } else {
                if (isDegree) {
                    SetPrimaryScreenValue(toDegrees(Math.asin(x)));
                } else {
                    SetPrimaryScreenValue(Math.asin(x));
                }
            }
            break;
        case "cos-1":
            if (x > 1 && x < -1)
                SetPrimaryScreenValue("Invalid Value!");
            else
                if (isDegree) {
                    SetPrimaryScreenValue(toDegrees(Math.acos(x)));
                } else {
                    SetPrimaryScreenValue(Math.acos(x));
                }
            break;
        case "tan-1":
            if (x > 1 && x < -1)
                SetPrimaryScreenValue("Invalid Value!");
            else
                if (isDegree) {
                    SetPrimaryScreenValue(toDegrees(Math.atan(x)));
                } else {
                    SetPrimaryScreenValue(Math.atan(x));
                }
            break;
        case "cot-1":
            if (isDegree) {
                SetPrimaryScreenValue(toDegrees(1 / Math.atan(x)));
            } else {
                SetPrimaryScreenValue(1 / Math.atan(x));
            }
            break;
        case "cosec-1":
            if (isDegree) {
                SetPrimaryScreenValue(toDegrees(1 / Math.asin(x)));
            } else {
                SetPrimaryScreenValue(1 / Math.asin(x));
            }
            break;
        case "sec-1":
            if (isDegree) {
                SetPrimaryScreenValue(toDegrees(1 / Math.acos(x)));
            } else {
                SetPrimaryScreenValue(1 / Math.acos(x));
            }
            break;

        // hyp functions
        case "sinh":
            SetPrimaryScreenValue(Math.sinh(x));
            break;
        case "cosh":
            SetPrimaryScreenValue(Math.cosh(x));
            break;
        case "tanh":
            SetPrimaryScreenValue(Math.tanh(x));
            break;
        case "coth":
            SetPrimaryScreenValue(1 / Math.tanh(x));
            break;
        case "cosech":
            SetPrimaryScreenValue(1 / Math.sinh(x));
            break;
        case "sech":
            SetPrimaryScreenValue(1 / Math.cosh(x));
            break;

        // default do nothing
        default:
            break;
    }
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

// floor and ceil values function
function FloorAndCeilVal(x) {
    if (x) {
        SetPrimaryScreenValue(Math.floor(Number(GetPrimaryScreenValue().toString())));
    } else {
        SetPrimaryScreenValue(Math.ceil(Number(GetPrimaryScreenValue().toString())));
    }
}

// Memory function
function MemoryClear() {
    if (Memory.length != 0) {
        Memory.length = 0;
        publicAPI.MemorySection.innerHTML = "Nothing to Show.";
    }
    DisbleButton();
}

function MemoryStore() {
    if (Memory[Memory.length - 1] != Number(GetPrimaryScreenValue())) {
        Memory.push(Number(GetPrimaryScreenValue().toString()));
    }
    EnableButton();
}

function MemoryRead() {
    if (Memory.length != 0) {
        SetPrimaryScreenValue(Memory[Memory.length - 1]);
    }
}

function MemoryAdd() {
    if (Memory.length != 0) {
        Memory[Memory.length - 1] += Number(GetPrimaryScreenValue().toString());
    } else {
        Memory[0] = Number(GetPrimaryScreenValue());
    }
    EnableButton();
}

function MemorySub() {
    if (Memory.length != 0) {
        Memory[Memory.length - 1] -= Number(GetPrimaryScreenValue().toString());
    }
    else {
        Memory[0] = Number(GetPrimaryScreenValue());
    }
    EnableButton()
}

function ShowMemory() {
    if (Memory.length != 0) {
        let html = "";
        for (let i = Memory.length - 1, len = 0; i >= len; i--) {
            html += `<div>${Memory[i]}</div>`
        }
        publicAPI.MemorySection.innerHTML = html;
    } else {
        publicAPI.MemorySection.innerHTML = "Nothing to Show.";
    }

}

//exp function
function Exponational() {
    const x = GetPrimaryScreenValue();
    let isFound = false;
    for (let i = 0, len = x.length; i < len; i++) {
        if (x[i] == "e") {
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        SetPrimaryScreenValue(Number(GetPrimaryScreenValue().toString()).toExponential());
    }
}

function EnableButton() {
    document.getElementById("memoryClear").removeAttribute("disabled");
    document.getElementById("memoryRecall").removeAttribute("disabled");
}

function DisbleButton() {
    document.getElementById("memoryClear").disabled = true;
    document.getElementById("memoryRecall").disabled = true;
}

//Helper function
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function ChangeTextOfClearButton(boolean) {
    if (boolean) {
        publicAPI.Clear.innerHTML = "CE";
    } else {
        publicAPI.Clear.innerHTML = "C";
    }
}

function EvailFunction(string) {
    try {
        const result = eval(string);
        SetSecoundaryScreenValue(string.toString() + "=");
        SetPrimaryScreenValue(result);
    }
    catch (err) {
        SetPrimaryScreenValue("Invalid Expression!");
    }
}

//Getter and setter method of input screens
function GetPrimaryScreenValue() {
    return publicAPI.PS.value;
}

function SetPrimaryScreenValue(x) {
    publicAPI.PS.value = x.toString();
}

function GetSecoundaryScreenValue() {
    return publicAPI.SC.value;
}

function SetSecoundaryScreenValue(x) {
    publicAPI.SC.value = x;
}

// Bracket counter incrementer and decrementer
function IncrementBracketCounter() {

    if (publicAPI.BracketCounter.textContent == "") {
        publicAPI.BracketCounter.innerHTML = "1";
    } else {
        publicAPI.BracketCounter.innerHTML = parseInt(publicAPI.BracketCounter.textContent.toString()) + 1;
    }
}

function DecrementBracketCounter() {
    if (publicAPI.BracketCounter.toString() == "1") {
        publicAPI.BracketCounter.innerHTML = "";
    } else {
        publicAPI.BracketCounter.innerHTML = parseInt(publicAPI.BracketCounter.textContent.toString()) - 1;
    }
}

function GetBracketCount() {
    if (publicAPI.BracketCounter == "") {
        return 0;
    } else {
        return Number(publicAPI.BracketCounter.textContent);
    }
}

function ClearBracketCounter() {
    if (publicAPI.BracketCounter != "") {
        publicAPI.BracketCounter.innerHTML = "";
    }
}

// deg to radian fucntion
function DegToRad() {
    if (isDegree) {
        isDegree = false;
        publicAPI.DegBtn.innerHTML = "RAD";
    } else {
        isDegree = true;
        publicAPI.DegBtn.innerHTML = "DEG";
    }
}

function PutRandom() {
    SetPrimaryScreenValue(Math.random());
}

function DMS() {
    const x = Number(GetPrimaryScreenValue().toString());
    let degree = Math.floor(x);
    let minutes = ((x - Math.floor(x)) * 60.0);
    let seconds = (minutes - Math.floor(minutes)) * 60.0;
    SetPrimaryScreenValue(degree + "." + Math.floor(minutes) + seconds.toFixed(0));
}