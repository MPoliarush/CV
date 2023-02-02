//codewars parsing

async function getCodewarsData(){
    const url = 'https://www.codewars.com/api/v1/users/rsschool_a5963a1d311bb850';
    const res = await fetch(url);
    const data = await res.json(); 
    // console.log(data)
    let rank= data.ranks.overall.name;
    let tasksSolved = data.codeChallenges.totalCompleted;
    document.querySelector('.ku').textContent = `${rank}`
    document.querySelector('.tasksnum').textContent = `${tasksSolved}`
}
getCodewarsData()




// nav bar movements

let navBar = document.getElementById('nav');

navBar.addEventListener('mouseover',function(){ 
    document.querySelectorAll('.nav-item-text').forEach( item =>{
        item.style.display = 'block'
        navBar.classList.add('active')
    })
})

navBar.addEventListener('mouseout',function(){
    document.querySelectorAll('.nav-item-text').forEach( item =>{
        item.style.display = 'none'
        navBar.classList.remove('active')
    })
})





//text appearence

let texts = document.querySelectorAll('.text-block')
let windowheigth= window.innerHeight;

for ( const textBlock of texts){
    let textTop = textBlock.getBoundingClientRect().top
    
    // console.log(textTop)
    // console.log(windowheigth)
    
    if (windowheigth>textTop+100){
        // console.log('logged')
        textBlock.classList.add('text-block-active')
    }
    
    window.addEventListener("scroll",function(){
    // console.log(textTop-windowheigth)
    // console.log(window.pageYOffset)
        if ( window.pageYOffset > textTop-windowheigth+200){
            // console.log('logged')
            textBlock.classList.add('text-block-active')
        }
    })
}




//list item appearence

function appearence(item,i){
    setTimeout(function(){
        console.log('logged')
        item.classList.add('course-active')
    } , i*500)
}

let courses = document.querySelectorAll('.course')
let educationBlockHeight=document.querySelector('.education-second').getBoundingClientRect().top
console.log(courses)

for( let i=0; i<courses.length;i++){
    if (windowheigth>educationBlockHeight+400){
        // console.log('logged')
        appearence(courses[i],i)
    }
    
    window.addEventListener("scroll",function(){
    // console.log(textTop-windowheigth)
    // console.log(window.pageYOffset)
        if ( window.pageYOffset > educationBlockHeight-windowheigth+400){
            // console.log('logged')
            appearence(courses[i],i)
        }
    })
    
}
