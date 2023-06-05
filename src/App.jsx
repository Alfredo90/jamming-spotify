import { useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'



function App() {

//   useEffect(() => {
//     const getToken = async () => {
//         await axios.post(
//         'https://accounts.spotify.com/api/token',
//         new URLSearchParams({
//             'grant_type': 'client_credentials',
//             'client_id': 'your-client-id',
//             'client_secret': 'your-client-secret'
//         })
//     );
//     console.log(getToken)
//     getToken()
//   }
// }, [])

let num = 8
console.log(num)

  return (
    <div>
      <SearchBar />

    </div>
  )
}

export default App
