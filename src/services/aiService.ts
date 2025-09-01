// Mock AI service
export const getAIEdit = async (text: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text + " (AI Edited)");
    }, 800);
  });
};

export const getAIResponse = async (prompt: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("AI Response: " + prompt);
    }, 1000);
  });
};
