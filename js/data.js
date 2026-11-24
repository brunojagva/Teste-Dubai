/**
 * Dubai 36 - Viagem dos Campeões 2026
 * Dados Mestres de Logística, Calendário Estruturado de Atividades, 36 Participantes e Templates
 */

const TRIP_CONFIG = {
  title: "Missão Dubai 2026: Viagem dos Campeões",
  companySubtitle: "Convenção Anual & Premiação dos 36 Melhores Vendedores",
  totalParticipants: 36,
  origin: "Florianópolis (FLN)",
  connection: "São Paulo (GRU)",
  destination: "Dubai International (DXB)",
  airlineOutbound: "Gol G3 1285 (FLN ➔ GRU) + Emirates EK 262 (GRU ➔ DXB)",
  airlineInbound: "Emirates EK 261 (DXB ➔ GRU) + Gol G3 1286 (GRU ➔ FLN)",
  hotel: "Address Sky View & Address Downtown Luxury Hotel (Dubai)",
  currencyRateAEDtoBRL: 1.58, // 1 AED ≈ R$ 1,58
  currencyRateUSDtoBRL: 5.75, // 1 USD ≈ R$ 5,75
  currencyRateUSDtoAED: 3.67, // Fixo oficial: 1 USD = 3.67 AED
  timeDifferenceHours: 7, // Dubai está 7 horas à frente do horário de Brasília/Floripa
  targetDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
};

