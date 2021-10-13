let movie = document.getElementById('movies');
let bookmarkedmovies = document.getElementById('bookmarkedmovies');
let search = document.getElementById('search');
let bookmarked = [];
var finalMovies;

search.addEventListener('click', e => {

  movie.innerHTML = ''

  // search pattern
  let pattern = new RegExp(`${movieName.value}`, 'gi')
  // filter by movie name
  finalMovies = movies.filter(item => pattern.test(item.title))
  // filter by rating
  let ratingScale = document.getElementById('rating').value

  if (ratingScale >= 0 && ratingScale <= 10) {
    finalMovies = finalMovies.filter(e => e.imdbRating >= ratingScale)
  } else {
    alert("To'g'ri qiymat kiriting!")
    return
  }

  // filter by category
  let movieCategory = document.getElementById('category').value
  if (movieCategory) {
    finalMovies = finalMovies.filter(e => e.categories.includes(movieCategory))
  }

  
  if(selectType){
    if(selectType.value == 'yearLow'){
      finalMovies.sort((a, b) => a.year - b.year)
    }

    if(selectType.value == 'yearHigh'){
      finalMovies.sort((a, b) => b.year - a.year)
    }

    if(selectType.value == 'ratingLow'){
      finalMovies.sort((a, b) => a.imdbRating - b.imdbRating)
    }

    if(selectType.value == 'ratingHigh'){
      finalMovies.sort((a, b) => b.imdbRating - a.imdbRating)
    }

    if(selectType.value == 'nameA'){
      finalMovies.sort((a, b) => a.title.localeCompare(b.title))
    }
    if(selectType.value == 'nameZ'){
      finalMovies.sort((a, b) => b.title.localeCompare(a.title))
    }
  }
  
  result.textContent = finalMovies.length
      
  finalMovies.forEach((item, i) => {

    // card
    let CARD = document.createElement('LI')
    CARD.classList.add('card', 'col-6', 'pt-3')
    movie.appendChild(CARD)

    // image
    let IMAGE = document.createElement('img')
    IMAGE.width = 400
    IMAGE.height = 180
    IMAGE.classList.add('card-img-top', 'img-fluid')
    IMAGE.src = item.smallThumbnail
    CARD.appendChild(IMAGE)

    // card-body
    let CARDBODY = document.createElement('DIV')
    CARDBODY.classList.add('card-body')

    // movie name
    let MOVIENAME = document.createElement('H4')
    MOVIENAME.classList.add('h4', 'text-truncate')
    MOVIENAME.textContent = item.title
    CARDBODY.appendChild(MOVIENAME)

    // movie year
    let MOVIEYEAR = document.createElement('H6')
    MOVIEYEAR.classList.add('h6')
    MOVIEYEAR.textContent = item.year
    CARDBODY.appendChild(MOVIEYEAR)

    // movie rating
    let MOVIERATING = document.createElement('H6')
    MOVIERATING.classList.add('h6')
    MOVIERATING.textContent = item.imdbRating
    CARDBODY.appendChild(MOVIERATING)

    // movie categories
    let CATEGORIES = document.createElement('H6')
    CATEGORIES.classList.add('h6','text-truncate')
    CATEGORIES.textContent = item.categories.join(', ').toLowerCase()
    CARDBODY.appendChild(CATEGORIES)

    // trailer
    let TRAILER = document.createElement('a')
    TRAILER.classList.add('btn', 'btn-outline-primary', 'btn-small')
    TRAILER.textContent = 'Trailer'
    TRAILER.target = '_blank'
    TRAILER.href = 'https://youtube.com/watch?v=' + item.youtubeId
    CARDBODY.appendChild(TRAILER)

    // more info
    let MORE = document.createElement('a')
    MORE.classList.add('btn', 'btn-outline-secondary', 'text-nowrap', 'btn-small', 'mx-2')
    MORE.id = 'modalOpener'
    MORE.textContent = 'More Info'
    CARDBODY.appendChild(MORE)

    // bookmark
    let BOOKMARK = document.createElement('a')
    BOOKMARK.classList.add('btn', 'btn-outline-success', 'btn-small')
    BOOKMARK.textContent = 'Bookmark'
    BOOKMARK.dataset.id = i
    console.log();
    CARDBODY.appendChild(BOOKMARK)

    // add body to card
    CARD.appendChild(CARDBODY);

    
  })

})

movie.addEventListener('click', e =>{
  const a = Number(e.target.dataset.id);
  let addMovies = arr => {

      let bookmarkedMovie = document.createElement('li');
      bookmarkedmovies.appendChild(bookmarkedMovie);

      let wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'p-2 border-top border-4 border-dark');
      bookmarkedMovie.appendChild(wrapper);

      let movieName = document.createElement('p');
      movieName.setAttribute('class', 'h4');
      movieName.textContent = arr[arr.length - 1];
      wrapper.appendChild(movieName);

      let buttonWrapper = document.createElement('div');
      wrapper.appendChild(buttonWrapper);

      let remove = document.createElement('button');
      remove.setAttribute('type', 'button');
      remove.setAttribute('id', 'remove')
      remove.setAttribute('class', 'btn btn-danger');
      remove.textContent = 'Remove'
      buttonWrapper.appendChild(remove);
  }
  if(!bookmarked.includes(finalMovies[a].title)){
      bookmarked.push(finalMovies[a].title);
      addMovies(bookmarked);
  }
  
})

bookmarkedmovies.addEventListener('click', e=> {
  let b = Number(e.target.dataset.id);
  console.log(e.target);
  if (e.target.matches('#remove')) {
      
      bookmarked.splice(b,1);
      e.target.parentNode.parentNode.remove();
  }
  
})
