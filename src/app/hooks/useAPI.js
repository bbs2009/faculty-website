import useSWR from 'swr'


const API_SERVER = 'http://89.168.113.31';



const fetcher = async (...args) => {
  try {
    const res = await fetch(...args);
    if (!res.ok) {

      const error = new Error('Network response was not ok');
      error.status = res.status;
      error.info = await res.json();

      throw error;
    }
    return res.json();
  } catch (error) {
    throw new Error('Network error: ' + error.message);
  }
};


const downloadPDF = (pdfBase64, fileName) => {
  console.log('downloadPDF', pdfBase64, fileName);
  try {
    const linkSource = `data:application/pdf;base64,${pdfBase64}`;
    const downloadLink = document.createElement('a');
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error('Error downloading PDF:', error);
  }
};

function get_article_detail(id) {

  const { data, isLoading, error, fileData } = useSWR(id ? `${API_SERVER}/api/v1/publications/${id}` : null, fetcher);
  return {
    article: data,
    isLoading,
    isError: error,
    downloadPDF: () => data && downloadPDF(data.fileData, data.fileName)

  }
}

function get_articles(page, page_size) {

  const { data,
    isValidating,
    isLoading } = useSWR(
      () => `${API_SERVER}/api/v1/publications/?page=${page - 1}&size=${page_size}`, fetcher)

  return {
    articles: data,
    isValidating,
    isLoading
  }
}
function search_articles(search_string, page, page_size) {

  const { data,
    isValidating,
    isLoading, totalElements} = useSWR(
      () => `${API_SERVER}/api/v1/publications/search?text=${search_string}&page=${page - 1}&size=${page_size}`, fetcher)
     
      return {
    articles: data?.content || [],
    isValidating,
    isLoading,
    totalElements: data?.totalElements || 0,
    totalPages: data?.totalPages || 0,
    size: data?.size || page_size,
    number: data?.number || page - 1
  }
}


export { get_article_detail, get_articles, search_articles };