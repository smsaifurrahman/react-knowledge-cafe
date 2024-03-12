import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-100 ml-4 mt-8 rounded-xl pt-4 font-bold ">
          <div className='text-center mb-4 text-2xl bg-blue-300 rounded-xl py-5'>
                <h3>Reading time Total: {readingTime}</h3>
         </div>  
         <h2 className='text-center text-2xl bg-red-100'>Bookmarked Blogs: {bookmarks.length}</h2>
         {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
         }
       </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
};

export default Bookmarks;

