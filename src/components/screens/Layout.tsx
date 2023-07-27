import * as React from "react";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <main className="min-w-screen min-h-screen p-4 bg-gradient-to-r from-primary to-tertiary flex items-center justify-center text-secondary">
      {children}
    </main>
  );
};

export default Layout;
