import React from "react";
import "../Styles/Categories.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-container container mt-4">
      <h3 style={{ textAlign: "center", color: "orange" }}>Categories</h3>
      <div className="row" id="categories">
        <div className="col-md-6">
          <div className="card">
            <Link to="/fashion" style={{ textDecoration: "none" }}>
              {" "}
              <img
                src={
                  "https://m.economictimes.com/thumb/msid-59012262,width-1200,height-900,resizemode-4,imgsize-142017/men-prefer-shopping-for-curated-looks-over-individual-products.jpg"
                }
                className="card-img-top"
                alt="Fashion"
              />
              <div className="card-body">
                <h1 className="card-title">Fashion</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-6" style={{ float: "right" }}>
          <div className="card">
            <Link to="/gadgets" style={{ textDecoration: "none" }}>
              <img
                src={
                  "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0fGVufDB8fDB8fHww"
                }
                className="card-img-top"
                alt="Gadgets"
              />
              <div className="card-body">
                <h1 className="card-title">Gadgets</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
