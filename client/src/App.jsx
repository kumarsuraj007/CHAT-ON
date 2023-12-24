import {Routes, Route} from 'react-router-dom'
import ChatPage from './pages/ChatPage.jsx'
import HomePage from './pages/HomePage.jsx'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/chats' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App