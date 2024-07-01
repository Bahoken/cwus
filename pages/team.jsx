import React from 'react';
import "../styles/globals.css";
import TeamMember from '@/components/TeamMember';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { teamMembers } from '@/public/data/team';
export default function team() {
  return (
    <>
      <Header />
      <TeamMember data={teamMembers} />
      <Footer />
    </>
  )
}
