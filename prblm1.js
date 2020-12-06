let begetdatebetween = (d1,d2) =>{
let date = new Date(d2);
let date1 = new Date(d1);
let current = date.getDate();
let d =date.getDate()-date1.getDate()-1;
while(d>0){
  date.setDate(current-d);
  console.log(date.getDate(),date.getMonth()+1,date.getFullYear());
  d--;
}
date.setDate(current-1);
}
begetdatebetween('11/01/2020','11/10/2020');
