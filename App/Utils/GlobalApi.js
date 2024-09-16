import { gql, request } from 'graphql-request';

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm14kl7bu04ht07w8uxa2kyy3/master';

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

export default {
  getSlider,
  getCategories,
};
