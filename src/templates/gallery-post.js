import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

export default function GalleryPost({ data }) {
  const post = data.contentfulGallery;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">{post.galleryTitle}</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <p className="fst-italic">Date: {new Date(post.date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <ReactMarkdown>{post.galleryDescription.galleryDescription}</ReactMarkdown>
          </div>
        </div>
        <div className="row mt-3 pt-3 border-top">
          <div className="col-12 m-0 p-0">
            <Gallery images={post.image.map((x) => x.url)} width={300} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($galleryTitle: String!) {
    contentfulGallery(galleryTitle: { eq: $galleryTitle }) {
      galleryTitle
      date
      galleryDescription {
        galleryDescription
      }
      image {
        url
      }
    }
  }
`;
