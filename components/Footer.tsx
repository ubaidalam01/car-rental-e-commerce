import React from "react";

function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <h1 className="text-3xl text-[#3563E9] font-bold mb-4 self-start">
            MORENT
          </h1>
          <div className="mt-6">
            <p className="text-gray-600 leading-relaxed text-sm">
              Our vision is to provide convenience
              <br /> and help increase your sales business.
            </p>
          </div>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
            About
          </h4>

          <ul className="mt-6 space-y-4">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                How it works
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Featured
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Partnership
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Bussiness Relation
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
            Comunity
          </h4>
          <ul className="space-y-4 mt-6">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="https://blog-web-01.vercel.app"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Podcast
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Invite a friend
              </a>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">
            Socials
          </h4>

          <ul className="space-y-4 mt-6">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-10 mb-6 border-gray-300" />

      <div className="flex justify-between max-md:flex-col max-md:items-start">
        <p className="text-gray-600 font-bold text-sm">
          ©2022 MORENT. All rights reserved
        </p>
        <ul className="flex space-x-14 max-md:space-x-0 max-md:space-y-2 max-md:mt-4">
          <li>
            <a
              href="javascript:void(0)"
              className="hover:text-gray-800 font-bold text-gray-600 text-sm"
            >
              Privacy & Policy
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className="hover:text-gray-800 font-bold text-gray-600 text-sm"
            >
              Terms & Condition
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
