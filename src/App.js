import logo from "./imgs/logo.png"

import "./App.css"
import {useState} from "react";

import ConfScreen from "./imgs/configuracoes.png"
import ConfScreen2 from "./imgs/configuracoes2.png"
import LibScreen from "./imgs/liberacoes.png"
import LibFiltroScreen from "./imgs/liberacoes_filtros.png"
import PagamentoFiltroScreen from "./imgs/pagamentos.png"
import PagamentoScreen from "./imgs/pagamentos_screend.png"

function App() {
    const [showConf, setShowConf] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [showSuporte, setShowSuporte] = useState(false)

    return (
        <div className="App">
            <header className={"header"}>
                <img src={logo} alt={"Logo aplicativo"} width={50} height={50} className={"img-header"}/>

                <h3 className={"title"}>Cortezia Agro App</h3>
            </header>

            <body className={"body"}>
            <section className={"section-container"}>
                <div className={"section-head"}>
                    <p className={"section-name"}>Configurações</p>

                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                         onClick={() => setShowConf(!showConf)}>
                        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                    </svg>
                </div>

                <div>
                    {
                        !showConf ? <div/> :
                            <div className={"section-item"}>
                                <div>
                                    <p className={"sub-title"}>Configurações de Servidor</p>

                                    <p className={"description-section"}>As configurações de acesso ao servidor deverão
                                        ser feitas através da tela
                                        Configurações. O endereço do servidor e a porta, assim como usuário e senha,
                                        deverão ser fornecidas pela empresa utilizadora do ERP.</p>
                                </div>

                                <div className={"print-container"}>
                                    <img src={ConfScreen} alt={"Tela Login"} width={180}
                                         className={"print-img"}/>

                                    <img src={ConfScreen2} alt={"Configurações de Servidor"} width={180}
                                         className={"print-img"}/>
                                </div>
                            </div>
                    }
                </div>
            </section>

            <section className={"section-container"}>
                <div className={"section-head"}>
                    <p className={"section-name"}>Menu</p>

                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                         onClick={() => setShowMenu(!showMenu)}>
                        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                    </svg>
                </div>

                <div>
                    {
                        !showMenu ? <div/> :
                            <div>
                                <div className={"section-item"}>
                                    <div>
                                        <p className={"sub-title"}>Liberação de Limites</p>

                                        <p className={"description-section"}>O menu Liberação de Limites apresenta as
                                            solicitações de liberação. O painel de filtros permite o usuário consultar
                                            as
                                            liberações por período, status e evento.</p>
                                    </div>

                                    <div className={"print-container"}>
                                        <img src={LibScreen} alt={"Liberação de Limites"} width={180}
                                             className={"print-img"}/>

                                        <img src={LibFiltroScreen} alt={"Liberação de Limites - Filtros"} width={180}
                                             className={"print-img"}/>
                                    </div>
                                </div>

                                <div className={"section-item"}>
                                    <div>
                                        <p className={"sub-title"}>Autorização de Pagamentos</p>

                                        <p className={"description-section"}>O menu Autorização de Pagamentos apresenta
                                            os
                                            pagamentos pendentes de autorização. O painel de filtros permite o usuário
                                            consultar as liberações por período.</p>
                                    </div>

                                    <div className={"print-container"}>
                                        <img src={PagamentoScreen} alt={"Autorização de Pagamentos"} width={180}
                                             className={"print-img"}/>

                                        <img src={PagamentoFiltroScreen} alt={"Autorização de Pagamentos - Filtros"}
                                             width={180}
                                             className={"print-img"}/>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </section>

            <section className={"section-container"}>
                <div className={"section-head"}>
                    <p className={"section-name"}>Suporte</p>

                    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
                         onClick={() => setShowSuporte(!showSuporte)}>
                        <path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/>
                    </svg>
                </div>

                <div>
                    {
                        !showSuporte ? <div/> :
                            <div className={"section-suporte"}>
                                <p>Caso encontre algum problema com o aplicativo,
                                    abra uma solicitação de suporte através do <a
                                        href={"https://github.com/gabrielriguiti/CorteziaLiberacoes/issues"}
                                        target={"_blank"}>formulário</a>.
                                </p>
                            </div>
                    }
                </div>
            </section>
            </body>
        </div>
    );
}

export default App;
