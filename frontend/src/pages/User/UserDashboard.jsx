import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBookMedical,
  faHospital,
  faProcedures,
  faSmile,
  faUser,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";

const UserDashboard = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2">
            <Navbar />
          </div>
          {/* <!-- Home Section Start --> */}
          <section class="main-content bg-yellow" id="home">
            <div class="container">
              <div class="row min-vh-100 align-items-center text-center text-md-left">
                <div class="col-md-6 pr-md-5" data-aos="zoom-in">
                  <img
                    src="../assets/images/home-img.svg"
                    class="img-fluid"
                    alt=""
                    style={{
                      borderRadius: "8px",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.1)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>

                <div class="col-md-6 pl-md-5 content" data-aos="fade-left">
                  <h1>
                    <span>Stay</span> safe, <span>stay</span> healthy.
                  </h1>
                  <h3>Caring for you.</h3>
                  <a href="/login" class="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Home Section End --> */}

          {/* <!-- About Section Start --> */}
          <section className="bg-light" id="about">
            <div className="container">
              <div className="row min-vh-100 align-items-center">
                <div className="col-md-6  content " data-aos="fade-right">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={faUserDoctor} /> Doctor's Details
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, quis.
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4">
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={faProcedures} /> Emergency Rooms
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, quis.
                      </p>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-body">
                      <h3 className="card-title">
                        <FontAwesomeIcon icon={faBookMedical} /> Booking
                        Appointments
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque, quis.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-md-6 d-none d-md-block"
                  data-aos="fade-left"
                >
                  <img
                    src="../assets/images/option.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* <!-- About Section End -->

    <!-- Facility Section Start --> */}
          <section class="facility" id="facility">
            <div class="container">
              <h1 class="heading">
                <span>'</span> Our Facilities <span>'</span>
              </h1>
              {/* Image 1 */}
              <div class="row">
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img1.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img1.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
                {/* Image 2 */}
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img2.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img2.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
                {/* Image 3 */}
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img3.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img3.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
                {/* Image 4 */}
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img4.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img4.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
                {/* Image 5 */}
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img5.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img5.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
                {/* Image 6 */}
                <div class="col-md-4 mb-4" data-aos="zoom-in">
                  <a
                    href="../assets/facilities_images/img6.jpg"
                    title="Our Clinic"
                    class="popup-link"
                  >
                    <img
                      src="../assets/facilities_images/img6.jpg"
                      class="img-fluid"
                      alt=""
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease-in-out",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Facility Section End -->

    <!-- Counter Section Start --> */}
          <section className="counter " style={{ backgroundColor: "#808080" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-3 mb-4" data-aos="fade-up">
                  <FontAwesomeIcon icon={faHospital} />
                  <span>120+</span>
                  <h3>Hospitals</h3>
                </div>

                <div className="col-md-3" data-aos="fade-up">
                  <FontAwesomeIcon icon={faUser} />
                  <span>100+</span>
                  <h3>Staffs</h3>
                </div>

                <div className="col-md-3" data-aos="fade-up">
                  <FontAwesomeIcon icon={faSmile} />
                  <span>1200+</span>
                  <h3>Patients</h3>
                </div>

                <div className="col-md-3" data-aos="fade-up">
                  <FontAwesomeIcon icon={faProcedures} />
                  <span>130+</span>
                  <h3>Bed Facilities</h3>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Counter Section End -->

    <!-- Contact Section Start --> */}
          <section className="contact bg-light" id="contact">
            <div className="container">
              <div className="row min-vh-100 align-items-center">
                <div className="col-md-6  content " data-aos="fade-right">
                  <div className="card-body shadow-sm p-3 mb-5 bg-body rounded">
                    <h3 className="card-title">Get In Touch</h3>
                    <p className="card-text">
                      Whether you’re interested in a live product demonstration
                      or just want to learn more about our products, don’t
                      hesitate to reach out. Our friendly and knowledgeable team
                      are always more than happy to lend a hand.
                    </p>
                  </div>
                  <div className="contact-details">
                    <div className="email">
                      <h3>Email:</h3>
                      <p>info@example.com</p>
                    </div>

                    <div className="phone">
                      <h3>Contact:</h3>
                      <p>+977 9876543231</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-6 d-none d-md-block"
                  data-aos="fade-left"
                >
                  <img
                    src="../assets/images/home.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Contact Section End -->

    

    <!-- Footer Section Start --> */}
          <section class="footer bg-dark text-light">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <a href="#" class="navbar-brand">
                    <img
                      src="../assets/images/logo.png"
                      style={{
                        width: "80px",
                        marginLeft: "-100px",
                      }}
                    />
                  </a>
                  <p>
                    Health Care website is a vital online platform, offering
                    medical information, appointment scheduling, to enhance
                    health literacy, communication between patients and
                    healthcare providers, and overall patient-centered wellness.
                  </p>
                </div>

                <div
                  class="col-md-4 text-center aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h3 class="me-3">Links</h3>
                  <div class="row">
                    <a href="/" class="text-decoration-none text-white">
                      Home
                    </a>

                    <a href="#about" class="text-decoration-none text-white">
                      About
                    </a>

                    <a href="#facility" class="text-decoration-none text-white">
                      Facility
                    </a>

                    <a href="#contact" class="text-decoration-none text-white">
                      Contact
                    </a>
                  </div>
                </div>

                <div
                  class="col-md-4 text-center aos-init aos-animate"
                  data-aos="fade-left"
                >
                  <h3>Share</h3>
                  <div className="row">
                    <a
                      href="https://www.facebook.com"
                      class="text-decoration-none text-white"
                    >
                      <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                    <a
                      href="https://www.instagram.com"
                      class="text-decoration-none text-white"
                    >
                      <FontAwesomeIcon icon={faInstagram} /> Instagram
                    </a>
                    <a
                      href="https://www.github.com/"
                      class="text-decoration-none text-white"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h1 class="credit text-center mx-auto">
              Created by <span>Health Care</span> | All Rights Reserved.
            </h1>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
