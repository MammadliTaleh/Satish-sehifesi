"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../cardComponents/Card"
import "./CardList.css";

const CardList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Məlumatın Yüklənməsində Problem Yaşandı");
        }
        const data = await response.json();
        setProducts(data);
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

  return (
    <div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="swiper-container"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Card item={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardList;
