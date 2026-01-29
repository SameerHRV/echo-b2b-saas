"use client";

import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
export default function Page() {
  const users = useQuery(api.users.getManyUsers);
  const addUser = useMutation(api.users.addUser);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <p>App/Hello World</p>
        <Button onClick={() => addUser()}>Add User</Button>
        <div className="max-w-sm w-full mx-auto gap-y-4">
          {JSON.stringify(users, null, 2)}
        </div>
      </div>
    </div>
  );
}
