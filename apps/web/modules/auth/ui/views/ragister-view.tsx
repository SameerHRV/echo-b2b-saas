import { SignUp } from "@clerk/nextjs";

export const RegisterView = () => {
  return <SignUp routing="hash" />;
};
