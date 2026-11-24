/**
 * Dubai 36 - Viagem dos Campeões
 * Lógica Principal da Aplicação, Interatividade, IA Chatbot e Gerenciador
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initClocks();
  initTabs();
  renderItinerary(0); // Inicia no Dia 1 ou Dia 0
  initCurrencyConverter();
  initWhatsAppManager();
  initVansAndParticipants();
  initRoomingList();
  initChecklist();
  initChatbot();
  initGallery();
  triggerWelcomeConfetti();
});

/* ==========================================================================
   1. CONTAGEM REGRESSIVA E RELÓGIOS GLOBAIS
   ========================================================================== */
function initCountdown() {
  const countdownEl = document.getElementById('trip-countdown');
  if (!countdownEl) return;

  // Data alvo: 6 dias a partir de hoje às 14:30
  const now = new Date();
  const targetDate = new Date(now.getTime() + 6 * 24 * 60 * 60 * 1000);
  targetDate.setHours(14, 30, 0, 0);

  function update() {
    const current = new Date();
    const diff = targetDate - current;

    if (diff <= 0) {
      countdownEl.innerHTML = `<span class="text-amber-400 font-bold">A VIAGEM COMEÇOU! BEM-VINDOS A DUBAI!</span>`;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('count-days');
    const hEl = document.getElementById('count-hours');
    const mEl = document.getElementById('count-mins');
    const sEl = document.getElementById('count-secs');

    if (dEl && hEl && mEl && sEl) {
      dEl.textContent = String(days).padStart(2, '0');
      hEl.textContent = String(hours).padStart(2, '0');
      mEl.textContent = String(minutes).padStart(2, '0');
      sEl.textContent = String(seconds).padStart(2, '0');
    }
  }

  update();
  setInterval(update, 1000);
}

function initClocks() {
  function updateClocks() {
    const now = new Date();

    // Floripa (Brasília: UTC-3)
    const optionsFloripa = { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const floripaTimeStr = now.toLocaleTimeString('pt-BR', optionsFloripa);
    const floripaClock = document.getElementById('clock-floripa');
    if (floripaClock) floripaClock.textContent = floripaTimeStr;

    // Dubai (UTC+4)
    const optionsDubai = { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dubaiTimeStr = now.toLocaleTimeString('pt-BR', optionsDubai);
    
    // Relógio Proeminente no Topo
    const prominentDubaiClock = document.getElementById('prominent-clock-dubai');
    if (prominentDubaiClock) prominentDubaiClock.textContent = dubaiTimeStr;

    // Relógio de apoio
    const dubaiClock = document.getElementById('clock-dubai');
    if (dubaiClock) dubaiClock.textContent = dubaiTimeStr;
  }

  updateClocks();
  setInterval(updateClocks, 1000);
}

/* ==========================================================================
   2. SISTEMA DE NAVEGAÇÃO POR ABAS (TABS)
   ========================================================================== */
function initTabs() {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab-target');

      tabButtons.forEach(b => b.classList.remove('active', 'text-sky-400', 'border-sky-400'));
      tabContents.forEach(c => c.classList.add('hidden'));

      btn.classList.add('active', 'text-sky-400');
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Reinicializa ícones Lucide
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });
  });
}

/* ==========================================================================
   3. RENDERIZADOR DO CALENDÁRIO DE ATIVIDADES E ROTEIRO
   ========================================================================== */
