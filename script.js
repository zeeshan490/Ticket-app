let allFilters= document.querySelectorAll(".filter");
let ticketContainer = document.querySelector(".ticket-container");

for (let i = 0 ; i<allFilters.length ; i++){
    allFilters[i].addEventListener("click", selectFilter);
}

function selectFilter(e){
    let filterSelected = e.target.classList[1];
    ticketContainer.classList.add(filterSelected);
    if(ticketContainer.classList.length>1){
        ticketContainer.classList.remove(ticketContainer.classList[1])
    }
    ticketContainer.classList.add(filterSelected);
}

    

