
import { useState, useCallback } from 'react';

const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = { 'content-Type': 'Application/json' }) => {
        setLoading(true)

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch url: ${url} status: ${response.status}`);
            }

            try {
                const data = await response.json();
                setLoading(false)
                return data
            }
            catch (e) {
                setLoading(false)
                return response
            }
            ;

        } catch (e) {
            setLoading(false)
            setError(true)
            setErrorMsg(e.message)
            throw e;
        }

    }, [])

    const clearError = useCallback(() => {
        setError(false)
        setErrorMsg(null)
    }, [])

    return { loading, error, request, clearError }
}

export default useHttp;