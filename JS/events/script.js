
// !-- events

function greet(){
            alert('Welcome everyone...')
        }   

// function submit(){
//     e.preventDefault();
//     confirm('are u sure....')
// }


// !-- preventDefault()
let form = document.getElementById('form')

let inp = document.getElementById('username')

let h2 = document.querySelector('#head2')


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log(inp.target);
    
    confirm('are u sure...')
    console.log(inp.value);
    let res = inp.value;
    h2.innerText = `${res}`
    
})

// inp.addEventListener('input',()=>{
//     console.log(inp.value); 
// })


h2.addEventListener('click', (e)=>{
    h2.style.textDecoration = 'line-through'
    })


