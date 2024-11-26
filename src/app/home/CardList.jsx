"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Card from "./Card";
import ProductModal from "./ProductModal";
import "./CardList.css";

const CardList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Məlumatın Yüklənməsində Problem Yaşandı");
        }
        const data = await response.json();
        setProducts(data.slice(0, 20)); // Limit to 20 products
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Məlumat Yüklənir...</p>;
  if (error) return <p>Məlumatın Yüklənməsində Problem Yaşandı: {error}</p>;

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Bölünmüş məhsullar
  const recommendedProducts = products.slice(0, 10); // Bəyənə biləcəklərin
  const bestSellers = products.slice(10, 20); // Ən çox satılanlar

  return (
    <div>
      <div className="section section-favorites">
        <h2>Bəyənə biləcəklərin</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="swiper-container"
          breakpoints={{
            1025: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            0: { slidesPerView: 1, spaceBetween: 5 },
          }}
        >
          {recommendedProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Card item={product} addToCart={addToCart} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="section section-best-saller">
        <h2>Ən çox satılanlar</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="swiper-container"
          breakpoints={{
            1025: { slidesPerView: 5, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            480: { slidesPerView: 2, spaceBetween: 10 },
            0: { slidesPerView: 1, spaceBetween: 5 },
          }}
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <Card item={product} addToCart={addToCart} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          closeModal={closeModal}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default CardList;
