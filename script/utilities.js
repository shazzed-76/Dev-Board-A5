
function getId (id) {
   const idValue =  document.getElementById(id).innerText;
   const convertToInt = parseInt(idValue);
    return convertToInt
}

function getIdByName (id) {
   const element = document.getElementById(id);
   return element;
  
}
