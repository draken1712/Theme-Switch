let butmode = document.querySelector("#btn");
let currentmode = "light";

butmode.addEventListener("click", () =>{
    if(currentmode === "light"){
        currentmode = "Dark";
        document.body.style.backgroundColor = "black";
    }
    else{
        currentmode = "light";
        document.body.style.backgroundColor = "white";
    }
    console.log(currentmode);
});