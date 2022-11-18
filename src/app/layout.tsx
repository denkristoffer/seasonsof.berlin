import { type ReactNode } from "react";
import "./global.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>The seasons of Berlin</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
