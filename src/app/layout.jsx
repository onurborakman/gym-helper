import { ContextDataProvider } from "./context"
export const metadata = {
  title: 'Gym Helpert: The free tool to help with your gym journey',
  description: 'Gym Helpert is an online tool that provides assistance to those that want to know which muscles are the best work out and how much to lift.',
  keywords: 'Gym, gym, helper, helpert, Helper, Helpert, Jim, Halpert, Weight, weight, weightlifting, Weightlifting, Pounds, pounds, kilograms, Kilograms, KG, kg, Kg, Lbs, LBS, lbs, sore, muscles, muscle, Muscle, Muscles, Sore, journey, Journey, tool, Tool, free, Free, FREE, free tool, Free Tool, online, Online, calculator, Calculator, lift, Lift, how much, assistance, Assistance, work out, workout, Workout, work, Work',
  robots: 'index, follow',
  language: 'English'
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
