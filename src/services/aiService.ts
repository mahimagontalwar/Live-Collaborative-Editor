export const getAIEdit = async (text: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${text} [Edited by AI]`), 1000);
  });
};
