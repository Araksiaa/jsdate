const el=document.getElementById("time")
const em=document.getElementById("timee")
const en=document.getElementById("timeee")
const ou=document.getElementById("timeeee")
const pi=document.getElementById("timeeeeee")

const date= new Date();
const result = date.toLocaleDateString("en-GB",{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  

el.innerHTML=result;
em.innerHTML=result;
en.innerHTML=result;
ou.innerHTML=result;
pi.innerHTML=result;