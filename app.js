const firebaseConfig = {
  apiKey: "AIzaSyDXKsbow0YjDFQ8AiIEb1xNQkQO1vbdyzI",
  authDomain: "dayflow-5eb30.firebaseapp.com",
  projectId: "dayflow-5eb30",
  storageBucket: "dayflow-5eb30.firebasestorage.app",
  messagingSenderId: "667698331669",
  appId: "1:667698331669:web:900d07b6963fc5b3a10e1c"
};

const DEF = {
    dayStarted: false, completed:{},xp:0,storeXP:0,streak:0,lastDay:null, goals:[],weekHrs:[0,0,0,0,0,0,0],totalMin:0,tarOn:false,redeemed:{},currentScreen:"dashboard",tasks:[],modules:[],reminders:[],lang:"es",displayname:"",avatarUrl:"",pomFocus:25,pomBreak:5,pomLong:20,orgMins:30,schedule:[],evidence:[],trackingManual:false,trackingStartedAt:null,trackingElapsedSec:0,activedModuleld:null
};
const FLOW =["colegio","organizacion","tareas","evidencia"];
const XP = {colegio:80,organizacion:70,tareas:90,evidencia:60};
const LANG = {
     es:{
       greeting_morning:"Buenos días", greeting_afternoon:"Buenas tardes", greeting_evening:"Buenas noches", student:"Estudiante",dashboard:"Dashboard", store:"Tienda XP", modules:"Mis Módulos", reminders:"Recordatorios", schedule:"Horario", organization:"Organización", tasks:"Tareas", evidence:"Evidencia", settings:"Configuración", theme:"Tema",start_day:"Iniciar Día", tasks_today:"Tengo tareas hoy", no_tasks:"Sin tareas", finish_day:"Finalizar día", schedule_done:"Horario completado", org_done:"Organización completada", tasks_done:"Tareas completadas",pom_focus:"Trabajo", pom_break:"Descanso corto", pom_long:"Descanso largo", streak:"Racha", xp_total:"XP total", hours:"Horas", day_goals:"Metas del día", week:"Semana",day_completed:"Día completado", day_completed_msg:"Ya cerraste tu flujo de hoy. Vuelve mañana para seguir sumando racha.", complete:"Completar", start:"Iniciar", pause:"Pausar", reset:"Reiniciar", my_schedule:"Mi Horario", drop_images:"Arrastra imágenes o haz clic para subir",reward_notice_title:"Tus recompensas, tu esfuerzo", reward_notice_text:"Los creadores de DayFlow no entregamos estas recompensas. Son un reconocimiento que tú mismo te das por todo el esfuerzo y dedicación que has puesto en tu trabajo. Cada XP que ves aquí lo ganaste con tu propio empeño. ¡Mereces celebrarlo! ✨", my_rewards:"Mis recompensas", no_rewards:"Aún no has canjeado recompensas.", redeemed:"Canjeado", redeem:"Canjear",emoji:"Emoji", name:"Nombre", type:"Tipo", timer_notes:"Timer + notas", notes:"Notas", checklist:"Checklist", minutes:"Minutos", create_module:"Crear módulo", reading:"Lectura", module:"Módulo", new_item:"Nuevo ítem",time:"Hora", text:"Texto", drink_water:"Tomar agua", add:"Agregar", profile:"Perfil", display_name:"Nombre para mostrar", save_profile:"Guardar perfil", language:"Idioma", pom_times:"Tiempos de Pomodoro", work:"Trabajo", short_break:"Descanso corto", long_break:"Descanso largo", save:"Guardar", org_time:"Tiempo de Organización", day_schedule:"Horario del día", subject:"Materia", math:"Matemáticas", save_schedule:"Guardar horario", suggestions:"Sugerencias", message:"Mensaje", suggestion_ph:"Escribe tu sugerencia", send_suggestion:"Enviar sugerencia", suggestion_sent:"Sugerencia enviada. Gracias por ayudar a mejorar DayFlow.", suggestion_empty:"Escribe una sugerencia primero.", account:"Cuenta", reset_streak:"Reiniciar racha", reset_progress:"Resetear progreso", logout:"Cerrar sesión", no_schedule:"No hay horario configurado. Ve a Configuración para añadirlo.", locked_msg:"Primero inicia el día y completa el paso anterior.", task_evidence_required:"Todas las tareas deben tener evidencia fotográfica.", reward_redeemed:"Recompensa canjeada.", schedule_saved:"Horario guardado.", day_finished:"Día finalizado", day_finished_msg:"Tu racha fue actualizada. Buen cierre.", next_step:"Sigue con", can_finish:"Puedes finalizar el día.", completed_word:"completado", add_goal:"Crear una meta para hoy",chocolate:"Chocolate", game:"Tiempo de juego", food:"Comida favorita", movie:"Película", outing:"Salida", clothes:"Ropa", pizza:"Pizza", music:"Música", book:"Libro", cinema:"Cine", sport:"Deporte", relax:"Tarde de relax"
  },
  en:{
    greeting_morning:"Good morning", greeting_afternoon:"Good afternoon", greeting_evening:"Good evening", student:"Student", dashboard:"Dashboard", store:"XP Store", modules:"My Modules", reminders:"Reminders", schedule:"Schedule", organization:"Organization", tasks:"Tasks", evidence:"Evidence", settings:"Settings", theme:"Theme", start_day:"Start Day", tasks_today:"Tasks today", no_tasks:"No tasks", finish_day:"Finish day", schedule_done:"Schedule done", org_done:"Organization done", tasks_done:"Tasks done", pom_focus:"Focus", pom_break:"Short break", pom_long:"Long break", streak:"Streak", xp_total:"Total XP", hours:"Hours", day_goals:"Day goals", week:"Week", day_completed:"Day completed", day_completed_msg:"You already closed today's flow. Come back tomorrow to keep your streak growing.", complete:"Complete", start:"Start", pause:"Pause", reset:"Reset", my_schedule:"My Schedule", drop_images:"Drag images or click to upload", reward_notice_title:"Your rewards, your effort", reward_notice_text:"DayFlow's creators do not provide these rewards. They are a recognition you give yourself for the effort and dedication you have put into your work. Every XP you see here was earned by your own commitment. You deserve to celebrate! ✨", my_rewards:"My rewards", no_rewards:"You have not redeemed rewards yet.", redeemed:"Redeemed", redeem:"Redeem", emoji:"Emoji", name:"Name", type:"Type", timer_notes:"Timer + notes", notes:"Notes", checklist:"Checklist", minutes:"Minutes", create_module:"Create module", reading:"Reading", module:"Module", new_item:"New item", time:"Time", text:"Text", drink_water:"Drink water", add:"Add", profile:"Profile", display_name:"Display name", save_profile:"Save profile", language:"Language", pom_times:"Pomodoro times", work:"Work", short_break:"Short break", long_break:"Long break", save:"Save", org_time:"Organization time", day_schedule:"Day schedule", subject:"Subject", math:"Math", save_schedule:"Save schedule", suggestions:"Suggestions", message:"Message", suggestion_ph:"Write your suggestion", send_suggestion:"Send suggestion", suggestion_sent:"Suggestion sent. Thanks for helping improve DayFlow.", suggestion_empty:"Write a suggestion first.", account:"Account", reset_streak:"Reset streak", reset_progress:"Reset progress", logout:"Sign out", no_schedule:"No schedule configured. Go to Settings to add one.", locked_msg:"Start the day and complete the previous step first.", task_evidence_required:"Every task must include photo evidence.", reward_redeemed:"Reward redeemed.", schedule_saved:"Schedule saved.", day_finished:"Day finished", day_finished_msg:"Your streak was updated. Nice close.", next_step:"Continue with", can_finish:"You can finish the day.", completed_word:"completed", add_goal:"Create a goal for today", chocolate:"Chocolate", game:"Game time", food:"Favorite meal", movie:"Movie", outing:"Outing", clothes:"Clothes", pizza:"Pizza", music:"Music", book:"Book", cinema:"Cinema", sport:"Sport", relax:"Relax afternoon"
  },
  pt:{
    greeting_morning:"Bom dia", greeting_afternoon:"Boa tarde", greeting_evening:"Boa noite", student:"Estudante", dashboard:"Painel", store:"Loja XP", modules:"Meus Módulos", reminders:"Lembretes", schedule:"Horário", organization:"Organização", tasks:"Tarefas", evidence:"Evidência", settings:"Configurações", theme:"Tema", start_day:"Iniciar Dia", tasks_today:"Tenho tarefas hoje", no_tasks:"Sem tarefas", finish_day:"Finalizar dia", schedule_done:"Horário concluído", org_done:"Organização concluída", tasks_done:"Tarefas concluídas", pom_focus:"Foco", pom_break:"Pausa curta", pom_long:"Pausa longa", streak:"Sequência", xp_total:"XP total", hours:"Horas", day_goals:"Metas do dia", week:"Semana", day_completed:"Dia concluído", day_completed_msg:"Você já fechou o fluxo de hoje. Volte amanhã para continuar a sequência.", complete:"Concluir", start:"Iniciar", pause:"Pausar", reset:"Reiniciar", my_schedule:"Meu Horário", drop_images:"Arraste imagens ou clique para enviar", reward_notice_title:"Suas recompensas, seu esforço", reward_notice_text:"Os criadores do DayFlow não entregam estas recompensas. Elas são um reconhecimento que você dá a si mesmo por todo o esforço e dedicação colocados no seu trabalho. Cada XP que aparece aqui foi conquistado com seu próprio empenho. Você merece celebrar! ✨", my_rewards:"Minhas recompensas", no_rewards:"Você ainda não resgatou recompensas.", redeemed:"Resgatado", redeem:"Resgatar", emoji:"Emoji", name:"Nome", type:"Tipo", timer_notes:"Timer + notas", notes:"Notas", checklist:"Checklist", minutes:"Minutos", create_module:"Criar módulo", reading:"Leitura", module:"Módulo", new_item:"Novo item", time:"Hora", text:"Texto", drink_water:"Beber água", add:"Adicionar", profile:"Perfil", display_name:"Nome de exibição", save_profile:"Salvar perfil", language:"Idioma", pom_times:"Tempos do Pomodoro", work:"Trabalho", short_break:"Pausa curta", long_break:"Pausa longa", save:"Salvar", org_time:"Tempo de organização", day_schedule:"Horário do dia", subject:"Matéria", math:"Matemática", save_schedule:"Salvar horário", suggestions:"Sugestões", message:"Mensagem", suggestion_ph:"Escreva sua sugestão", send_suggestion:"Enviar sugestão", suggestion_sent:"Sugestão enviada. Obrigado por ajudar a melhorar o DayFlow.", suggestion_empty:"Escreva uma sugestão primeiro.", account:"Conta", reset_streak:"Reiniciar sequência", reset_progress:"Resetar progresso", logout:"Sair", no_schedule:"Nenhum horário configurado. Vá em Configurações para adicionar.", locked_msg:"Primeiro inicie o dia e conclua a etapa anterior.", task_evidence_required:"Todas as tarefas precisam ter evidência fotográfica.", reward_redeemed:"Recompensa resgatada.", schedule_saved:"Horário salvo.", day_finished:"Dia finalizado", day_finished_msg:"Sua sequência foi atualizada. Bom fechamento.", next_step:"Continue com", can_finish:"Você pode finalizar o dia.", completed_word:"concluído", add_goal:"Criar uma meta para hoje", chocolate:"Chocolate", game:"Tempo de jogo", food:"Comida favorita", movie:"Filme", outing:"Passeio", clothes:"Roupa", pizza:"Pizza", music:"Música", book:"Livro", cinema:"Cinema", sport:"Esporte", relax:"Tarde de relaxamento"
  }
};

