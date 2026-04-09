export const metadata = {
  title: 'ClothTheory | Editorial Fashion',
  description: 'ClothTheory - A modern fashion landing page',
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
