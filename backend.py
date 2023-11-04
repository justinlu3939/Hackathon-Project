import openai

api_key = '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'  # Replace with your actual API key
prompt = 'Translate the following English text to French: "Hello, how are you?"'

response = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=50,
    api_key=api_key
)

generated_text = response.choices[0].text
print(generated_text)
