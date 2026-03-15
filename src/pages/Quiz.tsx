import { useState, useRef } from "react";

/* ─── Design tokens from EducationStrategy site ─────────────────────────── */
const C = {
  navy:        "#182540",
  navyDeep:    "#111C33",
  navyLight:   "#1F2F4D",
  navyCard:    "#1C2B45",
  gold:        "#D4922A",
  goldLight:   "#E8A830",
  goldDim:     "rgba(212,146,42,0.18)",
  goldBorder:  "rgba(212,146,42,0.35)",
  cream:       "#F5F0E6",
  white:       "#FFFFFF",
  textMain:    "#EEE9DE",
  textMuted:   "rgba(238,233,222,0.55)",
  textFaint:   "rgba(238,233,222,0.35)",
  border:      "rgba(238,233,222,0.1)",
  borderHover: "rgba(238,233,222,0.22)",
  green:       "#4CAF82",
  greenDim:    "rgba(76,175,130,0.15)",
  amber:       "#E8A830",
  amberDim:    "rgba(232,168,48,0.15)",
  coral:       "#D45C4A",
  coralDim:    "rgba(212,92,74,0.15)",
};

const questions = [
  {
    id: 1,
    subtitle: "Стратегический выбор",
    title: "На что вы ориентируетесь при выборе университета?",
    options: [
      { icon: "🏆", text: "На позицию вуза в мировых рейтингах (QS, Times Higher Education)", badge: { label: "Ловушка бренда", color: C.amber, bg: C.amberDim }, pts: 0 },
      { icon: "📊", text: "На востребованность конкретной учебной программы на рынке труда", badge: null, pts: 2 },
      { icon: "💶", text: "На стоимость обучения и локацию", badge: null, pts: 1 },
      { icon: "🔍", text: "Пока не определился, ищу варианты", badge: null, pts: 1 },
    ],
  },
  {
    id: 2,
    subtitle: "Проверка на «дефицитность»",
    title: "В какой области вы планируете учиться?",
    options: [
      { icon: "📈", text: "Бизнес, Маркетинг, Менеджмент", badge: { label: "Высокая конкуренция", color: C.amber, bg: C.amberDim }, pts: 1 },
      { icon: "⚖️", text: "Право, Международные отношения", badge: { label: "Барьеры для не-граждан ЕС", color: C.amber, bg: C.amberDim }, pts: 1 },
      { icon: "💻", text: "IT, AI, Data Science", badge: { label: "Высокий дефицит", color: C.green, bg: C.greenDim }, pts: 3 },
      { icon: "🌱", text: "Sustainability, Энергетика, Life Sciences", badge: { label: "Огромный потенциал", color: C.green, bg: C.greenDim }, pts: 3 },
      { icon: "📚", text: "Гуманитарные науки", badge: null, pts: 0 },
    ],
  },
  {
    id: 3,
    subtitle: "Юридическая готовность",
    title: "Знаете ли вы требования к признанию диплома и условия рабочей визы?",
    options: [
      { icon: "✅", text: "Да, детально изучил(а) вопрос", badge: null, pts: 2 },
      { icon: "📖", text: "Имею общее представление", badge: null, pts: 1 },
      { icon: "✗", text: "Нет, планирую заняться после поступления", badge: { label: "Может быть поздно", color: C.coral, bg: C.coralDim }, pts: 0 },
    ],
  },
  {
    id: 4,
    subtitle: "Карьерные ожидания",
    title: "Какова ваша главная цель после получения диплома?",
    options: [
      { icon: "🏠", text: "Вернуться домой с престижным дипломом", badge: null, pts: 0 },
      { icon: "🌍", text: "Остаться работать в Европе в международной компании", badge: null, pts: 2 },
      { icon: "📋", text: "Получить ВНЖ через трудоустройство в дефицитной нише", badge: null, pts: 2 },
      { icon: "🎓", text: "Продолжить академическую карьеру (PhD)", badge: null, pts: 1 },
    ],
  },
  {
    id: 5,
    subtitle: "Финансовое планирование",
    title: "Рассматриваете ли вы программы с грантами или спонсорством от индустрии?",
    options: [
      { icon: "💰", text: "Да, это приоритет", badge: null, pts: 2 },
      { icon: "💪", text: "Нет, рассчитываю на свои силы", badge: null, pts: 0 },
      { icon: "😮", text: "Не знал(а), что в моей нише это возможно", badge: null, pts: 1 },
    ],
  },
];