// Calendário estruturado de atividades (dividido por Manhã, Almoço, Tarde, Jantar e Voos)
const ITINERARY_DATA = [
  {
    dayNumber: 1,
    dayTitle: "Dia 1: Embarque & Jornada dos Campeões",
    subtitle: "Florianópolis (FLN) ➔ São Paulo (GRU) ➔ Dubai (DXB)",
    dateLabel: "Segunda-feira",
    theme: "Logística & Conexão Internacional",
    dressCode: "Travel Chic (Confortável para voo longo, agasalho leve e tênis)",
    temperature: "FLN 21°C ➔ DXB 29°C",
    isFlightDay: true,
    events: [
      {
        time: "14:30",
        period: "Manhã / Embarque",
        periodType: "morning",
        title: "Ponto de Encontro no Aeroporto Hercílio Luz (FLN)",
        location: "Aeroporto FLN - Piso 2 (Balcão de Check-in em Grupo)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Recepção dos 36 campeões pela coordenação. Entrega do Kit Boas-Vindas exclusivo (tag de mala dourada dos campeões, porta-passaporte e chip eSIM internacional).",
        highlight: "Despacho direto das bagagens para Dubai com assistência VIP.",
        aiTip: "A Emirates permite 2 malas despachadas de 23kg por pessoa. Lembre-se: powerbanks e baterias DEVEM ir na mala de mão!"
      },
      {
        time: "17:15",
        period: "Voos & Conexão",
        periodType: "flight",
        title: "Voo Nacional: Florianópolis ➔ São Paulo (GRU)",
        location: "Voo G3 1285 (Boeing 737-800)",
        flightNumber: "G3 1285",
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Decolagem pontual de Floripa com chegada prevista em Guarulhos às 18:30. Transfer assistido para o Terminal 3 Internacional e acesso à Sala VIP para os 36 vencedores.",
        highlight: "Foto oficial de embarque de toda a delegação no saguão internacional.",
        aiTip: "Aproveite a Sala VIP em GRU para relaxar e jantar leve antes do embarque internacional."
      },
      {
        time: "01:25",
        period: "Voos & Conexão",
        periodType: "flight",
        title: "Voo Internacional Direto: São Paulo ➔ Dubai (DXB)",
        location: "Voo Emirates EK 262 (Boeing 777-300ER)",
        flightNumber: "EK 262",
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Decolagem do voo sem escalas com duração de 14h30. Sistema de entretenimento ICE com mais de 6.000 canais e serviço de bordo premium com brinde especial dos campeões.",
        highlight: "Brinde comemorativo da diretoria a 10.000 metros de altitude.",
        aiTip: "Durma durante as primeiras 7 horas de voo para acordar já no ritmo do fuso horário árabe (+7h)."
      }
    ]
  },
  {
    dayNumber: 2,
    dayTitle: "Dia 2: Pouso em Dubai & Primeiro Impacto",
    subtitle: "Chegada Triunfal em DXB, Check-in no Address Hotel e Boas-Vindas",
    dateLabel: "Terça-feira",
    theme: "Boas-Vindas & Acomodação VIP",
    dressCode: "Smart Casual / Elegante para o Jantar de Abertura",
    temperature: "Mín 21°C / Máx 29°C",
    isFlightDay: false,
    events: [
      {
        time: "09:00",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Desembarque VIP Marhaba & Recepção em DXB",
        location: "Dubai International Airport (DXB) - Terminal 3",
        flightNumber: "Pouso EK 262",
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Pouso em Dubai, recepção VIP no finger, imigração fast-track sem filas e retirada prioritária de bagagens para o grupo de 36 pessoas.",
        highlight: "Boas-vindas árabes tradicionais com café aromático gahwa e tâmaras nobres Bateel.",
        aiTip: "A autorização de entrada é carimbada na hora (brasileiros têm 90 dias isentos de visto)."
      },
      {
        time: "10:30",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Transfer VIP nas 3 Vans Executivas & Check-in",
        location: "Address Sky View Hotel - Downtown Dubai",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Trajeto pela Sheikh Zayed Road admirando os arranha-céus futuristas. Recepção no lobby VIP do hotel com entrega instantânea das chaves dos 18 quartos já pré-cadastrados.",
        highlight: "Vista panorâmica impactante do Burj Khalifa da janela dos quartos.",
        aiTip: "A taxa de hospedagem 'Tourism Dirham Fee' já foi liquidada pela organização."
      },
      {
        time: "13:00",
        period: "Almoço",
        periodType: "lunch",
        title: "Almoço Gourmet de Abertura dos Campeões",
        location: "Restaurante The Restaurant (Address Sky View)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Buffet executivo internacional com estações mediterrâneas e árabes preparadas na hora. Primeiro momento oficial de celebração e alinhamento da semana.",
        highlight: "Mesas reservadas com atendimento exclusivo para os 36 participantes.",
        aiTip: "Menu com opções vegetarianas, sem glúten e sem lactose devidamente identificadas."
      },
      {
        time: "15:30",
        period: "Parte da Tarde",
        periodType: "afternoon",
        title: "Tarde de Reconhecimento & Museu do Futuro",
        location: "Museum of the Future - Sheikh Zayed Road",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Visita imersiva ao edifício mais bonito do mundo, com ingressos prioritários. Uma jornada futurista sobre inovação, sustentabilidade e tecnologia no ano 2071.",
        highlight: "Foto oficial de todo o time de vendas em frente à icônica fachada de caligrafia árabe.",
        aiTip: "Horário rigoroso de entrada: vans partem do hotel às 15:00 pontualmente."
      },
      {
        time: "20:00",
        period: "Jantar",
        periodType: "dinner",
        title: "Jantar de Boas-Vindas com Show das Fontes",
        location: "Restaurante Ce La Vi / Serafina Downtown",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Jantar especial em terraço ao ar livre de frente para as famosas Fontes de Dubai e a iluminação monumental do Burj Khalifa.",
        highlight: "Espetáculo das águas dançantes sincronizadas com luz e música a cada 30 minutos.",
        aiTip: "Noite descontraída para recarregar as energias após o longo voo."
      }
    ]
  },
  {
    dayNumber: 3,
    dayTitle: "Dia 3: Da Dubai Histórica aos Souks do Ouro",
    subtitle: "Al Fahidi, Travessia no Dubai Creek e Dubai Mall",
    dateLabel: "Quarta-feira",
    theme: "Cultura, Tradição & Comércio Árabe",
    dressCode: "Casual Respeitoso (ombros e joelhos cobertos, sapatos confortáveis)",
    temperature: "Mín 22°C / Máx 30°C",
    isFlightDay: false,
    events: [
      {
        time: "09:30",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Tour Cultural Al Fahidi & Travessia em Barcos Abra",
        location: "Bairro Histórico Al Bastakiya & Dubai Creek",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Caminhada pelas vielas de arquitetura em coral do século XIX, visita ao Museu do Café e navegação tradicional em 2 barcos de madeira Abra privativos pelo canal.",
        highlight: "Experiência autêntica revelando a origem humilde de Dubai antes do petróleo.",
        aiTip: "Leve óculos escuros e protetor solar; a caminhada nos souks tem áreas ao ar livre."
      },
      {
        time: "11:30",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Mercado do Ouro & Especiarias (Gold & Spice Souks)",
        location: "Deira Old Souks",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Tempo para explorar vitrines com recordes mundiais do Guinness (o maior anel de ouro do mundo) e aromas exóticos de açafrão, incenso oud e tâmaras.",
        highlight: "Mini-desafio amigável de negociação com os comerciantes locais.",
        aiTip: "Pechinchar faz parte da tradição árabe nos souks: ofereça 30% a menos na primeira proposta!"
      },
      {
        time: "13:30",
        period: "Almoço",
        periodType: "lunch",
        title: "Banquete Típico no Arabian Tea House",
        location: "Arabian Tea House Cultural Restaurant",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Almoço árabe autêntico sob árvores centenárias com hummus, espetos de cordeiro, pães quentes e a famosa limonada com hortelã árabe.",
        highlight: "Ambiente bucólico eleito um dos mais charmosos do Oriente Médio.",
        aiTip: "Restrições alimentares comunicadas com antecedência ao chef."
      },
      {
        time: "16:00",
        period: "Parte da Tarde",
        periodType: "afternoon",
        title: "Exploração do Dubai Mall & Aquário Gigante",
        location: "Dubai Mall - Downtown",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Tarde para conferir as mais de 1.200 lojas do maior centro de compras do planeta, com parada fotográfica no gigantesco painel de acrílico do Dubai Aquarium.",
        highlight: "Tempo livre para compras de eletrônicos com isenção de impostos.",
        aiTip: "Solicite sempre o selo Planet Tax Free em compras acima de 250 AED."
      },
      {
        time: "20:00",
        period: "Jantar",
        periodType: "dinner",
        title: "Jantar Árabe Contemporâneo no Souk Madinat",
        location: "Restaurante Anise / Times of Arabia (Madinat Jumeirah)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Jantar à beira dos canais com iluminação cênica e vista de cartão postal para o hotel 7 estrelas Burj Al Arab.",
        highlight: "Cardápio harmonizado em 3 tempos com sobremesas típicas folhadas.",
        aiTip: "Traje casual elegante recomendado para este restaurante."
      }
    ]
  },
  {
    dayNumber: 4,
    dayTitle: "Dia 4: Safari 4x4 nas Dunas & Noite Beduína",
    subtitle: "Rally no Deserto de Lahbab, Sandboard e Banquete sob as Estrelas",
    dateLabel: "Quinta-feira",
    theme: "Adrenalina, Superação & Conexão Beduína",
    dressCode: "Safari Chic (tons terrosos/brancos, calçados para areia e casaco leve para a noite)",
    temperature: "Cidade 28°C ➔ Deserto: 29°C à tarde / 18°C à noite",
    isFlightDay: false,
    events: [
      {
        time: "09:30",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Manhã de Relaxamento na Piscina Infinita",
        location: "Address Sky View - Infinity Pool (54º Andar)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Manhã livre para curtir uma das piscinas de borda infinita mais famosas do mundo com vista deslumbrante para a silhueta de Dubai.",
        highlight: "Acesso privativo com toalhas e espreguiçadeiras reservadas para o grupo.",
        aiTip: "Excelente oportunidade para fotos incríveis antes da agitação do deserto."
      },
      {
        time: "12:30",
        period: "Almoço",
        periodType: "lunch",
        title: "Almoço Leve Pré-Deserto",
        location: "Deck do Hotel / The Lounge",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Refeição leve com saladas nobres, grelhados e sucos naturais para preparar o organismo para o passeio de 4x4.",
        highlight: "Briefing da organizadora com as regras de segurança do rally.",
        aiTip: "Evite alimentos pesados ou excesso de líquidos 1 hora antes do safari."
      },
      {
        time: "14:30",
        period: "Parte da Tarde",
        periodType: "afternoon",
        title: "Expedição 4x4 nas Dunas Vermelhas & Sandboard",
        location: "Deserto de Lahbab (Red Dunes)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Comboio de 6 veículos Land Cruiser 4x4 privativos (6 pessoas por carro com motoristas profissionais de rally). Emoção nas dunas, sandboard e parada para o pôr do sol.",
        highlight: "Parada no topo da duna mais alta para fotos memoráveis do pôr do sol árabe.",
        aiTip: "Prenda o celular com cordão de segurança; a areia vermelha do deserto é finíssima."
      },
      {
        time: "18:30",
        period: "Jantar",
        periodType: "dinner",
        title: "Banquete Real Beduíno no Al Khayma Heritage Camp VIP",
        location: "Acampamento Privativo dos Campeões",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Recepção com tapetes persas, pintura de henna, falcoaria real, churrasco premium de cordeiro e show de dança Tanoura e espetáculo com fogo.",
        highlight: "Momento emocionante: às 21h as luzes se apagam para contemplação das estrelas em silêncio.",
        aiTip: "A temperatura no deserto cai rapidamente após as 18:30. Tenha seu agasalho em mãos!"
      }
    ]
  },
  {
    dayNumber: 5,
    dayTitle: "Dia 5: Sunset Yacht Party na Dubai Marina & Palm Jumeirah",
    subtitle: "Mega Iate Privativo de 85 Pés, Ain Dubai e Skyline",
    dateLabel: "Sexta-feira",
    theme: "Celebração, Exclusividade & Lifestyle VIP",
    dressCode: "White & Gold Party (Roupas brancas com detalhes dourados elegantes)",
    temperature: "Mín 23°C / Máx 29°C",
    isFlightDay: false,
    events: [
      {
        time: "10:00",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Manhã Livre ou Visita ao Mall of the Emirates",
        location: "Mall of the Emirates / Ski Dubai",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Vans à disposição para quem deseja conhecer a pista de esqui na neve indoor e fazer compras nas boutiques de marcas globais.",
        highlight: "Acesso fácil e transfers sincronizados pelas vans executivas.",
        aiTip: "Para recuperar o imposto das compras, guarde todos os recibos com selo Tax Free."
      },
      {
        time: "12:30",
        period: "Almoço",
        periodType: "lunch",
        title: "Almoço no Pier 7 com Vista Panorâmica da Marina",
        location: "Pier 7 - Dubai Marina",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Almoço em restaurante contemporâneo com vista panorâmica de 360° para os iates e canais da Dubai Marina.",
        highlight: "Localização perfeita a poucos passos do cais de embarque do nosso iate.",
        aiTip: "Chegada a pé ao cais em apenas 5 minutos após o almoço."
      },
      {
        time: "14:00",
        period: "Parte da Tarde",
        periodType: "afternoon",
        title: "Sunset Yacht Party Privativo (Mega Iate 85 Pés)",
        location: "Dubai Marina Yacht Club ➔ Palm Jumeirah",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Embarque exclusivo dos 36 campeões em iate de luxo de 3 andares. Cruzeiro contornando Ain Dubai, JBR e o monumental Atlantis The Royal ao pôr do sol.",
        highlight: "DJ ao vivo a bordo, bar com mocktails refrescantes e brinde dos campeões na 'golden hour'.",
        aiTip: "Por regras náuticas dos Emirados, navegamos descalços a bordo (calçados guardados na entrada)."
      },
      {
        time: "19:00",
        period: "Jantar",
        periodType: "dinner",
        title: "Jantar Descontraído na Marina Promenade",
        location: "Dubai Marina Walk",
        flightNumber: null,
        isConfirmed: false,
        statusLabel: "Em Confirmação",
        description: "Noite descontraída com opções de alta gastronomia ao longo do calçadão iluminado da marina mais sofisticada do mundo.",
        highlight: "Passeio a pé refrescante ao lado de centenas de embarcações de luxo.",
        aiTip: "Vans em esquema circular retornando ao hotel a cada 45 minutos."
      }
    ]
  },
  {
    dayNumber: 6,
    dayTitle: "Dia 6: At The Top Burj Khalifa & A Grande Noite de Gala",
    subtitle: "Observatório no 124º Andar e Cerimônia Oficial de Premiação",
    dateLabel: "Sábado",
    theme: "Consagração Máxima & Homenagem aos Melhores",
    dressCode: "Dia: Casual Chic | Noite: Gala / Black Tie (Terno/Smoking para eles, Vestido de Festa para elas)",
    temperature: "Mín 21°C / Máx 28°C",
    isFlightDay: false,
    events: [
      {
        time: "10:00",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "No Topo do Mundo: At The Top - Burj Khalifa",
        location: "Burj Khalifa - Andares 124 e 125 (Entrada VIP)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Subida nos elevadores mais rápidos do planeta até a plataforma de observação a 452 metros de altura do edifício mais alto do mundo (828 metros).",
        highlight: "Acesso sem filas (Fast Track VIP) com telescópios interativos de alta definição.",
        aiTip: "Visão panorâmica de tirar o fôlego alcançando o Golfo e as ilhas artificiais."
      },
      {
        time: "12:30",
        period: "Almoço",
        periodType: "lunch",
        title: "Almoço de Confraternização no Souk Al Bahar",
        location: "Restaurante Abd El Wahab",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Culinária libanesa refinada com mesas na varanda privativa de frente para as fontes e os pés do Burj Khalifa.",
        highlight: "Harmonização de pratos tradicionais e clima descontraído pré-cerimônia.",
        aiTip: "Tarde livre a partir das 14:30 para descanso, salão e produção para a Noite de Gala."
      },
      {
        time: "15:00",
        period: "Parte da Tarde",
        periodType: "afternoon",
        title: "Tarde Livre: Preparação Pessoal & SPA",
        location: "Address Sky View Suites & The Spa",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Tempo dedicado para os 36 campeões relaxarem, descansarem e se arrumarem com calma para o grande evento de gala da noite.",
        highlight: "Serviço de passadoria rápida e maquiagem à disposição no hotel.",
        aiTip: "Esteja pronto(a) e no lobby até as 19:15 para a sessão de fotos no tapete vermelho."
      },
      {
        time: "19:30",
        period: "Jantar",
        periodType: "dinner",
        title: "A Grande Noite de Gala & Premiação dos Campeões",
        location: "Imperial Ballroom - Address Sky View Hotel",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Tapete vermelho, coquetel de boas-vindas, entrega dos troféus banhados a ouro para os 36 vencedores, banquete em 4 tempos e festa exclusiva com DJ.",
        highlight: "Consagração do ano comercial mais vitorioso da história da empresa.",
        aiTip: "O dress code desta noite é rigoroso: roupas de gala impecáveis!"
      }
    ]
  },
  {
    dayNumber: 7,
    dayTitle: "Dia 7: Check-out, Tax Free e Retorno a Florianópolis",
    subtitle: "Dubai (DXB) ➔ São Paulo (GRU) ➔ Florianópolis (FLN)",
    dateLabel: "Domingo e Segunda-feira",
    theme: "Missão Cumprida & Retorno dos Vencedores",
    dressCode: "Casual Confortável para Voo de Longa Duração",
    temperature: "DXB 28°C ➔ FLN 22°C",
    isFlightDay: true,
    events: [
      {
        time: "05:30",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Check-out no Hotel & Transfer para Aeroporto DXB",
        location: "Lobby do Address Hotel ➔ Terminal 3 DXB",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Conferência final de bagagens e deslocamento sincronizado das 3 vans executivas para o aeroporto com caixas de café da manhã gourmet para viagem.",
        highlight: "Equipe de apoio auxiliando no despacho das malas sem filas.",
        aiTip: "Tenha em mãos o passaporte e o comprovante das compras com selo Tax Free."
      },
      {
        time: "07:00",
        period: "Parte da Manhã",
        periodType: "morning",
        title: "Validação do Reembolso de Impostos (Planet Tax Free)",
        location: "Aeroporto DXB - Quiosques Planet (Pós-Segurança)",
        flightNumber: null,
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Tempo reservado para validar os cupons nos totens automáticos e receber o estorno do IVA no cartão de crédito internacional.",
        highlight: "Processo 100% digital e rápido com assistência da organização.",
        aiTip: "O estorno cai direto no cartão internacional cadastrado em poucos dias."
      },
      {
        time: "09:05",
        period: "Voos & Conexão",
        periodType: "flight",
        title: "Voo Internacional Direto: Dubai ➔ São Paulo (GRU)",
        location: "Voo Emirates EK 261 (Boeing 777-300ER)",
        flightNumber: "EK 261",
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Decolagem às 09:05 de Dubai com pouso previsto em São Paulo (GRU) às 17:35 do mesmo dia (ganho de fuso horário de 7 horas).",
        highlight: "Descanso comemorativo e almoço a bordo servido com excelência Emirates.",
        aiTip: "A cota de isenção da alfândega brasileira (Receita Federal) é de US$ 1.000 por viajante."
      },
      {
        time: "21:10",
        period: "Voos & Conexão",
        periodType: "flight",
        title: "Conexão Final e Pouso em Florianópolis (FLN)",
        location: "Voo Gol G3 1286 (GRU ➔ FLN)",
        flightNumber: "G3 1286",
        isConfirmed: true,
        statusLabel: "Confirmado",
        description: "Conexão rápida em Guarulhos e pouso triunfal no Aeroporto Hercílio Luz às 22:25 com recepção calorosa e encerramento da viagem dos campeões.",
        highlight: "Missão Dubai 2026 100% concluída com segurança, luxo e excelência.",
        aiTip: "Descanse bem nos dias seguintes para readaptação ao ritmo de trabalho!"
      }
    ]
  }
];

