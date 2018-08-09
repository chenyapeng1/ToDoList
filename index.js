window.onload=function(){
    let arr1=localStorage.arr1?localStorage.arr1.split(","):[];
    let arr2=localStorage.arr2?localStorage.arr2.split(","):[];
    let neirong=document.querySelector(".neirong");
    let neirong1=document.querySelectorAll(".neirong")[1];
    let input1=document.querySelector("input");
    let span=document.querySelector("section .topBox span")
    let span1=document.querySelectorAll("section .topBox span")[1];

    input1.onkeydown=function (e) {
        if(e.keyCode==13 && input1.value!=""){
            arr1.unshift(input1.value);
            input1.value="";
            upDate();
        }
    }

    

    function upDate(){
        localStorage.arr1=arr1.join(",");
        localStorage.arr2=arr2.join(",");
        neirong.innerText="";
        neirong1.innerText="";
        span.innerHTML = arr1.length;
        span1.innerHTML=arr2.length;
        arr1.forEach(function (value,index){
            // let neirong=document.querySelector(".neirong");
            // let input1=document.querySelector("input");
            // let span=document.querySelector("section .topBox span")
            // let last=document.createElement("div");
            // let neirong=topBox.querySelector(".neirong")
            let last=document.createElement("div");
            last.className="last";
            let input=document.createElement("input");
            input.type="checkbox";
            input.onclick=function(){
                arr1.splice(index,1);
                arr2.unshift(value);
                upDate();
            }
            let p=document.createElement("p");
            p.className="pclass";
            p.innerHTML=value;

            p.ondblclick=function(){
                let input2=document.createElement("input");
                input2.className=input2;
                let con=p.innerText;
                p.innerText="";
                input2.value=con;
                input2.onkeydown=function(e){
                    if(e.keyCode==13 && input2.value!=""){
                        arr1[index]=input2.value;
                        upDate();
                    }
                } 
                input2.onblur=function(){
                    if (input2.value !=""){
                        arr1[index]=input2.value;
                        upDate();
                    }
                }
                input2.setAttribute("class","ppp")
                input2.setAttribute("type","text")
                p.appendChild(input2);
                input2.focus();
            }

            let a=document.createElement("a");
            a.innerText="-";
            a.onclick=function(){
                arr1.splice(index,1);
                upDate();
            }
            neirong.appendChild(last);
            last.appendChild(input);
            last.appendChild(p);
            last.appendChild(a);
        })
        arr2.forEach(function (value,index){
            let last=document.createElement("div");
            last.className="last";
            let input=document.createElement("input");
            input.type="checkbox";
            input.checked="checked";
            input.onclick=function(){
                arr2.splice(index,1);
                arr1.unshift(value);
                upDate();
            }
            let p=document.createElement("p");
            p.className="pclass";
            p.innerHTML=value;
            let a=document.createElement("a");
            a.innerText="-";
            a.onclick=function(){
                arr2.splice(index,1);
                upDate();
            }
            neirong1.appendChild(last);
            last.appendChild(input);
            last.appendChild(p);
            last.appendChild(a);
        })
    }
    upDate();
}