// JavaScript File

var accor = document.getElementsByClassName("accordion");

var index;

for (index = 0; index < accor.length; index++) {
    
    accor[index].onClick = function(){
        this.classList.toggle("active");
        
        
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            
        } else {
            panel.style.display = "block";
        }
    };
}