import reddit from './redditApi';
const searchForm = document.getElementById('search');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (e) => {
    // Get search
  const searchTerm = searchInput.value;
  //Get search form
  const sortBy = document.querySelector('input[name="sortby"]:checked').value;

  //get search limit

  const searchLimit = document.getElementById('limit').value;
  console.log(searchLimit);

  // check input

  if( searchTerm === ''){

   //show Message
   showMessage('please add a search term', 'alert-danger');

  }
  // Search input

  reddit.search(searchTerm, searchLimit, sortBy).then
  (results =>{
      let output = '<div classs="card-columns">';
      //loop through posts
      results.forEach(post => {

        let image = post.review ? post.review.images[0]
        .source.url : 'image'


          output +=`<div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext,100)}</p>
            <a href="${post.url}" target=_blank class="btn btn-primary">Read More</a>
            <hr>
            <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>`;
      });
      output +='</div>';
      document.getElementById('results').innerHTML = output;

  })
  e.preventDefault();
});

// Show message

function showMessage( message, className) {

    // create div
    const div = document.createElement('div');

    // Add classes
    div.className = `alert${className}`
    
    // Add text

    div.appendChild(document.createTextNode(message));

    //get parent 

    const searchContainer = document.getElementById('search-container');

    const search = document.getElementById('search');
  //Insert Message

  searchContainer.insertBefore( div, search);

  // set timeout

   setTimeout(() => document.querySelector('.alert').remove(),4000)
}

function truncateText(text, limit){
    const shortened = text.indexOf('', limit);
    if(shortened == -1) return text;
    return text.substring(0, shortened);
}