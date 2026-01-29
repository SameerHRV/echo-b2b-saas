import { SignIn } from "@clerk/nextjs";

export const LoginView = () => {
  return <SignIn routing="hash" />;
};
