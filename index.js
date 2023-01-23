

async function getCodewarsData(){
    const url = 'https://www.codewars.com/api/v1/users/rsschool_a5963a1d311bb850';
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.ranks.overall.score)
    let x= data.ranks.overall.score
    document.querySelector('body').textContent = `${x}`
}
getCodewarsData()