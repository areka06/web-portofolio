import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Areka's Portofolio",
  description: "Modern & Minimalist JS Mastery Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAf5JREFUSEvFVttNA0EM9FQCqQRSBXwSCT6gCaAJ+ACJ8AdVECohVGIy0vrk893e+o6PrBQFso/ZGduzhhxp4Ei4MhtYVU9F5FxE+L0vF98D2PHvMn9V5nYAbE2PYwrYHXY/oRABCE5QG/xtY5fye5vAqvpwIDIF2IoWWa/joipwYflWZLV9ZPRNZmThZOf8WWDbsQawSgGXA38yktmakT3dZVOMywFfJXm4+REA5W6OSljWqRirKuW1BEmDOubcS9l/LSRjN+7FWFVZJmTLwRIZxKaUzEU5nP9+A/hsyhEWRGDPdiCRql6LyEsF5AbAa/YCEZgJRWPYAtj4QxqgtjQN3gEHmQex1UPmZNjgkImpdSEpKDUH3Wbr5hjTj8yBInKZiblnzGw04JX3WFV9EpHbJPAzgLvW2pQs/wV2YeqUzAIvllpVvZLzgEvtLkqu4GZdCFOMC/BUDVfLyTuhz/g0cAJ8UMOhRHveMAs4lBf9eNIyVZX2Sxvm6Dnh1HvMDfyc0PCzL5S7nG8gBoY0ChwksrMGNlqr1ZBQo49NDdg8259dfa0cS/q8f8vn9VwTvkwb5TtrjR0xretkzC2e/H3yojXGPila7jc232wgasBRMh5Otr51jYBU4T2bhK0u0xp3Jta+9GMENEl5QXaelHW0ca/JtaiOl2gf9xwN+A+82vkfpgAl6wAAAABJRU5ErkJggg==" type="image/x-icon"></link>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