const QUOTES = {
  es:[
    {t:'"Hazlo simple, hazlo constante."',a:"DayFlow"},
      {t:'"La disciplina también puede sentirse elegante."',a:"DayFlow"},
      {t:'"Un paso completo cambia el día."',a:"DayFlow"},
    {t:'"Tu energía merece dirección."',a:"DayFlow"},
    {t:'"Pequeños cierres, grandes rachas."',a:"DayFlow"},
    {t:'"El foco se construye con cuidado."',a:"DayFlow"},
    {t:'"Hoy también cuenta."',a:"DayFlow"}
  ],
  en:[
    {t:'"Keep it simple, keep it steady."',a:"DayFlow"},
    {t:'"Discipline can feel elegant too."',a:"DayFlow"},
    {t:'"One completed step changes the day."',a:"DayFlow"},
  {t:'"Your energy deserves direction."',a:"DayFlow"},
  {t:'"Small finishes, strong streaks."',a:"DayFlow"},
  {t:'"Focus is built with care."',a:"DayFlow"},
  {t:'"Today counts too."',a:"DayFlow"}
  ],
  pt:[
    {t:'"Faça simples, faça constante."',a:"DayFlow"},
    {t:'"A disciplina tambén pode ser elegante."',a:"DayFlow"},
    {t:"Um passo concluido muda o dia'",a:"DayFlow"},
    {t:'"Sua energia merece direção"',a:"DayFlow"},
    {t:'"Pequenos fechamentos, grandes sequências."',a:"DayFlow"},
    {t:'"O foco é construido com cuidado"',a:"DayFlow"},
    {t:'"Hoje tambén conta."',a:"DayFlow"}
  ]
};

