import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home4() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>HairCut - Hair Salon HTML Template</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="" name="keywords" />
      <meta content="" name="description" />
      {/* Favicon */}
      <link href="img/favicon.ico" rel="icon" />
      {/* Google Web Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Oswald:wght@600&display=swap" rel="stylesheet" />
      {/* Customized Bootstrap Stylesheet */}
      <link href="css/style.css" rel="stylesheet" />

      {/* Spinner Start */}
      <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0 text-primary text-uppercase">
            <i className="fa fa-cut me-3" />
            HairCut
          </h1>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="team.html" className="dropdown-item">Our Barber</a>
                <a href="open.html" className="dropdown-item">Working Hours</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <a href="" className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3" /></a>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: 900 }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">We Will Keep You An Awesome Look</h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-map-marker-alt text-primary me-3" />
                    123 Street, New York, USA
                  </h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    +012 345 67890
                  </h4>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: 900 }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">Luxury Haircut at Affordable Price</h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-map-marker-alt text-primary me-3" />
                    123 Street, New York, USA
                  </h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                    <i className="fa fa-phone-alt text-primary me-3" />
                    +012 345 67890
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img className="img-fluid w-75 align-self-end" src="img/about.jpg" alt="" />
                <div className="w-50 bg-secondary p-5" style={{ marginTop: "-25%" }}>
                  <h1 className="text-uppercase text-primary mb-3">25 Years</h1>
                  <h2 className="text-uppercase mb-0">Experience</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">About Us</p>
              <h1 className="text-uppercase mb-4">More Than Just A Haircut. Learn More About Us!</h1>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
              <div className="row g-4">
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">Since 1990</h3>
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">1000+ clients</h3>
                  <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      
      {/* Back to Top */}
      <a href="#" className="btn btn-primary py-3 fs-4 back-to-top">
        <i className="bi bi-arrow-up" />
      </a>

      {/* Bootstrap Bundle with Popper */}
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
