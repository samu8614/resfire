
import React, { useState, useRef, useEffect } from 'react';
import { getFireSafetyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useTranslation } from '../context/LanguageContext';

const Assistant: React.FC = () => {
  const { language, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes
  useEffect(() => {
    setMessages([
      { role: 'model', text: t.assistant.welcome }
    ]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getFireSafetyAdvice(userMsg, language);
      setMessages(prev => [...prev, { role: 'model', text: response || 'Error.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] glass-card rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-orange-500/30">
          <div className="bg-orange-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-robot text-white"></i>
              <span className="text-white font-bold">Resfire Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-stone-900/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-br-none' 
                    : 'bg-stone-800 text-stone-200 rounded-bl-none border border-stone-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-800 p-3 rounded-xl rounded-bl-none animate-pulse text-stone-400 text-xs">
                  {t.assistant.loading}
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-stone-900 border-t border-stone-800 flex space-x-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={t.assistant.placeholder}
              className="flex-grow bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-orange-500"
            />
            <button 
              onClick={handleSend}
              className="bg-orange-600 hover:bg-orange-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-orange-600 hover:bg-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      >
        <i className={`fa-solid ${isOpen ? 'fa-comment-slash' : 'fa-headset'} text-2xl`}></i>
        <span className="absolute -top-2 -left-2 bg-emerald-500 w-4 h-4 rounded-full border-2 border-stone-950"></span>
      </button>
    </div>
  );
};

export default Assistant;
