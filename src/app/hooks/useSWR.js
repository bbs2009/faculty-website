

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

//   function useGetArticles(page, page_size) {

//   const { data,
//     isValidating,
//     isLoading } = useSWR(
//       () => `${API_SERVER}/api/v1/publications/?page=${page - 1}&size=${page_size}`, fetcher)

//   return {
//     articles: data,
//     isValidating,
//     isLoading
//   }
// }





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
    downloadPDF: () => data && downloadPDF(data.fileData, data.fileName),
    mutate
  }
}

function useGetArticles(page, page_size) {

  const { data, isValidating, isLoading, mutate } = useSWR(
      () => `${API_SERVER}/api/publications/?page=${page}`, fetcher)

  return {
    articles: data,
    isValidating,
    isLoading,
    mutate 
  }
}

function useSearchArticles(search_string, page, page_size) {

  const { data,
    isValidating,
    isLoading, totalElements } = useSWR(
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

// function addArticle(title, author, category, date, description, file, fileName, token) {
//   const myHeaders = new Headers();
//   myHeaders.append("accessToken", token);

//   const formdata = new FormData();
//   formdata.append("title ", title);
//   formdata.append("author ", author);
//   formdata.append("category ", category);
//   formdata.append("date ", date);
//   formdata.append("description", description);
//   formdata.append("file ", file);
//   formdata.append("fileName ", fileName);


//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: formdata,
//     redirect: "follow"
//   };

//   fetch("http://89.168.113.31/api/v1/publications/", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));
// }


export { useGetArticleDetail, useGetArticles, useSearchArticles };