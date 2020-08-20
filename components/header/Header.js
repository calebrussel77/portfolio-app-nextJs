import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full border-b border-gray-400 bg-white py-3 shadow-lg">
      <div className="max-w-2xl w-full flex flex-row space-x-12 justify-center">
        <Link href="/">
          <a className="font-semibold text-gray-700 hover:text-indigo-700 inline-block p-2 border-b hover:border-indigo-700 transition ease-in-out duration-500 border-gray-400 ">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="font-semibold text-gray-700 hover:text-indigo-700 inline-block p-2 border-b hover:border-indigo-700 transition ease-in-out duration-500 border-gray-400 ">
            About me
          </a>
        </Link>
        <Link href="/hireme">
          <a className="font-semibold text-gray-700 hover:text-indigo-700 inline-block p-2 border-b hover:border-indigo-700 transition ease-in-out duration-500 border-gray-400 ">
            Hire me
          </a>
        </Link>
        <Link href="/blog">
          <a className="font-semibold text-gray-700 hover:text-indigo-700 inline-block p-2 border-b hover:border-indigo-700 transition ease-in-out duration-500 border-gray-400 ">
            Blog
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
