const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulNewsPost {
        edges {
          node {
            title
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allContentfulNewsPost.edges.forEach(({ node }) => {
    const slug = node.title.toLowerCase().replace(/ /g, "-");
    const pagePath = `/news/${slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/news-post.js`),
      context: {
        slug: slug,
        title: node.title,
      },
    });
  });

  const galleryResult = await graphql(`
    {
      allContentfulGallery {
        edges {
          node {
            galleryTitle
          }
        }
      }
    }
  `);
  if (galleryResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  galleryResult.data.allContentfulGallery.edges.forEach(({ node }) => {
    const slug = node.galleryTitle.toLowerCase().replace(/ /g, "-");
    const pagePath = `/about/gallery/${slug}`;
    createPage({
      path: pagePath,
      component: path.resolve(`./src/templates/gallery-post.js`),
      context: {
        slug: slug,
        galleryTitle: node.galleryTitle,
      },
    });
  });
};
