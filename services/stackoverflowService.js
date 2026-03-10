import axios from "axios";

export async function searchStackOverflow(query) {

  const url = "https://api.stackexchange.com/2.3/search/advanced";

  const response = await axios.get(url, {
    params: {
      order: "desc",
      sort: "relevance",
      q: query,
      site: "stackoverflow"
    }
  });

  return response.data.items.slice(0, 5);
}