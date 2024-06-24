"use client"
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { IconButton, Spinner } from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';
import axios from 'axios';

export interface Message {
  text: string;
  isUser: boolean;
}

const Chatbot: React.FC = () => {
    const [lastMessageTime, setLastMessageTime] = useState<number>(0);
    const [isRateLimited, setIsRateLimited] = useState<boolean>(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today? Ask me anything about NexaDB's careers?", isUser: false }
  ]);
  const [userInput, setUserInput] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastMessageTime < 3000) { // 3000 milliseconds = 3 seconds
      setIsRateLimited(true);
      setTimeout(() => setIsRateLimited(false), 3000 - (currentTime - lastMessageTime));
      return;
    }
    setIsRateLimited(false);
    setLastMessageTime(currentTime);

    const userMessage = userInput.trim();
    if (!userMessage) return;
    const newMessages = [...messages, { text: userMessage, isUser: true }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/chatbot', {
        messages: newMessages,
      });

      const data = response.data;
      const aiMessage: Message = {
        text: data,
        isUser: false,
      };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error('Failed to send message: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            width: 400,
            height: 500
          }}
          className="relative bg-purple-600 text-white rounded-lg shadow-lg flex flex-col"
        >
          <button onClick={toggleChat} className="absolute top-2 right-2 text-gray-100">
            ✕
          </button>
          <div className="flex-grow p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                {!msg.isUser && (
                  <div className="flex-shrink-0 mr-2">
                    <div className="bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center">
                      🤖
                    </div>
                  </div>
                )}
                <div className={`max-w-xs rounded-lg p-2 ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {!msg.isUser && <div className="text-sm font-semibold">Career Bot</div>}
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="my-2 flex justify-start">
                <div className="flex-shrink-0 mr-2">
                  <div className="bg-purple-800 rounded-full w-8 h-8 flex items-center justify-center">
                    🤖
                  </div>
                </div>
                <div className="max-w-xs rounded-lg p-2 bg-gray-200 text-black flex items-center">
                  <Spinner size="sm" color="purple.500" />
                  <span className="ml-2">Typing...</span>
                </div>
              </div>
            )}
          </div>
          <div className="p-2 border-t border-purple-700 flex gap-1 items-center">
          <textarea
            value={userInput}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleUserInput(e)}
            onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => handleKeyPress(e)}
            className="flex-grow p-2 border rounded text-black"
            placeholder="Type a message..."
            rows={1}
            />
        <IconButton
            colorScheme="purple"
            aria-label='Send'
            onClick={sendMessage}
            icon={<MdSend />}
            isDisabled={isRateLimited || isLoading}
        />
          </div>
        </motion.div>
      ) : (
        <motion.button
          onClick={toggleChat}
          className="p-3 bg-purple-600 w-20 h-20 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <span className="text-4xl">💬</span>
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
