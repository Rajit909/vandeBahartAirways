const { gql, default: request } = require("graphql-request");

const Master_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_API_KEY +
  "/master";


const getAllTourList = async () => {
  const query = gql`
  query MyQuery {
    tourLists(first: 20, orderBy: publishedAt_ASC) {
      id
      name
      price
      subtitle
      flights
      duration
      description
      banner {
        url
      }
    }
  }  
  `
  const result  = await request(Master_URL, query);
  return result;

}


const GlobalApi = {
  getAllTourList
}


export default GlobalApi;