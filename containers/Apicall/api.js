export const fetchData= async ()=>{
try{
    const response=await fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myjsons/master/users.json');
const data=await response.json();
return data;
}
catch(e){
    console.log(e);
}
}