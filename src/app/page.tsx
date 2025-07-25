"use client";
import Splash from "@/components/Splash";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home () {
  const router = useRouter();
  useEffect( () => {
    const timer = setTimeout( () => {
      router.push( "/welcome" );
    }, 5000 );
    return () => clearTimeout( timer );
  }, [ router ] );

  return (
    <div className="bg-black w-full h-screen flex items-center justify-center">

      <div className="w-full h-full flex items-center justify-center">
        <Splash />
      </div>

    </div>
  );
}