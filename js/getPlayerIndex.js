function getPlayerIndex(ip, totalCases) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = (hash << 5) - hash + ip.charCodeAt(i);
    hash |= 0; // Keep it 32-bit
  }
  const index = Math.abs(hash) % totalCases;
  return index;
}
