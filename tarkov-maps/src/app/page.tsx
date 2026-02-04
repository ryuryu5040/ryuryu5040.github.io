import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@/components/buttom"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Button link="/tarkov-maps" label="Tarkov Maps"/>
    </div>
  );
}