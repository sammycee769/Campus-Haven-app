// MessagePage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

export default function MessagePage() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'tenant', content: 'Hello, is the apartment still available?', timestamp: '10:00 AM' },
    { id: 2, sender: 'landlord', content: 'Yes, it is. Would you like a tour?', timestamp: '10:02 AM' },
  ]);

  const handleSend = () => {
    if (input.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      sender: 'tenant',
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b">
        <button onClick={() => navigate(-1)} className="text-blue-600">← Back</button>
        <h2 className="text-lg font-semibold">Chat with Mr. Raji Adegoke</h2>
        <div></div>
      </div>

      {/* Message Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.map(msg => (
          <div key={msg.id} className={`max-w-xs px-3 py-2 rounded-lg text-sm ${msg.sender === 'tenant' ? 'ml-auto bg-blue-500 text-white' : 'mr-auto bg-gray-200 text-black'}`}>
            <p>{msg.content}</p>
            <p className="text-xs text-right mt-1 opacity-70">{msg.timestamp}</p>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="border-t p-2 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-l-md outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          <FiSend />
        </button>
      </div>
    </div>
  );
}
