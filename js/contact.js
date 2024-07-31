//contact
const input= document.querySelector(".inpt");
const message=document.querySelector(".inptlbl")
const frmbtn=document.querySelector(".frmbtn");
frmbtn.addEventListener("click", () => {
    const value = input.value;
    const value2 = message.value;
    alert(`FORM SUBMITTED: Your Name - ${value} and  Message - ${value2}`);
    input.value = "";
    message.value = "";
});