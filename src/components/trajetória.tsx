import { type ReactNode } from "react"

export default function page() {
    return (
        <section className="flex flex-col items-center py-32 min-h-screen bg-gray-100">
            <h2 className="p-8 text-3xl md:text-6xl uppercase text-blue font-geo-regular tracking-widest">
                Trajetória
            </h2>
            <Stage year="2016" first>
                <p>
                    Com apenas <span className="font-geo-bold">22 anos</span>, Leticia começou a se envolver com a política (2016).
                </p>
            </Stage >
            <Stage year="2017" left>
                <p>
                    Trabalhou com João <br />
                    Amoedo e Raphaël Lima.
                </p>
            </Stage>
            <Stage year="2018">
                <p>
                    Viajou para Washington para ser treinada pelo SFL (política e mídia)
                </p>
            </Stage >
            <Stage year="2019" left long>
                <ol>
                    <li>
                        1. Trabalhou na Alerj com o então Deputado Estadual Chicão Bulhões
                    </li>
                    <li>
                        2.Bacharel em Direito pela IBMEC com especialização em Teoria Política e Gestão Pública pelo TFAS na Universidad de Los Andes (Chile)
                    </li>
                    <li>
                        3. Coordenadora Estadual do SFL (Students for Liberty)
                    </li>
                </ol>
            </Stage>
            <Stage year="2020" long>
                <ol className="flex flex-col justify-between gap-2">
                    <li>
                        1. Primeira formação no Renova BR
                    </li>
                    <li>
                        2. Projeto de Lei no Senado, sugestão legislativa (SUG) 49/2019
                    </li>
                    <li>
                        3. Autora do PL 573/2020 que corta e congela o Fundo Eleitoral
                    </li>
                    <li>
                        4. Candidata a vereadora pelo NOVO na cidade do Rio (10° mulher mais votada)
                    </li>
                    <li>
                        5. Protocolou o PL da Lei de Liberdade Econômica em mais de 20 cidades do RJ
                    </li>
                </ol>
            </Stage >
            <Stage year="2021" left long>
                <ol>
                    <li>
                        1. Atuou na Secretaria Estadual de Cultura do Rio de Janeiro (Escola da Cultura; Passaporte Cultural)
                    </li>
                    <li>
                        2. Processo contra o Governo Federal por conta do atraso da entrega das vacinas 3. Segunda formação no Renova BR
                    </li>
                    <li>
                        3. Segunda formação no renova BR
                    </li>
                </ol>
            </Stage>
            <Stage year="2022">
                <p>
                    Coordenação de Monitoramento Territorial da Prefeitura do Rio
                </p>
            </Stage >
            <Stage year="2023" left last>
                <p>
                    Vice-Presidente da Federação Estadual de Esportes Eletrônicos (FERJEE)
                </p>
            </Stage>
        </section>
    )
}

interface StageProps {
    year: string,
    children: ReactNode,
    left?: Boolean
    last?: Boolean
    first?: Boolean
    long?: boolean
}
function Stage({ year, children, left, last, first, long }: StageProps) {
    const baseStyle = "flex justify-between md:flex-row flex-col "
    const style = left ? baseStyle : baseStyle + " md:flex-row-reverse"

    const height = long ? 950 : 250
    return (
        <div className="w-1/2 py-8">
            {
                last ? null :
                    <svg className="absolute lg:block hidden transform -translate-x-1/2 left-1/2" height={height} width="10" xmlns="http://www.w3.org/2000/svg">
                        <rect width="10" height={height} x="0" y="0" fill="url(#grad1)" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                                <stop offset="0%" stop-color="#73ef51" />
                                <stop offset="0%" stopColor="#01012f" />
                                <stop offset="100%" stopColor="#01012f" />
                            </linearGradient>
                        </defs>
                    </svg>
            }
            {
                first
                    ? <img alt="" className="lg:block absolute hidden left-1/2 transform -translate-x-1/2 -translate-y-4" src="trajetoria/bolinhaazul.svg" width="50" />
                    : <img alt="" className="lg:block absolute hidden left-1/2 transform -translate-x-1/2 translate-y-1/2" src="trajetoria/bolinhaazul.svg" width="50" />
            }
            <div className={style}>
                <h3 className="text-9xl font-uni-heavy"> {year} </h3>
                <div className="md:w-2/5 text-xl md:text-3xl flex justify-around flex-col font-geo-thin text-dark-blue">
                    {children}
                </div>
            </div>
        </div>
    )
}