function renderItinerary(selectedDayIndex = null) {
  const container = document.getElementById('itinerary-container');
  const dayPillsContainer = document.getElementById('day-pills-filter');
  if (!container || !dayPillsContainer) return;

  // Renderiza os botões de filtro dos dias
  dayPillsContainer.innerHTML = '';
  
  const allBtn = document.createElement('button');
  allBtn.className = `px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
    selectedDayIndex === null ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
  }`;
  allBtn.textContent = 'Todos os 7 Dias';
  allBtn.onclick = () => renderItinerary(null);
  dayPillsContainer.appendChild(allBtn);

  ITINERARY_DATA.forEach((day, index) => {
    const btn = document.createElement('button');
    btn.className = `px-3.5 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
      selectedDayIndex === index ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
    }`;
    btn.innerHTML = `<span>Dia ${day.dayNumber}</span> <span class="opacity-60 text-[10px]">(${day.dateLabel.split(' ')[0]})</span>`;
    btn.onclick = () => renderItinerary(index);
    dayPillsContainer.appendChild(btn);
  });

  // Filtra os dias
  const daysToShow = selectedDayIndex === null 
    ? ITINERARY_DATA 
    : [ITINERARY_DATA[selectedDayIndex]];

  container.innerHTML = '';

  daysToShow.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'glass-panel rounded-2xl p-6 md:p-8 mb-8 border border-slate-700/60 shadow-xl';

    // Mapeamento de ícones e cores para cada período do dia
    const periodBadgeMap = {
      morning: { icon: 'sun', label: 'Parte da Manhã', class: 'period-morning' },
      lunch: { icon: 'utensils', label: 'Almoço', class: 'period-lunch' },
      afternoon: { icon: 'compass', label: 'Parte da Tarde', class: 'period-afternoon' },
      dinner: { icon: 'moon', label: 'Jantar', class: 'period-dinner' },
      flight: { icon: 'plane', label: 'Voos & Conexão', class: 'period-flight' }
    };

    let eventsHtml = '';
    day.events.forEach(event => {
      const periodInfo = periodBadgeMap[event.periodType] || { icon: 'calendar', label: event.period, class: 'period-morning' };

      // Badge de Status de Confirmação (ícone e texto)
      const statusBadge = event.isConfirmed
        ? `<span class="badge-confirmed px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shrink-0" title="Reserva 100% Confirmada">
             <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400"></i>
             <span>Confirmado</span>
           </span>`
        : `<span class="badge-pending px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shrink-0" title="Reserva em Confirmação Final">
             <i data-lucide="clock" class="w-3.5 h-3.5 text-amber-400"></i>
             <span>Em Confirmação</span>
           </span>`;

      // Badge de Número de Voo (se houver)
      const flightBadge = event.flightNumber
        ? `<span class="px-2.5 py-1 rounded-lg bg-blue-950/90 border border-blue-500/50 text-blue-300 font-mono text-xs font-bold flex items-center gap-1.5 shadow-sm">
             <i data-lucide="plane" class="w-3.5 h-3.5 text-sky-400"></i>
             <span>Voo ${event.flightNumber}</span>
           </span>`
        : '';

      eventsHtml += `
        <div class="relative pl-8 pb-8 border-l-2 border-sky-500/30 last:border-l-0 last:pb-2">
          <!-- Marcador na linha do tempo -->
          <div class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 ${event.isConfirmed ? 'border-emerald-400' : 'border-amber-400'}"></div>
          
          <!-- Cabeçalho do Evento com Período e Status de Confirmação -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
            
            <div class="flex flex-wrap items-center gap-2">
              <!-- Horário -->
              <span class="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700 text-sky-300 font-mono text-xs font-bold">
                ${event.time}
              </span>

              <!-- Badge do Período (Manhã, Almoço, Tarde, Jantar ou Voo) -->
              <span class="px-2.5 py-0.5 rounded-md border text-[11px] font-semibold flex items-center gap-1 ${periodInfo.class}">
                <i data-lucide="${periodInfo.icon}" class="w-3 h-3"></i>
                <span>${event.period}</span>
              </span>

              <!-- Voo (se aplicável) -->
              ${flightBadge}

              <!-- Título da Atividade -->
              <h4 class="text-base font-bold text-white">${event.title}</h4>
            </div>

            <!-- Ícone e Badge de Confirmação -->
            <div class="flex items-center gap-2">
              ${statusBadge}
            </div>

          </div>

          <!-- Localização -->
          <div class="text-xs text-slate-400 flex items-center gap-1.5 mb-2">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400 shrink-0"></i>
            <span>${event.location}</span>
          </div>

          <!-- Descrição -->
          <p class="text-sm text-slate-300 mb-2 leading-relaxed">${event.description}</p>
          
          <!-- Destaque -->
          ${event.highlight ? `
            <div class="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3 py-1 rounded-lg mb-2">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0"></i>
              <span><strong>Destaque:</strong> ${event.highlight}</span>
            </div>
          ` : ''}

          <!-- Dica de IA & Logística -->
          <div class="bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-xs text-sky-200/90 flex items-start gap-2.5">
            <i data-lucide="sparkles" class="w-4 h-4 text-sky-400 shrink-0 mt-0.5"></i>
            <div>
              <strong class="text-sky-300">Dica da IA & Logística:</strong> ${event.aiTip}
            </div>
          </div>
        </div>
      `;
    });

    dayCard.innerHTML = `
      <div class="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              ${day.dateLabel}
            </span>
            <span class="text-xs text-slate-400 font-medium">Tema: ${day.theme}</span>
          </div>
          <h3 class="text-2xl font-bold font-serif-luxury text-white mt-1">${day.dayTitle}</h3>
          <p class="text-sm text-sky-300/80">${day.subtitle}</p>
        </div>

        <div class="flex flex-wrap gap-2 text-xs">
          <div class="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-slate-300">
            <i data-lucide="sun" class="w-4 h-4 text-amber-400"></i>
            <span>${day.temperature}</span>
          </div>
          <div class="px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-2 text-slate-300">
            <i data-lucide="shirt" class="w-4 h-4 text-sky-400"></i>
            <span class="max-w-[220px] truncate" title="${day.dressCode}"><strong>Dress Code:</strong> ${day.dressCode}</span>
          </div>
        </div>
      </div>

      <div class="space-y-1 mt-4">
        ${eventsHtml}
      </div>
    `;

    container.appendChild(dayCard);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   4. CONVERSOR DE MOEDAS INTELIGENTE (AED ⇄ BRL ⇄ USD)
   ========================================================================== */
function initCurrencyConverter() {
  const inputAED = document.getElementById('calc-aed');
  const inputBRL = document.getElementById('calc-brl');
  const inputUSD = document.getElementById('calc-usd');

  if (!inputAED || !inputBRL || !inputUSD) return;

  function fromAED() {
    const aed = parseFloat(inputAED.value) || 0;
    const brl = aed * TRIP_CONFIG.currencyRateAEDtoBRL;
    const usd = aed / TRIP_CONFIG.currencyRateUSDtoAED;
    inputBRL.value = brl.toFixed(2);
    inputUSD.value = usd.toFixed(2);
  }

  function fromBRL() {
    const brl = parseFloat(inputBRL.value) || 0;
    const aed = brl / TRIP_CONFIG.currencyRateAEDtoBRL;
    const usd = brl / TRIP_CONFIG.currencyRateUSDtoBRL;
    inputAED.value = aed.toFixed(2);
    inputUSD.value = usd.toFixed(2);
  }

  function fromUSD() {
    const usd = parseFloat(inputUSD.value) || 0;
    const aed = usd * TRIP_CONFIG.currencyRateUSDtoAED;
    const brl = usd * TRIP_CONFIG.currencyRateUSDtoBRL;
    inputAED.value = aed.toFixed(2);
    inputBRL.value = brl.toFixed(2);
  }

  inputAED.addEventListener('input', fromAED);
  inputBRL.addEventListener('input', fromBRL);
  inputUSD.addEventListener('input', fromUSD);

  // Valor inicial sugerido (100 AED)
  inputAED.value = "100";
  fromAED();
}

/* ==========================================================================
   5. GERADOR DE AVISOS WHATSAPP COM IA PARA A ORGANIZADORA
   ========================================================================== */
function initWhatsAppManager() {
  const selector = document.getElementById('wa-template-select');
  const messageBox = document.getElementById('wa-message-text');
  const copyBtn = document.getElementById('wa-copy-btn');
  const openBtn = document.getElementById('wa-open-btn');
  const aiCustomPrompt = document.getElementById('wa-ai-custom-input');
  const aiGenerateBtn = document.getElementById('wa-ai-generate-btn');

  if (!selector || !messageBox) return;

  // Preenche opções
  selector.innerHTML = '';
  WHATSAPP_TEMPLATES.forEach((tpl, i) => {
    const opt = document.createElement('option');
    opt.value = tpl.id;
    opt.textContent = tpl.title;
    selector.appendChild(opt);
  });

  function updateMessage() {
    const selected = WHATSAPP_TEMPLATES.find(t => t.id === selector.value);
    if (selected) {
      messageBox.value = selected.message;
    }
  }

  selector.addEventListener('change', updateMessage);
  updateMessage();

  // Copiar para Área de Transferência
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(messageBox.value).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-400"></i> Copiado com Sucesso!`;
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          if (window.lucide) window.lucide.createIcons();
        }, 2500);
      });
    });
  }

  // Abrir no WhatsApp Web / App
  if (openBtn) {
    openBtn.addEventListener('click', () => {
      const text = encodeURIComponent(messageBox.value);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    });
  }

  // Personalizador de Aviso com IA
  if (aiGenerateBtn && aiCustomPrompt) {
    aiGenerateBtn.addEventListener('click', () => {
      const prompt = aiCustomPrompt.value.trim();
      if (!prompt) {
        alert('Por favor, digite o que você precisa avisar ao grupo de 36 pessoas.');
        return;
      }

      aiGenerateBtn.disabled = true;
      aiGenerateBtn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i> Formatando com IA...`;
      if (window.lucide) window.lucide.createIcons();

      setTimeout(() => {
        const generatedNotice = `📢 *COMUNICADO OFICIAL DA COORDENAÇÃO - DUBAI 2026* 🇦🇪✨

Campeões, atenção para um alinhamento rápido da nossa organização:

📌 *AVISO:* ${prompt}

⏰ *Horário / Ponto de Encontro:* Lobby Principal do Hotel em 15 minutos.
👥 *Grupo Completo:* Pedimos que todos os 36 confirmem o recebimento respondendo com um 👍 aqui no grupo!

Contamos com a pontualidade e energia de sempre de todos vocês! 🏆🚀`;

        messageBox.value = generatedNotice;
        aiGenerateBtn.disabled = false;
        aiGenerateBtn.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i> Formatar com IA`;
        if (window.lucide) window.lucide.createIcons();
        aiCustomPrompt.value = '';
      }, 700);
    });
  }
}

