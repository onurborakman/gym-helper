import Navigation from "@/components/About/Navigation";
import '@/styles/global.scss'
import Layout from "@/components/Layout/Layout";
import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <Navigation/>
            <PrivacyPolicy/>
        </Layout>
    )
}
