// ============================================================
//  PASTE YOUR FIREBASE WEB APP CONFIG BELOW (see SETUP.md, step 3)
// ============================================================
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  appId: "PASTE_APP_ID"
};

// Teachers log in with a username; behind the scenes it becomes username@EMAIL_DOMAIN.
// (This is NOT a real email address, nobody receives mail there.)
export const EMAIL_DOMAIN = "alrasheed.school";

// Usernames that have Principal/Coordinator access on admin.html.
// Must match the list inside firestore.rules.
export const ADMIN_USERNAMES = ["admin", "coordinator"];
