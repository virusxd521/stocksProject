let toggle_button = document.querySelector("#only_checkbox_toggle");
let body_ofDom = document.querySelector("body");
toggle_button.addEventListener("change", () => {
    let on_of_check = toggle_button.checked;
    console.log(on_of_check);
    if(on_of_check === true){
        body_ofDom.style.backgroundColor = "black";
        body_ofDom.style.color = "white";
    } else if(on_of_check === false){
        body_ofDom.style.backgroundColor = "white";
        body_ofDom.style.color = "black";
    }
});

