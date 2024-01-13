import React from 'react'
import '@/styles/global.scss'
import Layout from '@/components/Layout/Layout'
import Navigation from '@/components/Navigation/Navigation'
import Body from '@/components/Body/Body'

export default function Page() {
  return (
    <Layout>
      <Navigation/>
      <Body/>
    </Layout>
  )
}
