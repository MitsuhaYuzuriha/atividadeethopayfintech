import Styles from './lk.module.css'
import git from './img/git.png'
import lk from './img/lk.png'
import play from './img/play.png'
import ios from './img/ios.png'

function Fimm(){
    return(
        <footer>
            <div className={Styles.contato}>
                <ul className={Styles.links}>
                    <h3>€thoPay</h3>
                    <li><a href='#'>Sobre nós</a></li>
                    <li><a href='#'>Perguntas</a></li>
                    <li><a href='#'>Contato</a></li>
                    <li><a href='#'>Investimentos</a></li>
                    <li><a href='#'>Crypto Moedas</a></li>
                </ul>

                <ul>
                    <h3>Fale com a gente</h3>
                    <li>Capitais e regiões metropolitanas</li>
                    <li>0000 0000</li>
                    <li>Demais locais</li>
                    <li>0000 000 0000</li>
                    <li>xxxxxxxxxxx@ethopay.com.br</li>
                </ul>

                <ul className={Styles.app}>
                    <h3>Baixe o app</h3>
                    <li><a href='#'><img className={Styles.play} src={play} alt='app playstore'/></a></li>
                    <li><a href='#'><img className={Styles.ios} src={ios} alt='app ios'/></a></li>
                </ul>

                <ul className={Styles.contatos}>
                    <h3>Nosso contato</h3>
                    <li><img className={Styles.lk} src={lk}/><a href='https://www.linkedin.com/in/jian-m-6303a0226' >linkedin</a></li>
                    <li><img className={Styles.git} src={git}/><a href='https://github.com/MitsuhaYuzuriha'>Github</a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Fimm