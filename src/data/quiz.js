export const profileKeys = [
  'protecao',
  'prosperidade',
  'transformacao',
  'equilibrio',
  'intuicao',
]

export const questions = [
  {
    text: 'Nos últimos meses, qual situação mais tem chamado sua atenção?',
    options: [
      { label: 'Tenho sentido necessidade de me proteger mais.', profile: 'protecao' },
      { label: 'Tenho pensado muito em melhorar minha vida financeira.', profile: 'prosperidade' },
      { label: 'Sinto que estou encerrando ciclos importantes.', profile: 'transformacao' },
      { label: 'Tenho buscado mais paz e tranquilidade.', profile: 'equilibrio' },
      { label: 'Minha intuição parece mais forte que o normal.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Quando algo inesperado acontece, você costuma pensar:',
    options: [
      { label: 'Preciso ter mais cuidado.', profile: 'protecao' },
      { label: 'Talvez seja uma oportunidade.', profile: 'prosperidade' },
      { label: 'Isso esta acontecendo por algum motivo.', profile: 'transformacao' },
      { label: 'Preciso manter a calma.', profile: 'equilibrio' },
      { label: 'Meu pressentimento já tinha avisado.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual dessas frases mais combina com seu momento atual?',
    options: [
      { label: 'Quero me sentir mais seguro.', profile: 'protecao' },
      { label: 'Quero prosperar.', profile: 'prosperidade' },
      { label: 'Quero mudar de vida.', profile: 'transformacao' },
      { label: 'Quero equilíbrio.', profile: 'equilibrio' },
      { label: 'Quero entender melhor os sinais que recebo.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual dessas situações acontece com mais frequência?',
    options: [
      { label: 'Evito ambientes que me deixam pesado.', profile: 'protecao' },
      { label: 'Penso constantemente em crescimento.', profile: 'prosperidade' },
      { label: 'Mudanças surgem de repente.', profile: 'transformacao' },
      { label: 'Procuro resolver conflitos com tranquilidade.', profile: 'equilibrio' },
      { label: 'Tenho sonhos ou intuições marcantes.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Se pudesse receber uma mensagem agora, ela seria sobre:',
    options: [
      { label: 'Proteção.', profile: 'protecao' },
      { label: 'Prosperidade.', profile: 'prosperidade' },
      { label: 'Transformação.', profile: 'transformacao' },
      { label: 'Harmonia.', profile: 'equilibrio' },
      { label: 'Sabedoria.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual palavra mais chama sua atenção?',
    options: [
      { label: 'Escudo', profile: 'protecao' },
      { label: 'Abundância', profile: 'prosperidade' },
      { label: 'Renovação', profile: 'transformacao' },
      { label: 'Serenidade', profile: 'equilibrio' },
      { label: 'Percepção', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual sentimento aparece com mais frequência?',
    options: [
      { label: 'Precaução', profile: 'protecao' },
      { label: 'Ambição', profile: 'prosperidade' },
      { label: 'Mudança', profile: 'transformacao' },
      { label: 'Paz', profile: 'equilibrio' },
      { label: 'Curiosidade', profile: 'intuicao' },
    ],
  },
  {
    text: 'Quando você toma uma decisão importante:',
    options: [
      { label: 'Analisa os riscos.', profile: 'protecao' },
      { label: 'Busca oportunidades.', profile: 'prosperidade' },
      { label: 'Aceita mudanças.', profile: 'transformacao' },
      { label: 'Procura equilíbrio.', profile: 'equilibrio' },
      { label: 'Escuta sua intuição.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual dessas áreas mais precisa de atenção hoje?',
    options: [
      { label: 'Segurança pessoal.', profile: 'protecao' },
      { label: 'Finanças.', profile: 'prosperidade' },
      { label: 'Recomeços.', profile: 'transformacao' },
      { label: 'Vida emocional.', profile: 'equilibrio' },
      { label: 'Conexão espiritual.', profile: 'intuicao' },
    ],
  },
  {
    text: 'Qual dessas frases você escolheria?',
    options: [
      { label: 'Estou aprendendo a me proteger.', profile: 'protecao' },
      { label: 'Estou pronto para prosperar.', profile: 'prosperidade' },
      { label: 'Estou vivendo uma transformação.', profile: 'transformacao' },
      { label: 'Estou buscando equilíbrio.', profile: 'equilibrio' },
      { label: 'Estou aprendendo a ouvir os sinais.', profile: 'intuicao' },
    ],
  },
]

export const results = {
  protecao: {
    title: 'Sinais de Proteção',
    text: 'O seu resultado mostra uma fase em que você pode estar sentindo tudo com mais intensidade do que demonstra. Certos ambientes cansam mais rápido, algumas conversas parecem pesar depois, e talvez você esteja percebendo que precisa escolher melhor quem acessa sua energia, seu tempo e sua atenção. Não é afastamento por frieza: é um movimento interno de preservação. Algo em você parece pedir mais limite, mais silêncio e mais cuidado antes de continuar se entregando como antes.',
    signs: [
      'Você pode estar evitando pessoas ou lugares que antes suportava, mas que agora parecem drenar sua energia.',
      'Talvez esteja sentindo necessidade de ficar mais reservado, mesmo sem conseguir explicar isso para todos.',
      'Pode existir uma sensação de alerta interno, como se você precisasse cuidar melhor do que permite ao seu redor.',
    ],
    offerText:
      'Quando o perfil de Proteção aparece, ignorar os detalhes pode fazer você confundir intuição com medo, ou cansaço com sinal. O guia aprofunda esses padrões para ajudar você a entender o que merece atenção, o que pede limite e o que pode estar tentando mostrar que sua energia precisa ser melhor preservada.',
  },
  prosperidade: {
    title: 'Sinais de Prosperidade',
    text: 'O seu resultado revela uma inquietação muito específica: a sensação de que você não nasceu para ficar no mesmo lugar. Pode ser que você esteja pensando mais no futuro, nas suas escolhas, no dinheiro, nas oportunidades e até no quanto ainda precisa destravar para viver com mais segurança. Não aparece aqui como promessa fácil, mas como um chamado para crescimento. É como se uma parte sua já soubesse que existe um caminho maior, mas ainda estivesse tentando reconhecer por onde começar.',
    signs: [
      'Você pode estar sentindo incômodo com a ideia de continuar repetindo os mesmos limites financeiros ou profissionais.',
      'Talvez novas ideias estejam surgindo, mas junto delas venha a dúvida sobre qual caminho realmente merece sua energia.',
      'Pode existir uma vontade forte de organizar a vida, crescer e construir algo que tenha mais sentido para você.',
    ],
    offerText:
      'Quando o perfil de Prosperidade aparece, os sinais costumam vir misturados com desejo, ansiedade e pressa. O guia ajuda você a observar melhor o que pode ser abertura, o que pode ser dispersão e quais detalhes indicam que um novo ciclo de crescimento está pedindo mais clareza e direção.',
  },
  transformacao: {
    title: 'Sinais de Transformação',
    text: 'O seu resultado aponta para um momento em que algo dentro de você já mudou, mesmo que a sua vida ainda esteja tentando acompanhar. Algumas escolhas, relações ou planos podem não encaixar como antes. Talvez você esteja entre o conhecido e o novo, sentindo que uma fase está terminando, mas sem ter todas as respostas sobre a próxima. Esse perfil aparece quando a vida começa a tirar o peso do que não combina mais com quem você está se tornando.',
    signs: [
      'Você pode estar percebendo um distanciamento natural de coisas que antes pareciam importantes.',
      'Talvez sinta que está encerrando ciclos por dentro antes mesmo de conseguir tomar decisões por fora.',
      'Pode existir uma mistura de medo e alívio, como se uma parte sua soubesse que não dá mais para voltar ao mesmo lugar.',
    ],
    offerText:
      'Quando o perfil de Transformação aparece, cada sinal pode parecer mais intenso porque ele toca em mudança, desapego e recomeço. O guia aprofunda esses movimentos para ajudar você a entender o que está se encerrando, o que está tentando nascer e como atravessar essa fase com mais consciência.',
  },
  equilibrio: {
    title: 'Sinais de Equilíbrio',
    text: 'O seu resultado mostra que você pode estar carregando mais do que admite. Talvez por fora esteja tentando manter tudo funcionando, mas por dentro exista uma necessidade clara de pausa, ordem emocional e respiro. Esse perfil costuma aparecer quando a pessoa já passou tempo demais tentando dar conta de tudo, evitar conflitos, controlar preocupações e ainda parecer bem. Agora, a sua energia parece pedir menos excesso e mais centro.',
    signs: [
      'Você pode estar cansado de absorver tensões que nem sempre são suas.',
      'Talvez esteja buscando paz não por comodismo, mas porque percebeu que viver no limite cobra um preço.',
      'Pode existir uma vontade silenciosa de reorganizar sua rotina, suas emoções e suas prioridades.',
    ],
    offerText:
      'Quando o perfil de Equilíbrio aparece, os sinais muitas vezes são sutis: um cansaço repetido, uma irritação sem motivo claro, uma vontade de sumir por algumas horas. O guia ajuda você a reconhecer esses avisos antes que o desgaste vire rotina, trazendo mais clareza para recuperar harmonia sem se abandonar.',
  },
  intuicao: {
    title: 'Sinais de Intuição',
    text: 'O seu resultado sugere que você está captando mais coisas do que consegue explicar racionalmente. Pode ser um pensamento que surge do nada, um sonho que fica ecoando, uma coincidência que parece específica demais ou uma sensação interna que depois se confirma. Esse perfil aparece quando a sua percepção está mais aberta, mas também pede cuidado: nem todo sinal deve virar certeza imediata. O ponto agora é aprender a reconhecer o que se repete, o que toca fundo e o que realmente merece atenção.',
    signs: [
      'Você pode estar lembrando de sonhos, frases ou coincidências com mais força do que o normal.',
      'Talvez sinta algo antes de acontecer e depois pense: “eu já tinha percebido isso”.',
      'Pode existir uma sensação de que sua escuta interna está tentando ficar mais clara, mas ainda precisa de discernimento.',
    ],
    offerText:
      'Quando o perfil de Intuição aparece, a curiosidade aumenta porque os sinais parecem conversar com momentos muito específicos da sua vida. O guia aprofunda esses padrões para ajudar você a diferenciar percepção, ansiedade, coincidência e sinal recorrente, sem perder a clareza no caminho.',
  },
  caminhos_abertos: {
    title: 'Sinais de Caminhos Abertos',
    text: 'O seu resultado mostra que você pode estar em uma fase de muitos movimentos ao mesmo tempo. Não é apenas uma área chamando atenção: existe uma mistura de proteção, crescimento, mudança, equilíbrio e percepção acontecendo em camadas. Talvez por isso você sinta que algo está começando, mas ainda não consiga nomear exatamente o quê. Esse perfil aparece quando a vida abre possibilidades, mas também pede mais clareza para você não se perder entre tantas sensações.',
    signs: [
      'Você pode estar recebendo sinais em mais de uma área, como vida emocional, trabalho, relações e espiritualidade.',
      'Talvez sinta que várias coisas estão se reorganizando ao mesmo tempo, mesmo sem uma explicação única.',
      'Pode existir uma sensação forte de começo, como se uma nova rota estivesse se aproximando, mas ainda precisasse ser entendida.',
    ],
    offerText:
      'Quando o perfil de Caminhos Abertos aparece, o maior risco é achar que tudo é sinal ou ignorar justamente o que mais importa. O guia ajuda você a organizar essa fase, entender padrões recorrentes e observar quais mensagens podem estar apontando para uma direção mais consciente.',
  },
}