// Base com os 36 campeões de vendas
const PARTICIPANTS_DATA = [
  // VAN 1 (12 Pessoas) - Líder: Carlos Henrique
  { id: 1, name: "Carlos Henrique Silva", branch: "Florianópolis (Matriz)", role: "Gerente Geral Vendas", van: 1, isVanLeader: true, room: 101, roomType: "Suíte King", roommate: "Aline Cristina Silva", dietary: "Sem Restrições", emergencyContact: "(48) 99123-4567", flightSeat: "14A", passportOk: true },
  { id: 2, name: "Aline Cristina Silva", branch: "Florianópolis (Matriz)", role: "Acompanhante / Apoio", van: 1, isVanLeader: false, room: 101, roomType: "Suíte King", roommate: "Carlos Henrique Silva", dietary: "Vegetariana", emergencyContact: "(48) 99123-4567", flightSeat: "14B", passportOk: true },
  { id: 3, name: "Rafael Bittencourt", branch: "Florianópolis", role: "Top Vendas Corporativo (1º Lugar)", van: 1, isVanLeader: false, room: 102, roomType: "Twin (2 camas)", roommate: "Eduardo Zimmermann", dietary: "Sem Restrições", emergencyContact: "(48) 98877-1122", flightSeat: "14C", passportOk: true },
  { id: 4, name: "Eduardo Zimmermann", branch: "Blumenau", role: "Top Vendas Varejo (1º Lugar)", van: 1, isVanLeader: false, room: 102, roomType: "Twin (2 camas)", roommate: "Rafael Bittencourt", dietary: "Sem Glúten (Celíaco)", emergencyContact: "(47) 99988-3344", flightSeat: "14D", passportOk: true },
  { id: 5, name: "Juliana Mendes", branch: "Joinville", role: "Super campeã de Vendas", van: 1, isVanLeader: false, room: 103, roomType: "Twin (2 camas)", roommate: "Camila Dorneles", dietary: "Sem Lactose", emergencyContact: "(47) 98455-6677", flightSeat: "15A", passportOk: true },
  { id: 6, name: "Camila Dorneles", branch: "Joinville", role: "Especialista Soluções Enterprise", van: 1, isVanLeader: false, room: 103, roomType: "Twin (2 camas)", roommate: "Juliana Mendes", dietary: "Sem Restrições", emergencyContact: "(47) 98411-2233", flightSeat: "15B", passportOk: true },
  { id: 7, name: "Marcos Vinícius Prado", branch: "Chapecó", role: "Top Performer Agronegócio", van: 1, isVanLeader: false, room: 104, roomType: "Twin (2 camas)", roommate: "Felipe Siqueira", dietary: "Sem Frutos do Mar (Alérgico)", emergencyContact: "(49) 99112-9988", flightSeat: "15C", passportOk: true },
  { id: 8, name: "Felipe Siqueira", branch: "Chapecó", role: "Destaque Novos Contratos", van: 1, isVanLeader: false, room: 104, roomType: "Twin (2 camas)", roommate: "Marcos Vinícius Prado", dietary: "Sem Restrições", emergencyContact: "(49) 99188-7766", flightSeat: "15D", passportOk: true },
  { id: 9, name: "Fernanda Takahashi", branch: "Florianópolis", role: "Executiva Contas Key Account", van: 1, isVanLeader: false, room: 105, roomType: "Twin (2 camas)", roommate: "Bruna Luísa Fontana", dietary: "Vegetariana", emergencyContact: "(48) 99655-4433", flightSeat: "16A", passportOk: true },
  { id: 10, name: "Bruna Luísa Fontana", branch: "Criciúma", role: "Líder de Conversão Regional", van: 1, isVanLeader: false, room: 105, roomType: "Twin (2 camas)", roommate: "Fernanda Takahashi", dietary: "Sem Restrições", emergencyContact: "(48) 99933-2211", flightSeat: "16B", passportOk: true },
  { id: 11, name: "Lucas Furtado", branch: "Itajaí", role: "Especialista Comércio Exterior", van: 1, isVanLeader: false, room: 106, roomType: "Twin (2 camas)", roommate: "André Gustavo Diniz", dietary: "Sem Restrições", emergencyContact: "(47) 99722-1100", flightSeat: "16C", passportOk: true },
  { id: 12, name: "André Gustavo Diniz", branch: "Florianópolis", role: "Executivo Top Expansão", van: 1, isVanLeader: false, room: 106, roomType: "Twin (2 camas)", roommate: "Lucas Furtado", dietary: "Sem Restrições", emergencyContact: "(48) 99888-5544", flightSeat: "16D", passportOk: true },

  // VAN 2 (12 Pessoas) - Líder: Mariana Vasconcelos
  { id: 13, name: "Mariana Vasconcelos", branch: "Florianópolis", role: "Coordenadora de Eventos & Viagem", van: 2, isVanLeader: true, room: 107, roomType: "King Single", roommate: "N/A (Staff)", dietary: "Sem Restrições", emergencyContact: "(48) 99999-0001", flightSeat: "17A", passportOk: true },
  { id: 14, name: "Thiago Albuquerque", branch: "Blumenau", role: "Destaque Crescimento YoY", van: 2, isVanLeader: false, room: 108, roomType: "Twin (2 camas)", roommate: "Gabriel Miranda", dietary: "Sem Restrições", emergencyContact: "(47) 99122-3344", flightSeat: "17B", passportOk: true },
  { id: 15, name: "Gabriel Miranda", branch: "Joinville", role: "Campeão Retenção & Upsell", van: 2, isVanLeader: false, room: 108, roomType: "Twin (2 camas)", roommate: "Thiago Albuquerque", dietary: "Sem Frutos do Mar", emergencyContact: "(47) 98844-5566", flightSeat: "17C", passportOk: true },
  { id: 16, name: "Renata Coimbra", branch: "Florianópolis", role: "Top Vendas Soluções Tech", van: 2, isVanLeader: false, room: 109, roomType: "Twin (2 camas)", roommate: "Letícia Guimarães", dietary: "Vegana", emergencyContact: "(48) 99133-7788", flightSeat: "18A", passportOk: true },
  { id: 17, name: "Letícia Guimarães", branch: "Lages", role: "Destaque Interior Serrana", van: 2, isVanLeader: false, room: 109, roomType: "Twin (2 camas)", roommate: "Renata Coimbra", dietary: "Sem Restrições", emergencyContact: "(49) 99811-2244", flightSeat: "18B", passportOk: true },
  { id: 18, name: "Rodrigo Meirelles", branch: "Criciúma", role: "Top Performance Indústria", van: 2, isVanLeader: false, room: 110, roomType: "Twin (2 camas)", roommate: "Vinícius Bastos", dietary: "Sem Restrições", emergencyContact: "(48) 99955-6677", flightSeat: "18C", passportOk: true },
  { id: 19, name: "Vinícius Bastos", branch: "Tubarão", role: "Maior Ticket Médio do Ano", van: 2, isVanLeader: false, room: 110, roomType: "Twin (2 camas)", roommate: "Rodrigo Meirelles", dietary: "Sem Glúten", emergencyContact: "(48) 99644-3322", flightSeat: "18D", passportOk: true },
  { id: 20, name: "Patrícia Fagundes", branch: "Balneário Camboriú", role: "Top Atendimento Premium", van: 2, isVanLeader: false, room: 111, roomType: "Twin (2 camas)", roommate: "Sofia Nogueira", dietary: "Sem Restrições", emergencyContact: "(47) 99233-4455", flightSeat: "19A", passportOk: true },
  { id: 21, name: "Sofia Nogueira", branch: "Florianópolis", role: "Top Conversão Inbound", van: 2, isVanLeader: false, room: 111, roomType: "Twin (2 camas)", roommate: "Patrícia Fagundes", dietary: "Vegetariana", emergencyContact: "(48) 99177-8899", flightSeat: "19B", passportOk: true },
  { id: 22, name: "Leandro Castilho", branch: "Chapecó", role: "Líder Regional Oeste", van: 2, isVanLeader: false, room: 112, roomType: "Twin (2 camas)", roommate: "Bruno Peixoto", dietary: "Sem Restrições", emergencyContact: "(49) 99944-5566", flightSeat: "19C", passportOk: true },
  { id: 23, name: "Bruno Peixoto", branch: "Joaçaba", role: "Campeão Prospecção Fria", van: 2, isVanLeader: false, room: 112, roomType: "Twin (2 camas)", roommate: "Leandro Castilho", dietary: "Sem Restrições", emergencyContact: "(49) 98833-2211", flightSeat: "19D", passportOk: true },
  { id: 24, name: "Daniela Aragão", branch: "Florianópolis", role: "Apoio Organização & Logística", van: 2, isVanLeader: false, room: 113, roomType: "King Single", roommate: "N/A (Staff)", dietary: "Sem Lactose", emergencyContact: "(48) 99811-0022", flightSeat: "20A", passportOk: true },

  // VAN 3 (12 Pessoas) - Líder: Roberto Campos
  { id: 25, name: "Roberto Campos", branch: "Joinville", role: "Diretor Comercial", van: 3, isVanLeader: true, room: 114, roomType: "Suíte Executiva", roommate: "N/A (Diretoria)", dietary: "Sem Restrições", emergencyContact: "(47) 99999-9988", flightSeat: "12A", passportOk: true },
  { id: 26, name: "Gustavo Henrique Lima", branch: "Jaraguá do Sul", role: "Super Campeão Eletro", van: 3, isVanLeader: false, room: 115, roomType: "Twin (2 camas)", roommate: "Marcelo Valença", dietary: "Sem Restrições", emergencyContact: "(47) 99155-4433", flightSeat: "21A", passportOk: true },
  { id: 27, name: "Marcelo Valença", branch: "Blumenau", role: "Top Fidelização Clientes", van: 3, isVanLeader: false, room: 115, roomType: "Twin (2 camas)", roommate: "Gustavo Henrique Lima", dietary: "Sem Restrições", emergencyContact: "(47) 99766-5544", flightSeat: "21B", passportOk: true },
  { id: 28, name: "Carolina Marinho", branch: "Florianópolis", role: "Campeã Vendas Governamentais", van: 3, isVanLeader: false, room: 116, roomType: "Twin (2 camas)", roommate: "Beatriz Rezende", dietary: "Sem Restrições", emergencyContact: "(48) 99144-6655", flightSeat: "21C", passportOk: true },
  { id: 29, name: "Beatriz Rezende", branch: "Itajaí", role: "Executiva Soluções Logísticas", van: 3, isVanLeader: false, room: 116, roomType: "Twin (2 camas)", roommate: "Carolina Marinho", dietary: "Alérgica a Amendoim", emergencyContact: "(47) 99855-3322", flightSeat: "21D", passportOk: true },
  { id: 30, name: "Diego Antunes", branch: "Brusque", role: "Top Volume Vendas Sul", van: 3, isVanLeader: false, room: 117, roomType: "Twin (2 camas)", roommate: "Guilherme Santos", dietary: "Sem Restrições", emergencyContact: "(47) 98822-1199", flightSeat: "22A", passportOk: true },
  { id: 31, name: "Guilherme Santos", branch: "São José", role: "Revelação do Ano Comercial", van: 3, isVanLeader: false, room: 117, roomType: "Twin (2 camas)", roommate: "Diego Antunes", dietary: "Sem Restrições", emergencyContact: "(48) 99611-3377", flightSeat: "22B", passportOk: true },
  { id: 32, name: "Larissa Pires", branch: "Florianópolis", role: "Executiva Negócios Digitais", van: 3, isVanLeader: false, room: 118, roomType: "Twin (2 camas)", roommate: "Vanessa Ramos", dietary: "Vegetariana", emergencyContact: "(48) 99922-8844", flightSeat: "22C", passportOk: true },
  { id: 33, name: "Vanessa Ramos", branch: "Tubarão", role: "Campeã Novos Clientes", van: 3, isVanLeader: false, room: 118, roomType: "Twin (2 camas)", roommate: "Larissa Pires", dietary: "Sem Restrições", emergencyContact: "(48) 99188-4422", flightSeat: "22D", passportOk: true },
  { id: 34, name: "Alexandre Gusmão", branch: "Palhoça", role: "Especialista Pós-Venda Ativo", van: 3, isVanLeader: false, room: 119, roomType: "Twin (2 camas)", roommate: "Samuel Silveira", dietary: "Sem Glúten", emergencyContact: "(48) 99877-6655", flightSeat: "23A", passportOk: true },
  { id: 35, name: "Samuel Silveira", branch: "Florianópolis", role: "Destaque Vendas Estratégicas", van: 3, isVanLeader: false, room: 119, roomType: "Twin (2 camas)", roommate: "Alexandre Gusmão", dietary: "Sem Restrições", emergencyContact: "(48) 99155-2200", flightSeat: "23B", passportOk: true },
  { id: 36, name: "Dr. Marcelo Paiva", branch: "Florianópolis (Staff)", role: "Médico da Delegação / Suporte", van: 3, isVanLeader: false, room: 120, roomType: "King Single", roommate: "N/A (Médico)", dietary: "Sem Restrições", emergencyContact: "(48) 99999-1122", flightSeat: "12B", passportOk: true }
];

