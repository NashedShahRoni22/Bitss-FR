import { Link } from "react-router";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Oops! It seems you&apos;re lost 😕</h3>

                <p>The page you&apos;re looking for isn&apos;t available.</p>

                <button>
                  <Link to="/" className="link_404">
                    Return to Home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
