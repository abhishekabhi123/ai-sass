import { SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <SignedIn>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Welcome to your dashboard!
          </h2>
          <p className="text-gray-600 mb-6">
            This is a protected route that only authenticated users can access.
          </p>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Your Profile</h3>
            <UserProfile />
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">
            Authentication Required
          </h2>
          <p className="text-yellow-700">
            Please sign in to access this dashboard.
          </p>
        </div>
      </SignedOut>
    </div>
  );
}
