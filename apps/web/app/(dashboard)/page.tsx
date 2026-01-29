"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation } from "convex/react";
export default function Page() {
  const addUser = useMutation(api.users.addUser);

  return (
    <>
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <p>App/Hello World</p>
          <UserButton />
          <OrganizationSwitcher hidePersonal={true} />
          <Button onClick={() => addUser()}>Add User</Button>
        </div>
      </div>
    </>
  );
}
