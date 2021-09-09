import get from './utils/selection.js';
import getUser from './utils/getUser.js';



const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];
//console.log(img);
//console.log(btns);

const displayUser = (person) => {
    img.src = person.image;
    value.textContent = person.name;
    title.textContent =  `My Name Is`;
    btns[0].classList.add('active');
    btns.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            btns.forEach((btn) => {
                btn.classList.remove('active');
            }) 
            btn.classList.add('active');
        })
    })
}


const showUser = async () => {
 // get user from api
    //getUser().then((data) => console.log(data));
    const person = await getUser();
    displayUser(person);
}

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
