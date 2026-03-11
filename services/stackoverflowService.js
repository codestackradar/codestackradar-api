import axios from "axios";

export async function searchStackOverflow(query) {

  const url = `https://api.stackexchange.com/2.3/search/advanced`;

  const response = await axios.get(url, {
    params: {
      order: "desc",
      sort: "relevance",
      q: query,
      site: "stackoverflow",
      accepted: true,
      pagesize: 5
    }
  });

  return response.data.items.map(item => ({
    title: item.title,
    link: item.link,
    score: item.score
  }));

}
