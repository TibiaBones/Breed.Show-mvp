let statusIndex = 1;
const breedBlockId = document.getElementById("breederContainer");
const buttons = document.querySelectorAll(".radio-statusСhoiceButton_img");

function breederStatus (){
    if(statusIndex == 2){
        statusIndex = 1;
        breedBlockId.style.display = "flex";
        buttons.forEach(i => i.classList.toggle('off'))
    };
};

function userStatus (){
    if(statusIndex == 1){
        statusIndex = 2;
        breedBlockId.style.display = "none";
        buttons.forEach(i => i.classList.toggle('off'))
    };
};
// переписать, объединить функции в одну, применить addEventListener вместо oncklick






function showBlock(n){
    let tabs = document.querySelectorAll('.tabSections');
    let block = document.getElementById(n);

    tabs.forEach(i => i.style.display = "none");

    block.style.display = "flex";
};


