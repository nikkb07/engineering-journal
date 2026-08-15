export interface ChatResponse {
  answer: string;
  sources?: string[];
}

export async function sendChatMessage(
  sessionId: string,
  question: string
): Promise<ChatResponse> {

  const apiUrl =
    process.env.NEXT_PUBLIC_RAG_API_URL ||
    "http://localhost:8000";

  const response = await fetch(
    `${apiUrl}/chat`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        session_id: sessionId,
        question,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Unable to reach portfolio assistant (${response.status})`
    );
  }

  return response.json();
}