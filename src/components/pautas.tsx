import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

export default function(){
    return (
        <section className="min-h-screen flex flex-col justify-center">
            <h2 id="pautas"className="text-center text-white p-4 font-uni-heavy">
                <span className="text-4xl font-bold uppercase">Pautas da Letícia</span>
                <p className="text-2xl font-hum-thin">#daprafazer</p>
            </h2>
            <ul className="flex flex-wrap w-full  lg:w-2/3 mx-auto">
                <li className="text-sm sm:w-1/2 md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/CausaAnimal.svg"
                        alt="Causa Animal"
                        text="Letícia apoia fortemente a proteção e os direitos dos animais, com sua família possuindo uma ONG de resgate de animais, a CandyCats (@candycatsrio)."
                    />
                </li>
                <li className="text-sm sm:w-1/2 md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/Empreendedorismo.svg"
                        alt="Empreendedorismo"
                        text="Letícia, defensora da Liberdade Econômica, acredita no potencial gerador de Renda, Prosperidade e Empregos do setor privado. A figura na qual essa ideia se materializa é o Empreendedor"
                    />
                </li>
                <li className="text-sm sm:w-1/2 md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/Esports.svg"
                        alt="esports"
                        text="Letícia acredita que o setor de Games e Esports tem grande potencial econômico e social, e muito espaço para crescimento aqui no Rio de Janeiro. Isso é evidenciado pelo fato de que, atualmente, a indústria dos games fatura mais que a indústria da música e do cinema juntas."
                    />
                </li>
                <li className="text-sm sm:w-1/2 sm:h-1/2 md:h-1/3  md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/Liberdade.svg"
                        alt="Liberdade"
                        text="Base da maior parte das ideias de Letícia, fundamenta-se na limitação do papel do Estado na vida dos cidadãos."
                    />
                </li>
                <li className="text-sm sm:w-1/2 md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/Seguranca.svg"
                        alt="Segurança"
                        text="Letícia acredita em uma abordagem equilibrada para a segurança pública, combinando medidas de prevenção com uma atuação eficiente das forças de segurança. O foco deve ser em soluções efetivas independentemente da “origem” ideológica."
                    />
                </li>
                <li className="text-sm sm:w-1/2 md:w-1/3 sm:min-h-0 min-h-96 md:p-4 w-full p-8">
                    <Card
                        src="/pautas/fiscalizar.svg"
                        alt="Fiscalização e Trasnparência"
                        text="O Governo possui muito poder, tanto coercitivo quanto econômico, sendo esse poder baseado fundamentalmente no dinheiro do pagador de impostos. Portanto, se o Estado é sustentado pelo povo, deve ser transparente, eficiente, justo e econômico."
                    />
                </li>
            </ul>
        </section>
    )
}
function Card({src, alt, text}: {src: string, alt: string, text: string}){
    const [isFliped, setIsFliped] = useState(false)
    return (
        <ReactCardFlip isFlipped={isFliped} containerClassName='h-full w-full h-full' flipDirection="horizontal">
            <img className="w-full rounded-3xl border-2" src={src}
                alt={alt}  onClick={()=>setIsFliped(true)}
            />
            <p className='text-white h-full w-full flex items-center text-center bg-dark-blue p-4 rounded-3xl border-2 border-white' onClick={()=>setIsFliped(false)} >
                {text}
            </p>
        </ReactCardFlip>
    )
}
