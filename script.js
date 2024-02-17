const form=document.querySelector("#form")
console.log(form);
let submitButton = form.querySelector('button[type="submit"]');
submitButton.addEventListener("click", addrow);
function addrow(){
  let table=document.querySelector(".table"),
  newRow = table.insertRow(table.length),
  cell1=newRow.insertCell(0),
  cell2=newRow.insertCell(1),
  cell3=newRow.insertCell(2),
  cell4=newRow.insertCell(3),
  cell5=newRow.insertCell(4),
  cell6=newRow.insertCell(5),
  cell7=newRow.insertCell(6),
  cell8=newRow.insertCell(7),
  cell9=newRow.insertCell(8),
  cell10=newRow.insertCell(9),
  sname=document.getElementById("serial").value,
  fname=document.getElementById("first-name").value,
  lname=document.getElementById("last-name").value,
  email=document.getElementById("email").value,
  address=document.getElementById("address").value,
  pincode=document.getElementById("pincode").value,
  gender=document.querySelector('input[type="radio"]:checked');
  state=document.getElementById("state").value,
  country=document.getElementById("country").value;
  cell1.innerHTML=sname;
  cell2.innerHTML=fname;
  cell3.innerHTML=lname;
  cell4.innerHTML=email;
  cell5.innerHTML=address;
  cell6.innerHTML=pincode;
  cell7.innerHTML=gender.value;
  let food=[];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(item=>{
    if(item.checked===true){
      food.push(item.value);
    }
  });
  cell8.innerHTML=food;
  cell9.innerHTML=state;
  cell10.innerHTML=country;
  form.reset();
}

