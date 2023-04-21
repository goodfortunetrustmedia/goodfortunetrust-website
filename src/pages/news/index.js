import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useState, useEffect } from "react";

function Index() {
  const [category, setCategory] = useState(null);

  const data = useStaticQuery(graphql`
    {
      allContentfulNewsPost {
        edges {
          node {
            title
            blogImage {
              url
            }
            category
            date
          }
        }
      }
    }
  `);

  const posts = data.allContentfulNewsPost.edges
    .map((e) => {
      const { title, blogImage, category, date } = e.node;
      return {
        title,
        blogImage,
        category,
        date,
      };
    })
    .sort((a, b) => {
      return a.date <= b.date ? 1 : -1; // sort descending date
    });

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">News</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
              <span className="fw-bold">Filter by Category:</span>
              <button className={`btn ${category === null ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory(null)}>
                All News
              </button>
              <button className={`btn ${category === "Khensur Rinpoche" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("Khensur Rinpoche")}>
                Khensur Rinpoche
              </button>
              <button className={`btn ${category === "Good Fortune Trust" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("Good Fortune Trust")}>
                Good Fortune Trust
              </button>
              <button className={`btn ${category === "TKSL" ? "btn-dark" : "btn-outline-dark"}`} onClick={() => setCategory("TKSL")}>
                TKSL
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            {posts.map((post, idx) => {
              if (category === null || post.category === category) {
                return (
                  <Link key={idx} to={`/news/${post.title.toLowerCase().replace(/ /g, "-")}`} className="text-decoration-none">
                    <div className="m-3 p-3 border border-2 rounded-2 bg-light text-dark">
                      <div className="d-flex flex-column justify-content-center align-items-center gap-3 d-md-flex flex-md-row align-items-md-start justify-content-md-start">
                        <img src={post.blogImage.url} style={{ objectFit: "cover", width: "150px", height: "150px" }} />
                        <div className="d-flex flex-column gap-1">
                          <h1 className="">{post.title}</h1>
                          <span className="fst-italic">Category: {post.category}</span>
                          <span className="">Date: {post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
