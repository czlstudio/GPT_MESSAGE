import request from 'axios'

export function sendMessage(message: string) {
  return request({
    url: 'https://api.openai.com/v1/chat/completions',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_CHATGPT_KEY}`,
    },
    data: {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
    },
  })
}
