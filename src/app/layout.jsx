import { ContextDataProvider } from "./context"
export const metadata = {
  title: 'Gym Helpert: The free tool to help with your gym journey',
  description: 'Gym Helpert is an online tool that provides assistance to those that want to know which muscles are the best work out and how much to lift.',
  keywords: 'Gym, gym, helper, helpert, Helper, Helpert, Jim, Halpert, Weight, weight, weightlifting, Weightlifting, Pounds, pounds, kilograms, Kilograms, KG, kg, Kg, Lbs, LBS, lbs, sore, muscles, muscle, Muscle, Muscles, Sore, journey, Journey, tool, Tool, free, Free, FREE, free tool, Free Tool, online, Online, calculator, Calculator, lift, Lift, how much, assistance, Assistance, work out, workout, Workout, work, Work, generator, Generator, routine, Routine',
  robots: 'index, follow',
  language: 'English'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link type="image/png" sizes="32x32" rel="icon" href="/icon.png"/>
        <meta property="title" content="Gym Helpert: The free tool to help with your gym journey" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="gym helpert: the free tool to help with your gym journey" />
        <meta property="og:type" content="free online workout tool" />
        <meta property="og:url" content="https://gym-helpert.vercel.app/" />
        <meta property="og:site_name" content="gym-helpert.vercel.app" />
        <meta property="twitter:title" content="Gym Helpert: The free tool to help with your gym journey" />
        <meta property="twitter:description" content="Gym Helpert is an online tool that provides assistance to those that want to know which muscles are the best work out and how much to lift." />
        <meta name="google-site-verification" content="LREylUAj9Tqq7ofSdrtUm-pGdagAShXJcqXITbFc1EY" />
        <meta name="google-adsense-account" content="ca-pub-2781994736547211"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2781994736547211"
     crossorigin="anonymous"></script>
      </head>
      <body>
        <ContextDataProvider>
          {children}
        </ContextDataProvider>
        <footer style={{
          width: '100%',
          borderTop: '2px solid white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <a href='/privacy-policy' style={{
            color: 'white'
          }}>Privacy Policy</a>
        </footer>
      </body>
    </html>
  )
}
