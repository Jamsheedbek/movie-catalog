var movie = document.getElementById('movies');
var bookmarkedmovies = document.getElementById('bookmarkedmovies');
var bookmarked = [];

for(var i=0; i<10; i++){
    var card = document.createElement('li');
    card.setAttribute('class', 'col-6 mb-4');
    movie.appendChild(card);

    var cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('class', 'card');
    // cardWrapper.setAttribute('style', 'width: 18rem;');
    card.appendChild(cardWrapper);

    var cardImage = document.createElement('img');
    cardImage.setAttribute('src', 'https://picsum.photos/id/'+ i +'/200/150');
    cardImage.setAttribute('class', 'card-img-top');
    cardWrapper.appendChild(cardImage);

    var cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    cardWrapper.appendChild(cardBody);

    var cardTitle = document.createElement('h5');
    cardTitle.setAttribute('class', 'card-title text-truncate');
    cardTitle.textContent = movies[i].Title;
    cardBody.appendChild(cardTitle);

    var cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = movies[i].movie_year;
    cardBody.appendChild(cardText);

    var cardText = document.createElement('p');
    cardText.setAttribute('class', 'card-text');
    cardText.textContent = movies[i].imdb_rating;
    cardBody.appendChild(cardText);

    var watchTrailer = document.createElement('button');
    watchTrailer.setAttribute('class', 'btn btn-outline-primary p-2 me-3');
    watchTrailer.setAttribute('type', 'button');
    watchTrailer.setAttribute('id', 'watchTrailer');
    watchTrailer.textContent = 'Watch trailer';
    cardBody.appendChild(watchTrailer);

    var moreInfo = document.createElement('button');
    moreInfo.setAttribute('class', 'btn btn-outline-secondary p-2 me-3');
    moreInfo.setAttribute('type', 'button');
    moreInfo.setAttribute('id', 'moreInfo');
    moreInfo.textContent = 'More info';
    cardBody.appendChild(moreInfo);

    var bookmark = document.createElement('button');
    bookmark.setAttribute('class', 'btn btn-outline-success p-2');
    bookmark.setAttribute('type', 'button');
    bookmark.setAttribute('id', 'bookmark');
    bookmark.textContent = 'Bookmark';
    bookmark.dataset.id = i;
    cardBody.appendChild(bookmark);
}


movie.addEventListener('click', function(e){
    var a = Number(e.target.dataset.id);
    console.log(a)
    function addMovies(arr) {
        for (var i = 0; i < 1; i++) {
            
            var bookmarkedMovie = document.createElement('li');
            bookmarkedmovies.appendChild(bookmarkedMovie);

            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'p-2 border border-2');
            bookmarkedMovie.appendChild(wrapper);

            var movieName = document.createElement('p');
            movieName.setAttribute('class', 'h4');
            movieName.textContent = arr[arr.length -1];
            wrapper.appendChild(movieName);

            var buttonWrapper = document.createElement('div');
            wrapper.appendChild(buttonWrapper);

            var remove = document.createElement('button');
            remove.setAttribute('type', 'button');
            remove.setAttribute('id', 'remove')
            remove.setAttribute('class', 'btn btn-danger');
            remove.dataset.id = i;
            remove.textContent = 'Remove'
            buttonWrapper.appendChild(remove);
            
        }
    }
    var b = bookmarked.length+1;
    for(var i=0; i <b; i++){
        if(bookmarked.length==0){
            bookmarked.push(movies[a].Title);
        }else if(bookmarked[i]!=movies[a].Title){
            bookmarked.push(movies[a].Title)
        }
    }
    console.log(bookmarked[0]!=movies[a].Title)
    console.log(bookmarked);


    addMovies(bookmarked);
})

bookmarkedmovies.addEventListener('click', function (e) {
    var b = Number(e.target.dataset.id);
    // console.log(b)
    if (e.target.matches('#remove')) {

    bookmarked.splice(b,1);
    e.target.parentNode.parentNode.remove();
    }
    console.log(bookmarked)
  })