// Templates prontos com IA para a Organizadora disparar no WhatsApp com 1 clique
const WHATSAPP_TEMPLATES = [
  {
    id: "embarque_fln",
    title: "🛫 Aviso de Embarque no Aeroporto de Florianópolis (FLN)",
    category: "Aeroporto & Viagem",
    message: `🚨 *ATENÇÃO CAMPEÕES DUBAI 2026 - INSTRUÇÕES DE EMBARQUE* 🚨

Fala, time de ouro! Chegou a tão esperada semana da nossa consagração nos Emirados Árabes! 🇦🇪✨

📍 *Ponto de Encontro:* Aeroporto Hercílio Luz (FLN) - Piso 2 (Próximo aos totens de check-in)
⏰ *Horário limite de chegada:* 14h30 impreterivelmente!
✈️ *Primeiro Voo:* FLN ➔ GRU (Voo Gol G3 1285 às 17h15)
✈️ *Voo Internacional:* GRU ➔ DXB (Emirates EK 262 às 01h25)

📌 *CHECKLIST OBRIGATÓRIO NA BAGAGEM DE MÃO:*
1. Passaporte original com validade mínima de 6 meses
2. Documento com foto (RG/CNH)
3. Apólice do Seguro Viagem (enviada no e-mail)
4. *IMPORTANTE:* Powerbanks e baterias portáteis DEVEM ir na mala de mão (proibido na mala despachada).

No aeroporto de Floripa, procure a equipe de coordenação para retirar seu Kit Campeão (Tag de mala dourada + porta passaporte + eSIM). 

Qualquer imprevisto no trânsito, avise aqui imediatamente! Nos vemos lá no topo! 🚀🏆`
  },
  {
    id: "checkin_dubai",
    title: "🏨 Boas-Vindas & Acomodação no Address Hotel Dubai",
    category: "Hotel & Hospedagem",
    message: `🇦🇪 *AHLAN WA SAHLAN! BEM-VINDOS A DUBAI, CAMPEÕES!* 🌟

Acabamos de pousar em solo emiradense e nossa frota de vans executivas já está no estacionamento VIP do Terminal 3.

🏨 *Nosso Hotel:* Address Sky View / Downtown Dubai
🔑 *Check-in Agilizado:* Todos os cartões de quartos já foram pré-impressos pela organização para evitar filas na recepção!
☕ *Café da Manhã:* Servido das 06h30 às 10h30 no restaurante principal (piso 2).
📶 *Wi-Fi do Hotel:* Rede 'Address_Guest' (login com seu sobrenome e número do quarto).

🔌 *LEMBRETE ELÉTRICO:* Em Dubai, a tomada é tipo G (3 pinos retangulares, padrão britânico - 230V). Caso precise de adaptador extra, solicite na governança pelo ramal 0 do quarto.

Descansem muito bem! Amanhã nosso dia começa com a fascinante Dubai Antiga e o Museu do Futuro! 🏙️💫`
  },
  {
    id: "safari_deserto",
    title: "🏜️ Lembrete do Safari 4x4 no Deserto de Lahbab",
    category: "Passeios & Experiências",
    message: `🐪 *PREPAREM-SE PARA A AVENTURA NAS DUNAS VERMELHAS!* 🏜️

Hoje é dia de acelerar os corações com o nosso Safari 4x4 privativo no deserto de Lahbab e nosso jantar exclusivo sob as estrelas!

⏰ *Horário de Saída:* 14h30 em ponto no Lobby do hotel (não se atrase, os 6 jeeps saem em comboio).
👕 *DRESS CODE RECOMENDADO (Safari Chic):*
- Roupas leves, frescas e confortáveis (tons terrosos, cáqui ou branco ficam incríveis nas fotos).
- Calçados confortáveis (sandália ou tênis fácil de tirar, pois pisaremos na areia fofa).
- 🧥 *ESSENCIAL:* Leve um casaco leve! O deserto esfria rapidamente após o pôr do sol (cerca de 18°C).

📸 *DICA DE OURO:* Leve óculos escuros, protetor solar e carregue 100% da bateria do celular! Teremos sandboard nas dunas, fotos com falcão real e show de fogo no acampamento! 🦅🔥`
  },
  {
    id: "yacht_party",
    title: "🛥️ Sunset Yacht Party na Dubai Marina (White & Gold)",
    category: "Festa & Celebração",
    message: `⚓ *CONVITE EXCLUSIVO: SUNSET YACHT PARTY 36 CAMPEÕES* 🥂✨

Time, hoje à tarde o Golfo Pérsico é nosso! Nosso mega iate privativo de 85 pés nos aguarda na Dubai Marina.

⏰ *Saída do Hotel:* 13h15 nas nossas vans executivas.
📍 *Embarque:* Pier 7 - Dubai Marina Yacht Club (14h00).
⚪🟡 *DRESS CODE:* White & Gold Party (roupas brancas com detalhes dourados).
👙 *Traje de Banho:* Para quem quiser curtir a jacuzzi do deck superior ou dar um mergulho assistido em alto mar, vá com traje de banho por baixo.

⚠️ *REGRA DA MARINHA DOS EMIRADOS:* Ao embarcar, todos tiram os calçados e deixam na entrada (navegamos descalços ou de meia a bordo com total conforto e piso de teca climatizado).

Teremos DJ ao vivo a bordo, bar com mocktails, buffet gourmet e a vista mais privilegiada do pôr do sol em frente ao Atlantis The Royal! Não percam! 🌊🚤`
  },
  {
    id: "noite_gala",
    title: "🏆 A Grande Noite de Gala & Premiação Oficial",
    category: "Premiação & Reconhecimento",
    message: `🌟 *A NOITE MAIS IMPORTANTE DO ANO CHEGOU: GALA DOS CAMPEÕES DUBAI 2026* 🏆

Chegou o grande momento de subir ao palco e receber o reconhecimento por cada meta superada com garra e maestria!

📍 *Local:* Grande Salão Imperial de Banquetes - Address Hotel
⏰ *19h30:* Tapete Vermelho, Fotos Oficiais & Welcome Cocktail
⏰ *20h30:* Cerimônia de Premiação & Entrega de Troféus de Ouro
⏰ *22h00:* Jantar de Gala em 4 Tempos & Festa com DJ

👔👗 *DRESS CODE: GALA / BLACK TIE OU PASSEIO COMPLETO*
- Homens: Terno completo ou smoking (gravata borboleta ou tradicional).
- Mulheres: Vestido longo ou conjunto de festa elegante.

Preparem o coração e os sorrisos! Esta noite ficará gravada para sempre na história da nossa empresa! Parabéns a cada um dos 36 campeões! 🥂✨🎉`
  },
  {
    id: "retorno_fln",
    title: "🛄 Check-out, Tax Free e Retorno para Florianópolis",
    category: "Retorno & Aeroporto",
    message: `✈️ *MISSÃO CUMPRIDA! INSTRUÇÕES PARA O RETORNO AO BRASIL* 🇧🇷

Que semana épica vivemos juntos em Dubai! Para que nossa viagem de volta seja tão tranquila e organizada quanto a vinda, sigam as orientações:

⏰ *05h30:* Concentração com malas no lobby do hotel para check-out e conferência.
🚌 *05h45:* Saída impreterível das vans para o Terminal 3 do Aeroporto DXB.
✈️ *Voo Internacional:* Emirates EK 261 (Decolagem DXB 09h05 | Pouso GRU 17h35)
✈️ *Voo Conexão:* Gol G3 1286 (GRU ➔ FLN)

💰 *REEMBOLSO TAX FREE (PLANET):*
Quem fez compras acima de 250 AED e pegou os selos Tax Free nas lojas, teremos 30 minutos livres no aeroporto para validar os cupons nos quiosques automáticos da Planet e receber o reembolso no cartão de crédito!

Verifiquem se não esqueceram passaportes nos cofres dos quartos e guardem memórias para a vida toda! Bom retorno a todos! 👏💙`
  }
];

