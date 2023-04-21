import React from "react";
import Layout from "./../components/Layout";
import Gallery from "./../components/Gallery";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";

export default function newsPost({ data }) {
  const post = data.contentfulNewsPost;
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <h1 className="px-3 py-1 header-lgradient rounded">{post.title}</h1>
            <div className="pt-3"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <p className="fst-italic">
              News Category: {post.category}
              <br></br>
              Date: {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <div className="float-sm-end text-center mx-3">
              <div className="d-flex flex-column gap-3">
                <span>
                  <img src={post.blogImage.url} className="img-thumbnail m-1 p-0" width={300} />
                </span>
              </div>
            </div>
            <ReactMarkdown>{post.content.content}</ReactMarkdown>
          </div>
        </div>
        <div className="row mt-3 pt-3 border-top">
          <div className="col-12 m-0 p-0">
            <Gallery images={post.images.map((x) => x.url)} width={300} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($title: String!) {
    contentfulNewsPost(title: { eq: $title }) {
      id
      date
      category
      title
      blogImage {
        url
      }
      content {
        content
      }
      images {
        url
      }
    }
  }
`;
