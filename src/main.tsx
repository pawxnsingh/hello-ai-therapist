
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.tsx'
import './index.css'

// Get the Clerk publishable key from the environment
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Check if the key is provided
if (!publishableKey) {
  console.error("Missing Clerk Publishable Key. Set VITE_CLERK_PUBLISHABLE_KEY environment variable.");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider publishableKey={publishableKey || ""}>
    <App />
  </ClerkProvider>
);
