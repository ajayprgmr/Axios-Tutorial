import { useEffect } from 'react'
import authFetch from '../axios/custom'
import axios from 'axios'
const randomUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = authFetch('/react-store-products')
      const resp2 = await axios(randomUrl)
      console.log(`${resp1}`)
      console.log(`${resp2}`)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>custom instance</h2>
}
export default CustomInstance
