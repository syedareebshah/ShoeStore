import '../App.css'

function Home() {
  return (
    <div>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1556048219-bb6978360b84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" className="img d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Online Shoe Store</h5>
              <p>An Online Shoe Store for Best Quality Shoes</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/432289-10-Best-Running-Shoes-for-Men-1296x728-Header.jpg?w=1155&h=1528" className="img d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Best Quality</h5>
              <p>Quality Shoes just a click away</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://sneakernews.com/wp-content/uploads/2017/03/nike-vapormax-where-to-buy.jpg" className="d-block w-100" className="img d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shoe Sale</h5>
              <p>Shoes sale for best shoes in less price</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>

  );
}

export default Home;
