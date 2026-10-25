
import { Box } from "@mui/material";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{scrollBehavior: 'smooth',margin: 0,padding: 0}}>
      <body style={{scrollBehavior: 'smooth',margin: 1,padding: 0}}>
        <Box >
          {children}
        </Box>
      </body>
    </html>
  );
}
