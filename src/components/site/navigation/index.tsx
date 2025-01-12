import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="p-4 flex items-center justify-between relative">
      <aside className="flex items-center gap-2">
        <Image
          src={"/assets/plura-logo.svg"}
          width={40}
          height={40}
          alt="plura logo"
        />

        <span className="text-xl font-bold">Plura.</span>
      </aside>

      <nav className="hidden md:block absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
