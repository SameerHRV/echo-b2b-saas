"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import React from "react";
import { AuthLayout } from "../layouts/auth-layout";
import { LoginView } from "../views/login-view";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>...Loading</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <LoginView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
