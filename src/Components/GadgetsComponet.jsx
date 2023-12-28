import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Modal, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";
import FooterContainer from "./FooterContainer";
import Gadgets from "../Products/Gadgets/Gadgets";
import AboutContainer from "./AboutContainer";
import backendApi from "../BackendServerApi";

const GadgetsComponent = () => {
  const [products, setProducts] = useState(Gadgets);
  const [sortOption, setSortOption] = useState("relevance");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const navigate = useNavigate();

  const filterProducts = (searchQuery) => {
    const filteredProducts = Gadgets.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedCategory !== "") {
      setProducts(
        filteredProducts.filter(
          (product) => product.category === selectedCategory
        )
      );
    } else if (selectedBrand !== "") {
      setProducts(
        filteredProducts.filter((product) => product.brand === selectedBrand)
      );
    } else {
      setProducts(filteredProducts);
    }
  };

  const handleFilterByPrice = () => {
    let filteredProducts = [...Gadgets];

    if (minPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= parseInt(minPrice, 10)
      );
    }

    if (maxPrice !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= parseInt(maxPrice, 10)
      );
    }

    if (selectedCategory !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedBrand !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.brand === selectedBrand
      );
    }

    setProducts(filteredProducts);
    handleCloseFilterModal();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const generateProductCards = () => {
    const sortedProducts = sortProducts(sortOption);

    return sortedProducts.map((product, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div
            id={`productCarousel${index}`}
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {product.images.map((image, i) => (
                <div
                  key={i}
                  className={`carousel-item${i === 0 ? " active" : ""}`}
                >
                  <img
                    src={image}
                    className="d-block w-100"
                    alt={`Image ${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text price">Price: ₹{product.price}</p>
            <p className="card-text">{product.description}</p>
            <button
              className="btn btn-success ml-2"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const sortProducts = (option) => {
    let sortedProducts = [...products];
    switch (option) {
      case "relevance":
        //  relevant sorting logic
        break;
      case "highest":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "lowest":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    return sortedProducts;
  };

  const handleSortChange = (option) => setSortOption(option);

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setRecipientEmail("");
    handleShowBuyNowModal();
  };

  const handleBuyNowSubmit = async () => {
    try {
      // Assuming order creation is successful, navigate to bill
      navigate(`/bill`, {
        state: {
          selectedProduct,
        },
      });

      handleCloseBuyNowModal();
      toast.success("Order Placed Successfully");
    } catch (error) {
      console.error("Error creating order: ", error);
      toast.error("Failed to Place Order");
    }
  };

  const handleCloseFilterModal = () => setShowFilterModal(false);

  const handleShowFilterModal = () => setShowFilterModal(true);

  const handleCloseBuyNowModal = () => setShowBuyNowModal(false);

  const handleShowBuyNowModal = () => setShowBuyNowModal(true);

  return (
    <div className="container mt-4">
      <AboutContainer />

      <SearchBar onSearch={filterProducts} />

      <div className="btn-group mt-2">
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "relevance" ? "active" : ""
          }`}
          onClick={() => handleSortChange("relevance")}
        >
          Relevance
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "highest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("highest")}
        >
          Price (Highest First)
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${
            sortOption === "lowest" ? "active" : ""
          }`}
          onClick={() => handleSortChange("lowest")}
        >
          Price (Lowest First)
        </button>
        <Button
          className="btn btn-primary ml-2"
          onClick={handleShowFilterModal}
        >
          Filter by Price
        </Button>
      </div>

      <div className="mt-2"></div>

      <Modal show={showFilterModal} onHide={handleCloseFilterModal}>
        <Modal.Header closeButton>
          <Modal.Title>Filter by Price</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="minPrice">Min Price:</label>
            <input
              type="number"
              className="form-control"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="maxPrice">Max Price:</label>
            <input
              type="number"
              className="form-control"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFilterModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFilterByPrice}>
            Apply Filters
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showBuyNowModal} onHide={handleCloseBuyNowModal}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Selected Product: {selectedProduct && selectedProduct.name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseBuyNowModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleBuyNowSubmit}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="row" id="productList">
        {generateProductCards()}
      </div>

      <FooterContainer />
    </div>
  );
};

export default GadgetsComponent;