// Base de conhecimento para o Concierge com IA
const DUBAI_KNOWLEDGE_BASE = [
  {
    keywords: ["visto", "passaporte", "entrada", "documento", "validade"],
    answer: "Cidadãos brasileiros viajando a turismo para os Emirados Árabes Unidos (Dubai) NÃO precisam de visto prévio para estadias de até 90 dias. A autorização de entrada é carimbada gratuitamente no controle de passaportes na chegada ao aeroporto (DXB). É obrigatório que o passaporte tenha validade mínima de 6 meses a partir da data de desembarque."
  },
  {
    keywords: ["voo", "voos", "horario voo", "emirates", "gol", "escala", "conexao"],
    answer: "Nossos voos oficiais são: IDA no Dia 1: Gol G3 1285 saindo de Florianópolis (FLN) às 17:15 até São Paulo (GRU), seguido pelo voo sem escalas Emirates EK 262 decolando de GRU às 01:25 direto para Dubai (DXB). VOLTA no Dia 7: Emirates EK 261 decolando de Dubai às 09:05 com pouso em GRU às 17:35, e conexão Gol G3 1286 pousando em Florianópolis às 22:25."
  },
  {
    keywords: ["roupa", "vestimenta", "dress code", "bermuda", "regata", "decote", "costumes"],
    answer: "Dubai é uma metrópole cosmopolita e moderna, mas respeita a tradição islâmica. Em shoppings, hotéis e restaurantes, roupas casuais elegantes são comuns. Recomenda-se evitar decotes profundos ou roupas excessivamente curtas em locais públicos tradicionais. Em mesquitas (como a Mesquita de Jumeirah), homens devem estar de calça comprida e mulheres com braços, pernas e cabelos cobertos (lenço/echarpe). Em praias e piscinas dos hotéis, biquínis e sungas são permitidos sem problemas."
  },
  {
    keywords: ["alcool", "beber", "bebida", "cerveja", "vinho"],
    answer: "O consumo de bebidas alcoólicas em Dubai é totalmente permitido para turistas maiores de 21 anos dentro de hotéis, resorts, restaurantes licenciados, lounges e clubes privados (como no nosso Address Hotel e no Iate). É estritamente proibido consumir bebidas alcoólicas na rua ou em praias públicas, e dirigir após beber tem tolerância zero absoluta."
  },
  {
    keywords: ["moeda", "câmbio", "dinheiro", "cartao", "dirham", "aed"],
    answer: "A moeda oficial é o Dirham dos Emirados Árabes Unidos (AED), com cotação atrelada ao dólar americano (1 USD = 3,67 AED fixo). Em relação ao Real, 1 AED gira em torno de R$ 1,55 a R$ 1,60. Praticamente todos os estabelecimentos (taxis, restaurantes, lojas do souk) aceitam cartões de crédito/débito internacionais (Wise, Nomad, C6, cartões bancários) e Apple Pay / Google Pay. Vale a pena trocar apenas uma quantia pequena em espécie para pequenas gorjetas."
  },
  {
    keywords: ["tomada", "eletricidade", "voltagem", "adaptador", "carregador"],
    answer: "A voltagem em Dubai é 230V a 50Hz. O padrão de tomada é o Tipo G (três pinos retangulares largos, padrão britânico). Os quartos do nosso Address Hotel possuem saídas USB modernas e adaptadores, mas levar um adaptador universal na mala garante que você carregue notebook e celulares em qualquer lugar sem transtornos."
  },
  {
    keywords: ["compras", "iphone", "eletronicos", "tax free", "shopping", "dubai mall"],
    answer: "Dubai é um paraíso de compras sem impostos estaduais pesados. No Dubai Mall e Mall of the Emirates há lojas oficiais da Apple, onde eletrônicos costumam ter preços muito competitivos comparados ao Brasil. Turistas têm direito a reembolso do IVA (5%) através do sistema Planet Tax Free em compras acima de 250 AED. A cota da alfândega brasileira (Receita Federal) para voos internacionais é de US$ 1.000 por passageiro."
  },
  {
    keywords: ["gorjeta", "tip", "serviço"],
    answer: "A gorjeta em Dubai não é obrigatória por lei, mas é culturalmente muito bem-vinda e apreciada pela excelência dos serviços. Em restaurantes, muitos incluem uma taxa de serviço de 10% a 15% na conta; se o atendimento foi excelente, arredondar a conta ou deixar 5 a 10 AED adicionais é um ótimo gesto. Para carregadores de malas e motoristas de transfer, 5 a 10 AED por mala é o padrão habitual."
  },
  {
    keywords: ["remedio", "medicamento", "farmacia"],
    answer: "Os Emirados possuem regras rígidas contra substâncias que contenham derivados de codeína, tramadol ou alguns ansiolíticos controlados sem receita médica. Se você toma medicamentos de uso contínuo, traga-os na embalagem original acompanhados da receita médica em inglês ou português com a dosagem especificada."
  }
];
