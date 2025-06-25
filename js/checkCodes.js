// Obfuscated (base64-encoded) solutions indexed by challenge
const obfuscatedCodes = [
  "MzU5Mg==", // 0 - Lights Out (original: 3592)
  "ODQ3MQ==", // 1 - Spatial Place (original: 8471)
  "MjU3OA==", // 2 - Radio Silence (original: 2578)
  "NjM1OQ==", // 3 - Hero's Journey (original: 6359)
  "OTI2NA==", // 4 - Color's Bind (original: 9264)
  "MTY0Mw=="  // 5 - Giraffe's Bottom (original: 1643)
];

// Decode base64 to original code
function getCorrectCode(index) {
  return atob(obfuscatedCodes[index]);
}

// Check a single code by index and value
function validateCode(index, inputCode) {
  const code = inputCode.trim();
  const correct = getCorrectCode(index);
  return code === correct;
}

// Expose for global use
window.validateCode = validateCode;

// Main function called from the ✔ button
function checkThisCode(index, buttonEl) {
  const input = buttonEl.previousElementSibling;
  const code = input.value.trim();
  const result = validateCode(index, code);

  // Remove old classes
  input.classList.remove('correct', 'incorrect');

  // Add animated feedback
  input.classList.add(result ? 'correct' : 'incorrect');

  // Reset after 1 second
  setTimeout(() => {
    input.classList.remove('correct', 'incorrect');
  }, 1000);
}

// Expose globally
window.checkThisCode = checkThisCode;
