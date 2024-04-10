import './App.css'

function App() {
  return (
    <main>
      <header>
        <a href='' className='logo'>MyBlog</a>
        <nav>
          <a href=''>Login</a>
          <a href=''>Register</a>
        </nav>
      </header>
      <div className='post'>
        <div className="image">
          <img src="https://media.nomadicmatt.com/2024/DowntownMilwaukee.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>HOW TO EXPERIENCE MILWAUKEE LIKE A LOCAL</h2>
          <p className="info">
            <a href="" className="author">Darsh Jain</a>
            <time>2024-03-27 12:43</time>
          </p>
          <p>Milwaukee is underrated, in my opinion. I love it! The largest city in Wisconsin and only 1.5 hours north of Chicago, it is the perfect size: not too small not too big.</p>
        </div>
      </div>
      <div className='post'>
        <div className="image">
          <img src="https://media.nomadicmatt.com/2024/DowntownMilwaukee.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>HOW TO EXPERIENCE MILWAUKEE LIKE A LOCAL</h2>
          <p>Milwaukee is underrated, in my opinion. I love it! The largest city in Wisconsin and only 1.5 hours north of Chicago, it is the perfect size: not too small not too big.</p>
        </div>
      </div>
      <div className='post'>
        <div className="image">
          <img src="https://media.nomadicmatt.com/2024/DowntownMilwaukee.jpeg" alt="" />
        </div>
        <div className="texts">
          <h2>HOW TO EXPERIENCE MILWAUKEE LIKE A LOCAL</h2>
          <p>Milwaukee is underrated, in my opinion. I love it! The largest city in Wisconsin and only 1.5 hours north of Chicago, it is the perfect size: not too small not too big.</p>
        </div>

      </div>
    </main>
  )
}

export default App
