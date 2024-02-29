import axios from 'axios'
const global = () => {
  axios.defaults.headers.common['Accept'] = 'application/json'
  return <div></div>
}

export default global
