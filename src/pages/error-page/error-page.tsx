import {JSX} from 'react'

function Errorpage(): JSX.Element {
    return(
        <body>
        <div className="page">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <a className="header__logo-link" href="main.html">
                    <img className="header__logo" src="img/logo.svg" alt="Rent service logo" width="81" height="41"/>
                  </a>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
    
          <main className="page__main">
            <div className="container-error-page">
              <section className="section-error-page">
                <h1 >Что-то пошло не так</h1>
                <p>Упс, возникла непредвиденная ошибка :( </p>
                <a href="main.html">Пожалуйста, вернитесь на основную страницу.</a>
              </section>
            </div>
          </main>
        </div>
      </body>  
    );
}
export default Errorpage;
    