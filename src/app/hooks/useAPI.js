
import { useEffect, useState } from 'react';
import useSWR from 'swr'
import useHttp from './http.hook';

// const API_SERVER = 'http://127.0.0.1:8000';
const API_SERVER = 'https://faculty-api.zsmu.zp.ua';

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

// function useLogin(username, password) {

//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoginError, setIsLoginError] = useState(false);
//   const [accessToken, setAccessToken] = useState('');
  


//   useEffect(() => {
//     if (username && password) {
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({
//         "username": username,
//         "password": password
//       });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow"
//       };

//       const response =  fetch("http://89.168.113.31/api/v1/auth/", requestOptions)
//         .then((response) => {
//           setIsLoading(true);
//           response.text()
//         })
//         .then((result) => {
//           const data = JSON.parse(result);
//           setIsLoading(false);
//           setAccessToken(data.accessToken);
//           setIsLoginError(false);
//         })
//         .catch((error) => {
//           setIsLoginError(true);
//           setIsLoading(false);
//         })
//     }
//   }, [username, password]);


//   // const myHeaders = new Headers();
//   // myHeaders.append("Content-Type", "application/json");

//   // const raw = JSON.stringify({
//   //   "username": "olexijchuk@gmail.com",
//   //   "password": "4N4IZ3S94NPK"
//   // });

//   // const requestOptions = {
//   //   method: "POST",
//   //   headers: myHeaders,
//   //   body: raw,
//   //   redirect: "follow"
//   // };




//   // const response = await fetch("http://89.168.113.31/api/v1/auth/", requestOptions)
//   //   .then((response) => response.text())
//   //   .then((result) => {
//   //     const data = JSON.parse(result);
//   //     accessToken = data.accessToken;
//   //     isLoginError = false;
//   //     return { accessToken, isLoginError };
//   //   }
//   //   )
//   //   .catch((error) => {
//   //     isLoginError = true;
//   //     return { accessToken, isLoginError };
//   //   })

//   // console.log('login', login);
//   // console.log('password', password);
//   // console.log('accessToken', accessToken);


//   return { accessToken, isLoginError, isLoading};
// }

export default function useAPI(){
  const { loading, error, request, clearError } = useHttp();

  const  login = async (username, password)=> {
    const data = await request(`${API_SERVER}/api/auth-token/`, 
                                'POST', 
                                JSON.stringify({ username, password })
    );
  
      const token = await data.token;
      if (token) {
        return await token;
      }
      else{
        throw new Error('No token');
      }
  }

  const getArticles = async (page) => {
    const data = await request(`${API_SERVER}/api/publications/?page=${page}`, 'GET');
    
    //       {
//   "count": 1,
//   "next": null,
//   "previous": null,
//   "results": [
//     {
//       "id": 1,
//       "title": "Перша стаття",
//       "author": "Автор1",
//       "category": "Категорія1",
//       "date": "2024-01-01",
//       "description": "Опис статті 1",
//       "fileData": "",
//       "fileName": "",
//       "file": null
//     }
//   ]
// }
  
    // console.log('data', data);
    return data;
  }

  // function useGetArticles(page, page_size) {

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

  return {loading, error, clearError , login, getArticles}

}




// const downloadPDF = (pdfBase64, fileName) => {
//   console.log('downloadPDF', pdfBase64, fileName);
//   try {
//     const linkSource = `data:application/pdf;base64,${pdfBase64}`;
//     const downloadLink = document.createElement('a');
//     downloadLink.href = linkSource;
//     downloadLink.download = fileName;
//     document.body.appendChild(downloadLink);
//     downloadLink.click();
//     document.body.removeChild(downloadLink);
//   } catch (error) {
//     console.error('Error downloading PDF:', error);
//   }
// };

// function useGetArticleDetail(id) {

//   const { data, isLoading, error, fileData } = useSWR(id ? `${API_SERVER}/api/v1/publications/${id}` : null, fetcher);
//   return {
//     article: data,
//     isLoading,
//     isError: error,
//     downloadPDF: () => data && downloadPDF(data.fileData, data.fileName)

//   }
// }

// function useGetArticles(page, page_size) {

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

// function useSearchArticles(search_string, page, page_size) {

//   const { data,
//     isValidating,
//     isLoading, totalElements } = useSWR(
//       () => `${API_SERVER}/api/v1/publications/search?text=${search_string}&page=${page - 1}&size=${page_size}`, fetcher)

//   return {
//     articles: data?.content || [],
//     isValidating,
//     isLoading,
//     totalElements: data?.totalElements || 0,
//     totalPages: data?.totalPages || 0,
//     size: data?.size || page_size,
//     number: data?.number || page - 1
//   }
// }

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


// export { useGetArticleDetail, useGetArticles, useSearchArticles, login, addArticle };