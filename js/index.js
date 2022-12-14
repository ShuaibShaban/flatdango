// npoint url where i am hosting my project

const url = "https://api.npoint.io/38aebdb16c6ba20c7efb/films/";

// data being fetched from the remote server from the link above provided.

fetch(`${url}`)
  .then((response) => response.json())
  .then((json) => {
    movieList(json);
  });
function movieList(films) {
  const listContainer = document.querySelector("#list");
  films.map((film) => {
    const markup = `
    
    <li>${film.title}</li>

     `;

    listContainer.insertAdjacentHTML("afterbegin", markup);
    movies(films[0]);
    const movieList = listContainer.querySelector("li");
    movieList.addEventListener("click", () => {
      movies(film);
    });
  });
}

let info = document.querySelector("#details");
function movies(film) {
  info.innerHTML = "";

  // inner.HTML containing the card  body and each and every specific portion that the card details are supposed to be presented
  info.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card" style="width: 18rem ;">
                <img src="${film.poster}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${film.title}</h5>
                  <p class="card-text">Runtime:  ${film.runtime}</p>
                  <p class="card-text">${film.description}</p>
                  <p class="card-text">Time:  ${film.showtime}</p>
                  <p id="capacity">capacity: ${film.capacity}</p>
                  <p id="ticketsSold">tickets sold: ${film.tickets_sold}</p>
                  <p class="card-text" id="availableTickets"> Available tickets: ${
                    film.capacity - film.tickets_sold
                  }</p>
                  <button type="button" id="ticketBtn"class="btn btn-dark">Buy ticket</button>
  
        
                  </div>
                </div>
            
  
    `
  );
// event listener addeded mainly to target the ticketBtn
  const button = info.querySelector("#ticketBtn");

  button.addEventListener("click", () => {
    buyTicket(film);
  });
}

// The function that reduces the number of tickets once the tickets are bought from the theatre

function buyTicket(movie) {
  const button = info.querySelector("#ticketBtn");
  const tickectsSold = info.querySelector("#ticketsSold");
  const availableTicketsDisplay = info.querySelector("#availableTickets");
  let availableTickets = movie.capacity - movie.tickets_sold;

  if (availableTickets > 0) {
    movie.tickets_sold++;
    availableTickets--;
  } else {
    button.innerHTML = "Sold out";
  }

  tickectsSold.innerHTML = `tickets sold: ${movie.tickets_sold}`;
  availableTicketsDisplay.innerHTML = `available tickets: ${availableTickets}`;
}


