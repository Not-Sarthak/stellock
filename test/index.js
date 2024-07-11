import sss from "shamirs-secret-sharing";

// Mock Local Storage
const localStorage = new Map();
function storeInLocalStorage(key, value) {
  localStorage.set(key, value);
}
function retrieveFromLocalStorage(key) {
  return localStorage.get(key);
}

// Mock Secure Database
const secureDatabase = new Map();
function storeInDatabase(key, value) {
  secureDatabase.set(key, value);
}
function retrieveFromDatabase(key) {
  return secureDatabase.get(key);
}

// Mock function to generate Part 2 dynamically
function generatePart2(token, shares) {
  return shares[1];
}

// Initialize secret and store shares
function initializeSecret(secret) {
  const secretBuffer = Buffer.from(secret, "utf-8");

  // Split the secret into shares
  const shares = sss.split(secretBuffer, { shares: 3, threshold: 2 });

  // Store Part 1 in local storage
  storeInLocalStorage("share1", shares[0].toString("hex"));

  // Store Part 3 in the secure database
  storeInDatabase("share3", shares[2].toString("hex"));

  console.log("Shares generated and stored.");

  return shares;
}

// Function to reconstruct the key
function reconstructKey(token, shares) {
  // Retrieve Part 1 from local storage
  const share1 = Buffer.from(retrieveFromLocalStorage("share1"), "hex");

  // Generate Part 2 dynamically
  const share2 = generatePart2(token, shares);

  // Retrieve Part 3 from the secure database
  const share3 = Buffer.from(retrieveFromDatabase("share3"), "hex");

  // Combine the shares to retrieve the secret (we only need 2 out of 3 shares)
  const combinedSecret = sss.combine([share1, share2]);

  return combinedSecret.toString("utf-8");
}

// Example usage
const secret = "SBP6XAFYS7BKDADKYLFR2LSSYZU5FSPGTMDCL2OQELTUGO7PM4235GJS";
const shares = initializeSecret(secret);

// Mock token (for demonstration purposes)
const mockToken = "user-social-login-token";

console.log("\nCombined Secret:");
console.log(reconstructKey(mockToken, shares));
