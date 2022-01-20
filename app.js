(function(){
    const btn = document.querySelector('.btn');
    const message = document.getElementById('paragrafo');
    const valueInput = document.querySelector('.input');
    const paragrafo = document.querySelector('.texto1');
    const fragmento = document.createDocumentFragment();
    

    

 btn.addEventListener('click', myFunction);


function myFunction() {
    
    message.innerHTML = "";
    let x = document.querySelector('.input').value;
    let luckyNumber = Math.round(Math.random(x) * 10);
    let para = document.createElement('P');
    
    
    

    try { 
      if(x == "")  throw "El campo esta vacio";
      if(x == " ")  throw "El campo esta vacio";
      if(isNaN(x)) throw "Lo escrito no es un numero";
      x = Number(x);
      if(x !== luckyNumber)  throw `${x} no es el numero`;
  
    }
    catch(err) {
      para.textContent = err;
      fragmento.appendChild(para);
      paragrafo.appendChild(fragmento);

      para.classList.add('message');
      

      /* message.style.animation = "shake .5s ease"; */
    }
    finally{
      valueInput.value = null;
     
       

        if (x == luckyNumber) {
            message.innerHTML = `<span style = "color:#3fbf8c">El ${x} es tu numero fortunado "FELICITACIONES"</span>`;
            message.classList.add('exito');
            
        }
        
        
    }

    valueInput.addEventListener('click', () =>{

      paragrafo.textContent = null;
      message.textContent = null;
    
    
      
     })
     
  } 
 

  


   
 













}());