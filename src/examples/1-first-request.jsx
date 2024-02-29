import axios from 'axios'
import { useEffect } from 'react'

const url = 'https://icanhazdadjoke.com/'

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    console.log('First axios request')
    fetchData()
  }, [])

  return (
    <div className='item-container'>
      <h2 className='text-center'>First request</h2>
    </div>
  )
}

export default FirstRequest
