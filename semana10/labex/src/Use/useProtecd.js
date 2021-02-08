import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'


export function useProtecd() {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token) {
            history.push('/')
        }

    }, [history])
}