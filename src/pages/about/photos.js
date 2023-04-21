import React from "react";
import Layout from "../../components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";

function Photos() {
  const data = useStaticQuery(graphql`
    {
      allContentfulGallery {
        edges {
          node {
            galleryTitle
            image {
              url
            }
            date
          }
        }
      }
    }
  `);

  const galleries = data.allContentfulGallery.edges
    .map((e) => {
      return {
        galleryTitle: e.node.galleryTitle,
        coverImageUrl: e.node.image[0].url,
        date: e.node.date,
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
            <h1 className="px-3 py-1 header-lgradient rounded">Photos</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            {galleries.map((gallery, idx) => {
              return (
                <Link key={idx} to={`/about/gallery/${gallery.galleryTitle.toLowerCase().replace(/ /g, "-")}`} className="text-decoration-none">
                  <div className="m-3 p-3 border border-2 rounded-2 bg-light text-dark">
                    <div className="d-flex flex-column justify-content-center align-items-center gap-3 d-md-flex flex-md-row align-items-md-start justify-content-md-start">
                      <img src={gallery.coverImageUrl} style={{ objectFit: "cover", width: "150px", height: "150px" }} alt="" />
                      <div className="d-flex flex-column gap-1">
                        <h1 className="">{gallery.galleryTitle}</h1>
                        <span className="">Date: {gallery.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Photos;
