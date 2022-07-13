import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                     
                </p>
                <p>
                    E pelo aluno
                    <a href = "https://www.instagram.com/davi_icaro.py/">@davi_icaro.py</a>
                </p>
            </div>
        </header>
    )
}

export default Header;