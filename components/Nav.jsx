import { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export function NavSV() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-2xl">Startsida</a>
            </Link>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden space-x-10 md:flex">
            <Link href="/sv/priser">
              <a className="text-xl text-white">Priser &amp; info</a>
            </Link>
            <Link href="/sv/tider">
              <a className="text-xl text-white">Tider</a>
            </Link>
            <Link href="/sv/om">
              <a className="text-xl text-white">Om lägret</a>
            </Link>
            <Link href="/sv/kontakt">
              <a className="text-xl text-white">Kontakt</a>
            </Link>
            {
              <Link href="/en">
                <a className="text-xl text-white">English</a>
              </Link>
            }
          </nav>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Stäng meny</span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/sv/priser">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Priser &amp; info
                      </span>
                    </a>
                  </Link>
                  <Link href="/sv/tider">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Tider
                      </span>
                    </a>
                  </Link>
                  <Link href="/sv/om">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Om lägret
                      </span>
                    </a>
                  </Link>
                  <Link href="/sv/kontakt">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Kontakt
                      </span>
                    </a>
                  </Link>
                  <Link href="/en">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        English
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

// Engelska

export function NavEN() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/en">
              <a className="text-2xl">Home</a>
            </Link>
          </div>

          <div className="-my-2 -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <nav className="hidden space-x-10 md:flex">
            <Link href="/en/pricing">
              <a className="text-xl text-white">Pricing &amp; info</a>
            </Link>
            <Link href="/en/schedule">
              <a className="text-xl text-white">Schedule</a>
            </Link>
            <Link href="/en/about">
              <a className="text-xl text-white">About</a>
            </Link>
            <Link href="/en/contact">
              <a className="text-xl text-white">Contact</a>
            </Link>
            {
              <Link href="/">
                <a className="text-xl text-white">Svenska</a>
              </Link>
            }
          </nav>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div></div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/en/pricing">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Pricing &amp; info
                      </span>
                    </a>
                  </Link>
                  <Link href="/en/schedule">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Schedule
                      </span>
                    </a>
                  </Link>
                  <Link href="/en/about">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        About
                      </span>
                    </a>
                  </Link>
                  <Link href="/en/contact">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contact
                      </span>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Svenska
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
