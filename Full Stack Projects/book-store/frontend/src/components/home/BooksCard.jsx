import BooksSingleCard from './BooksSingleCard'

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {books.map(item => (
        <BooksSingleCard key={item._id} book={item} />
      ))}
    </div>
  )
}

export default BooksCard