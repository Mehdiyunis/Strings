const output = [];

function long() {
    const text = document.getElementById("textal").value;
    output.splice(0, 1, text.length);
    document.getElementById("outtext").innerHTML = output.join("<br>");
}

function lower() {
    const text = document.getElementById("textal").value;
    output.splice(1, 1, text.toLowerCase());
    document.getElementById("outtext").innerHTML = output.join("<br>");
}

function upper() {
    const text = document.getElementById("textal").value;
    output.splice(2, 1, text.toUpperCase());
    document.getElementById("outtext").innerHTML = output.join("<br>");
}

function trim_b() {
    const text = document.getElementById("textal").value;
    output.splice(3, 1, text.trimStart());
    document.getElementById("outtext").innerHTML = output.join("<br>");
}
function trim_a() {
    const text = document.getElementById("textal").value;
    output.splice(4, 1, text.trimEnd());
    document.getElementById("outtext").innerHTML = output.join("<br>");
}

/* function slice_value(id) {
    document.getElementById(id).value;
} */

function cut() {
    /* let textAreaValue = document.querySelector("#textal").value;
    let inpOneValue = document.querySelector("#slice-num-one").value
    let inpTwoValue = document.querySelector("#slice-num-two").value;

    let newValue = textAreaValue.slice(inpOneValue, inpTwoValue)
    console.log(newValue) */

    const text = document.querySelector("#textal").value;
    const slice_num_one = document.querySelector("#slice-num-one").value;
    const slice_num_two = document.querySelector("#slice-num-two").value;

    output.splice(5, 1, text.slice(slice_num_one, slice_num_two));

    document.getElementById("outtext").innerHTML = output.join("<br>");

}

// Oldumu ? beli çox saqolun

// ne baw verdiyin anladiz ?

/* querySelector nedir onu blmirem onu arsdiracam amma kodun nece islediyin
anladim */


let arr = [];

function separate() {
    let arrValue = document.querySelector("#input-array").value;
    arr = arrValue.split(" ")
    document.getElementById("output-array").value = arr.join(" - ");
}
function long1() {
    document.getElementById("output-array").value = arr.length;
}
function addend() {
    let iPush = document.querySelector("#i-push").value;
    arr.push(iPush)
    document.getElementById("output-array").value = arr.join(" - ");
}
function deletend() {
    arr.pop()
    document.getElementById("output-array").value = arr.join(" - ");
}
function addstart() {
    let unshift = document.querySelector("#unshift").value;
    arr.unshift(unshift)
    document.getElementById("output-array").value = arr.join(" - ");
}
function deletestart() {
    arr.shift()
    document.getElementById("output-array").value = arr.join(" - ");
}
function howeverYouLike() {
    let addIndex = document.querySelector("#add-index").value;
    let deleteStart = document.querySelector("#delete-num").value;
    let addElement = document.querySelector("#add-element").value;
    arr.splice(addIndex, deleteStart, addElement)
    document.getElementById("output-array").value = arr.join(" - ");
}