const REWARDS = [
  ["chocolate",450,"fa-cookie-bite"],
  ["music",650,"fa-music"],
  ["sport",900,"fa-person-running"],
  ["book",1200,"fa-book-open"],
  ["movie",1500,"fa-film"],
  ["pizza",1800,"fa-pizza-slice"],
  ["food",2100,"fa-burguer"],
  ["game",2400,"fa-gamepad"],
  ["cinema",2800,"fa-ticket"],
  ["relax",3400,"fa-spa"],
  ["clothes",4600,"fa-shirt"],
  ["outing",5400,"fa-route"]
];
Object.assign(LANGS.es,{next:"Siguiente",continue:"continuar",go_dashboard:"Ir al dashboard"});
Object.assign(LANGS.en,{next:"Next",continue:"Continue",go_dashboard:"Go to dashboard"});
Object.assign(LANGS.pt,{next:"Seguinte",continue:"Continuar",go_dashboard:"Ir ao painel"});

Object.assign(LANGS.es,{
  hours_note:"Se cuentan mientras estás en DayFlow o con el tracking externo activo.",
  weekly_stats:"Estadisticas semanales",
  tracked_time:"Tiempo trackeado",
  tracking_rules:"Cómo se cuentan las horas",
  tracking_rules_text:"DayFlow suma tiempo cuando la página está abierta y visible. Si estudias con YouTube o Spotify, activa el tracking externo antes de salir.",
  start_tracking:"Iniciar tracking",
  stop_tracking:"Detener tracking",
  study_block:"Bloque de estudio",
  reading_block:"Lectura",
  workout_block:"Ejercicio",
  habit_block:"Hábito",
  project_block:"Proyecto",
  journal_block:"Diario"
});

