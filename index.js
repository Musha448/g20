const ul = document.getElementById('ul');
const hola = document.getElementById('main');
const search = document.getElementById('search');
const show = document.getElementById('show');
const op = document.getElementById('submit');
let musha;

    const  openBar = () => {
        ul.style.left = '0px';
        hola.style.position = 'fixed'
    
    }
    const closeBar = () =>{
        ul.style.left = '-954px'
        hola.style.position = 'relative '
    }

   op.onclick = function(){
    alert('I am Sorry Suraj😎😎😎');
   }
    search.addEventListener('click' , () =>{

     show.style.display = 'block';


        setTimeout(()=>{
            show.style.display = 'none';
        }, 10000);
    });
