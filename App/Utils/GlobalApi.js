import { gql, request } from 'graphql-request';

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm14kl7bu04ht07w8uxa2kyy3/master';

// businessLists(where: { category: { name: "`+categoryType+`" } }) {

const getBusinessListByCategory = async (categoryType) => {
  const query = gql`
    query GetBusinessList {
      businessLists(where: { category: { name: "${categoryType}" } }) {
        id
        name
        email
        contactPerson
        address
        about
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query GetBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

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
  getBusinessList,
  getBusinessListByCategory,
};
