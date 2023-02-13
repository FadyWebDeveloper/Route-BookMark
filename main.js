let siteNm=document.getElementById("sitename");
let siteUrl=document.getElementById("siteurl");
let btnSub=document.getElementById("submit");
let alertName=document.getElementById("alertName");
let alertuRL=document.getElementById("alertuRL");
let bookContainer;
if(localStorage.getItem("book")==null){
  bookContainer=[];
}else{
  bookContainer=JSON.parse(localStorage.getItem("book"));
  displayBook();
}
btnSub.addEventListener("click",function(){
  if( checkName() && checkUrl()){
  let book={
    name:siteNm.value,
    url:siteUrl.value,
  }
  bookContainer.push(book);
  localStorage.setItem("book",JSON.stringify(bookContainer))
  displayBook();
  clearBook();
 }
})

function displayBook(){
let box=``;
for (let i = 0; i < bookContainer.length; i++) {
  box += `
  <tr>
<td class="pe-5 fw-semibold fs-5">${bookContainer[i].name}</td>
<td><a class="btn  btn-danger" href= "https://${bookContainer[i].url}"  target="_blank"onclick="updateProducts(${i})" id="al">visit</a></td>
<td><button class="btn btn-dark" onclick="deleteBook(${i})">delete</button></td>
</tr>`
  
}
document.getElementById("tbody").innerHTML = box;
}

function deleteBook (i){
  bookContainer.splice(i,1);
  localStorage.setItem("book",JSON.stringify(bookContainer))
  displayBook();
}

function checkName(){
  if(!(siteNm.value)){
    alertName.classList.replace("d-none","d-block");
    return false;
  }else{
    alertName.classList.replace("d-block","d-none");
    return true;
  }
}

function checkUrl(){
  if(!(siteUrl.value)){
    alertuRL.classList.replace("d-none","d-block");
    return false;
  }else{
    alertuRL.classList.replace("d-block","d-none");
    return true;
  }
}
function clearBook(){
  siteNm.value="";
  siteUrl.value="";
}