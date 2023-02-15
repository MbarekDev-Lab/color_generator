let elemBody = document.querySelector('body');
elemBody.style.fontFamily = 'Arial';
elemBody.style.fontStyle = 'italic';
elemBody.style.fontSize = '3rem';

let elemh1 = document.querySelector('h1');
elemh1.style.color = 'red';
elemh1.style.textAlign = 'center';

let elemCategory = document.querySelectorAll('label.category');

elemCategory.forEach( ({style: ctg})=> {
    ctg.color = 'blue';
    ctg.fontStyle = 'italic';
    ctg.textDecoration = 'underline';

});

function _colorGenerator_(){
    // let r = Math.floor(Math.random()*256)
    // let b = Math.floor(Math.random()*256)
    // let g = Math.floor(Math.random()*256)
    // let o = Math.random().toFixed(1)  
    // return `rgba(${r},${g},${b},${o})`

    let colorCode="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=colorCode[Math.floor(Math.random()*colorCode.length)]
    }
    return color
 
}

let colorGen = document.querySelector('.food-category:nth-child(1)');
colorGen.style.backgroundColor =_colorGenerator_();
colorGen.style.width= "450px" ;

let colorGen1 = document.querySelector('.food-category:nth-child(2)');
colorGen1.style.backgroundColor = _colorGenerator_();
colorGen1.style.width= "450px" ;
colorGen1.style.height= "300px";

let colorGen2 = document.querySelector('.food-category:nth-child(3)');
colorGen2.style.backgroundColor = _colorGenerator_();
colorGen2.style.width= "450px" ;


    document.querySelector(".main").style.display="flex" ;
    document.querySelector(".main").style.justifyContent="space-evenly" ;


let ele = document.getElementById('warning');
ele.style.fontSize = '4rem';
ele.style.fontFamily = 'Palatino, URW Palladio L, serif';


let even = document.querySelectorAll('.allergy-info');

even.forEach( (item,i)=> {
    if(i%2==0){
        item.style.backgroundColor = 'skyblue'
    }
});


let getCenter = document.querySelector('.allergy-warning');
getCenter.style.textAlign = "center"

getCenter.style.width = "600px"
getCenter.style.margin = "0 auto"

let dico = document.querySelector('.allergies');
dico.style.listStyle = "none"


let footer = document.querySelector('.footer');
footer.style.display ="flex" 
footer.style.justifyContent ="center" 

Array.from(footer.children).forEach(item=>{
item.style.width= "300px"
item.style.height= "300px"
item.style.borderRadius= "50%"
item.style.border= "10px solid orange"
item.style.display= "flex"
item.style.justifyContent= "center"
item.style.alignItems= "center"
item.style.margin ="10px"
})