Object.assign(LANGS.en,{
  hours_note:"Counted while you are in DayFlow or while external tracking is active.",
  weekly_stats:"Weekly stats",
  tracked_time:"Tracked time",
  tracking_rules:"How hours are counted.",
  tracking_rules_text:"DayFlow adds time when the page is open and visible.If you study with YouTube or Spotify, turn on external tracking before leaving.",
  start_tracking:"Start tracking",
  stop_tracking:"Stop tracking",
  study_block:"Study block",
  reading_block:"Reading",
  workout_block:"Workout",
  habit_block:"Habit",
  project_block:"Project",
  journal_block:"Journal"
});

Object.assign(LANGS.pt,{
  hours_note:"Contadas enquanto você está no DayFlow ou com o tracking externo ativo.",
  weekly_stats:"Estatísticas semanais",
  tracked_time:"Tempo rastreado",
  tracking_rules:"Como as horas são contadas",
  tracking_rules_text:"O DayFlow soma tempo quando a página está aberta e visível. Se estudar com YouTube ou Spotify, ative o tracking externo antes de sair.",
  start_tracking:"Iniciar tracking",
  stop_tracking:"Parar tracking",
  study_block:"Bloco de estudo",
  reading_block:"Leitura",
  workout_block:"Exercício",
  habit_block:"Hábito",
  project_block:"Projeto",
  journal_block:"Diário"
});

let app, auth, db, userRef, uid;
let S={...DEF};
let saveTimer = null;
let currentScreen = "dashboard";
let modalNextScreen = null;
let lastTrackAt = Date.now();

const $ = s => document.querySelector(s);
const $$ = s => [...documentquerySelectorAll(s)];
const today = () => new Date().tolSOString().slice(0,10);
const clone = v => JSON.parse(JSON.stringify(v));
const t = k => (LANGS[S.lang] || LANGS.es)[K] || k;

