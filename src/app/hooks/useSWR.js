

import useSWR from 'swr'


// const API_SERVER = 'http://127.0.0.1:8000';
// const API_SERVER = 'https://faculty-api.zsmu.zp.ua';
const API_SERVER = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_APP_PROD_API_URL : process.env.NEXT_PUBLIC_APP_DEV_API_URL;


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

function useGetArticleDetail(id) {

  const { data, isLoading, error, fileData, mutate } = useSWR(id ? `${API_SERVER}/api/publications/${id}` : null, fetcher);

  return {
    article: data,
    isLoading,
    isError: error,
    // downloadPDF: () => data && downloadPDF(data.fileData, data.fileName),
    mutate
  }
}

function useGetArticles(page) {

  const { data, isValidating, isLoading, mutate } = useSWR(
      () => `${API_SERVER}/api/publications/?page=${page}`, fetcher)

  return {
    articles: data,
    isValidating,
    isLoading,
    mutate 
  }
}

function useSearchArticles(search_string, page) {

  const { data,
    isValidating,
    isLoading } = useSWR(
      () => `${API_SERVER}/api/publications/?title=${search_string}&page=${page}`, fetcher)
    
  
  return {
    articles: data,
   isValidating,
    isLoading
     
  }
}


export { useGetArticleDetail, useGetArticles, useSearchArticles };