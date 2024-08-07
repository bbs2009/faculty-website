
import { useEffect, useState } from 'react';
import useHttp from './http.hook';


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

    const  getMe = async ()=> {
    
    const data = await request(`${API_SERVER}/api/users/me/`,'GET') 
    const response = await data.json();                             
      console.log('getMe', response);

      //                           }
      return await response;
  }


  // const addArticle = async ( article_obj, token) => {
  //   const data = await request(`${API_SERVER}/api/publications/`, 
  //                               'POST', 
  //                               JSON.stringify(article_obj),
  //                               {'content-Type':'Application/json',
  //                                 'Authorization': `token ${token}`
  //                               }
  //   );
    
  //   return data;
  // }

  const addArticle = async ( article_obj, token) => {
    
    if (Object.keys(article_obj).length === 0) { throw new Error('No data'); }

    const formData = new FormData();
    formData.append('title', article_obj.title);
    formData.append('author', article_obj.author);
    formData.append('category', article_obj.category);
    formData.append('date', article_obj.date);
    formData.append('description', article_obj.description);
    
    // console.log('article_obj.file', !article_obj.file);

    if (article_obj.file) {
        formData.append('file', article_obj.file);
    }
    // console.log('formData', formData);  
    const data = await request(`${API_SERVER}/api/publications/`, 
                                'POST', 
                                formData,
                                {
                                  'Authorization': `token ${token}`
                                }
    );
    return data;
  }


    const updArticle = async ( id, article_obj, token) => {

    if (Object.keys(article_obj).length === 0) { throw new Error('No data'); }

    const formData = new FormData();
    formData.append('title', article_obj.title);
    formData.append('author', article_obj.author);
    formData.append('category', article_obj.category);
    formData.append('date', article_obj.date);
    formData.append('description', article_obj.description);

    if (article_obj.file) {
        formData.append('file', article_obj.file);
    }

    const data = await request(`${API_SERVER}/api/publications/${id}/`, 
                                'PUT', 
                                formData,
                                {
                                  'Authorization': `token ${token}`
                                }
    );

    return data;
  }


  const delArticle = async ( id, token) => {

    const data = await request(`${API_SERVER}/api/publications/${id}`, 
                                'DELETE', 
                                JSON.stringify(''),
                                {'content-Type':'Application/json',
                                  'Authorization': `token ${token}`
                                }
    );

    return data;
  }





  return {loading, error, clearError , login, getMe, addArticle,updArticle, delArticle}

}