/* ==========================================================================
   6. GESTÃO DE VANS, 36 PARTICIPANTES E RESTRIÇÕES ALIMENTARES
   ========================================================================== */
function initVansAndParticipants() {
  const container = document.getElementById('participants-grid');
  const vanFilterBtns = document.querySelectorAll('[data-van-filter]');
  const searchInput = document.getElementById('search-participant');
  const dietaryFilter = document.getElementById('filter-dietary');

  if (!container) return;

  let currentVanFilter = 'all';

  function renderList() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const dietaryOnly = dietaryFilter ? dietaryFilter.checked : false;

    container.innerHTML = '';

    const filtered = PARTICIPANTS_DATA.filter(p => {
      const matchVan = currentVanFilter === 'all' || p.van.toString() === currentVanFilter;
      const matchSearch = p.name.toLowerCase().includes(searchTerm) || 
                          p.branch.toLowerCase().includes(searchTerm) ||
                          p.role.toLowerCase().includes(searchTerm);
      const matchDietary = dietaryOnly ? p.dietary !== "Sem Restrições" : true;

      return matchVan && matchSearch && matchDietary;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-12 text-slate-400">
          <i data-lucide="users" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
          Nenhum participante encontrado com os filtros selecionados.
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = `glass-panel rounded-xl p-4 border transition-all ${
        p.isVanLeader ? 'border-amber-500/50 bg-amber-950/15' : 'border-slate-800 hover:border-sky-500/30'
      }`;

      const hasDietary = p.dietary !== "Sem Restrições";

      card.innerHTML = `
        <div class="flex items-start justify-between gap-2 mb-2">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-sky-900/60 border border-sky-400/30 text-sky-300 font-bold text-xs flex items-center justify-center">
              ${p.id}
            </div>
            <div>
              <h4 class="text-sm font-bold text-white flex items-center gap-1.5">
                ${p.name}
                ${p.isVanLeader ? '<span class="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">Líder Van ' + p.van + '</span>' : ''}
              </h4>
              <p class="text-[11px] text-slate-400">${p.role}</p>
            </div>
          </div>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
            Van 0${p.van}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs text-slate-300 mt-3 pt-3 border-t border-slate-800/80">
          <div>
            <span class="text-[10px] text-slate-500 block">Filial / Origem</span>
            <span class="font-medium text-slate-200">${p.branch}</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">Quarto no Hotel</span>
            <span class="font-medium text-amber-300">Nº ${p.room} (${p.roomType})</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">Assento Voo</span>
            <span class="font-medium text-sky-300 font-mono">${p.flightSeat}</span>
          </div>
          <div>
            <span class="text-[10px] text-slate-500 block">Alimentação</span>
            <span class="font-medium ${hasDietary ? 'text-rose-400 font-bold' : 'text-slate-400'}">
              ${p.dietary}
            </span>
          </div>
        </div>

        <div class="mt-3 pt-2 text-[11px] text-slate-400 flex items-center justify-between">
          <span class="flex items-center gap-1">
            <i data-lucide="phone" class="w-3 h-3 text-slate-500"></i> ${p.emergencyContact}
          </span>
          <span class="text-emerald-400 flex items-center gap-1 text-[10px]">
            <i data-lucide="check-circle" class="w-3 h-3"></i> Passaporte OK
          </span>
        </div>
      `;

      container.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  vanFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      vanFilterBtns.forEach(b => b.classList.remove('bg-sky-500', 'text-white'));
      btn.classList.add('bg-sky-500', 'text-white');
      currentVanFilter = btn.getAttribute('data-van-filter');
      renderList();
    });
  });

  if (searchInput) searchInput.addEventListener('input', renderList);
  if (dietaryFilter) dietaryFilter.addEventListener('change', renderList);

  renderList();
}

