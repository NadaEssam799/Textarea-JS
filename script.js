var textarea = document.getElementById("text"),
    span = document.getElementById("span");

    textarea.onkeyup = function(){
        span.textContent = 50 - this.value.length;
        
        if(span.textContent < 0){
            span.style.color = "#F00";
        } 
        else{
            span.style.color = "#000";
        }
    };