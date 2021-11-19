const search = function(){
    const searchInput = document.querySelector('.search-block > input');
    const btnInput = document.querySelector('.search-block > button');
    let search = null;

    searchInput.addEventListener('input', (event) => {
        search =  event.target.value;
    })
    btnInput.addEventListener('click', () => {
        console.log(search);
    })
}

search()