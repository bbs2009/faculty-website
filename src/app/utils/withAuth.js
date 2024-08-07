'use client';

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAPI from '@/app/hooks/useAPI';
import { set } from 'date-fns';

export const  withAuth = (Component) => {
    const AuthenticatedComponent = () => {
        const router = useRouter();
         const [token, setToken] = useState('');
       
	
        useEffect(() => {
        if (!sessionStorage.getItem('token_faculty') || sessionStorage.getItem('token_faculty')?.length===0){
            router.push('/login');
        }else{
            setToken(sessionStorage.getItem('token_faculty'))
            
          }
          
        }, [token]);

        return !!token ? <Component token={token} /> : null; 
    };

    return AuthenticatedComponent;
};