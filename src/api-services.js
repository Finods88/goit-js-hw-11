import axios from 'axios';

export async function searchImages(query, pageNumber) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '40958355-6a02f68fc5fa06ea934122b62',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageNumber,
      per_page: 40,
    },
  });

  const { hits, totalHits } = response.data;
  return { hits, totalHits };
}
