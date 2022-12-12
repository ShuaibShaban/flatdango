const url = 'https://api.npoint.io/38aebdb16c6ba20c7efb/films/'

const details = document.getElementById('details')

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
        details.append(movies(data))
    
    })})

function movies({title,runtime, showtime, description,poster,tickets_sold}) {
    let info = document.createElement('div')
    info.innerHTML= `
    <div class="card" style="width: 18rem ;">
                <img src="${poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">Runtime:  ${runtime}</p>
                  <p class="card-text">${description}</p>
                  <p class="card-text">Time:  ${showtime}</p>
                  <p class="card-text">Available tickets: ${tickets_sold}</p>
                  <button type="button" class="btn btn-dark">Buy ticket</button>

        
                  </div>
                </div>
            </div>

    `

    // button.addEventListner('click' , () => {
    //     if(tickets_sold > 0) {
    //         tickets_sold -= 1;
    //     }
    // })

return info



}
