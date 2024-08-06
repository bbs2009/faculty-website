
import { useEffect, useState } from 'react';
import useHttp from './http.hook';


const API_SERVER = 'http://127.0.0.1:8000';
// const API_SERVER = 'https://faculty-api.zsmu.zp.ua';

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

  const addArticle = async ( article_obj, token) => {
    const data = await request(`${API_SERVER}/api/publications/`, 
                                'POST', 
                                JSON.stringify(article_obj),
                                {'content-Type':'Application/json',
                                  'Authorization': `token ${token}`
                                }
    );

    return data;
  }

    const updArticle = async ( id, article_obj, token) => {
    
     console.log('id', id);
      console.log('article_obj', JSON.stringify(article_obj)); 

    const data = await request(`${API_SERVER}/api/publications/${id}/`, 
                                'PUT', 
                                JSON.stringify(article_obj),
                                {'content-Type':'Application/json',
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





  return {loading, error, clearError , login, addArticle,updArticle, delArticle}

}



