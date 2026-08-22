import { useEffect, useRef, useState } from 'react'
import { personal } from '../data/portfolio'
import { getBotResponse, suggestedQuestions } from '../data/chatbotEngine'

const WELCOME = `Hi! I'm ${personal.name}'s AI assistant. Ask me about his skills, projects, experience, or education.`

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'bot', text: WELCOME, time: new Date() }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, typing])

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((m) => [...m, { role: 'user', text: trimmed, time: new Date() }])
    setInput('')
    setTyping(true)

    // Simulated latency so the typing indicator reads naturally.
    // This runs entirely client-side against local portfolio data —
    // no API key or network request involved, so it can't fail from
    // a service outage. If this were wired to a real AI API, network
    // errors would be caught here and shown as a fallback message.
    setTimeout(() => {
      const reply = getBotResponse(trimmed)
      setMessages((m) => [...m, { role: 'bot', text: reply, time: new Date() }])
      setTyping(false)
    }, 500 + Math.random() * 400)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    send(input)
  }

  const clearChat = () => {
    setMessages([{ role: 'bot', text: WELCOME, time: new Date() }])
  }

  return (
    <div className="chatbot-root">
      {open && (
        <div className="chatbot-panel card" role="dialog" aria-label="AI assistant chat">
          <div className="chatbot-head">
            <div>
              <strong>{personal.name}'s Assistant</strong>
              <span className="chatbot-status">
                <span className="status-dot" aria-hidden="true" /> Online
              </span>
            </div>
            <div className="chatbot-head-actions">
              <button className="btn-ghost" onClick={clearChat} aria-label="Clear chat">
                Clear
              </button>
              <button className="btn-ghost" onClick={() => setOpen(false)} aria-label="Close chat">
                ✕
              </button>
            </div>
          </div>

          <div className="chatbot-messages" ref={listRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble chat-${m.role}`}>
                <p>{m.text}</p>
                <span className="chat-time">{formatTime(m.time)}</span>
              </div>
            ))}
            {typing && (
              <div className="chat-bubble chat-bot chat-typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}
          </div>

          {messages.length <= 1 && (
            <div className="chatbot-suggestions">
              {suggestedQuestions.map((q) => (
                <button key={q} className="tag" onClick={() => send(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <form className="chatbot-input-row" onSubmit={handleSubmit}>
            <label htmlFor="chatbot-input" className="visually-hidden">
              Message
            </label>
            <input
              id="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects…"
            />
            <button type="submit" className="btn btn-primary" disabled={!input.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      <button
        className="chatbot-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
