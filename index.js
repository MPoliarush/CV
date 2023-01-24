

// async function getCodewarsData(){
//     const url = 'https://www.codewars.com/api/v1/users/rsschool_a5963a1d311bb850';
//     const res = await fetch(url);
//     const data = await res.json(); 
//     console.log(data.ranks.overall.score)
//     let x= data.ranks.overall.score
//     document.querySelector('body').textContent = `${x}`
// }
// getCodewarsData()



let navBar = document.getElementById('nav');
console.log(navBar)


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


let aboutY = document.querySelector('.about-first-text').offsetTop
console.log(aboutY)


window.addEventListener("scroll",function(){
    console.log(window.scrollY+100)
    if((window.scrollY+600) == aboutY){
        document.querySelector('.about-first-text').style.animation = 'mainHeading2 1s ease-in-out'
    }
})



