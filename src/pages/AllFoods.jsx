import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [sortCategory, setSortCategory] = useState("Default");
  const [allProducts, setAllProducts] = useState(products);

  // Pagination
  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = allProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(allProducts.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    // Searched Product
    function searchedProduct() {
      let tab = products.filter((item) => {
        if (searchTerm === "") return true;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase()))
          return true;
        return false;
      });
      return tab;
    }
    // Sort products
    let tab = searchedProduct();
    if (sortCategory === "ascending") {
      tab = tab.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortCategory === "descending") {
      tab = tab.sort((a, b) => b.title.localeCompare(a.title));
    }
    if (sortCategory === "high-price") {
      tab = tab.sort((a, b) => b.price - a.price);
    }
    if (sortCategory === "low-price") {
      tab = tab.sort((a, b) => a.price - b.price);
    }
    setAllProducts(tab);
  }, [sortCategory, searchTerm]);

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between ">
                <input
                  type="text"
                  placeholder="i'm looking for..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
              <div className="sorting__widget text-end">
                <select
                  className="w-50"
                  onChange={(e) => setSortCategory(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>

            {displayPage.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                <ProductCard item={item} />
              </Col>
            ))}

            <div className="">
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="pagination__btns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
