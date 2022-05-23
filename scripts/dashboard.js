function append(){
    let data = JSON.parse(localStorage.getItem("students")) || [];
    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach(function(ele, index){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.image;
        let p = document.createElement("p")
        p.innerText = ele.name;
        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.addEventListener("click", function(){
            remove(index);
        });

        div.append(img, p, btn);
        container.append(div);
    });     
}

append();

function remove(index){
    let data = JSON.parse(localStorage.getItem("students")) || [];

    let newData = data.filter(function(ele,i){
        if (i === index){
            let trash = JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(ele);
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i !== index;
        }
    });

    localStorage.setItem("students",JSON.stringify(newData));
    append();

}