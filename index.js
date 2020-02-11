//----------------------------1
//hello();

//----------------------------2
// document.querySelector(".haha").addEventListener("click", ()=>{
//     console.log("hahahahaha");
// });

//----------------------------3
// let foo = 0;

// foo.forEach(fo => {
    
// });

//----------------------------4
fetch('../haha.json')
    .then(response => {
        return response.json()
    })
    .then(data => {

    })
    .catch(error => {
        console.error(error);
    })