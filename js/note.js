const inpt =  document.querySelector(".inpttext");
const butn = document.querySelector(".notebtn");
const tasklist= document.querySelector(".listofnotes");

function inputHandler(){
    // console.log(" i am clicked")
    const newTask= inpt.value;
    if(newTask.length==0){
        return ;
    }
    const taskElem=createTask(newTask);
    console.log(taskElem);
    tasklist.appendChild(taskElem);
    // //clear input
    inpt.value="";
    const updateli= taskElem.children[1];
    const updatelichild=updateli.children[1];
    // console.log(updatelichild);
    updatelichild.addEventListener("click",function(){
        const ans= prompt("write here what you want to pdate");
        const liii= taskElem.children[0];
        liii.textContent=ans;
    });

    const delelement= taskElem.children[1];
    const delelementchild=delelement.children[0];

    delelementchild.addEventListener("click",function(){
        taskElem.remove()
    })
}
function createTask(newTask){
    const div= document.createElement("div");
    div.classList.add("listitem");
    const li= document.createElement("li");
    li.classList.add("liststyle");

    const btncon= document.createElement("div");
    btncon.classList.add("btncon")

    const button= document.createElement("button");
    button.classList.add("libtn");
    const update= document.createElement("button");
    update.classList.add("libtn");
    button.innerText= "Delete Task";
    li.textContent=newTask;
    update.innerText="Update Task"
    btncon.appendChild(button);
    btncon.appendChild(update);

    div.appendChild(li);
    div.appendChild(btncon);
    return div;
}

butn.addEventListener("click",inputHandler);