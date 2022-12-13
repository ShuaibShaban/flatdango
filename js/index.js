const url = 'https://api.npoint.io/38aebdb16c6ba20c7efb/films/'

// const ticket btn =  

// const details = document.getElementById('details')

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
   
    {console.log(data)
        details.append(movies(data))
    
    })})

function movies({title,runtime, showtime, description,poster,tickets_sold,id}) {
    let info = document.createElement('div')
    info.innerHTML= `
    <div class="card" style="width: 18rem ;">
                <img src="${poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">Runtime:  ${runtime}</p>
                  <p class="card-text">${description}</p>
                  <p class="card-text">Time:  ${showtime}</p>
                  <p id="card${id}"> ${tickets_sold}</p>
                  <p class="card-text"> Available ticket</p>
                  <button onclick="ticketClick(-1${id})"type="button" id="button${id}"class="btn btn-dark">Buy ticket</button>

        
                  </div>
                </div>
            </div>

    `



    return info



}
// / / function for list on the left side

fetch(`${url}`).then((response) => response.json())
.then(json=>{json.map(data=>
    {console.log(data)
    list.append(movieList(data))
    })})
function movieList({title}) {
    let list = document.createElement("ul")
   list.innerHTML =`
   <ul>
   <ol>${title}</ol>
</ul>
    `;
    return list
}
movieList()


function buyTicket(movie) {
    const ticketsSold = document.querySelector("#ticketssold");
    let remainingTickets = movie.capacity - movie.tickets_sold;
    const btn = movieDetailsContainer.querySelector("button");
    const availableTickets = document.querySelector("#availableTickets");

    if (remainingTickets > 0) {
      movie.tickets_sold++;
      remainingTickets--;
      btn.innerHTML = "purchase ticket";
    } else {
      btn.innerHTML = "no more tickets";
      btn.classList.add("soldOut");
    }
    ticketsSold.innerHTML = `Tickets sold: <span>${movie.tickets_sold}</span>`;
    availableTickets.innerHTML = `Available tickets: <span>${remainingTickets}</span>`;
  }