function loadScript(src){
    return new Promise((resolve,reject))=>{
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

function intiFirebase(){
  if(firebaseConfig.apiKey.startsWith("TU_")){
    $("#authError").textContent = "Configura firebaseConfig en index.html para activar login y sincronización";
    $("#loginBtn").disabled = $(#regBtn).disabled = true;
    return;
  }

if(typeof firebase==="undefined"){
  $("#authError").textContent = "Los scripts de Firebase no cargarón. Verifica tu conexión a internet";
  $("#loginBtn").disabled = $(#regBtn).disabled = true;
  return;
}

  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
    db = firebase.firestore();

    $("authError").textContent = "";
    $("#loginBtn"),disabled = $("#regBtn").disabled = false;

    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

auth.onAuthStateChanged(asyncuser=>{
  if(!user){
    $("#loginWall").style.display="grid";
    return;
  }

  uid=user.uid;
  userRef=db.collection("users").doc(uid);

  const snap=await userRef.get();
  $={...clone(DEF),...(snap.exists?snap.data():{})};

  await saveNow();

  $("#loginWall").style.display="none";
  S.currentScreen="dashboard"
  restoreNav();
  renderAll();
})

}

function authError(e){
  const map={
    "auth/invalid-email":"Usuario inválido.","auth/user-not-found":"No existe esa cuenta.","auth/wrong-password":"Contraseña incorrecta.","auth/email-already-in-use":"Ese usuario ya existe.","auth/weak-password":"La contraseña debe tener al menos 6 caracteres.","auth/network-request-failed":"No hay conexión con Firebase."
  };

  $("authError").textContent = map[e.code] || "No se pudo completar la autenticación";
}

function emailFromUser(){

  return ($("#loginUser").value.trim().toLowerCase().replace(/\s+/g,"") ||"usuario") + "@dayflow.app";
}

async function login (mode){
  try{
    if(!auth){
      $("#authError").textContent="Firebase aún está cargando. Espera un momento.";
      return;
}

$("#authError").textContent="";

const email=emailFromUser();
const pass=$("#loginPass").value;

if(mode==="reg") await auth.createUserWithEmailAndPassword(email,pass);
else await auth.signInWithEmailAndPassword(email,pass);
  }catch(e){
    authError(e);
  }
}

function save(){
  clearTimeout(saveTimer);
  saveTimer=setTimeout(saveNow,1500);
}

async function saveNow(){
  if(userRef) await userRef.set(S,{merge:true});
}

const SOUND_MAP={
  complete:"sounds/complete.wav",
  timer:"sounds/timer.wav",
  succes:"sounds/succes.wav"
};

function beep(type="complete"){
  try{
    const audio=new Audio(SOUND_MAP[type] || SOUND_MAP.complete);
    audio.volume=.38;
    audio.play().catch(()=>{});
  }catch(e){}
}

function toast(msg){
  const n=document.createElement("div");
  n.textContent=msg;
  $("#toast").appendChild(n);
  setTimeout(()=>n.remove(),3600);
}

function showModal(title,text,nextScreen=null,buttonText=null){
  modalNextScreen=nextScreen;
  $("modalTitle").TextContent=title;
  $("#modalText").textContent=text;
  $("#modalOk").textContent=buttonText || (nextScreen?t("next"):t("continue"));
  $("#modal").classList.add("show");
}

function greetingKey(){
  const h=new Date().getHours();
return h<12 ?"greeting_morning" :h<19?"greeting_afternoon":"greeting_evening";
}

function restoreNav(){
  showScreen("dashboard",true);
  document.body.classList.toggle("open",localStorage.getltem("sideOpen")==="1");
}

function showScreen(id,silent=false){
  const locked=$('.nav-item[data-screen="${id}"].locked');
  if(locked && !silent) return toast(t("locked_msg"));

  currentScreen=id;
  S.currentScreen=id;

  $(".screen.active")?.classList.remove("active");
  $("#"+id)?.classList.add("active");

  $$(".nav-item,.profile-entry").forEach(b=>b.classList.toggle("active",b.dataset.screen===id));

  if(!silent) save();
}

function isUnlocked(step){
  if(!S.dayStarted) return false;

  const idx=FLOW.indexOf(step);
  if(idx<0) return true;

  return idx===0 || S.completed[FLOW[idx-1]];
}

function renderAll(){
  applyTheme();
  renderI18n();
  renderDashboard();
  renderNav();
  renderSchedule();
  renderTimers();
  renderTasks();
  renderEvidence();
  renderStore();
  renderModules();
  renderReminders();
  renderConfig();
}

function applyTheme(){
  document.documentElement.dataset.theme=localStorage.getltem("theme")||"light";
}

function renderI18n(){
  $$("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18));
  $$("[data-ph").forEach(el=>el.placeholder=t(el.dataset.ph));

  $("#modType option[value='timer']").textContent=t("timer_notes");
  $("#modType option[value='notes']").textContent=t("notes");
  $("#modType option[value='checklist']").textContent=t("checklist");
  $("#modType option[value='study']").textContent=t("study_block");
  $("#modType option[value='reading']").textContent=t("reading_block");
  $("#modType option[value='workout']").textContent=t("workout_block");
  $("#modType option[value='habit']").textContent=t("habit_block");
$("#modType option[value='project']").textContent=t("project_block");
$("#modType option[value='journal']").textContent=t("journal_block");
