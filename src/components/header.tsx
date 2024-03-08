import React from 'react';
import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";

export interface HeaderProps { }

export function Header(props: HeaderProps) {
  const data = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
    { title: "Notes", link: "/notes" },
  ];

  return (
    <>
      <header className="bg-gray-800">
        <div className="container mx-auto py-4 flex justify-between items-center font-bold">
          <section role='main-logo'>
            <Link href="/" className="text-xl normal-case flex justify-between items-center">
              <Image src={logo} height={40} width={40} alt="Logo" />
              <h1 className="text-white text-2xl ml-3">Tools</h1>
            </Link>
          </section>
          <section role='navigation'>
            <ul className="flex">
              {data.map((item, index) => (
                <li className="mr-4" key={index}>
                  <Link href={item.link} className="text-white hover:text-gray-300">{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>
    </>
  )
}
