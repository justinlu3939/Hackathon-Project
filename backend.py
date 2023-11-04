import openai

api_key = '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'  # Replace with your actual API key

model_engine = "text-davinci-003"
prompt = 'Generate a mad lib.'

response = openai.Completion.create(
    engine=model_engine,
    prompt=prompt,
    max_tokens=1024,
    api_key=api_key
)

generated_text = response.choices[0].text
print(generated_text)
