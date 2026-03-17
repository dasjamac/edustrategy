import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY not found in .env file")

client = OpenAI(api_key=api_key)

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {
            "role": "user",
            "content": (
                "Come up with 3 creative names for my project: "
                "An AI-powered educational strategy platform that helps teachers "
                "design personalized learning paths for students."
            ),
        }
    ],
)

print(response.choices[0].message.content)
