const firebaseConfig = {
      apiKey: "AIzaSyDXKsbow0YjDFQ8AiIEb1xNQkQO1vbdyzI",
      authDomain: "dayflow-5eb30.firebaseapp.com",
      projectId: "dayflow-5eb30",
      storageBucket: "dayflow-5eb30.firebasestorage.app",
      messagingSenderId: "667698331669",
      appId: "1:667698331669:web:900d07b6963fc5b3a10e1c"
    };

    const DEF = {
      dayStarted:false,completed:{},xp:0,storeXP:0,streak:0,lastDay:null,goals:[],weekHrs:[0,0,0,0,0,0,0],
      totalMin:0,tarOn:false,redeemed:{},currentScreen:"dashboard",tasks:[],modules:[],reminders:[],lang:"es",
      displayName:"",avatarUrl:"",pomFocus:25,pomBreak:5,pomLong:20,orgMins:30,schedule:[],evidence:[],trackingManual:false,trackingStartedAt:null,trackingElapsedSec:0,activeModuleId:null,legalType:"terms"
    };
    const FLOW = ["colegio","organizacion","tareas","evidencia"];
    const XP = {colegio:80,organizacion:70,tareas:90,evidencia:60};
    const LANGS = {
      es:{
        greeting_morning:"Buenos días",greeting_afternoon:"Buenas tardes",greeting_evening:"Buenas noches",student:"Estudiante",
        dashboard:"Dashboard",store:"Tienda XP",modules:"Mis Módulos",reminders:"Recordatorios",schedule:"Horario",organization:"Organización",tasks:"Tareas",evidence:"Evidencia",settings:"Configuración",theme:"Tema",
        start_day:"Iniciar Día",tasks_today:"Tengo tareas hoy",no_tasks:"Sin tareas",finish_day:"Finalizar día",schedule_done:"Horario completado",org_done:"Organización completada",tasks_done:"Tareas completadas",
        pom_focus:"Trabajo",pom_break:"Descanso corto",pom_long:"Descanso largo",streak:"Racha",xp_total:"XP total",hours:"Horas",day_goals:"Metas del día",week:"Semana",
        day_completed:"Día completado",day_completed_msg:"Ya cerraste tu flujo de hoy. Vuelve mañana para seguir sumando racha.",complete:"Completar",start:"Iniciar",pause:"Pausar",reset:"Reiniciar",my_schedule:"Mi Horario",drop_images:"Arrastra imágenes o haz clic para subir",
        reward_notice_title:"Tus recompensas, tu esfuerzo",reward_notice_text:"Los creadores de DayFlow no entregamos estas recompensas. Son un reconocimiento que tú mismo te das por todo el esfuerzo y dedicación que has puesto en tu trabajo. Cada XP que ves aquí lo ganaste con tu propio empeño. ¡Mereces celebrarlo! ✨",my_rewards:"Mis recompensas",no_rewards:"Aún no has canjeado recompensas.",redeemed:"Canjeado",redeem:"Canjear",
        emoji:"Emoji",name:"Nombre",type:"Tipo",timer_notes:"Timer + notas",notes:"Notas",checklist:"Checklist",minutes:"Minutos",create_module:"Crear módulo",reading:"Lectura",module:"Módulo",new_item:"Nuevo ítem",
        time:"Hora",text:"Texto",drink_water:"Tomar agua",add:"Agregar",profile:"Perfil",display_name:"Nombre para mostrar",save_profile:"Guardar perfil",language:"Idioma",pom_times:"Tiempos de Pomodoro",work:"Trabajo",short_break:"Descanso corto",long_break:"Descanso largo",save:"Guardar",org_time:"Tiempo de Organización",day_schedule:"Horario del día",subject:"Materia",math:"Matemáticas",save_schedule:"Guardar horario",
        suggestions:"Sugerencias",message:"Mensaje",suggestion_ph:"Escribe tu sugerencia",send_suggestion:"Enviar sugerencia",suggestion_sent:"Sugerencia enviada. Gracias por ayudar a mejorar DayFlow.",suggestion_empty:"Escribe una sugerencia primero.",account:"Cuenta",reset_streak:"Reiniciar racha",reset_progress:"Resetear progreso",logout:"Cerrar sesión",
        no_schedule:"No hay horario configurado. Ve a Configuración para añadirlo.",locked_msg:"Primero inicia el día y completa el paso anterior.",task_evidence_required:"Todas las tareas deben tener evidencia fotográfica.",reward_redeemed:"Recompensa canjeada.",schedule_saved:"Horario guardado.",day_finished:"Día finalizado",day_finished_msg:"Tu racha fue actualizada. Buen cierre.",next_step:"Sigue con",can_finish:"Puedes finalizar el día.",completed_word:"completado",add_goal:"Crear una meta para hoy",
        chocolate:"Chocolate",game:"Tiempo de juego",food:"Comida favorita",movie:"Película",outing:"Salida",clothes:"Ropa",pizza:"Pizza",music:"Música",book:"Libro",cinema:"Cine",sport:"Deporte",relax:"Tarde de relax"
      },
      en:{
        greeting_morning:"Good morning",greeting_afternoon:"Good afternoon",greeting_evening:"Good evening",student:"Student",
        dashboard:"Dashboard",store:"XP Store",modules:"My Modules",reminders:"Reminders",schedule:"Schedule",organization:"Organization",tasks:"Tasks",evidence:"Evidence",settings:"Settings",theme:"Theme",
        start_day:"Start Day",tasks_today:"Tasks today",no_tasks:"No tasks",finish_day:"Finish day",schedule_done:"Schedule done",org_done:"Organization done",tasks_done:"Tasks done",
        pom_focus:"Focus",pom_break:"Short break",pom_long:"Long break",streak:"Streak",xp_total:"Total XP",hours:"Hours",day_goals:"Day goals",week:"Week",
        day_completed:"Day completed",day_completed_msg:"You already closed today's flow. Come back tomorrow to keep your streak growing.",complete:"Complete",start:"Start",pause:"Pause",reset:"Reset",my_schedule:"My Schedule",drop_images:"Drag images or click to upload",
        reward_notice_title:"Your rewards, your effort",reward_notice_text:"DayFlow's creators do not provide these rewards. They are a recognition you give yourself for the effort and dedication you have put into your work. Every XP you see here was earned by your own commitment. You deserve to celebrate! ✨",my_rewards:"My rewards",no_rewards:"You have not redeemed rewards yet.",redeemed:"Redeemed",redeem:"Redeem",
        emoji:"Emoji",name:"Name",type:"Type",timer_notes:"Timer + notes",notes:"Notes",checklist:"Checklist",minutes:"Minutes",create_module:"Create module",reading:"Reading",module:"Module",new_item:"New item",
        time:"Time",text:"Text",drink_water:"Drink water",add:"Add",profile:"Profile",display_name:"Display name",save_profile:"Save profile",language:"Language",pom_times:"Pomodoro times",work:"Work",short_break:"Short break",long_break:"Long break",save:"Save",org_time:"Organization time",day_schedule:"Day schedule",subject:"Subject",math:"Math",save_schedule:"Save schedule",
        suggestions:"Suggestions",message:"Message",suggestion_ph:"Write your suggestion",send_suggestion:"Send suggestion",suggestion_sent:"Suggestion sent. Thanks for helping improve DayFlow.",suggestion_empty:"Write a suggestion first.",account:"Account",reset_streak:"Reset streak",reset_progress:"Reset progress",logout:"Sign out",
        no_schedule:"No schedule configured. Go to Settings to add one.",locked_msg:"Start the day and complete the previous step first.",task_evidence_required:"Every task must include photo evidence.",reward_redeemed:"Reward redeemed.",schedule_saved:"Schedule saved.",day_finished:"Day finished",day_finished_msg:"Your streak was updated. Nice close.",next_step:"Continue with",can_finish:"You can finish the day.",completed_word:"completed",add_goal:"Create a goal for today",
        chocolate:"Chocolate",game:"Game time",food:"Favorite meal",movie:"Movie",outing:"Outing",clothes:"Clothes",pizza:"Pizza",music:"Music",book:"Book",cinema:"Cinema",sport:"Sport",relax:"Relax afternoon"
      },
      pt:{
        greeting_morning:"Bom dia",greeting_afternoon:"Boa tarde",greeting_evening:"Boa noite",student:"Estudante",
        dashboard:"Painel",store:"Loja XP",modules:"Meus Módulos",reminders:"Lembretes",schedule:"Horário",organization:"Organização",tasks:"Tarefas",evidence:"Evidência",settings:"Configurações",theme:"Tema",
        start_day:"Iniciar Dia",tasks_today:"Tenho tarefas hoje",no_tasks:"Sem tarefas",finish_day:"Finalizar dia",schedule_done:"Horário concluído",org_done:"Organização concluída",tasks_done:"Tarefas concluídas",
        pom_focus:"Foco",pom_break:"Pausa curta",pom_long:"Pausa longa",streak:"Sequência",xp_total:"XP total",hours:"Horas",day_goals:"Metas do dia",week:"Semana",
        day_completed:"Dia concluído",day_completed_msg:"Você já fechou o fluxo de hoje. Volte amanhã para continuar a sequência.",complete:"Concluir",start:"Iniciar",pause:"Pausar",reset:"Reiniciar",my_schedule:"Meu Horário",drop_images:"Arraste imagens ou clique para enviar",
        reward_notice_title:"Suas recompensas, seu esforço",reward_notice_text:"Os criadores do DayFlow não entregam estas recompensas. Elas são um reconhecimento que você dá a si mesmo por todo o esforço e dedicação colocados no seu trabalho. Cada XP que aparece aqui foi conquistado com seu próprio empenho. Você merece celebrar! ✨",my_rewards:"Minhas recompensas",no_rewards:"Você ainda não resgatou recompensas.",redeemed:"Resgatado",redeem:"Resgatar",
        emoji:"Emoji",name:"Nome",type:"Tipo",timer_notes:"Timer + notas",notes:"Notas",checklist:"Checklist",minutes:"Minutos",create_module:"Criar módulo",reading:"Leitura",module:"Módulo",new_item:"Novo item",
        time:"Hora",text:"Texto",drink_water:"Beber água",add:"Adicionar",profile:"Perfil",display_name:"Nome de exibição",save_profile:"Salvar perfil",language:"Idioma",pom_times:"Tempos do Pomodoro",work:"Trabalho",short_break:"Pausa curta",long_break:"Pausa longa",save:"Salvar",org_time:"Tempo de organização",day_schedule:"Horário do dia",subject:"Matéria",math:"Matemática",save_schedule:"Salvar horário",
        suggestions:"Sugestões",message:"Mensagem",suggestion_ph:"Escreva sua sugestão",send_suggestion:"Enviar sugestão",suggestion_sent:"Sugestão enviada. Obrigado por ajudar a melhorar o DayFlow.",suggestion_empty:"Escreva uma sugestão primeiro.",account:"Conta",reset_streak:"Reiniciar sequência",reset_progress:"Resetar progresso",logout:"Sair",
        no_schedule:"Nenhum horário configurado. Vá em Configurações para adicionar.",locked_msg:"Primeiro inicie o dia e conclua a etapa anterior.",task_evidence_required:"Todas as tarefas precisam ter evidência fotográfica.",reward_redeemed:"Recompensa resgatada.",schedule_saved:"Horário salvo.",day_finished:"Dia finalizado",day_finished_msg:"Sua sequência foi atualizada. Bom fechamento.",next_step:"Continue com",can_finish:"Você pode finalizar o dia.",completed_word:"concluído",add_goal:"Criar uma meta para hoje",
        chocolate:"Chocolate",game:"Tempo de jogo",food:"Comida favorita",movie:"Filme",outing:"Passeio",clothes:"Roupa",pizza:"Pizza",music:"Música",book:"Livro",cinema:"Cinema",sport:"Esporte",relax:"Tarde de relaxamento"
      }
    };
    const QUOTES = {
      es:[
        {t:'"Hazlo simple, hazlo constante."',a:"DayFlow"},{t:'"La disciplina también puede sentirse elegante."',a:"DayFlow"},{t:'"Un paso completo cambia el día."',a:"DayFlow"},{t:'"Tu energía merece dirección."',a:"DayFlow"},{t:'"Pequeños cierres, grandes rachas."',a:"DayFlow"},{t:'"El foco se construye con cuidado."',a:"DayFlow"},{t:'"Hoy también cuenta."',a:"DayFlow"}
      ],
      en:[
        {t:'"Keep it simple, keep it steady."',a:"DayFlow"},{t:'"Discipline can feel elegant too."',a:"DayFlow"},{t:'"One completed step changes the day."',a:"DayFlow"},{t:'"Your energy deserves direction."',a:"DayFlow"},{t:'"Small finishes, strong streaks."',a:"DayFlow"},{t:'"Focus is built with care."',a:"DayFlow"},{t:'"Today counts too."',a:"DayFlow"}
      ],
      pt:[
        {t:'"Faça simples, faça constante."',a:"DayFlow"},{t:'"A disciplina também pode ser elegante."',a:"DayFlow"},{t:'"Um passo concluído muda o dia."',a:"DayFlow"},{t:'"Sua energia merece direção."',a:"DayFlow"},{t:'"Pequenos fechamentos, grandes sequências."',a:"DayFlow"},{t:'"O foco é construído com cuidado."',a:"DayFlow"},{t:'"Hoje também conta."',a:"DayFlow"}
      ]
    };
    const LEGAL_DOCS = {
      es:{
        terms:{title:"Términos de Uso",eyebrow:"Legal de DayFlow Pro",updated:"Última actualización: 14 de julio de 2026",intro:"Estos términos explican cómo debe usarse DayFlow Pro. La app está pensada como un sistema estudiantil para rutinas, foco, progreso, módulos, recordatorios y recompensas personales con XP.",sections:[
          ["Propósito de DayFlow Pro","DayFlow Pro ayuda a estudiantes a planear su día, medir tiempo de foco, organizar tareas escolares y construir hábitos constantes. No es una escuela, tutoría, herramienta médica, producto financiero ni servicio de emergencia."],
          ["Tu cuenta","Eres responsable de mantener privada tu información de acceso y de usar la app con honestidad. El progreso, XP, racha, módulos, recordatorios, perfil y evidencias pueden guardarse para sincronizar tu experiencia."],
          ["XP y recompensas","El XP y las recompensas son herramientas de motivación. DayFlow Pro no entrega, vende ni garantiza recompensas físicas o digitales. Cada recompensa canjeada es un compromiso personal que decides darte por tu esfuerzo."],
          ["Responsabilidad estudiantil","La app debe apoyar trabajo real, no reemplazarlo. Aceptas no manipular temporizadores, evidencias, XP o tracking de una forma que contradiga el propósito del sistema."],
          ["Contenido que agregas","Tú eres responsable por tareas, imágenes, notas, recordatorios, horarios, sugerencias y cualquier contenido que agregues. No subas contenido privado, dañino, ilegal o inapropiado."],
          ["Cambios y disponibilidad","DayFlow Pro puede cambiar con el tiempo. Algunas funciones dependen del navegador, Firebase, internet o servicios externos, por lo que la disponibilidad no se garantiza en todo momento."],
          ["Contacto y sugerencias","Las sugerencias enviadas desde la app se usan para mejorar DayFlow Pro. Mantén tus comentarios respetuosos y útiles."]
        ]},
        privacy:{title:"Política de Privacidad",eyebrow:"Datos y confianza",updated:"Última actualización: 14 de julio de 2026",intro:"Esta política explica qué puede guardar DayFlow Pro y por qué. La idea es mantener tu flujo estudiantil sincronizado sin vender tu información personal.",sections:[
          ["Información que proporcionas","DayFlow Pro puede guardar tu cuenta basada en usuario, nombre visible, avatar, horario, módulos, recordatorios, tareas, evidencias, notas, metas, XP, racha, recompensas, idioma, tema y sugerencias."],
          ["Cómo se usa tu información","Tus datos se usan para ejecutar la app, restaurar progreso, personalizar el dashboard, calcular tiempo trackeado, mostrar estadísticas semanales, mantener recompensas y recibir sugerencias."],
          ["Firebase y almacenamiento del navegador","DayFlow Pro usa Firebase para autenticación y almacenamiento en la nube, y puede usar almacenamiento local del navegador para tema, sesión y preferencias."],
          ["Lo que no hacemos","No vendemos tu información personal. No exponemos intencionalmente el destino privado de sugerencias en la interfaz. No creamos perfiles públicos con tus datos sin una acción tuya."],
          ["Enlaces externos","La app puede enlazar a YouTube, Spotify, Instagram, TikTok y GitHub. Esos servicios tienen sus propias políticas, cookies y reglas de cuenta."],
          ["Tus opciones","Puedes resetear progreso, cambiar tu perfil, cerrar sesión y evitar subir imágenes sensibles. Si ya no quieres cierta información en la app, elimínala desde la sección correspondiente cuando sea posible."],
          ["Seguridad estudiantil","Evita subir documentos personales, registros escolares privados, contraseñas, direcciones o imágenes con información sensible. DayFlow Pro es para productividad, no para guardar documentos privados."]
        ]},
        cookies:{title:"Cookies y Almacenamiento",eyebrow:"Preferencias y sesiones",updated:"Última actualización: 14 de julio de 2026",intro:"DayFlow Pro usa almacenamiento del navegador y herramientas de sesión de Firebase para que la app se sienta continua cuando vuelves.",sections:[
          ["Qué usamos","DayFlow Pro puede usar localStorage, persistencia de autenticación de Firebase, caché del navegador y tecnologías similares para sesión, tema, estado de la app y rendimiento."],
          ["Por qué importa","Sin almacenamiento, la app podría olvidar tu tema, sesión, progreso o preferencias al actualizar. Esto ayuda a que DayFlow Pro sea útil para uso diario."],
          ["Almacenamiento esencial","Parte del almacenamiento es esencial para iniciar sesión, sincronizar y usar funciones básicas. Desactivarlo puede impedir que la app funcione correctamente."],
          ["Servicios externos","YouTube, Spotify, Instagram, TikTok y GitHub pueden usar sus propias cookies al abrirlos. DayFlow Pro no controla esos servicios externos."],
          ["Administrar almacenamiento","Puedes borrar cookies, caché o datos del sitio desde la configuración de tu navegador. Esto puede cerrar tu sesión o eliminar preferencias locales."],
          ["Sin sistema de cookies publicitarias","DayFlow Pro no está diseñado alrededor de cookies de publicidad. El almacenamiento se enfoca en sesión, preferencias, sincronización y funcionamiento."]
        ]}
      },
      en:{
        terms:{title:"Terms of Use",eyebrow:"DayFlow Pro legal",updated:"Last updated: July 14, 2026",intro:"These Terms explain how DayFlow Pro should be used. The app is designed as a student productivity companion for routines, focus, progress tracking, modules, reminders, and XP-based self-rewards.",sections:[
          ["Purpose of DayFlow Pro","DayFlow Pro helps students plan their day, track focus time, organize school tasks, and build consistent habits. It is not a school, tutoring service, medical tool, financial product, or emergency service."],
          ["Your Account","You are responsible for keeping your login information private and for using the app honestly. Progress, XP, streaks, modules, reminders, profile details, and evidence uploads may be saved so your experience can stay synced."],
          ["XP and Rewards","XP and rewards are motivational tools only. DayFlow Pro does not provide, ship, sell, or guarantee physical or digital rewards. Any redeemed reward is a personal promise you choose to honor for your own effort."],
          ["Student Responsibility","The app should support real work, not replace it. You agree not to manipulate timers, evidence, XP, or tracking features in a way that defeats the purpose of the system."],
          ["Content You Add","You remain responsible for tasks, images, notes, reminders, schedules, suggestions, and any other content you add. Do not upload private, harmful, illegal, or inappropriate content."],
          ["Changes and Availability","DayFlow Pro may change over time as features improve. Some features depend on browser storage, Firebase, internet access, or third-party services, so availability is not guaranteed at every moment."],
          ["Contact and Suggestions","Suggestions submitted through the app are used to improve DayFlow Pro. Please keep feedback respectful and useful."]
        ]},
        privacy:{title:"Privacy Policy",eyebrow:"Data and trust",updated:"Last updated: July 14, 2026",intro:"This Privacy Policy explains what DayFlow Pro may store and why. The goal is simple: keep your student workflow synced without selling your personal information.",sections:[
          ["Information You Provide","DayFlow Pro may store your username-based account, display name, avatar image, schedule, modules, reminders, tasks, evidence images, notes, goals, XP, streak, redeemed rewards, language, theme preferences, and suggestions."],
          ["How Your Data Is Used","Your data is used to run the app, restore progress across sessions, personalize the dashboard, calculate tracked time, show weekly stats, maintain rewards, and receive suggestions for improvements."],
          ["Firebase and Browser Storage","DayFlow Pro uses Firebase for authentication and cloud storage, and may use local browser storage for theme preferences and session behavior. These tools help keep the app usable and persistent."],
          ["What We Do Not Do","We do not sell your personal information. We do not intentionally expose your suggestions email destination in the interface. We do not use your data to create public profiles without your action."],
          ["Third-Party Links","The app may link to YouTube, Spotify, Instagram, TikTok, and GitHub. Those services have their own privacy policies, cookies, and account rules."],
          ["Your Choices","You can reset progress, change profile details, log out, and avoid uploading sensitive images. If you no longer want certain information in the app, remove it from the relevant section when possible."],
          ["Student Safety","Avoid uploading personal documents, private school records, passwords, addresses, or images that reveal sensitive information. DayFlow Pro is meant for productivity, not private document storage."]
        ]},
        cookies:{title:"Cookies and Storage",eyebrow:"Preferences and sessions",updated:"Last updated: July 14, 2026",intro:"DayFlow Pro uses browser storage and Firebase session tools to make the app feel continuous when you return.",sections:[
          ["What We Use","DayFlow Pro may use localStorage, Firebase authentication persistence, browser cache, and similar storage technologies. These are used for login sessions, theme choice, app state, and performance."],
          ["Why It Matters","Without storage, the app could forget your theme, session, progress, or preferences every time you refresh. Storage helps DayFlow Pro stay practical for daily student use."],
          ["Essential Storage","Some storage is essential for login, syncing, and basic app behavior. Disabling it may prevent DayFlow Pro from working correctly."],
          ["Third-Party Services","External links such as YouTube, Spotify, Instagram, TikTok, and GitHub may use their own cookies or tracking once you open them. DayFlow Pro does not control those external services."],
          ["Managing Storage","You can clear browser data, cookies, cache, or site storage from your browser settings. Doing this may sign you out or remove local preferences."],
          ["No Advertising Cookie System","DayFlow Pro is not designed around advertising cookies. The storage used by the app is focused on sessions, preferences, syncing, and product functionality."]
        ]}
      },
      pt:{
        terms:{title:"Termos de Uso",eyebrow:"Legal do DayFlow Pro",updated:"Última atualização: 14 de julho de 2026",intro:"Estes termos explicam como o DayFlow Pro deve ser usado. O app foi criado como um sistema estudantil para rotinas, foco, progresso, módulos, lembretes e recompensas pessoais com XP.",sections:[
          ["Propósito do DayFlow Pro","O DayFlow Pro ajuda estudantes a planejar o dia, acompanhar tempo de foco, organizar tarefas escolares e construir hábitos consistentes. Não é escola, tutoria, ferramenta médica, produto financeiro ou serviço de emergência."],
          ["Sua conta","Você é responsável por manter suas informações de acesso privadas e por usar o app com honestidade. Progresso, XP, sequência, módulos, lembretes, perfil e evidências podem ser salvos para sincronizar sua experiência."],
          ["XP e recompensas","XP e recompensas são ferramentas de motivação. O DayFlow Pro não entrega, vende nem garante recompensas físicas ou digitais. Cada recompensa resgatada é um compromisso pessoal que você decide honrar pelo seu esforço."],
          ["Responsabilidade estudantil","O app deve apoiar trabalho real, não substituí-lo. Você concorda em não manipular timers, evidências, XP ou tracking de forma que contrarie o propósito do sistema."],
          ["Conteúdo que você adiciona","Você é responsável por tarefas, imagens, notas, lembretes, horários, sugestões e qualquer conteúdo adicionado. Não envie conteúdo privado, prejudicial, ilegal ou inadequado."],
          ["Mudanças e disponibilidade","O DayFlow Pro pode mudar com o tempo. Algumas funções dependem do navegador, Firebase, internet ou serviços externos, então a disponibilidade não é garantida a todo momento."],
          ["Contato e sugestões","Sugestões enviadas pelo app são usadas para melhorar o DayFlow Pro. Mantenha o feedback respeitoso e útil."]
        ]},
        privacy:{title:"Política de Privacidade",eyebrow:"Dados e confiança",updated:"Última atualização: 14 de julho de 2026",intro:"Esta política explica o que o DayFlow Pro pode armazenar e por quê. A ideia é manter seu fluxo estudantil sincronizado sem vender suas informações pessoais.",sections:[
          ["Informações fornecidas","O DayFlow Pro pode armazenar sua conta baseada em usuário, nome exibido, avatar, horário, módulos, lembretes, tarefas, evidências, notas, metas, XP, sequência, recompensas, idioma, tema e sugestões."],
          ["Como seus dados são usados","Seus dados são usados para executar o app, restaurar progresso, personalizar o painel, calcular tempo rastreado, mostrar estatísticas semanais, manter recompensas e receber sugestões."],
          ["Firebase e armazenamento do navegador","O DayFlow Pro usa Firebase para autenticação e armazenamento em nuvem, e pode usar armazenamento local do navegador para tema, sessão e preferências."],
          ["O que não fazemos","Não vendemos suas informações pessoais. Não expomos intencionalmente o destino privado de sugestões na interface. Não criamos perfis públicos com seus dados sem uma ação sua."],
          ["Links externos","O app pode abrir YouTube, Spotify, Instagram, TikTok e GitHub. Esses serviços têm suas próprias políticas, cookies e regras de conta."],
          ["Suas escolhas","Você pode resetar progresso, alterar perfil, sair da conta e evitar enviar imagens sensíveis. Se não quiser certas informações no app, remova-as da seção correspondente quando possível."],
          ["Segurança estudantil","Evite enviar documentos pessoais, registros escolares privados, senhas, endereços ou imagens com informações sensíveis. O DayFlow Pro é para produtividade, não para armazenar documentos privados."]
        ]},
        cookies:{title:"Cookies e Armazenamento",eyebrow:"Preferências e sessões",updated:"Última atualização: 14 de julho de 2026",intro:"O DayFlow Pro usa armazenamento do navegador e ferramentas de sessão do Firebase para que o app continue consistente quando você volta.",sections:[
          ["O que usamos","O DayFlow Pro pode usar localStorage, persistência de autenticação do Firebase, cache do navegador e tecnologias semelhantes para sessão, tema, estado do app e desempenho."],
          ["Por que isso importa","Sem armazenamento, o app poderia esquecer tema, sessão, progresso ou preferências ao atualizar. Isso ajuda o DayFlow Pro a ser prático no uso diário."],
          ["Armazenamento essencial","Parte do armazenamento é essencial para login, sincronização e funções básicas. Desativá-lo pode impedir o funcionamento correto do app."],
          ["Serviços externos","YouTube, Spotify, Instagram, TikTok e GitHub podem usar seus próprios cookies ao serem abertos. O DayFlow Pro não controla esses serviços externos."],
          ["Gerenciar armazenamento","Você pode limpar cookies, cache ou dados do site nas configurações do navegador. Isso pode encerrar sua sessão ou remover preferências locais."],
          ["Sem sistema de cookies publicitários","O DayFlow Pro não foi criado em torno de cookies de publicidade. O armazenamento é focado em sessão, preferências, sincronização e funcionamento."]
        ]}
      }
    };
    const REWARDS = [
      ["chocolate",450,"fa-cookie-bite"],["music",650,"fa-music"],["sport",900,"fa-person-running"],["book",1200,"fa-book-open"],
      ["movie",1500,"fa-film"],["pizza",1800,"fa-pizza-slice"],["food",2100,"fa-burger"],["game",2400,"fa-gamepad"],
      ["cinema",2800,"fa-ticket"],["relax",3400,"fa-spa"],["clothes",4600,"fa-shirt"],["outing",5400,"fa-route"]
    ];
    Object.assign(LANGS.es,{next:"Siguiente",continue:"Continuar",go_dashboard:"Ir al dashboard"});
    Object.assign(LANGS.en,{next:"Next",continue:"Continue",go_dashboard:"Go to dashboard"});
    Object.assign(LANGS.pt,{next:"Seguinte",continue:"Continuar",go_dashboard:"Ir ao painel"});
    Object.assign(LANGS.es,{hours_note:"Se cuentan mientras estás en DayFlow o con el tracking externo activo.",weekly_stats:"Estadísticas semanales",tracked_time:"Tiempo trackeado",tracking_rules:"Cómo se cuentan las horas",tracking_rules_text:"DayFlow suma tiempo cuando la página está abierta y visible. Si estudias con YouTube o Spotify, activa el tracking externo antes de salir.",start_tracking:"Iniciar tracking",stop_tracking:"Detener tracking",study_block:"Bloque de estudio",reading_block:"Lectura",workout_block:"Ejercicio",habit_block:"Hábito",project_block:"Proyecto",journal_block:"Diario"});
    Object.assign(LANGS.en,{hours_note:"Counted while you are in DayFlow or while external tracking is active.",weekly_stats:"Weekly stats",tracked_time:"Tracked time",tracking_rules:"How hours are counted",tracking_rules_text:"DayFlow adds time when the page is open and visible. If you study with YouTube or Spotify, turn on external tracking before leaving.",start_tracking:"Start tracking",stop_tracking:"Stop tracking",study_block:"Study block",reading_block:"Reading",workout_block:"Workout",habit_block:"Habit",project_block:"Project",journal_block:"Journal"});
    Object.assign(LANGS.pt,{hours_note:"Contadas enquanto você está no DayFlow ou com o tracking externo ativo.",weekly_stats:"Estatísticas semanais",tracked_time:"Tempo rastreado",tracking_rules:"Como as horas são contadas",tracking_rules_text:"O DayFlow soma tempo quando a página está aberta e visível. Se estudar com YouTube ou Spotify, ative o tracking externo antes de sair.",start_tracking:"Iniciar tracking",stop_tracking:"Parar tracking",study_block:"Bloco de estudo",reading_block:"Leitura",workout_block:"Exercício",habit_block:"Hábito",project_block:"Projeto",journal_block:"Diário"});
    Object.assign(LANGS.es,{footer_rights:"© 2026 DayFlow Pro. Todos los derechos reservados.",footer_tagline:"Un sistema diario de foco creado para estudiantes que buscan constancia, progreso y calma.",footer_built:"Creado para estudiantes, por estudiantes.",footer_product:"Producto",footer_developers:"Desarrolladores",footer_legal:"Legal",terms:"Términos",privacy:"Privacidad",cookies:"Cookies"});
    Object.assign(LANGS.en,{footer_rights:"© 2026 DayFlow Pro. All rights reserved.",footer_tagline:"A focused daily system built for students who want consistency, progress, and calm.",footer_built:"Built for students, by students.",footer_product:"Product",footer_developers:"Developers",footer_legal:"Legal",terms:"Terms",privacy:"Privacy",cookies:"Cookies",terms_text:"DayFlow Pro is built to help students organize their routines, track progress, and use rewards responsibly. By using the app, you agree to use it honestly and respect the experience we are creating.",privacy_text:"DayFlow Pro stores your account and progress data only to keep your experience synced. We do not sell your personal information.",cookies_text:"DayFlow Pro may use local storage and Firebase session tools to keep you signed in, remember preferences, and save app progress."});
    Object.assign(LANGS.pt,{footer_rights:"© 2026 DayFlow Pro. Todos os direitos reservados.",footer_tagline:"Um sistema diário de foco criado para estudantes que buscam constância, progresso e calma.",footer_built:"Criado para estudantes, por estudantes.",footer_product:"Produto",footer_developers:"Desenvolvedores",footer_legal:"Legal",terms:"Termos",privacy:"Privacidade",cookies:"Cookies"});

    let app,auth,db,userRef,uid,S={...DEF},saveTimer=null,currentScreen="dashboard",modalNextScreen=null;
    const $ = s => document.querySelector(s);
    const $$ = s => [...document.querySelectorAll(s)];
    const today = () => new Date().toISOString().slice(0,10);
    const clone = v => JSON.parse(JSON.stringify(v));
    const t = k => (LANGS[S.lang] || LANGS.es)[k] || k;
    let lastTrackAt=Date.now();

    function loadScript(src){
      return new Promise((resolve,reject)=>{
        const s=document.createElement("script");
        const timer=setTimeout(()=>reject(new Error(src)),12000);
        s.src=src;
        s.onload=()=>{clearTimeout(timer);resolve()};
        s.onerror=()=>{clearTimeout(timer);reject(new Error(src))};
        document.head.appendChild(s);
      });
    }
    async function loadFirebase(){
      if(typeof firebase!=="undefined") return;
      const base="https://cdn.jsdelivr.net/npm/firebase@9.23.0/";
      await loadScript(base+"firebase-app-compat.min.js");
      await loadScript(base+"firebase-auth-compat.min.js");
      await loadScript(base+"firebase-firestore-compat.min.js");
    }
    function initFirebase(){
      if(firebaseConfig.apiKey.startsWith("TU_")){
        $("#authError").textContent = "Configura firebaseConfig en index.html para activar login y sincronización.";
        $("#loginBtn").disabled = $("#regBtn").disabled = true;
        return;
      }
      if(typeof firebase==="undefined"){
        $("#authError").textContent = "Los scripts de Firebase no cargaron. Verifica tu conexión a internet.";
        $("#loginBtn").disabled = $("#regBtn").disabled = true;
        return;
      }
      firebase.initializeApp(firebaseConfig);
      auth = firebase.auth();
      db = firebase.firestore();
      $("#authError").textContent = "";
      $("#loginBtn").disabled = $("#regBtn").disabled = false;
      auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      auth.onAuthStateChanged(async user=>{
        if(!user){$("#loginWall").style.display="grid";return}
        uid=user.uid;userRef=db.collection("users").doc(uid);
        const snap=await userRef.get();
        S={...clone(DEF),...(snap.exists?snap.data():{})};
        await saveNow();
        $("#loginWall").style.display="none";
        S.currentScreen="dashboard";
        restoreNav();
        renderAll();
      });
    }
    function authError(e){
      const map={"auth/invalid-email":"Usuario inválido.","auth/user-not-found":"No existe esa cuenta.","auth/wrong-password":"Contraseña incorrecta.","auth/email-already-in-use":"Ese usuario ya existe.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/network-request-failed":"No hay conexión con Firebase."};
      $("#authError").textContent = map[e.code] || "No se pudo completar la autenticación.";
    }
    function emailFromUser(){return ($("#loginUser").value.trim().toLowerCase().replace(/\s+/g,"") || "usuario") + "@dayflow.app"}
    async function login(mode){
      try{
        if(!auth){
          $("#authError").textContent="Firebase aún está cargando. Espera un momento.";
          return;
        }
        $("#authError").textContent="";
        const email=emailFromUser(), pass=$("#loginPass").value;
        if(mode==="reg") await auth.createUserWithEmailAndPassword(email,pass);
        else await auth.signInWithEmailAndPassword(email,pass);
      }catch(e){authError(e)}
    }
    function save(){clearTimeout(saveTimer);saveTimer=setTimeout(saveNow,1500)}
    async function saveNow(){if(userRef) await userRef.set(S,{merge:true})}
    const SOUND_MAP={complete:"sounds/complete.wav",timer:"sounds/timer.wav",success:"sounds/success.wav"};
    function beep(type="complete"){
      try{
        const audio=new Audio(SOUND_MAP[type] || SOUND_MAP.complete);
        audio.volume=.38;
        audio.play().catch(()=>{});
      }catch(e){}
    }
    function toast(msg){const n=document.createElement("div");n.textContent=msg;$("#toast").appendChild(n);setTimeout(()=>n.remove(),3600)}
    function showModal(title,text,nextScreen=null,buttonText=null){
      modalNextScreen=nextScreen;
      $("#modalTitle").textContent=title;
      $("#modalText").textContent=text;
      $("#modalOk").textContent=buttonText || (nextScreen?t("next"):t("continue"));
      $("#modal").classList.add("show");
    }
    function greetingKey(){const h=new Date().getHours();return h<12?"greeting_morning":h<19?"greeting_afternoon":"greeting_evening"}
    function restoreNav(){showScreen("dashboard",true);document.body.classList.toggle("open",localStorage.getItem("sideOpen")==="1")}
    function showScreen(id,silent=false){
      const locked=$(`.nav-item[data-screen="${id}"].locked`);
      if(locked && !silent) return toast(t("locked_msg"));
      currentScreen=id;S.currentScreen=id;$(".screen.active")?.classList.remove("active");$("#"+id)?.classList.add("active");
      $$(".nav-item,.profile-entry").forEach(b=>b.classList.toggle("active",b.dataset.screen===id));
      if(!silent) save();
    }
    function isUnlocked(step){
      if(!S.dayStarted) return false;
      const idx=FLOW.indexOf(step);
      if(idx<0) return true;
      return idx===0 || S.completed[FLOW[idx-1]];
    }
    function renderAll(){applyTheme();renderI18n();renderDashboard();renderNav();renderSchedule();renderTimers();renderTasks();renderEvidence();renderStore();renderModules();renderReminders();renderConfig();renderLegal()}
    function applyTheme(){document.documentElement.dataset.theme=localStorage.getItem("theme")||"light"}
    function renderI18n(){
      $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
      $$("[data-ph]").forEach(el=>el.placeholder=t(el.dataset.ph));
      $("#modType option[value='timer']").textContent=t("timer_notes");
      $("#modType option[value='notes']").textContent=t("notes");
      $("#modType option[value='checklist']").textContent=t("checklist");
      $("#modType option[value='study']").textContent=t("study_block");
      $("#modType option[value='reading']").textContent=t("reading_block");
      $("#modType option[value='workout']").textContent=t("workout_block");
      $("#modType option[value='habit']").textContent=t("habit_block");
      $("#modType option[value='project']").textContent=t("project_block");
      $("#modType option[value='journal']").textContent=t("journal_block");
      $("#greeting").textContent=`${t(greetingKey())}, ${S.displayName || t("student")}`;
      $("#dashSub").textContent=t("student");
      $("#dashKicker").textContent=(S.lang||"es").toUpperCase();
      const quotes=QUOTES[S.lang] || QUOTES.es, q=quotes[new Date().getDay()%7];$("#quote").textContent=`${q.t} — ${q.a}`;
    }
    function renderDashboard(){
      $("#streakVal").textContent=S.streak;$("#xpVal").textContent=S.xp;$("#storeXP").textContent=S.storeXP;
      $("#hoursVal").textContent=(S.totalMin/60).toFixed(1)+"h";
      const av=S.avatarUrl || "", fallback="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96'%3E%3Crect width='96' height='96' fill='%23e6e4dc'/%3E%3Ctext x='50%25' y='56%25' text-anchor='middle' font-size='34'%3ED%3C/text%3E%3C/svg%3E";
      $("#sideAvatar").src=av || fallback; $("#profileAvatar").src=av || fallback; $("#sideName").textContent=S.displayName || "DayFlow";
      $("#antiFarm").classList.toggle("hidden",S.lastDay!==today());
      $("#startDayBtn").disabled=S.lastDay===today() || S.dayStarted;
      const days=["L","M","X","J","V","S","D"], max=Math.max(1,...S.weekHrs);
      $("#bars").innerHTML=S.weekHrs.map((h,i)=>`<button class="bar" type="button" data-tip="${h} ${t("hours")}" title="${h} ${t("hours")}" style="height:${Math.max(5,h/max*100)}%"><span>${days[i]}</span></button>`).join("");
      $("#statsBars").innerHTML=$("#bars").innerHTML;
      $("#statsTotal").textContent=(S.weekHrs.reduce((a,b)=>a+b,0)).toFixed(1)+"h";
      renderTrackingButtons();
      $("#goals").innerHTML=(S.goals.length?S.goals:[{text:t("add_goal"),done:false,ghost:true}]).map((g,i)=>`<div class="goal"><input type="checkbox" data-goal="${i}" ${g.done?"checked":""} ${g.ghost?"disabled":""}><span>${escapeHtml(g.text)}</span>${g.ghost?"":`<button class="icon-btn" data-del-goal="${i}" title="Eliminar"><i class="fa-solid fa-xmark"></i></button>`}</div>`).join("");
    }
    function renderNav(){
      const done=FLOW.filter(x=>S.completed[x]).length,pct=Math.round(done/FLOW.length*100),circ=2*Math.PI*19;
      $("#dayRing").style.strokeDasharray=circ;$("#dayRing").style.strokeDashoffset=circ*(1-pct/100);$("#dayPct").textContent=pct+"%";
      $$(".nav-item[data-step]").forEach(b=>{const step=b.dataset.step;b.classList.toggle("locked",!isUnlocked(step));b.classList.toggle("done",!!S.completed[step])});
      $("#moduleNav").innerHTML=S.modules.map((m,i)=>`<button class="nav-item" data-module-nav="${i}" title="${escapeHtml(m.name)}"><span class="nav-emoji">${escapeHtml(m.emoji||"•")}</span><span class="label">${escapeHtml(m.name)}</span></button>`).join("");
      $$("#moduleNav .nav-item").forEach((b,i)=>b.classList.toggle("active",currentScreen==="moduleDetail"&&S.modules[i]?.id===S.activeModuleId));
    }
    function renderSchedule(){
      if(!S.schedule.length){$("#scheduleView").innerHTML=`<p class="muted">${t("no_schedule")}</p>`;return}
      $("#scheduleView").innerHTML=`<table class="schedule"><thead><tr><th>${t("time")}</th><th>${t("subject")}</th><th>${t("type")}</th></tr></thead><tbody>${S.schedule.map(x=>`<tr class="${isNowRange(x.time)?"now":""}"><td>${escapeHtml(x.time)}</td><td>${escapeHtml(x.subject)}</td><td>${escapeHtml(x.type)}</td></tr>`).join("")}</tbody></table>`;
    }
    function isNowRange(range){
      const m=(range||"").match(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/);if(!m)return false;
      const now=new Date(), cur=now.getHours()*60+now.getMinutes(), a=+m[1]*60 + +m[2], b=+m[3]*60 + +m[4];return cur>=a&&cur<b;
    }
    function svgTimer(sec,total,label){const r=108,c=2*Math.PI*r,off=c*(1-sec/total),mm=String(Math.floor(sec/60)).padStart(2,"0"),ss=String(sec%60).padStart(2,"0");return `<svg viewBox="0 0 245 245"><circle cx="122.5" cy="122.5" r="${r}" fill="none" stroke="var(--paper3)" stroke-width="11"/><circle cx="122.5" cy="122.5" r="${r}" fill="none" stroke="var(--gold)" stroke-width="11" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}"/></svg><div><div class="timer-time">${mm}:${ss}</div><div class="timer-mode">${label}</div></div>`}
    let org={left:DEF.orgMins*60,run:false,id:null}, pom={left:DEF.pomFocus*60,run:false,id:null,mode:"focus",cycles:0};
    function renderTimers(){org.left=Math.min(org.left,S.orgMins*60);$("#orgTimer").innerHTML=svgTimer(org.left,S.orgMins*60,"Organización");$("#pomTimer").innerHTML=svgTimer(pom.left,pomTotal(),pomLabel());$("#pomDots").innerHTML=[0,1,2].map(i=>`<span class="dot ${i<pom.cycles?"on":""}"></span>`).join("")}
    function pomTotal(){return (pom.mode==="focus"?S.pomFocus:pom.mode==="long"?S.pomLong:S.pomBreak)*60}
    function pomLabel(){return pom.mode==="focus"?t("pom_focus"):pom.mode==="long"?t("pom_long"):t("pom_break")}
    function tickTimer(obj,render,done){if(obj.run)return;obj.run=true;obj.id=setInterval(()=>{obj.left--;render();if(obj.left<=0){clearInterval(obj.id);obj.run=false;done()}},1000)}
    function renderTasks(){
      $("#hasTasks").checked=!!S.tarOn;$("#tasksPanel").classList.toggle("hidden",!S.tarOn);
      $("#taskList").innerHTML=S.tasks.map((x,i)=>`<div class="task"><input type="checkbox" data-task-done="${i}" ${x.done?"checked":""}><span>${escapeHtml(x.text)}</span><label class="icon-btn" title="Subir evidencia"><i class="fa-solid fa-image"></i><input type="file" accept="image/*" data-task-img="${i}" class="hidden"></label>${x.img?`<img class="thumb" src="${x.img}" alt="">`:""}<button class="icon-btn" data-del-task="${i}" title="Eliminar"><i class="fa-solid fa-xmark"></i></button></div>`).join("");
    }
    function renderEvidence(){$("#evidenceGrid").innerHTML=(S.evidence||[]).map(src=>`<img src="${src}" alt="Evidencia">`).join("")}
    function renderStore(){
      const redeemed=REWARDS.filter(([id])=>S.redeemed[id]);
      $("#redeemedCount").textContent=redeemed.length;
      $("#redeemedGrid").innerHTML=redeemed.length?redeemed.map(([id,cost,icon])=>`<div class="card"><i class="fa-solid ${icon} fa-lg"></i><h3 style="margin-top:10px">${t(id)}</h3><span class="badge">✓ ${t("redeemed")}</span></div>`).join(""):`<p class="muted">${t("no_rewards")}</p>`;
      $("#storeGrid").innerHTML=REWARDS.map(([id,cost,icon])=>{const got=S.redeemed[id], dis=S.storeXP<cost&&!got;return `<div class="card reward ${dis?"disabled":""}"><div class="between"><i class="fa-solid ${icon} fa-2x"></i>${got?`<span class="badge">✓ ${t("redeemed")}</span>`:""}</div><h3 style="margin-top:14px">${t(id)}</h3><p class="muted">${cost} XP</p><button class="btn ${got?"ghost":""}" data-reward="${id}" ${dis||got?"disabled":""}>${t("redeem")}</button></div>`}).join("");
    }
    const modTimers={};
    function renderModules(){
      $("#modulesGrid").innerHTML=S.modules.map((m,i)=>`<div class="card module-card"><div class="module-head"><div><div class="emoji">${escapeHtml(m.emoji)}</div><h3>${escapeHtml(m.name)}</h3><p class="muted">${m.type} · ${m.mins} min</p></div><button class="icon-btn" data-del-module="${i}" title="Eliminar"><i class="fa-solid fa-trash"></i></button></div>${moduleBody(m,i)}</div>`).join("");
      renderModuleDetail();
    }
    function renderModuleDetail(){
      const box=$("#moduleDetailContent"); if(!box) return;
      const i=S.modules.findIndex(m=>m.id===S.activeModuleId), m=S.modules[i];
      if(!m){box.innerHTML=`<div class="card"><p class="muted">${t("modules")}</p></div>`;return}
      box.innerHTML=`<div class="between"><div><div class="emoji">${escapeHtml(m.emoji)}</div><h2>${escapeHtml(m.name)}</h2><p class="muted">${m.type} · ${m.mins} min</p></div><button class="btn ghost" data-del-module="${i}"><i class="fa-solid fa-trash"></i></button></div><div class="panel" style="margin-top:18px">${moduleBody(m,i)}</div>`;
    }
    function moduleBody(m,i){
      if(["timer","study","reading","workout","project"].includes(m.type)) return `<div class="timer" style="width:180px;height:180px;margin:auto">${svgTimer(modTimers[m.id]?.left ?? m.mins*60,m.mins*60,t("module"))}</div><div class="row"><button class="btn" data-mod-start="${i}"><i class="fa-solid fa-play"></i></button><button class="btn alt" data-mod-pause="${i}"><i class="fa-solid fa-pause"></i></button></div><textarea data-mod-notes="${i}" placeholder="${t("notes")}">${escapeHtml(m.notes||"")}</textarea>`;
      if(["checklist","habit"].includes(m.type)) return `<div class="grid">${(m.items||[]).map((it,j)=>`<label class="check-item"><input type="checkbox" data-mod-check="${i}:${j}" ${it.done?"checked":""}> ${escapeHtml(it.text)}</label>`).join("")}</div><div class="row"><input data-mod-new="${i}" placeholder="${t("new_item")}"><button class="icon-btn" data-mod-add-item="${i}"><i class="fa-solid fa-plus"></i></button></div><textarea data-mod-notes="${i}" placeholder="${t("notes")}">${escapeHtml(m.notes||"")}</textarea>`;
      return `<textarea class="editor" data-mod-notes="${i}" placeholder="${t("notes")}">${escapeHtml(m.notes||"")}</textarea>`;
    }
    function renderReminders(){
      const list=[...S.reminders].sort((a,b)=>a.time.localeCompare(b.time));
      $("#remindersList").innerHTML=list.map(r=>`<div class="card reminder ${r.fired?"fired":""} between"><div><strong>${escapeHtml(r.time)}</strong><p class="muted">${escapeHtml(r.text)}</p></div><button class="icon-btn" data-del-rem="${r.id}" title="Eliminar"><i class="fa-solid fa-xmark"></i></button></div>`).join("");
    }
    function renderConfig(){
      $("#displayName").value=S.displayName;$("#cfgFocus").value=S.pomFocus;$("#cfgBreak").value=S.pomBreak;$("#cfgLong").value=S.pomLong;$("#cfgOrg").value=S.orgMins;
      $$(".pill[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===S.lang));
      $("#scheduleEditor").innerHTML=S.schedule.map((x,i)=>`<div class="goal"><span><strong>${escapeHtml(x.time)}</strong> ${escapeHtml(x.subject)} · ${escapeHtml(x.type)}</span><button class="icon-btn" data-del-sch="${i}"><i class="fa-solid fa-xmark"></i></button></div>`).join("");
    }
    function renderLegal(type=S.legalType||"terms"){
      const box=$("#legalContent"); if(!box) return;
      const docs=LEGAL_DOCS[S.lang] || LEGAL_DOCS.es;
      const doc=docs[type] || docs.terms;
      box.innerHTML=`
        <div class="legal-hero">
          <div>
            <div class="kicker">${doc.eyebrow}</div>
            <h2>${doc.title}</h2>
            <p class="muted">${doc.updated}</p>
          </div>
          <div class="legal-tabs">
            ${Object.keys(docs).map(k=>`<button class="pill ${k===type?"active":""}" data-legal="${k}">${t(k)}</button>`).join("")}
          </div>
        </div>
        <div class="card legal-intro">
          <p>${doc.intro}</p>
        </div>
        <div class="legal-grid">
          ${doc.sections.map(([title,text])=>`<article class="card legal-card"><h3>${title}</h3><p class="muted">${text}</p></article>`).join("")}
        </div>`;
    }
    function completeStep(step){
      if(!isUnlocked(step) || S.completed[step]) return;
      S.completed[step]=true;S.xp+=XP[step];S.storeXP+=XP[step];
      const next=FLOW[FLOW.indexOf(step)+1];beep("complete");showModal(`${XP[step]} XP`,`${stepName(step)} ${t("completed_word")}. ${next?t("next_step")+" "+stepName(next)+".":t("can_finish")}`,next || "evidencia",next?t("next"):t("continue"));
      renderAll();save();
    }
    function stepName(s){return {colegio:t("schedule"),organizacion:t("organization"),tareas:t("tasks"),evidencia:t("evidence")}[s]||s}
    async function finishDay(){
      if(!S.completed.evidencia) completeStep("evidencia");
      const d=today(), y=new Date(Date.now()-86400000).toISOString().slice(0,10);
      S.streak = S.lastDay===y ? S.streak+1 : S.lastDay===d ? S.streak : 1;
      S.lastDay=d;S.dayStarted=false;
      beep("success");showModal(t("day_finished"),t("day_finished_msg"),"dashboard",t("go_dashboard"));
      showScreen("dashboard",true);renderAll();await saveNow();
    }
    function todayIndex(){return (new Date().getDay()+6)%7}
    function addTrackedMinutes(mins){
      if(!mins || mins<1) return;
      S.totalMin+=mins;
      const idx=todayIndex();
      S.weekHrs[idx]=Math.round(((S.weekHrs[idx]||0)+(mins/60))*10)/10;
      renderDashboard();
      save();
    }
    function shouldTrackNow(){return document.visibilityState==="visible" || !!S.trackingManual}
    function syncTracking(){
      const now=Date.now(), delta=Math.floor((now-lastTrackAt)/60000);
      if(delta>0){if(shouldTrackNow()) addTrackedMinutes(delta);lastTrackAt=now}
      renderTrackingButtons();
    }
    function toggleTracking(){
      syncTracking();
      if(S.trackingManual){
        S.trackingElapsedSec+=(Date.now()-(S.trackingStartedAt||Date.now()))/1000;
        S.trackingManual=false;
        S.trackingStartedAt=null;
      }else{
        S.trackingManual=true;
        S.trackingStartedAt=Date.now();
      }
      renderTrackingButtons();
      save();
    }
    function renderTrackingButtons(){
      const txt=S.trackingManual?t("stop_tracking"):t("start_tracking");
      ["#trackBtn","#statsTrackBtn"].forEach(sel=>{const btn=$(sel);if(btn){btn.classList.toggle("green",!!S.trackingManual);const span=btn.querySelector("span");if(span)span.textContent=txt}});
      const elapsed=Math.floor((S.trackingElapsedSec||0)+(S.trackingManual&&S.trackingStartedAt?(Date.now()-S.trackingStartedAt)/1000:0));
      const readout=$("#trackerReadout"); if(readout) readout.textContent=`${Math.floor(elapsed/60)}:${String(elapsed%60).padStart(2,"0")}`;
    }
    function checkTasksReady(){return !S.tarOn || S.tasks.every(x=>x.done&&x.img)}
    function readFiles(files,cb){[...files].filter(f=>f.type.startsWith("image/")).forEach(f=>{const r=new FileReader();r.onload=()=>cb(r.result);r.readAsDataURL(f)})}
    async function sendSuggestion(){
      const text=$("#suggestionText").value.trim();
      if(!text) return toast(t("suggestion_empty"));
      if(!db) return toast("Firebase no está listo.");
      try{
        await db.collection("creatorSuggestions").add({
          uid:uid||null,
          displayName:S.displayName||"",
          lang:S.lang,
          text,
          createdAt:firebase.firestore.FieldValue.serverTimestamp()
        });
        $("#suggestionText").value="";
        toast(t("suggestion_sent"));
      }catch(e){toast("No se pudo enviar la sugerencia.")}
    }
    function escapeHtml(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}

    document.addEventListener("click",e=>{
      const nav=e.target.closest(".nav-item[data-screen],.profile-entry[data-screen]");if(nav) showScreen(nav.dataset.screen);
      const footScreen=e.target.closest("[data-footer-screen]");if(footScreen) showScreen(footScreen.dataset.footerScreen);
      const legal=e.target.closest("[data-legal]");if(legal){S.legalType=legal.dataset.legal;renderLegal(S.legalType);showScreen("legal",true);save()}
      const modNav=e.target.closest("[data-module-nav]");if(modNav){const m=S.modules[+modNav.dataset.moduleNav];if(m){S.activeModuleId=m.id;renderModuleDetail();showScreen("moduleDetail");renderNav();save()}}
      if(e.target.closest("#themeBtn")){localStorage.setItem("theme",(localStorage.getItem("theme")||"light")==="light"?"dark":"light");applyTheme()}
      if(e.target.closest("#loginThemeBtn")){localStorage.setItem("theme",(localStorage.getItem("theme")||"light")==="light"?"dark":"light");applyTheme()}
      if(e.target.closest("#trackBtn") || e.target.closest("#statsTrackBtn")) toggleTracking();
      if(e.target.closest("#modalOk")){
        $("#modal").classList.remove("show");
        const next=modalNextScreen;
        modalNextScreen=null;
        if(next) showScreen(next,true);
      }
      if(e.target.closest("#addGoalBtn")){const text=prompt("Nueva meta");if(text){S.goals.push({text,done:false});renderDashboard();save()}}
      const bar=e.target.closest(".bar");if(bar){$$(".bar.show").forEach(x=>x!==bar&&x.classList.remove("show"));bar.classList.toggle("show")}
      const dg=e.target.closest("[data-del-goal]");if(dg){S.goals.splice(+dg.dataset.delGoal,1);renderDashboard();save()}
      if(e.target.closest("#startDayBtn")){S.dayStarted=true;S.completed={};showScreen("colegio",true);renderAll();save()}
      if(e.target.closest("#doneSchool")) completeStep("colegio");
      if(e.target.closest("#doneOrg")) completeStep("organizacion");
      if(e.target.closest("#doneTasks")) checkTasksReady()?completeStep("tareas"):toast(t("task_evidence_required"));
      if(e.target.closest("#finishDayBtn")) finishDay();
      if(e.target.closest("#addTaskBtn")){const text=prompt("Tarea");if(text){S.tasks.push({text,done:false,img:""});renderTasks();save()}}
      const dt=e.target.closest("[data-del-task]");if(dt){S.tasks.splice(+dt.dataset.delTask,1);renderTasks();save()}
      const rw=e.target.closest("[data-reward]");if(rw){const item=REWARDS.find(x=>x[0]===rw.dataset.reward);if(item&&S.storeXP>=item[1]){S.storeXP-=item[1];S.redeemed[item[0]]=true;toast(t("reward_redeemed"));renderAll();save()}}
      if(e.target.closest("#createModule")){const name=$("#modName").value.trim();if(name){const mod={id:crypto.randomUUID(),emoji:$("#modEmoji").value||"✨",name,type:$("#modType").value,mins:+$("#modMins").value||20,notes:"",items:[]};S.modules.push(mod);S.activeModuleId=mod.id;$("#modName").value="";renderAll();showScreen("moduleDetail",true);save()}}
      const dm=e.target.closest("[data-del-module]");if(dm&&confirm("¿Eliminar módulo?")){const removed=S.modules[+dm.dataset.delModule];S.modules.splice(+dm.dataset.delModule,1);if(removed?.id===S.activeModuleId){S.activeModuleId=null;showScreen("modulos",true)}renderAll();save()}
      const ai=e.target.closest("[data-mod-add-item]");if(ai){const i=+ai.dataset.modAddItem,inp=$(`[data-mod-new="${i}"]`);if(inp.value.trim()){S.modules[i].items.push({text:inp.value.trim(),done:false});renderModules();save()}}
      if(e.target.closest("#addReminder")){const time=$("#remTime").value,text=$("#remText").value.trim();if(time&&text){S.reminders.push({id:crypto.randomUUID(),time,text,fired:false});$("#remText").value="";renderReminders();save()}}
      const dr=e.target.closest("[data-del-rem]");if(dr){S.reminders=S.reminders.filter(r=>r.id!==dr.dataset.delRem);renderReminders();save()}
      if(e.target.closest("#profileAvatar")) $("#avatarInput").click();
      if(e.target.closest("#saveProfile")){S.displayName=$("#displayName").value.trim();renderAll();save()}
      const lang=e.target.closest("[data-lang]");if(lang){S.lang=lang.dataset.lang;renderAll();save()}
      if(e.target.closest("#savePom")){S.pomFocus=+$("#cfgFocus").value||25;S.pomBreak=+$("#cfgBreak").value||5;S.pomLong=+$("#cfgLong").value||20;pom.left=pomTotal();renderAll();save()}
      if(e.target.closest("#saveOrg")){S.orgMins=+$("#cfgOrg").value||30;org.left=S.orgMins*60;renderAll();save()}
      if(e.target.closest("#addSchedule")){const time=$("#schTime").value.trim(),subject=$("#schSubject").value.trim(),type=$("#schType").value;if(time&&subject){S.schedule.push({time,subject,type});renderConfig();save()}}
      const ds=e.target.closest("[data-del-sch]");if(ds){S.schedule.splice(+ds.dataset.delSch,1);renderConfig();save()}
      if(e.target.closest("#saveSchedule")){renderSchedule();toast(t("schedule_saved"));saveNow()}
      if(e.target.closest("#sendSuggestion")) sendSuggestion();
      if(e.target.closest("#resetStreak")){S.streak=0;renderAll();save()}
      if(e.target.closest("#resetProgress")&&confirm("¿Resetear progreso y conservar configuración personal?")){const keep={lang:S.lang,displayName:S.displayName,avatarUrl:S.avatarUrl,schedule:S.schedule,modules:S.modules,reminders:S.reminders,pomFocus:S.pomFocus,pomBreak:S.pomBreak,pomLong:S.pomLong,orgMins:S.orgMins};S={...clone(DEF),...keep};renderAll();save()}
      if(e.target.closest("#logoutBtn")) saveNow().then(()=>auth.signOut());
    });
    document.addEventListener("change",e=>{
      const g=e.target.closest("[data-goal]");if(g){S.goals[+g.dataset.goal].done=g.checked;save()}
      if(e.target.id==="hasTasks"){S.tarOn=e.target.checked;renderTasks();save()}
      const td=e.target.closest("[data-task-done]");if(td){S.tasks[+td.dataset.taskDone].done=td.checked;save()}
      const ti=e.target.closest("[data-task-img]");if(ti) readFiles(ti.files,src=>{S.tasks[+ti.dataset.taskImg].img=src;renderTasks();save()});
      const mc=e.target.closest("[data-mod-check]");if(mc){const [i,j]=mc.dataset.modCheck.split(":").map(Number);S.modules[i].items[j].done=mc.checked;save()}
      if(e.target.id==="avatarInput") readFiles(e.target.files,src=>{S.avatarUrl=src;renderAll();save()});
    });
    document.addEventListener("input",e=>{
      const mn=e.target.closest("[data-mod-notes]");if(mn){S.modules[+mn.dataset.modNotes].notes=mn.value;save()}
    });
    $("#loginBtn").onclick=()=>login("login");$("#regBtn").onclick=()=>login("reg");
    $("#orgStart").onclick=()=>tickTimer(org,()=>{$("#orgTimer").innerHTML=svgTimer(org.left,S.orgMins*60,"Organización")},()=>{beep("timer");toast("Timer de organización terminado.")});
    $("#orgPause").onclick=()=>{clearInterval(org.id);org.run=false};
    $("#orgReset").onclick=()=>{clearInterval(org.id);org.run=false;org.left=S.orgMins*60;renderTimers()};
    $("#pomStart").onclick=()=>tickTimer(pom,renderTimers,()=>{beep("timer");if(pom.mode==="focus"){pom.cycles++;pom.mode=pom.cycles>=3?"long":"break"}else{if(pom.mode==="long")pom.cycles=0;pom.mode="focus"}pom.left=pomTotal();renderTimers()});
    $("#pomPause").onclick=()=>{clearInterval(pom.id);pom.run=false};
    $("#pomReset").onclick=()=>{clearInterval(pom.id);pom.run=false;pom.mode="focus";pom.cycles=0;pom.left=S.pomFocus*60;renderTimers()};
    document.addEventListener("click",e=>{
      const st=e.target.closest("[data-mod-start]");if(st){const m=S.modules[+st.dataset.modStart],id=m.id;modTimers[id]??={left:m.mins*60,run:false,id:null};tickTimer(modTimers[id],renderModules,()=>{beep("timer");toast(`${m.name} terminado.`);modTimers[id].left=m.mins*60;renderModules()})}
      const pa=e.target.closest("[data-mod-pause]");if(pa){const m=S.modules[+pa.dataset.modPause],tm=modTimers[m.id];if(tm){clearInterval(tm.id);tm.run=false}}
    });
    const dz=$("#dropZone"), ei=$("#evidenceInput");
    dz.onclick=()=>ei.click();
    dz.ondragover=e=>{e.preventDefault();dz.classList.add("drag")};
    dz.ondragleave=()=>dz.classList.remove("drag");
    dz.ondrop=e=>{e.preventDefault();dz.classList.remove("drag");readFiles(e.dataTransfer.files,src=>{S.evidence.push(src);renderEvidence();save()})};
    ei.onchange=()=>readFiles(ei.files,src=>{S.evidence.push(src);renderEvidence();save()});
    setInterval(()=>{const now=new Date().toTimeString().slice(0,5);let changed=false;S.reminders.forEach(r=>{if(r.time===now&&!r.fired){r.fired=true;changed=true;toast(r.text);beep("timer")}});if(changed){renderReminders();save()}},30000);
    setInterval(syncTracking,15000);
    setInterval(renderTrackingButtons,1000);
    document.addEventListener("visibilitychange",()=>{
      if(document.visibilityState==="hidden" || S.trackingManual) syncTracking();
      lastTrackAt=Date.now();
      renderTrackingButtons();
    });
    window.addEventListener("beforeunload",()=>saveNow());
    $("#authError").textContent = "Cargando Firebase...";
    loadFirebase().then(initFirebase).catch(()=>{
      $("#authError").textContent = "Los scripts de Firebase no cargaron. Verifica tu conexión a internet.";
      $("#loginBtn").disabled = $("#regBtn").disabled = true;
    });