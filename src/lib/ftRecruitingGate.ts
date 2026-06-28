const STORAGE_KEY = "ft-recruiting-unlocked";
const PASSWORDS = ["McKinseyRocks", "x"];

export function isFtRecruitingUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function unlockFtRecruiting(password: string): boolean {
  if (!PASSWORDS.includes(password)) return false;
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // sessionStorage unavailable — allow access for this visit only
  }
  return true;
}

export function lockFtRecruiting(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}
