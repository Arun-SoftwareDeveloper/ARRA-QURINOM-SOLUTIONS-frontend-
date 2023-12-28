import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Bill.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Bill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedProduct = location.state?.selectedProduct;
  const [billData, setBillData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (selectedProduct) {
      // Simulate bill generation locally
      const simulatedBillData = {
        subtotal: selectedProduct.price,
        tax: selectedProduct.price * 0.1, // Assuming 10% tax
        total: selectedProduct.price * 1.1, // Subtotal + Tax
      };

      setBillData(simulatedBillData);
    }

    // Hide the bill after 10 seconds and navigate to "/"
    const timerId = setTimeout(() => {
      setIsVisible(false);
      navigate("/"); // Navigate to the home route
    }, 10000);

    return () => clearTimeout(timerId);
  }, [selectedProduct, navigate]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text("Invoice", 20, 10);
    doc.autoTable({
      head: [["ID", "Description", "Amount"]],
      body: [
        [
          selectedProduct?.id,
          selectedProduct?.name,
          `₹${selectedProduct?.price.toFixed(2)}`,
        ],
      ],
      foot: [
        ["Subtotal", "", getFormattedValue(billData?.subtotal)],
        ["Tax", `(10%)`, getFormattedValue(billData?.tax)],
        ["Total", "", getFormattedValue(billData?.total)],
      ],
    });

    // Save the PDF to the user's device
    doc.save("invoice.pdf");
  };

  const getFormattedValue = (value) => {
    return typeof value === "number" ? `₹${value.toFixed(2)}` : "";
  };

  if (!selectedProduct || !isVisible) {
    return null;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Invoice</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.id}</td>
            <td>{selectedProduct.name}</td>
            <td>
              ₹
              {selectedProduct.price &&
                Number(selectedProduct.price).toFixed(2)}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Subtotal</td>
            <td>{getFormattedValue(billData?.subtotal)}</td>
          </tr>
          <tr>
            <td colSpan="2">Tax ({(10).toFixed(0)}%)</td>
            <td>{getFormattedValue(billData?.tax)}</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>{getFormattedValue(billData?.total)}</td>
          </tr>
        </tfoot>
      </table>

      <div className="mt-4">
        {/* Download PDF button */}
        <button className="btn btn-primary ml-2" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Bill;
