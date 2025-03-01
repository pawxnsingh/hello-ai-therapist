
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pastel-green">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-white shadow-lg rounded-lg",
            headerTitle: "text-mint-green text-xl font-bold",
            headerSubtitle: "text-muted-cyan",
            formButtonPrimary: "bg-mint-green hover:bg-mint-green/90",
            formFieldLabel: "text-muted-cyan",
            formFieldInput: "border-mint-green/30 focus:ring-mint-green/50",
            footerActionLink: "text-mint-green hover:text-mint-green/80"
          },
        }}
      />
    </div>
  );
}
