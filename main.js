const form = document.querySelector("form") ;
const txtStatus = document.querySelector(".button-area span") ;

form.onsubmit = (e) => {
   e.preventDefault();
   txtStatus.style.color = "#0d6efd" ;
   txtStatus.style.display = "block" ;

   let xhr = new XMLHttpRequest();
   xhr.open("POST" , "message.php" , true)
   xhr.onload = () =>{
      if (xhr.readyState == 4 && xhr.status == 200) {
         let response = xhr.response ;
         if (response.indexOf("Email and password fields are required!") != -1 || response.indexOf("Please enter a valid email address") || response.indexOf("Failed to send this message") ) {
            txtStatus.style.color = "red" ;
         }else{
            form.reset();
            setTimeout(() => {
               txtStatus.style.display = "none" ;
            }, 3000);
         }
         txtStatus.innerHTML = response ;
      }
   }
   let formData = new FormData(form) ;
   xhr.send(formData);
}