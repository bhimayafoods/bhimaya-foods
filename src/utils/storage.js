/**
 * Safely stringifies an object for storage, stripping large base64 strings
 * if they are likely to cause QuotaExceededError.
 */
export const safeStringify = (data) => {
  if (!data) return JSON.stringify(data);

  // Deep clone to avoid modifying original state
  const cleanData = JSON.parse(JSON.stringify(data));

  const stripImages = (obj) => {
    if (Array.isArray(obj)) {
      obj.forEach(stripImages);
    } else if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (key === 'image' && typeof obj[key] === 'string' && obj[key].length > 10000) {
          // If the image is a large string (base64 usually), strip it for storage
          obj[key] = ""; 
        } else {
          stripImages(obj[key]);
        }
      }
    }
  };

  stripImages(cleanData);
  return JSON.stringify(cleanData);
};

export const safeLocalStorageSet = (key, value) => {
  try {
    const stringified = typeof value === 'string' ? value : safeStringify(value);
    localStorage.setItem(key, stringified);
  } catch (e) {
    console.warn(`SafeStorage: localStorage fail for ${key}`, e);
    // If it still fails, try clearing and setting (extreme measure)
    if (e.name === 'QuotaExceededError') {
       // Just fail silently to prevent crash
    }
  }
};

export const safeSessionStorageSet = (key, value) => {
  try {
    const stringified = typeof value === 'string' ? value : safeStringify(value);
    sessionStorage.setItem(key, stringified);
  } catch (e) {
    console.warn(`SafeStorage: sessionStorage fail for ${key}`, e);
  }
};
