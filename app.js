// CRUD - Create='Post', Read-'Get', Update-'Put', Delete='delete'
// 1
// const inputs=document.querySelectorAll('input')
// const root=document.getElementById("root")
// const btnPost=document.querySelector("button")
// const url='https://659be0ffd565feee2dabeabf.mockapi.io/auto/auto'

// async function getAuto(){
//     const res=await fetch(url)
//     const data=await res.json()
//     console.log(data);
//     renderAuto(data)
// }
// getAuto()

// function renderAuto(arr){
//    root.innerHTML=''
//    for (const obj of arr){
//     root.innerHTML+=`
//     <div class='card'>
//      <h3>${obj.marka}</h3>
//      <img src=${obj.img}  width='30%' />
//      <h4>s${obj.price}</h4>
//      <button onclick='delAuto(${obj.id})'>Delete</button>
//      <button onclick='editAuto(${obj.id})'>Edit</button>
//     </div>
//     `
//    }
// }

// async function delAuto(id){
//     const res=await fetch(url+'/'+id,{
//         method:'DELETE',
//         headers:{
//             'Content-type': 'application/js; charset=UTF-8' }
//     })
//     const data=await res.json()
//     alert('udaleno')
//     getAuto()
// }

// async function editAuto(id){

//     const marka=prompt('Marka')
//     const imgUrl=prompt('img url')
//     const price=prompt('Price')

//     const res=await fetch(url+'/'+id,{
//     method:'PUT',
//     body:JSON.stringify({marka:marka, img:imgUrl, price:price}),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8' }    
//     })
//     const data=await res.json()
//     console.log(data);
//     getAuto()
// }

// btnPost.onclick=async()=>{
//     const res=await fetch(url,{
//         method:'POST',
//         body:JSON.stringify({marka:inputs[0].value, img:inputs[1].value,
//             price:inputs[2].value
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8' }    
//         })
//         getAuto()

// }

// HOME WORK

// v-1

// const inputs=document.querySelectorAll('input')
// const root=document.getElementById("root")
// const btnPost=document.querySelector("button")
// const url='https://65b2161c9bfb12f6eafcc9f0.mockapi.io/api/v1/books'

// async function getBook(){
//     const res=await fetch(url)
//     const data= await res.json()
//     console.log(data);
// }
// getBook()

// function renderBook(arr){
//   root.innerHTML=''
//   for (const obj of arr){
//     root.innerHTML+=`
//     <div class='card'>
//     <h3>${obj.name}</h3>
//     <img src=${obj.img} width='30%'/>
//     </div>
//     <h4>s${obj.price}</h4>
//     <button onclick='delBook(${obj.id})'>Delete</button>
//     <button onclick='editBook(${obj.id})'>Edit</button>
//     </div>
//     `
//    }
// }

// async function delBook(id){
//     const res=await fetch(url+'/'+id,{
//         method:'DELETE',
//         headers:{
//             'Content-type': 'application/js; charset=UTF-8' }
//     })
//     const data=await res.json()
//     alert('udaleno')
//     getBook()
// }

// async function editBook(id){

//     const name=prompt('Name')
//     const imgUrl=prompt('img url')
//     const price=prompt('Price')

//     const res=await fetch(url+'/'+id,{
//     method:'PUT',
//     body:JSON.stringify({name:name, img:imgUrl, price:price}),
//     headers:{
//         'Content-type': 'application/json; charset=UTF-8' }    
//     })
//     const data=await res.json()
//     console.log(data);
//     getBook()
// }

// btnPost.onclick=async()=>{
//     const res=await fetch(url,{
//         method:'POST',
//         body:JSON.stringify({img:inputs[0].value, name:inputs[1].value, 
//             price:inputs[2].value
//         }),
//         headers:{
//             'Content-type': 'application/json; charset=UTF-8' }    
//         })
//         getBook()

// }

// v-2

const inputs = document.querySelectorAll('input');
const root = document.getElementById("root");
const btnPost = document.querySelector("button");
const url = 'https://65b2161c9bfb12f6eafcc9f0.mockapi.io/api/v1/books';

async function getBook() {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await res.json();
        renderBook(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function renderBook(arr) {
    root.innerHTML = '';
    for (const obj of arr) {
        root.innerHTML += `
            <div class='card'>
                <h3>${obj.name}</h3>
                <img src=${obj.img} width='30%'/>
                <h4>${obj.price}</h4>
                <button onclick='delBook(${obj.id})'>Delete</button>
                <button onclick='editBook(${obj.id})'>Edit</button>
            </div>`;
    }
}

async function delBook(id) {
    try {
        await fetch(url + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        console.log('Deleted:', id);
        getBook();
    } catch (error) {
        console.error('Error deleting:', error);
    }
}

async function editBook(id) {
    const name = prompt('Name');
    const imgUrl = prompt('img url');
    const price = prompt('Price');

    try {
        const res = await fetch(url + '/' + id, {
            method: 'PUT',
            body: JSON.stringify({ name: name, img: imgUrl, price: price }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        console.log('Edited:', id);
        getBook();
    } catch (error) {
        console.error('Error editing:', error);
    }
}

btnPost.onclick = async () => {
    const imgValue = inputs[0].value;
    const nameValue = inputs[1].value;
    const priceValue = inputs[2].value;

    if (imgValue && nameValue && priceValue) {
        try {
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ img: imgValue, name: nameValue, price: priceValue }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            console.log('Added:', { img: imgValue, name: nameValue, price: priceValue });
            getBook();
        } catch (error) {
            console.error('Error adding new book:', error);
        }
    } else {
        alert('Please fill in all fields');
    }
};

// Запускаем получение книг после загрузки страницы
getBook();