const fieldComments = {
  0: "Бизнес и менеджмент — конкурентная сфера с высоким барьером входа. Дифференцирующая специализация в FinTech, ESG или AI in Business существенно повысит ваши шансы на европейском рынке.",
  1: "Юридическая карьера в ЕС требует нострификации диплома и часто — сдачи местного bar exam. Академическая или compliance-карьера — более реалистичный и быстрый путь.",
  2: "IT и AI — наиболее дефицитная ниша в ЕС. Германия, Нидерланды и Эстония активно выдают Blue Card специалистам этой области. Ваш профиль обладает высоким стратегическим потенциалом.",
  3: "Sustainability и Life Sciences — одни из fastest-growing секторов ЕС. Гранты EU Green Deal и Horizon Europe открыты для кандидатов с вашим профилем.",
  4: "Гуманитарный диплом ценен, но требует чёткого карьерного нарратива. Комбинация с цифровыми компетенциями резко повышает трудоустраиваемость в европейском контексте.",
};

const getResult = (score) => {
  if (score >= 10) return { tier: "Высокий потенциал", headline: "Ваш профиль соответствует дефицитным нишам ЕС", color: C.green, bg: C.greenDim, border: "rgba(76,175,130,0.3)" };
  if (score >= 6)  return { tier: "Средний потенциал", headline: "Есть точки роста — стратегия поможет усилить позицию", color: C.amber, bg: C.amberDim, border: "rgba(232,168,48,0.3)" };
  return { tier: "Требует корректировки", headline: "Ваш текущий трек несёт риски — важно скорректировать стратегию", color: C.coral, bg: C.coralDim, border: "rgba(212,92,74,0.3)" };
};

const card = {
  background: C.navyCard,
  border: `1px solid rgba(238,233,222,0.1)`,
  borderRadius: "16px",
  padding: "32px",
};

const serifFont = { fontFamily: "'Playfair Display', 'Georgia', serif" };
const sansFont  = { fontFamily: "'Lato', 'Helvetica Neue', sans-serif" };

const GoldBtn = ({ children, onClick = undefined, style = {} }: { children: any; onClick?: any; style?: any }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%", padding: "17px 24px",
      background: `linear-gradient(135deg, ${C.gold}, ${C.goldLight})`,
      color: "#fff", border: "none", borderRadius: "10px",
      fontSize: "16px", fontWeight: 700, letterSpacing: "0.2px",
      cursor: "pointer", ...sansFont,
      boxShadow: `0 6px 28px rgba(212,146,42,0.35)`,
      transition: "transform 0.15s, box-shadow 0.15s",
      ...style,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 36px rgba(212,146,42,0.5)`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 6px 28px rgba(212,146,42,0.35)`; }}
  >{children}</button>
);

