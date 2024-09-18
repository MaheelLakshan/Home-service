import { gql, request } from 'graphql-request';

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/cm14kl7bu04ht07w8uxa2kyy3/master';

const getUserBookings = async (userEmail) => {
  const query = gql`
    query GetUserBookings {
      bookings(orderBy: updatedAt_DESC, where: { userEmail: "${userEmail}" }) {
        time
        userEmail
        userName
        date
        bookingStatus
        id
        businessList {
          id
          name
          images {
            url
          }
          address
          contactPerson
          email
          about
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createBooking = async (data) => {
  const mutationQuery = gql`
    mutation createBooking {
      createBooking(
              data: { bookingStatus: booked, businessList: { connect: { id: "${data.businessId}"
    } }, date: "${data.date}", time: "${data.time}", userEmail: "${data.userEmail}", userName: "${data.userName}" }) {
        id
      }
        publishManyBookings(to: PUBLISHED) {
     count
  }
    
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

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
  createBooking,
  getUserBookings,
};
