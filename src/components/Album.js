import React, { useEffect } from 'react'
import news from './news'


function Album() {
  useEffect(function(){
    fetch("http://127.0.0.1:8000/posts/").then((res) => res.json()).then((data) => console.log(data))
  })
  return (

<>
      
    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {news.map((n) =>
          <div class="col" key={n.id}>
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <h3>{n.title}</h3>
                <p class="card-text">{n.text}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small class="text-body-secondary">{n.dated}</small>
                </div>
              </div>
            </div>
          </div>
          )}
      </div>
    </div>
  </div>
</>
  )
}

export default Album