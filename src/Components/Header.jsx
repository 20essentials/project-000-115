import '../Styles/Header.css'

const Header = ({newFetch}) => {
  return (
    <header className="C1-Header">
      <div className="left">
        <img src="./public/giphy.gif" alt="Giphy Developer" />
      </div>
      <form onSubmit={(e) => newFetch(e)} className="right">
        <input type="text" placeholder="Write ..." />
        <input type="submit" value="🔎" />
      </form>
    </header>
  )
}

export default Header;