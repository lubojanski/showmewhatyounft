export const getRandomPosition = (
  maxWidth: number,
  maxHeight: number
): [x: number, y: number, z: number] => {
  const x =
    Math.random() * (maxWidth / 2 - 2) * (Math.round(Math.random()) ? 1 : -1);
  const y =
    Math.random() * (maxHeight / 2 - 2) * (Math.round(Math.random()) ? 1 : -1);

  const z = Math.random() * 2 * (Math.round(Math.random()) ? 1 : -1);
  return [x, y, z];
};
