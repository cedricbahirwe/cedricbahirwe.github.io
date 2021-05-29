
let el = document.getElementsByTagName('a')[0]

el.classList.add('active')

var inputs = document.querySelectorAll("a");                               
for(var i = 0; i < inputs.length; i++){                                                                  
   inputs[i].addEventListener("click", function(e){          
        inputs.forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')                                                    
    });                           
 }

