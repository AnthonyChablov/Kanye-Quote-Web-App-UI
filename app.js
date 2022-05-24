// selecting elements

let insertUI = document.querySelector('.insert__contents');
let btnUI = document.querySelector('.btn');

// event listener
btnUI.addEventListener('click', (e)=>{
    // instantiate xhr obj
    const xhr = new XMLHttpRequest();
    
    // open get request to server
    xhr.open('GET', 'https://api.kanye.rest', true);

    // onload 
    xhr.onload= function(){
        if(this.status===200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            

            //creating element to append
            let quote = document.createElement('h2');
            quote.innerText= `${response['quote']} - Kanye West`;
            quote.classList.add('inserted-text');
            
            insertUI.appendChild(quote).scrollIntoView({behavior: "smooth", block: "center"});


        }
    }

    xhr.send();

    e.preventDefault();
})


// make http request to api
