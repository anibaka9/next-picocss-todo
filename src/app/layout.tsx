import "@picocss/pico";

export const metadata = {
  title: "Next+Pico Todo",
  description:
    "Simple todo list written in nextjs with typescript and picocss for styles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
