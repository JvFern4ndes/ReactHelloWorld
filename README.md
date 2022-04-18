# ReactHelloWorld
Primeiros passos com o React. / Getting Started with React.


Curso de React

O que é o React?

Segundo seu slogan oficial, React é uma biblioteca para construção de interfaces de usuário. React não é um framework – nem mesmo é exclusivo para web. É utilizado com outras bibliotecas para renderização em certos ambientes. Por exemplo, React Native pode ser usado para construção de aplicativos móveis; React 360 pode ser usado para construir aplicações de realidade virtual; e muitas outras possibilidades.

O que é o Babel?

Babel é um transcompilador JavaScript gratuito e de código aberto que é usado principalmente para converter o código ECMAScript 2015+ em uma versão compatível com versões anteriores do JavaScript que pode ser executada por mecanismos JavaScript mais antigos. Babel é uma ferramenta popular para usar os mais novos recursos da linguagem de programação JavaScript.

O que é o webpack?

O Webpack é um empacotador de módulos gratuito e de código aberto para JavaScript. Ele é feito principalmente para JavaScript, mas pode transformar ativos de front-end, como HTML, CSS e imagens, se os carregadores correspondentes forem incluídos. O Webpack recebe módulos com dependências e gera ativos estáticos representando esses módulos.

O que são Props?

Props é uma abreviação para Properties que significa propriedade em português, são como atributos do HTML, e é o único argumento que todos os componentes do react recebem. Obs.: Componente nenhum pode alterar o valor das props, eles apenas as lêem.

O que são prop children?

Elas servem para pegarmos todo o valor que passamos para dentro de um componente.
Elementos filhos em React não precisam ser componentes, eles podem ser qualquer coisa.
Nós podemos passar qualquer expressão JavaScript como elemento filho. Isso inclui funções.

O que seria tipar as props?

Basicamente definir quais as propriedades que o componente pode receber, quais propriedades são obrigatórias para o componente funcionar bem como qual tipo de cada dado que vamos passar para o componente.

O que são props default?

As props default são valores que definimos para serem renderizados caso este não tenho sido definido diretamente no componente.

O que é o State no React?

É uma forma de nós armazenarmos informções de forma que toda vez que estes forem alterados, nós façamos com que o React atualize a interface do usuário também.

O que são funções de Callback via Props?

Basicamente são funcões que criamos dentro do componente pai, passamos via propriedade para dentro do componente filho, e essa função pode ou não fazer uma alteração no componente pai.

O que é renderização condicional?

É renderizar algo condicionado a algo. Isto pode ser feito através do if, de uma condição ternária ou do short circuit evaluation.

Sobre Inline Styles no React...

Temos basicamente 3 diferenças ao trabalhar com inline styles dentro do react, são elas:
- Não passamos uma string para a propriedade style e sim um objeto.
- Ao atribuir valores para os nossos atributos, devemos atribuilos como uma string, ou seja, utilizando aspas.
- Nas propriedades que possuem hifen, como por exemplo "font-family: " devemos usar camel case, sendo assim, obteremos ao invés disso "fontFamily: ".

Sobre trabalhar com arquivos CSS dentro do React...

Nós precisamos apenas configurar o webpack para que ele consiga interpretar arquivos com a extensão css através dos loaders ('style-loader' e 'css-loader', e nesta ordem para não crashar), e então podemos sair importando nossos arquivos CSS sem nenhum problema. (É opcional colocarmos um exclude:NodeModules).

O que é o CSS Modules?

Pode ser configurado no webpack do arquivo e permite com que utilizemos as classes css de nomes iguais em arquivos diferentes sem que estas interfiram ou se sobreponham umas às outras, isto o ocorre pois o CSS Modules transforma essas classes ".title" por exemplo, em um hash.

O que é o SASS?

É um pré processador de CSS, ou seja, ele introduz dentro do CSS algumas funcionalidades que normalmente não teriamos dentro dele. Existem diversos pré processadores de CSS e o SASS é mais adequado para quem deseja trabalhar com o CSS na mão.
Para utilizarmos o SASS, devemos instalar as bibliotecas "sass" e "sass-loader" e configura-las no webpackconfig.

O que são Styled Components?

É o CSS in JS, o principal beneficio do styled components é que ele trabalha com scoped classes e id's por padrão, ou seja, ele exerce o papel do CSS modules de criar hash's para as classes por padrão, nunca teremos conflitos por conta desse quesito.
Outro ponto é a legibilidade, não vamos usar diretamente dentro do componente as tags HTML, vamos usar componentes estilizados.
E o terceiro ponto é que o styled components roda dentro da web e do reactive native com a mesma sintaxe.