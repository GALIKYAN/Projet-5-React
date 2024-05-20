import logo from  './images/logo.png'
import '../style/Header.css'

function Header (){
    return(
        <div>
            <img src={logo} alt='logo kasa' className='logo'/>  
            <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À Propos</a></li>
        </ul>
      </nav>
        </div>
    )
}

export default Header