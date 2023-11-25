import React, { PropsWithChildren } from "react";
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-header bg-zinc-100">
      <div>Navbar</div>
      <div className="grid md:grid-cols-sidebar">
        <div>Sidebar</div>
        {children}
      </div>
    </div>
  );
}
