import fs from "fs";
export const cleanupTempFile = (filePath) => {
  try {
    if (filePath) {
      fs.unlinkSync(filePath);
    }
  } catch (error) {
    console.error("Error deleting temporary file:", error.message);
  }
};
