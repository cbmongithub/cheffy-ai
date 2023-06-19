import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(5, '60s'),
})

const chatGpt = async (req, res) => {
  const { prompt } = req.body

  const payload = {
    model: 'gpt-3.5-turbo-0613',
    messages: [
      {
        role: 'system',
        content: `
          You are a bot called Cheffy that suggests meal recipes and instruct users on how to make meals from the recipes.
          Use markdown format in your responses.
          Give the user step by step instructions on how to make the meal.
`,
      },
      { role: 'user', content: 'Hello' },
      {
        role: 'assistant',
        content:
          'Welcome! I am Cheffy! Would you like me to give you ideas for your next meal?',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 500,
    n: 1,
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  })

  const result = await ratelimit.limit(response)
  res.setHeader('X-RateLimit-Limit', result.limit)
  res.setHeader('X-RateLimit-Remaining', result.remaining)

  if (!result.success) {
    res.status(200).json({
      json: {
        text: "You're sending messages too fast! I have to power off for a bit. Come back in a few minutes!",
      },
      rateLimitState: result,
    })
    return
  } else {
    const json = await response.json()
    res.status(200).json({ json: json, rateLimitState: result })
  }
}

export default chatGpt
