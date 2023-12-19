import { ContextDataProvider } from "./context"
export const metadata = {
  title: 'Gym Helpert',
  description: 'Gym Helpert Gym Tool Application',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <ContextDataProvider>
          {children}
        </ContextDataProvider>
      </body>
    </html>
  )
}
