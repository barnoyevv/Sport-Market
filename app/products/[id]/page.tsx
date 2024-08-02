'use client'

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Grid,
  CardMedia,
  Divider,
} from "@mui/material";
import { useParams } from "next/navigation";
import { Tag } from "antd";
import { getProductId } from "@/service/products.service";

interface Product {
  product_id: string;
  product_name: string;
  image_url: string[];
  description: string;
  made_in: string;
  color: string[];
  size: string[];
  count: number;
  cost: number;
  discount: number;
  age_min: number;
  age_max: number;
  for_gender: string;
  category: string;
}

const SinglePage: React.FC = () => {
  const {product_id} = useParams();
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductId(product_id);
        setProductData(response);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  if (!productData) {
    return (
      <div
        className="loading-container"
        style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Grid container spacing={2} justifyContent="center" style={{ padding: "20px" }}>
        <Grid item xs={12} md={10}>
          <Card
            style={{
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {productData.image_url && (
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        {productData.image_url.map((_, index) => (
                          <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                      <div className="carousel-inner">
                        {productData.image_url.map((url, index) => (
                          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                            <CardMedia
                              component="img"
                              height="auto"
                              image={url}
                              alt={`Product Image ${index + 1}`}
                              style={{
                                borderRadius: "10px",
                                marginBottom: "10px",
                              }}
                            />
                          </div>
                        ))}
                      </div>
                      <button
                        className="carousel-control-prev custom-carousel-control"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon custom-carousel-control-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next custom-carousel-control"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon custom-carousel-control-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h4"
                    component="div"
                    gutterBottom
                    style={{ color: "#3f51b5" }}
                  >
                    {productData.product_name}
                  </Typography>
                  <Divider style={{ marginBottom: "10px" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Description:</strong> {productData.description}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Made In:</strong> {productData.made_in}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Color:</strong> {productData.color.join(", ")}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Size:</strong> {productData.size.join(", ")}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Count:</strong> {productData.count}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Cost:</strong> ${productData.cost}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Discount:</strong> {productData.discount}%
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>Age Range:</strong> {productData.age_min} - {productData.age_max} years
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    <strong>For Gender:</strong> {productData.for_gender}
                  </Typography>
                  <Divider style={{ margin: "10px 0" }} />
                  <Tag color="blue" style={{ margin: "10px 0" }}>
                    {productData.category}
                  </Tag>
                  <Divider style={{ margin: "10px 0" }} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SinglePage;
