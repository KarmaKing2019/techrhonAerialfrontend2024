import { Descope, useDescope } from "@descope/react-sdk";
import userDashboard from "./UserDashboard";

// Define a component that renders a protected page
export default function ProtectedPage() {
  // Use the useDescope hook to get the user's scopes
  const { scopes } = useDescope();

  // Check if the user has the required scope to access the page
  // For example, let's assume the page requires the scope 'admin'
  if (scopes.includes("admin")) {
    // Render the page content
    return (
      <div>
        <h1>Protected Page</h1>
        <p>This page is only accessible by admins.</p>
      </div>
    );
  } else {
    // Render an error message
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You do not have permission to view this page.</p>
      </div>
    );
  }
}
