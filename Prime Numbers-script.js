/* Section1: */
const input1 = document.querySelector("#input1");
const table1 = document.querySelector("#table1");
const countPN = document.querySelector("#countPN");

input1.addEventListener("keypress", () => {
    const i1 = input1.value;
    if(i1 !== "" && event.keyCode === 13) {
        while (table1.firstChild) {
            table1.firstChild.remove();
            counterPrimes1 = 0;
        };
        primeNum1(i1);
        input1.blur();
    }
})

let counterPrimes1 = 0;

const primeNum1 = (a) => {    
    for(let x=2; x<=a; x++) {
        let counterFactors = 0;
        for(let i=2; i <= x/2; i++) {
            if(x%i === 0) {
                counterFactors += 1;
            }
        }
        if(counterFactors === 0) {
            counterPrimes1 += 1;
            countPN.innerHTML = `are : <br>${counterPrimes1} numbers.`;
            createTable1(x);
        } 
    }
}

const createTable1 = (x) => {
    let p = document.createElement("p");
    table1.appendChild(p);
    p.appendChild(document.createTextNode(`${x}`));
}

/* Section2: */
const table2 = document.querySelector("#table2");
const input2a = document.querySelector("#input2a");
const input2b = document.querySelector("#input2b");

input2a.addEventListener("keypress", () => {
    const i2a = input2a.value;
    const i2b = input2b.value;
    if(i2a !== "" && i2b === "" && event.keyCode === 13) {
        alert("Please enter the second number");
        input2b.focus();
    } else if(i2a !== "" && Number(i2a) > Number(i2b) && event.keyCode === 13) {
        alert("The second number must be bigger than the first number");
    } else if(i2a !== "" && i2b !== "" && Number(i2a) < Number(i2b) && event.keyCode === 13) {
        while (table2.firstChild) {
            table2.firstChild.remove();
            counterPrimes2 = 0;
        }
        primeNum2(Number(i2a), Number(i2b));
        input2a.blur();
    };
})
input2b.addEventListener("keypress", () => {
    const i2a = input2a.value;
    const i2b = input2b.value;
    if(i2a === "" && i2b !== "" && event.keyCode === 13) {
        alert("Please enter a first number");
        input2a.focus();
    } else if(i2a !== "" && Number(i2b) < Number(i2a) && event.keyCode === 13) {
        alert("The second number must be bigger than the first number")
    } else if(i2a !== "" && Number(i2b) > Number(i2a) && event.keyCode === 13) {
        while (table2.firstChild) {
            table2.firstChild.remove();
            counterPrimes2 = 0;
        }
        primeNum2(Number(i2a), Number(i2b));
        input2b.blur();
    };
})

let counterPrimes2 = 0;
const primeNum2 = (i2a, i2b) => {    
    for(let x=i2a; x>=i2a , x<=i2b; x++) {
        let counterFactors = 0;
        for(let i=2; i <= x/2; i++) {
            if(x%i === 0 && x >= 2) {
                counterFactors += 1;
            }
        }
        if(counterFactors === 0 && x >= 2) {
            counterPrimes2 += 1;
            createTable2(x);
        } 
    }
}

const createTable2 = (x) => {
    let p = document.createElement("p");
    table2.appendChild(p);
    p.appendChild(document.createTextNode(`${x}`));
}

/* Section3 */
const table3 = document.querySelector("#table3");
const input3 = document.querySelector("#input3");

input3.addEventListener("keypress", () => {
    const i3 = input3.value;
    if(i3 !== "" && event.keyCode === 13) {
        while (table3.firstChild) {
            table3.firstChild.remove();
            primeNumbers3 = [];
            counterPrimes3 = 0;
        };
        primeNum3(i3);
        input3.blur();
    }
})

let primeNumbers3 = [];
let counterPrimes3 = 0;

const primeNum3 = (i3) => {    
    for(let x=2;; x++) {
        let counterFactors = 0;
        for(let i=2; i <= x/2; i++) {
            if(x%i === 0) {
                counterFactors += 1;
            }
        }
        if(counterFactors === 0 && primeNumbers3.length < i3) {
            primeNumbers3.push(x);
            counterPrimes3 += 1;
            createTable3(x);
        } else if(counterFactors === 0 && primeNumbers3.length >= i3) {
            break;
        }
    }
}

const createTable3 = (x) => {
    let p = document.createElement("p");
    table3.appendChild(p);
    p.appendChild(document.createTextNode(`${x}`));
}

/* Section4 */
const table4 = document.querySelector("#table4");
const input4a = document.querySelector("#input4a");
const input4b = document.querySelector("#input4b");