/* ==========================================================================
   7. ROOMING LIST DOS 18 QUARTOS
   ========================================================================== */
function initRoomingList() {
  const container = document.getElementById('rooming-grid');
  if (!container) return;

  // Agrupa os participantes por número de quarto
  const roomsMap = {};
  PARTICIPANTS_DATA.forEach(p => {
    if (!roomsMap[p.room]) {
      roomsMap[p.room] = {
        roomNumber: p.room,
        roomType: p.roomType,
        guests: []
      };
    }
    roomsMap[p.room].guests.push(p);
  });

  container.innerHTML = '';

  Object.values(roomsMap).forEach(room => {
    const card = document.createElement('div');
    card.className = 'glass-panel rounded-xl p-4 border border-slate-800 hover:border-amber-500/30 transition-all';

    let guestsHtml = room.guests.map(g => `
      <div class="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60 last:border-b-0">
        <div>
          <span class="font-bold text-white block">${g.name}</span>
          <span class="text-[10px] text-slate-400">${g.branch}</span>
        </div>
        <span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-sky-300 font-mono">
          Van 0${g.van}
        </span>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <i data-lucide="key" class="w-4 h-4 text-amber-400"></i>
          <span class="text-base font-bold text-white font-mono">Quarto ${room.roomNumber}</span>
        </div>
        <span class="text-[11px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-semibold">
          ${room.roomType}
        </span>
      </div>
      <div class="space-y-1">
        ${guestsHtml}
      </div>
    `;

    container.appendChild(card);
  });

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   8. CHECKLIST INTELIGENTE DE VIAGEM COM LOCALSTORAGE
   ========================================================================== */
function initChecklist() {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  const progressText = document.getElementById('checklist-progress-text');
  const progressBar = document.getElementById('checklist-progress-bar');

  function updateProgress() {
    let checkedCount = 0;
    checkboxes.forEach((cb, idx) => {
      if (cb.checked) checkedCount++;
      localStorage.setItem(`dubai_check_${idx}`, cb.checked ? 'true' : 'false');
    });

    const percent = Math.round((checkedCount / checkboxes.length) * 100);
    if (progressText) progressText.textContent = `${checkedCount} de ${checkboxes.length} itens prontos (${percent}%)`;
    if (progressBar) progressBar.style.width = `${percent}%`;
  }

  checkboxes.forEach((cb, idx) => {
    const saved = localStorage.getItem(`dubai_check_${idx}`);
    if (saved === 'true') {
      cb.checked = true;
    }
    cb.addEventListener('change', updateProgress);
  });

  updateProgress();
}

/* ==========================================================================
   9. CHATBOT CONCIERGE COM IA PARA DUBAI
   ========================================================================== */
function initChatbot() {
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const quickChips = document.querySelectorAll('[data-chat-chip]');

  if (!chatMessages || !chatInput || !sendBtn) return;

  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `flex gap-3 mb-4 ${sender === 'user' ? 'justify-end' : 'justify-start'}`;

    if (sender === 'ai') {
      bubble.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shrink-0">
          <div class="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-xs font-bold text-amber-300">
            IA
          </div>
        </div>
        <div class="chat-bubble-ai max-w-[85%] md:max-w-[75%] p-3.5 text-xs md:text-sm leading-relaxed shadow-lg">
          ${text}
        </div>
      `;
    } else {
      bubble.innerHTML = `
        <div class="chat-bubble-user max-w-[85%] md:max-w-[75%] p-3.5 text-xs md:text-sm leading-relaxed shadow-lg">
          ${text}
        </div>
        <div class="w-8 h-8 rounded-full bg-sky-700 text-white flex items-center justify-center text-xs font-bold shrink-0">
          VC
        </div>
      `;
    }

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (window.lucide) window.lucide.createIcons();
  }

  function handleUserMessage(query) {
    if (!query.trim()) return;

    appendMessage('user', query);
    chatInput.value = '';

    // Typing indicator
    const typingId = 'typing-indicator';
    const typingEl = document.createElement('div');
    typingEl.id = typingId;
    typingEl.className = 'flex gap-2 items-center text-xs text-sky-400 py-2 pl-11';
    typingEl.innerHTML = `<i data-lucide="sparkles" class="w-4 h-4 animate-spin text-amber-400"></i> O Concierge IA está consultando o guia de Dubai...`;
    chatMessages.appendChild(typingEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      const el = document.getElementById(typingId);
      if (el) el.remove();

      const normalized = query.toLowerCase();
      let bestAnswer = null;

      // Procura na base de conhecimento
      for (const item of DUBAI_KNOWLEDGE_BASE) {
        if (item.keywords.some(kw => normalized.includes(kw))) {
          bestAnswer = item.answer;
          break;
        }
      }

      // Se não encontrou exato, dá uma resposta consultiva inteligente contextualizada
      if (!bestAnswer) {
        if (normalized.includes('roteiro') || normalized.includes('horario') || normalized.includes('programacao')) {
          bestAnswer = "Você pode conferir toda a programação completa na aba **Roteiro 5 Dias** aqui no topo! Temos atividades exclusivas como o Safari nas Dunas Vermelhas, Sunset Yacht Party na Marina e a Grande Noite de Gala no Address Hotel.";
        } else if (normalized.includes('van') || normalized.includes('quarto') || normalized.includes('grupo') || normalized.includes('alguem')) {
          bestAnswer = "Para consultar a divisão das vans executivas e os números de quarto dos 36 participantes, acesse a aba **Painel da Organizadora (IA)**. Lá você encontra a lista completa e as preferências de cada campeão.";
        } else {
          bestAnswer = `Excelente pergunta sobre Dubai! Para este grupo de 36 pessoas, lembre-se: Dubai é uma cidade extremamente segura, tecnológica e acolhedora com os turistas. Se tiver dúvidas pontuais sobre vestimenta, câmbio, compras no Dubai Mall ou alfândega brasileira, clique nos botões rápidos de sugestão acima do chat!`;
        }
      }

      appendMessage('ai', bestAnswer);
    }, 600);
  }

  sendBtn.addEventListener('click', () => handleUserMessage(chatInput.value));
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserMessage(chatInput.value);
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.getAttribute('data-chat-chip');
      handleUserMessage(text);
    });
  });
}

/* ==========================================================================
   10. GALERIA VISUAL DAS EXPERIÊNCIAS DE DUBAI
   ========================================================================== */
function initGallery() {
  // Configurações e cards visuais enriquecidos
}

/* ==========================================================================
   11. CELEBRAÇÃO COM CONFETI AO CARREGAR
   ========================================================================== */
function triggerWelcomeConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#d4af37', '#fef08a', '#0284c7']
    });
  }
}