export default function CareerQuiz() {
  const [screen,    setScreen]    = useState(0);
  const [answers,   setAnswers]   = useState({});
  const [selected,  setSelected]  = useState(null);
  const [email,     setEmail]     = useState("");
  const [emailErr,  setEmailErr]  = useState("");
  const [visible,   setVisible]   = useState(true);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [toast,     setToast]     = useState(false);
  const timerRef = useRef(null);

  const barPct = screen === 0 ? 0 : screen <= 5 ? (screen / 6) * 100 : 100;

  const fade = (fn) => {
    setVisible(false);
    setTimeout(() => { fn(); setVisible(true); }, 300);
  };

  const goTo = (s) => fade(() => { setScreen(s); setSelected(null); });

  const startAnalyze = () => {
    setVisible(false);
    setTimeout(() => {
      setScreen(6); setAnalyzing(true); setProgress(0);
      let p = 0;
      timerRef.current = setInterval(() => {
        p += Math.random() * 10 + 5;
        if (p >= 100) {
          p = 100;
          clearInterval(timerRef.current);
          setTimeout(() => { setAnalyzing(false); setVisible(true); }, 400);
        }
        setProgress(p);
      }, 80);
    }, 300);
  };

  const handleNext = () => {
    const pts = questions[screen - 1].options[selected].pts;
    setAnswers(prev => ({ ...prev, [screen]: { idx: selected, pts } }));
    if (screen === 5) startAnalyze();
    else goTo(screen + 1);
  };

  const handleSubmit = () => {
    if (!email.trim()) { setEmailErr("Пожалуйста, введите email или номер WhatsApp"); return; }
    setEmailErr("");
    goTo(7);
  };

  const restart = () => {
    setAnswers({}); setSelected(null); setEmail(""); setEmailErr("");
    goTo(0);
  };

  const score  = Object.values(answers).reduce((s: number, a: any) => s + a.pts, 0);
  const result = getResult(score);
  const q2idx  = answers[2]?.idx;

  const anim = {
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(18px)",
    transition: "opacity 0.32s ease, transform 0.32s ease",
  };

  return (
    <div style={{ minHeight: "100vh", background: C.navy, ...sansFont, position: "relative" }}>

      {/* Subtle dot-grid texture */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: `radial-gradient(circle, rgba(238,233,222,0.04) 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }} />

      {/* Top progress bar */}
      {screen > 0 && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "3px", background: "rgba(255,255,255,0.06)", zIndex: 100 }}>
          <div style={{ height: "100%", width: `${barPct}%`, background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`, transition: "width 0.6s ease", boxShadow: `0 0 12px ${C.gold}` }} />
        </div>
      )}

      {/* Header logo */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "18px 32px", display: "flex", alignItems: "center" }}>
        <a href="/" style={{ ...serifFont, fontSize: "18px", fontWeight: 700, textDecoration: "none" }}>
          <span style={{ color: C.textMain }}>Education</span>
          <span style={{ color: C.gold }}>Strategy</span>
        </a>
      </header>

      {/* Toast notification */}
      {toast && (
        <div style={{
          position: "fixed", bottom: 36, left: "50%", transform: "translateX(-50%)",
          background: C.gold, color: "#fff", padding: "14px 30px", borderRadius: "50px",
          fontWeight: 700, fontSize: "14px", zIndex: 999, whiteSpace: "nowrap",
          boxShadow: `0 8px 32px rgba(212,146,42,0.45)`, ...sansFont,
        }}>
          ✓ Спасибо! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {/* Main content area */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "620px", margin: "0 auto", padding: "88px 20px 60px" }}>

        {/* ════ SCREEN 0 — Welcome ════ */}
        {screen === 0 && (
          <div style={anim}>
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{
                display: "inline-block", padding: "6px 18px",
                border: `1px solid ${C.goldBorder}`, borderRadius: "50px",
                fontSize: "12px", color: C.gold, letterSpacing: "1.5px",
                textTransform: "uppercase", fontWeight: 600,
              }}>
                Карьерный тест
              </span>
            </div>

            <h1 style={{
              ...serifFont, textAlign: "center",
              fontSize: "clamp(30px, 6vw, 48px)", fontWeight: 700,
              color: C.textMain, margin: "0 0 20px", lineHeight: 1.2, letterSpacing: "-0.5px",
            }}>
              Проверьте свой<br />
              <span style={{ color: C.gold }}>карьерный трек</span>
            </h1>

            <p style={{ textAlign: "center", color: C.textMuted, fontSize: "17px", lineHeight: 1.65, margin: "0 0 48px" }}>
              Насколько востребована ваша специальность<br />в ЕС через 5 лет?
            </p>

            {/* Feature tiles */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginBottom: "40px" }}>
              {[
                ["⏱", "2 минуты", "Быстро и по делу"],
                ["🎯", "Прогноз", "Персональный анализ"],
                ["📄", "PDF-отчёт", "В подарок"],
              ].map(([icon, title, sub]) => (
                <div key={title} style={{ ...card, padding: "20px 14px", textAlign: "center" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{icon}</div>
                  <div style={{ color: C.textMain, fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{title}</div>
                  <div style={{ color: C.textFaint, fontSize: "12px" }}>{sub}</div>
                </div>
              ))}
            </div>

            <GoldBtn onClick={() => goTo(1)}>Начать тест →</GoldBtn>

            <p style={{ textAlign: "center", color: C.textFaint, fontSize: "12px", marginTop: "16px" }}>
              Ответ обычно в течение 24 часов. Консультация проходит онлайн.
            </p>
          </div>
        )}

        {/* ════ SCREENS 1–5 — Questions ════ */}
        {screen >= 1 && screen <= 5 && (
          <div style={anim}>
            {/* Header row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span style={{ color: C.gold, fontSize: "12px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>
                {questions[screen - 1].subtitle}
              </span>
              <span style={{ color: C.textFaint, fontSize: "13px", fontWeight: 600 }}>
                {screen} / 5
              </span>
            </div>

            {/* Gold step-bar */}
            <div style={{ display: "flex", gap: "6px", marginBottom: "28px" }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{
                  height: "3px", flex: 1, borderRadius: "2px",
                  background: i <= screen ? C.gold : "rgba(255,255,255,0.08)",
                  transition: "background 0.4s",
                }} />
              ))}
            </div>

            <h2 style={{
              ...serifFont, color: C.textMain,
              fontSize: "clamp(19px, 3.5vw, 26px)", fontWeight: 700,
              margin: "0 0 28px", lineHeight: 1.35, letterSpacing: "-0.2px",
            }}>
              {questions[screen - 1].title}
            </h2>

            {/* Answer options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {questions[screen - 1].options.map((opt, idx) => {
                const sel = selected === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelected(idx)}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "16px 18px", minHeight: "60px",
                      background: sel ? C.goldDim : C.navyCard,
                      border: `1px solid ${sel ? C.gold : C.border}`,
                      borderRadius: "12px", cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: sel ? `0 0 0 1px ${C.goldBorder}, 0 4px 20px rgba(212,146,42,0.12)` : "none",
                    }}
                    onMouseEnter={e => { if (!sel) e.currentTarget.style.borderColor = C.borderHover; }}
                    onMouseLeave={e => { if (!sel) e.currentTarget.style.borderColor = C.border; }}
                  >
                    <span style={{ fontSize: "20px", lineHeight: 1, flexShrink: 0, width: "28px", textAlign: "center" }}>{opt.icon}</span>

                    <div style={{ flex: 1 }}>
                      <span style={{ color: C.textMain, fontSize: "15px", fontWeight: sel ? 600 : 400, lineHeight: 1.4 }}>
                        {opt.text}
                      </span>
                      {opt.badge && (
                        <span style={{
                          display: "inline-block", marginLeft: "10px",
                          padding: "2px 9px", borderRadius: "5px",
                          background: opt.badge.bg, border: `1px solid ${opt.badge.color}40`,
                          color: opt.badge.color, fontSize: "11px", fontWeight: 700,
                          verticalAlign: "middle", letterSpacing: "0.3px",
                        }}>
                          {opt.badge.label}
                        </span>
                      )}
                    </div>

                    {/* Radio dot */}
                    <div style={{
                      width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                      border: `2px solid ${sel ? C.gold : "rgba(255,255,255,0.2)"}`,
                      background: sel ? C.gold : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s",
                    }}>
                      {sel && <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#fff" }} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next button — fades in after selection */}
            <div style={{
              opacity: selected !== null ? 1 : 0,
              transform: selected !== null ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.25s, transform 0.25s",
              pointerEvents: selected !== null ? "auto" : "none",
            }}>
              <GoldBtn onClick={handleNext}>
                {screen === 5 ? "Получить результат →" : "Далее →"}
              </GoldBtn>
            </div>
          </div>
        )}

        {/* ════ SCREEN 6 — Analyze / Lead Form ════ */}
        {screen === 6 && (
          <div style={{ paddingTop: "20px" }}>
            {analyzing ? (
              <div style={{ textAlign: "center", paddingTop: "60px" }}>
                <div style={{ ...serifFont, fontSize: "38px", color: C.gold, marginBottom: "8px" }}>✦</div>
                <h2 style={{ ...serifFont, color: C.textMain, fontSize: "24px", fontWeight: 700, marginBottom: "36px" }}>
                  Анализируем ваш профиль...
                </h2>
                <div style={{ maxWidth: "300px", margin: "0 auto" }}>
                  <div style={{ height: "4px", background: "rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden" }}>
                    <div style={{
                      height: "100%", borderRadius: "2px",
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`,
                      transition: "width 0.1s linear",
                      boxShadow: `0 0 10px ${C.gold}`,
                    }} />
                  </div>
                  <div style={{ color: C.textFaint, marginTop: "12px", fontSize: "13px" }}>{Math.round(progress)}%</div>
                </div>
              </div>
            ) : (
              <div style={anim}>
                <div style={{ width: "48px", height: "3px", background: C.gold, borderRadius: "2px", margin: "0 auto 28px" }} />

                <h2 style={{ ...serifFont, textAlign: "center", color: C.textMain, fontSize: "28px", fontWeight: 700, margin: "0 0 10px" }}>
                  Анализ завершён
                </h2>
                <p style={{ textAlign: "center", color: C.textMuted, fontSize: "15px", margin: "0 0 32px" }}>
                  Мы подготовили персональный прогноз:
                </p>

                {/* Locked items */}
                <div style={{ ...card, marginBottom: "28px", padding: "24px" }}>
                  {[
                    "📊 Уровень востребованности вашей ниши в 2026–2030 гг.",
                    "🌍 3 страны, где ваш диплом признают быстрее всего",
                    "✅ Чек-лист: 5 критических ошибок при выборе программы",
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", gap: "12px",
                      padding: i < 2 ? "0 0 14px" : "0",
                      borderBottom: i < 2 ? `1px solid ${C.border}` : "none",
                      marginBottom: i < 2 ? "14px" : "0",
                    }}>
                      <span style={{ fontSize: "18px", opacity: 0.4, flexShrink: 0 }}>🔒</span>
                      <span style={{ color: C.textMuted, fontSize: "14px" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div style={{ marginBottom: "14px" }}>
                  <input
                    type="text"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setEmailErr(""); }}
                    placeholder="Ваш Email / WhatsApp / Telegram"
                    style={{
                      width: "100%", boxSizing: "border-box",
                      padding: "16px 18px",
                      background: C.navyCard,
                      border: `1px solid ${emailErr ? C.coral : C.border}`,
                      borderRadius: "10px", color: C.textMain,
                      fontSize: "15px", outline: "none", ...sansFont,
                      transition: "border-color 0.2s",
                    }}
                    onFocus={e => { e.target.style.borderColor = C.gold; }}
                    onBlur={e => { e.target.style.borderColor = emailErr ? C.coral : C.border; }}
                  />
                  {emailErr && <p style={{ color: C.coral, fontSize: "12px", margin: "6px 0 0 4px" }}>{emailErr}</p>}
                </div>

                <GoldBtn onClick={handleSubmit}>📄 Получить стратегию обучения →</GoldBtn>

                <p style={{ textAlign: "center", color: C.textFaint, fontSize: "12px", marginTop: "14px" }}>
                  Без спама. Только ваш персональный отчёт.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ════ SCREEN 7 — Results ════ */}
        {screen === 7 && (
          <div style={anim}>
            <div style={{ width: "48px", height: "3px", background: C.gold, borderRadius: "2px", margin: "0 auto 32px" }} />

            {/* Result tier badge */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <span style={{
                display: "inline-block", padding: "8px 22px",
                background: result.bg, border: `1px solid ${result.border}`,
                borderRadius: "50px", fontSize: "14px", fontWeight: 700,
                color: result.color, letterSpacing: "0.3px",
              }}>
                ● {result.tier}
              </span>
            </div>

            <h2 style={{ ...serifFont, textAlign: "center", color: C.textMain, fontSize: "clamp(19px, 3.5vw, 26px)", fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>
              {result.headline}
            </h2>
            <p style={{ textAlign: "center", color: C.textFaint, fontSize: "13px", marginBottom: "32px" }}>
              Итоговый балл: <span style={{ color: result.color, fontWeight: 700 }}>{score as number}</span> из 12
            </p>

            {/* Personalized comment */}
            <div style={{ ...card, marginBottom: "12px", borderLeft: `3px solid ${C.gold}`, paddingLeft: "28px" }}>
              <div style={{ color: C.gold, fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "10px" }}>
                Персональный комментарий
              </div>
              <p style={{ color: C.textMuted, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
                {fieldComments[q2idx] ?? "Ваш профиль требует индивидуального анализа для точного прогноза."}
              </p>
            </div>

            {/* Next steps */}
            <div style={{ ...card, marginBottom: "28px" }}>
              <div style={{ color: C.gold, fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: "16px" }}>
                Следующие шаги
              </div>
              {[
                "Получить ваш персональный PDF-отчёт на почту",
                "Обсудить стратегию на бесплатной 30-минутной консультации",
                "Получить список программ, соответствующих вашему профилю",
              ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: i < 2 ? "12px" : 0 }}>
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "50%",
                    background: C.goldDim, border: `1px solid ${C.goldBorder}`,
                    color: C.gold, fontSize: "11px", fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, marginTop: "1px",
                  }}>
                    {i + 1}
                  </div>
                  <span style={{ color: C.textMuted, fontSize: "14px", lineHeight: 1.5 }}>{step}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <a href="https://calendly.com/daria-motovi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", width: "100%" }}>
              <GoldBtn
                style={{ marginBottom: "12px" }}
              >
                📅 Записаться на бесплатную консультацию →
              </GoldBtn>
            </a>

            {/* Restart */}
            <button
              onClick={restart}
              style={{
                width: "100%", padding: "14px",
                background: "transparent",
                border: `1px solid ${C.border}`,
                borderRadius: "10px", color: C.textFaint,
                fontSize: "14px", fontWeight: 600, cursor: "pointer",
                ...sansFont, transition: "all 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = C.borderHover; e.currentTarget.style.color = C.textMuted; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.textFaint; }}
            >
              Пройти тест заново
            </button>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;600;700&display=swap');
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { margin: 0; }
        input::placeholder { color: rgba(238,233,222,0.3); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(212,146,42,0.3); border-radius: 2px; }
      `}</style>
    </div>
  );
}
