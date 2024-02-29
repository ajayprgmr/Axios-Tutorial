import { useState } from 'react'
import axios from 'axios'
const url = 'https://course-api.com/axios-tutorial-post'

const PostRequest = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(url, { name: name, email: email })
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <section className='form-center'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-row '>
            Name
          </label>
          <input
            type='text'
            className='form-input'
            id='email'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <lavel htmlFor='email' className='form-row '>
            Email
          </lavel>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Register
        </button>
      </form>
    </section>
  )
}
export default PostRequest
