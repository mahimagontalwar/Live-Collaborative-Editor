// Mock agent with web search simulation
export const runAgentTask = async (query: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Agent searched the web and found info about "${query}".`);
    }, 1200);
  });
};
