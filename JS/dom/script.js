

// !--- DOM (Document Object Model)

// !--- document.getElementById('')

// let h1 = document.getElementById('head1')
// console.log(h1);


// !--- document.getElementByclassName('')

// let parag = document.getElementsByClassName('para')
// console.log(parag);


// !-- document.getElementTagName('')

// let p = document.getElementsByTagName('p')
// console.log(p);


// !-- document.getElementsByName('')

// let heading = document.getElementsByName('heading')
// console.log(heading);



// !-- document.querySelector()

// let para = document.querySelector('.para')
// console.log(para);


// !-- document.querySelectorAll()

// let para = document.querySelectorAll('.para')
// console.log(para);


// !-- document.createElement('')

// let div = document.createElement('div')
// console.log(div);

// * if we pass tag in innerHTML, it will consider it as a tag...
// div.innerHTML = '<h1>Helewwww</h1>';

// * if we pass tag in innerText, it will consider it as a text only...
// div.innerText = '<h2>sleepy afternoon</h2>';
// document.body.append(div)


// let p = document.createElement('p')
// console.log(p);

// p.innerText = '📖Dear Diary, I am feeling so sleepy....😴'
// document.body.append(p);
// console.log(p);



// let main = document.createElement('main');
// let section = document.createElement('section');
// let article = document.createElement('article');


// !-- append()
// document.body.append(main);
// main.append(section);
// section.append(article);


// !-- appendChild()

// main.appendChild(section,article)


// !-- css manipulation

// let p = document.createElement('p')
// p.innerText = 'good afternoon...';
// document.body.append(p);
// p.style.backgroundColor='red';
// p.style.color = 'yellow';
// p.style.fontSize = '40px';


// !- classList.add()


// let conatiners = document.querySelector('#container')
// document.body.classList.add('dark')

// !-- classList.remove()

// document.body.classList.remove('light')

// !-- classList.toggle()

let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
    // btn.innerText = 'Light'
    console.log(document.body.classList.contains('dark'));

    (document.body.classList.contains('dark'))?btn.innerText='Light':btn.innerText='Dark'
})


// !-- contains()

// console.log(document.body.classList.contains('dark'));