input4a.addEventListener("keypress", () => {
    const i4a = input4a.value;
    const i4b = input4b.value;
    if(i4a !== "" && i4b === "" && event.keyCode === 13) {
        alert("Please enter a number to start from");
        input4b.focus();        
    } else if(i4a !== "" && i4b !== "" && event.keyCode === 13) {
        while (table4.firstChild) {
            table4.firstChild.remove();
            primeNumbers4 = [];
            counterPrimes4 = 0;
        }
        primeNum4(i4a, i4b);
        input4a.blur();
    };
})
input4b.addEventListener("keypress", () => {
    const i4a = input4a.value;
    const i4b = input4b.value;
    if(i4a === "" && i4b !== "" && event.keyCode === 13) {
        alert("Please enter how many prime numbers do you want");
        input4a.focus();
    } else if(i4a !== "" && i4b !== "" && event.keyCode === 13) {
        while (table4.firstChild) {
            table4.firstChild.remove();
            primeNumbers4 = [];
            counterPrimes4 = 0;
        }
        primeNum4(i4a, i4b);
        input4b.blur();
    };
})

let primeNumbers4 = [];
let counterPrimes4 = 0;

const primeNum4 = (i4a, i4b) => {    
    for(let x=i4b;; x++) {
        let counterFactors = 0;
        for(let i=2; i <= x/2; i++) {
            if(x%i === 0) {
                counterFactors += 1;
            }
        }
        if(counterFactors === 0 && primeNumbers4.length < i4a) {
            primeNumbers4.push(x);
            counterPrimes4 += 1;
            createTable4(x);
        } else if(counterFactors === 0 && primeNumbers4.length >= i4a) {
            break;
        }
    }
}

const createTable4 = (x) => {
    let p = document.createElement("p");
    table4.appendChild(p);
    p.appendChild(document.createTextNode(`${x}`));
}

/* Enable the Button: */
const enterBtn = document.querySelector(".enterBtn");
const enableBtn1 = (a) => {
    a.addEventListener('input', () => {
        if(a.value !== ""){
            enterBtn.classList.add('glowBtn');
        }
    });
}
enableBtn1(input1);
enableBtn1(input3);

const enableBtn2 = (a,b) => {
    b.addEventListener('input', () => {
        if(a.value !== "" && b.value !== ""){
            enterBtn.classList.add('glowBtn');
        }
    });
}
enableBtn2(input2a, input2b);
enableBtn2(input4a, input4b);

/* Button Listner: */
enterBtn.addEventListener("click", () => {
    const i1 = input1.value;
    const i2a = input2a.value;
    const i2b = input2b.value;
    const i3 = input3.value;
    const i4a = input4a.value;
    const i4b = input4b.value;

    if(i1 !== "") {
        while (table1.firstChild) {
            table1.firstChild.remove();
            counterPrimes1 = 0;
        };
        primeNum1(i1);
        input1.blur();
    }

    if((i2a !== "" && i2b === "") || (i2a === "" && i2b !== "")) {
        alert("Please fill up all the necessary field");
        input2a.focus();
    } else if(i2a !== "" && i2b !== "" && Number(i2a) > Number(i2b)) {
        alert("The second number must be bigger than the first number");
        input2b.focus();
    } else if(i2a !== "" && i2b !== "" && Number(i2a) < Number(i2b)) {
        while (table2.firstChild) {
            table2.firstChild.remove();
            counterPrimes2 = 0;
        }
        primeNum2(Number(i2a), Number(i2b));
        input2a.blur();
    };

    if(i3 !== "") {
        while (table3.firstChild) {
            table3.firstChild.remove();
            primeNumbers3 = [];
            counterPrimes3 = 0;
        };
        primeNum3(i3);
        input3.blur();
    }

    if((i4a !== "" && i4b === "") || (i4a === "" && i4b !== "")) {
        alert("Please fill up all the necessary field");
        input4a.focus();
    } else if(i4a !== "" && i4b !== "") {
        while (table4.firstChild) {
            table4.firstChild.remove();
            primeNumbers4 = [];
            counterPrimes4 = 0;
        }
        primeNum4(i4a, i4b);
        input4a.blur();
    };
});

/* Selection Options:*/
const select = document.querySelector('select');
const sections = document.querySelectorAll('.sections');
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');

select.addEventListener('change', function() {
    if(this.value == "title") {
        location.reload();
    } else if(this.value == "a") {
        section1.classList.add('show');
        section2.classList.remove('show');
        section3.classList.remove('show');
        section4.classList.remove('show');

        section1.style.width = "90%";
        input1.focus();
    } else if(this.value == "b") {
        section1.classList.remove('show');
        section2.classList.add('show');
        section3.classList.remove('show');
        section4.classList.remove('show');

        section2.style.width = "90%";
        input2a.focus();
    } else if(this.value == "c") {
        section1.classList.remove('show');
        section2.classList.remove('show');
        section3.classList.add('show');
        section4.classList.remove('show');

        section3.style.width = "90%";
        input3.focus();
    } else if(this.value == "d") {
        section1.classList.remove('show');
        section2.classList.remove('show');
        section3.classList.remove('show');
        section4.classList.add('show');

        section4.style.width = "90%";
        input4a.focus();
    } else if(this.value == "all") {        
        for(let i=0; i<sections.length; i++) {
            sections[i].classList.add('show');
            if(window.innerWidth < 650) {
                sections[i].style.width = "80%";
            } else {
                sections[i].style.width = "25%";
            }
        }
        input1.focus();
    }
});