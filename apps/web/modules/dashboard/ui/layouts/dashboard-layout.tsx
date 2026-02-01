import { AuthGuard } from "@/modules/auth/ui/components/auth-guard";
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { Provider } from "jotai";
import { cookies } from "next/headers";
import React from "react";
import { DashboardSidebar } from "../components/dashboard-sidebar";

export const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <AuthGuard>
      <OrganizationGuard>
        <Provider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <DashboardSidebar />
            <main className="flex flex-col flex-1">{children}</main>
          </SidebarProvider>
        </Provider>
      </OrganizationGuard>
    </AuthGuard>
  );
};
