let statusIndex = 1;
const breedBlockId = document.getElementById("breederContainer");
// let buttonsYes = [document.getElementById("buttonOn1"), document.getElementById("buttonOff1")];
// let buttonsNo = [document.getElementById("buttonOn2"), document.getElementById("buttonOff2")];
console.log(statusIndex);

function breederStatus(){
    if(statusIndex == 2){
        statusIndex = 1;
        breedBlockId.style.display = "flex";

        // for(let but of buttonsYes){
        //     if()
        // }
        document.getElementById("buttonOn1").style.display = "block";
        document.getElementById("buttonOff1").style.display = "none";
    }else{
        document.getElementById("buttonOn1").style.display = "none";
        document.getElementById("buttonOff1").style.display = "block";
    };
    console.log(statusIndex);
};

function userStatus (){
    if(statusIndex == 1){
        statusIndex = 2;
        breedBlockId.style.display = "none";
        document.getElementById("buttonOn2").style.display = "block";
        document.getElementById("buttonOff2").style.display = "none";
    }else{
        document.getElementById("buttonOn2").style.display = "none";
        document.getElementById("buttonOff2").style.display = "block";
    };

    console.log(statusIndex);
};






