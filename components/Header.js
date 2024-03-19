"use client"
import React from "react";
import "tailwindcss/tailwind.css";  // Import Tailwind CSS
import Link from 'next/link'

const Page = () => {
  return (
    <><div id="header">
      <h1>Logo</h1>
      <div id="headerp" >
     <div> <Link href="/About" >About</Link></div>
     <div> <Link href="/Carreer" >Carreer</Link></div>
     
     <div> <Link href="/Account" >Account</Link></div>
      </div></div>

    </>
  );
};

export default Page;
