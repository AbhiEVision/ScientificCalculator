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
        SetSecoundaryScreenValue(GetSecoundaryScreenValue() + publicAPI.PS.value.toString() + symbol.toString());

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
    if (GetSecoundaryScreenValue() == "") {
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
    let ans = 1;
    if (number != 0) {
        for (let i = 1; i <= number; i++) {
            ans *= i;
        }
    }
    SetPrimaryScreenValue(ans);
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
    SetPrimaryScreenValue(Math.abs(Number(GetPrimaryScreenValue().toString())));
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
        publicAPI.SecoundMarkButton.style.cssText = "background-color : buttonface;  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2); border-width: 1px; border-style: outset; border-color: buttonborder; border-image: initial;";
    } else {
        for (let i = 0, len = publicAPI.SecoundButtons.length; i < len; i++) {
            publicAPI.SecoundButtons[i].style.display = "inline";
            publicAPI.FirstButtons[i].style.display = "none";
        }
        publicAPI.SecoundMarkButton.style.cssText = "background-color : rgb(0 95 238 / 80%); box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.2); border : none";
        secoundActivated = true;
    }
}

// trigno extra button show or hide
function ShowExtraTrignoFunction() {
    if (trignoActivated) {
        HideTrigno();
        Hide2ndInTrigno();
    } else {
        ShowTrigno();
        HideFunction();
    }
}

function ShowExtraFunctionButton() {
    if (functionExtraActivated) {
        HideFunction();
        Hide2ndInTrigno();
    } else {
        ShowFunction();
        HideTrigno();
    }
}

// Show and hide method of Extra buttons
function ShowTrigno() {
    publicAPI.TrignoExtraFunction.style.display = "grid";
    publicAPI.TrignoAngle.style.transform = "rotate(180deg)";
    trignoActivated = true;
}

function HideTrigno() {
    publicAPI.TrignoExtraFunction.style.display = "none";
    publicAPI.TrignoAngle.style.transform = "rotate(0deg)";
    trignoActivated = false;
}

function ShowFunction() {
    publicAPI.ExtraFunID.style.display = "grid";
    publicAPI.FunctionAngle.style.transform = "rotate(180deg)";
    functionExtraActivated = true;
}

function HideFunction() {
    publicAPI.ExtraFunID.style.display = "none";
    publicAPI.FunctionAngle.style.transform = "rotate(0deg)";
    functionExtraActivated = false;
}

// showing extra button inside a trigno function
function ClickEventInTrigno2nd() {
    if (secoundInTrignoActivated) {
        Hide2ndInTrigno();
    } else {
        Show2ndInTrigno();
    }
}

function ClickEventInTrignoHyp() {
    if (hyperInTrignoActivated) {
        HideHypInTrigno();
    } else {
        ShowHypInTrigno();
    }
}

// Show and hide methods inside a trigno section
function Show2ndInTrigno() {
    for (let i = 0, len = publicAPI.Trigno2NdBtnNormalClass.length; i < len; i++) {
        publicAPI.Trigno2NdBtnInverseClass[i].style.display = "inline";
        publicAPI.Trigno2NdBtnNormalClass[i].style.display = "none";
        publicAPI.TrignoHypClass[i].style.display = "none";
    }
    secoundInTrignoActivated = true;
}

function Hide2ndInTrigno() {
    for (let i = 0, len = publicAPI.Trigno2NdBtnNormalClass.length; i < len; i++) {
        publicAPI.Trigno2NdBtnInverseClass[i].style.display = "none";
        publicAPI.Trigno2NdBtnNormalClass[i].style.display = "inline";
        publicAPI.TrignoHypClass[i].style.display = "none";
    }
    secoundInTrignoActivated = false;
}
function ShowHypInTrigno() {
    for (let i = 0, len = publicAPI.TrignoHypClass.length; i < len; i++) {
        publicAPI.Trigno2NdBtnInverseClass[i].style.display = "none";
        publicAPI.Trigno2NdBtnNormalClass[i].style.display = "none";
        publicAPI.TrignoHypClass[i].style.display = "inline";
    }
    hyperInTrignoActivated = true;
}

function HideHypInTrigno() {
    for (let i = 0, len = publicAPI.TrignoHypClass.length; i < len; i++) {
        publicAPI.Trigno2NdBtnInverseClass[i].style.display = "none";
        publicAPI.Trigno2NdBtnNormalClass[i].style.display = "inline";
        publicAPI.TrignoHypClass[i].style.display = "none";
    }
    hyperInTrignoActivated = false;
}

// Trignomatry compuation 
function DoTrignoCalculation(str) {
    //const x = toDegrees(Number(GetPrimaryScreenValue().toString()));
    const x = Number(GetPrimaryScreenValue().toString());
    switch (str) {
        //normal
        case "sin":
            SetPrimaryScreenValue(Math.sin(x));
            break;
        case "cos":
            SetPrimaryScreenValue(Math.cos(x));
            break;
        case "tan":
            SetPrimaryScreenValue(Math.tan(x));
            break;
        case "cot":
            SetPrimaryScreenValue(1 / Math.tan(x));
            break;
        case "cosec":
            SetPrimaryScreenValue(1 / Math.sin(x));
            break;
        case "sec":
            SetPrimaryScreenValue(1 / Math.cos(x));
            break;

        //inverse
        case "sin-1":
            if(x > 1 && x < -1){
                
            } else{
                SetPrimaryScreenValue(Math.asin(x));
            }
            break;
        case "cos-1":
            if(x > 1 && x < -1)
            SetPrimaryScreenValue("Invalid Value!");
            else
                SetPrimaryScreenValue(Math.acos(x));
            break;
        case "tan-1":
            if(x > 1 && x < -1)
                SetPrimaryScreenValue("Invalid Value!");
            else
                SetPrimaryScreenValue(Math.atan(x));
            break;
        case "cot-1":
            SetPrimaryScreenValue(1 / Math.atan(x));
            break;
        case "cosec-1":
            SetPrimaryScreenValue(1 / Math.asin(x));
            break;
        case "sec-1":
            SetPrimaryScreenValue(1 / Math.acos(x));
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
    }
}

function MemoryStore() {
    if (Memory[Memory.length - 1] != Number(GetPrimaryScreenValue())) {
        Memory.push(Number(GetPrimaryScreenValue().toString()));
    }
}

function MemoryRead() {
    if (Memory.length != 0) {
        SetPrimaryScreenValue(Memory[Memory.length - 1]);
    }

}

function MemoryAdd() {
    if (Memory.length != 0) {
        Memory[Memory.length - 1] += Number(GetPrimaryScreenValue().toString());
    }
}

function MemorySub() {
    if (Memory.length != 0) {
        Memory[Memory.length - 1] -= Number(GetPrimaryScreenValue().toString());
    }
}

function ShowMemory() {
    if (Memory.length != 0) {
        if (!MemoryShown) {
            let htmlText = '<h4 style="text-align: center; border-bottom: 1px solid black;"> Memory Stored </h4>';
            for (let i = 0, len = Memory.length - 1; i <= len; len--) {
                htmlText += '<div class="text-memory"><p>';
                htmlText += Memory[len].toString();
                htmlText += '</p></div>';
            }
            publicAPI.MemorySection.style.display = "flex";
            publicAPI.MemorySection.innerHTML = htmlText;
            MemoryShown = true;
        } else {
            publicAPI.MemorySection.style.display = "none";
            MemoryShown = false;
        }
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
    if(!isFound){
        SetPrimaryScreenValue(Number(GetPrimaryScreenValue().toString()).toExponential());
    }
}

//Helper function
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
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