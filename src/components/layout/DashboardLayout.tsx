import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Sidebar
        items={[
          { label: "Dashboard", id: 1 },
          { label: "Members", id: 2 },
          { label: "Organization", id: 3 },
          { label: "Billing", id: 4 },
        ]}
      />
      <main>
        <Topbar title="B2B Admin Dashboard" buttonLabel="Invite Member" />
        {children}
      </main>
    </div>
  );
}
export default DashboardLayout;
