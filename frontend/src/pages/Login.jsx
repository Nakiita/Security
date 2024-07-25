import React, { useState } from "react";
import { loginApi } from "../apis/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // make change function
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    //Api Call
    loginApi(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // set token and user data in local storage
          localStorage.setItem("token", res.data.token);

          // Converting incoming json
          const convertedJson = JSON.stringify(res.data.userData);
          localStorage.setItem("user", convertedJson);

          // Redirect to homepage

          // navigate("/admin");
           if (res.data.userData.isAdmin) {
             // Redirect to admin page
             navigate("/admin");
           } else {
             // Redirect to homepage
             navigate("/homepage");
           }
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Server Error!");
      });
  };

  return (
    <>
      <section class="row min-vh-100 align-items-center">
        <div class="container py-5 d-flex justify-content-center">
          <div class="col col-md-10 col-sm-12 col-lg-8">
            <div class="card d-flex align-items-center shadow-lg">
              <div class="row">
                <div class="col-md-6 col-lg-6 order-md-1 order-lg-1 mb-4">
                  <img
                    src="https://i.pinimg.com/564x/ce/9f/ee/ce9fee247e915e7445b2cf0f6f35d01f.jpg"
                    alt="login image"
                    class="img-fluid"
                    style={{ marginTop: 20 }}
                  />
                </div>

                <div>
                  <a
                    className="position-absolute top-0 end-0 m-2 text-black"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    <FontAwesomeIcon icon={faClose} />
                  </a>
                </div>
                <div class="col-md-6 col-lg-6 order-lg-3 d-flex align-items-center">
                  <div class="card-body p-5 p-lg-5 text-black">
                    <form>
                      <div class="mb-4 d-flex justify-content-center">
                        <i class="fas fa-cubes fa-2x me-2"></i>
                      </div>

                      <h3 class="fw-bold d-flex justify-content-center mb-4">
                        Log In!!!
                      </h3>

                      <div class="form-outline mb-3">
                        <label class="form-label">Email address</label>
                        <input
                          onChange={changeEmail}
                          type="email"
                          class="form-control form-control-lg border-2 border-black"
                        />
                      </div>

                      <div class="form-outline mb-3">
                        <label class="form-label">Password</label>
                        <input
                          onChange={changePassword}
                          type="password"
                          class="form-control form-control-lg border-2 border-black"
                        />
                      </div>

                      <a
                        href="/forgotPassword"
                        class="text-decoration-none text-black ms-2 mb-2"
                      >
                        Forgot password?
                      </a>

                      <div class="pt-1 mb-3 d-flex text-center justify-content-center">
                        <button
                          onClick={handleSubmit}
                          className="btn w-50 mb-2 btn btn-dark"
                          type="button"
                        >
                          Login
                        </button>
                      </div>

                      <p class="mb-2 d-flex justify-content-center">
                        Don't have an account?
                        <a
                          href="/register"
                          class="text-decoration-none text-black ms-1"
                        >
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
