export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const mockApi = {
  async getNumberOfPros(dayOfMonth: number) {
    await delay(500);
    return dayOfMonth % 5;
  },
};

export default mockApi;
