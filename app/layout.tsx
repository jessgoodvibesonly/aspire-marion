import type { ReactNode } from "react";

export const metadata = {
  title: "Aspire PODS | Marion",
  description: "Aspire PODS overview for Marion",
  icons: {
    icon: "/aspire-pods-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#000000" }}>
        {children}
      </body>
    </html>
  );
}
