import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = time => {
    // const newReadingTime = readingTime + time
    setReadingTime(readingTime + time);
    console.log(readingTime)

  }

  const handleAddToBookmarks = blog => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
  }

  return (
    <>
     
     < Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
          <Blogs 
                handleAddToBookmarks={handleAddToBookmarks}
                handleMarkAsRead={handleMarkAsRead} >
          </Blogs>

          <Bookmarks 
                bookmarks={bookmarks}
                readingTime={readingTime}
          ></Bookmarks>
     </div>
     
     
    </>
  )
}

export default App
