// app/auth/sign-in/page.tsx
import { LoginForm } from "@/components/login-form";
import { Navbar } from "../components/navbar";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="relative min-h-svh w-full overflow-hidden">
      <Navbar />
      {/* Background elements */}
      <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-green-500/10 blur-[100px]"></div>
      <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>

      {/* Main content */}
      <div className="container relative flex h-svh flex-col items-center justify-center px-6 pt-16">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back
            </h1>
            <p className="text-sm text-gray-400">
              Enter your credentials to access your personalized knowledge hub
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
