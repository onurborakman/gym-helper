import Layout from '@/components/Layout/Layout'
import '@/styles/global.scss'
import About from '@/components/About/About'
import React from 'react'
import Navigation from '@/components/About/Navigation'

export default function AboutPage() {
    return (
        <Layout>
            <Navigation/>
            <About/>
        </Layout>
    )
}
