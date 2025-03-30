export const fetchImage = () => {
    const randomSeed = Math.random().toString(36).substring(7);
    return `https://picsum.photos/seed/${randomSeed}/400/300`;
  };
  