# ReactNativeFidelidade

Projeto final de Semestre, utilizando a tecnologia de React Native.

Projeto simples para comprovar a utilização da tecnologia aprendida em aula.
Neste projeto foi consumido uma api desenvolvida em C# com o padrão de consumo OData v4.
Nessa api é possível fazer login, ver os pontos atuais do cliente logado, quais os prêmios que ele consegue resgatar com a pontuação atual, e também consegue customizar o seu perfil com o seu avatar com foto.

Principais bibliotecas utilizadas:
* axios: "^0.18.0" => Responsável por fazer as requisições HTTP:
  -> Possui mais recursos que o tradicional fetch, como o interceptor, para incluir token a cada requisição;
* query-string: "^6.1.0" => Auxiliar para transformar objetos json em queryString, facilitando para armazenar no Storage;
* react-native-camera: "^1.1.4" => Componente nativo para utilizar a câmera como recurso;
* react-native-config: "^0.11.5" => Utilizado para armazenar as configurações de ambiente (dev, stage, prod) em arquivo .env
* react-native-elements: "^0.19.1" => Lib utilizada que possui vários elementos React com mais recursos de text, label, avatar, listview, etc;
* react-native-vector-icons: "^4.6.0" => Lib que possui vários elementos de telas como ícones e fontes;
* react-navigation: "^2.9.3" => Componente de navegação entre as cenas (telas) do app;

Versões da Lib React Native utilizadas
* react: "^16.3.1"
* react-native: "^0.55.4"
* Obs.: Utilizando a última versão do React apresentou problemas na compilação, por esse motivo optei por esta versão (downgrade)

Principais benefícios da Linguagem:
* Desenvolvimento único das regras de negócio;
* Bastante reaproveitamente de código fonte, e de interface;
* Bastante exemplos de recursos disponíveis na comunidade do React;
* Debugg pode ser feito direto na aba do Chrome com o DevTools;

Principais dificuldades:
* Pelo fato de automatizar os processos de compilação do Gradle via linha de comando, muitos erros são apenas corrigidos com o auxílio do Android Studio;
* Nem sempre atualizar o projeto com as últimas versões dos pacotes (utilizando ncu ou audit fix) é uma boa idéia, pois a última versão do React Native (0.56) tem apresentado problemas que muitas pessoas também estão tentando corrigir (problemas de compilação mesmo em projetos simples, do tipo "Hello World");
