/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface NavProps {
  color?: string;
  light?: boolean;
}

export default function Nav({ color, light }: NavProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Disclosure as="nav" className={`${color ? `bg-${color}` : "darkbg"}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex justify-between items-center w-full">
                <div className="flex-shrink-0 ">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                  <a href="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={light ? "toadztoolz.gif" : "toadztoolz-white.gif"}
                      alt="title"
                    />
                    <img
                      className="hidden lg:block h-10 w-auto"
                      src={light ? "toadztoolz.gif" : "toadztoolz-white.gif"}
                      alt="title"
                    />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href="/toolz">
                      <p
                        className={`cursor-pointer text-scratchy  hover:bg-gray-700 ${
                          light
                            ? "text-black hover:text-gray-300"
                            : "text-gray-300 hover:text-white"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Toolz
                      </p>
                    </a>

                    <a
                      href="https://addressform.io/form/toadztoolz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p
                        className={`cursor-pointer text-scratchy  hover:bg-gray-700 ${
                          light
                            ? "text-black hover:text-gray-300"
                            : "text-gray-300 hover:text-white"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Ideaz
                      </p>
                    </a>

                    <a href="/buildz">
                      <p
                        className={`cursor-pointer text-scratchy  hover:bg-gray-700 ${
                          light
                            ? "text-black hover:text-gray-300"
                            : "text-gray-300 hover:text-white"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Buildz
                      </p>
                    </a>

                    <a href="/filez">
                      <p
                        className={`cursor-pointer text-scratchy  hover:bg-gray-700 ${
                          light
                            ? "text-black hover:text-gray-300"
                            : "text-gray-300 hover:text-white"
                        } px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Filez
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              {/*  */}
              {/*  */}
              {/*  */}
              {/*  */}

              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/toolz"
                className={` text-scratchy sm:hover:cursor-pointer   hover:bg-gray-700 ${
                  light
                    ? "text-black hover:text-gray-300"
                    : "text-gray-300 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Toolz
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/ideaz"
                className={` text-scratchy sm:hover:cursor-pointer   hover:bg-gray-700 ${
                  light
                    ? "text-black hover:text-gray-300"
                    : "text-gray-300 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Ideaz
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/buildz"
                className={` text-scratchy sm:hover:cursor-pointer   hover:bg-gray-700 ${
                  light
                    ? "text-black hover:text-gray-300"
                    : "text-gray-300 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Buildz
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/filez"
                className={` text-scratchy sm:hover:cursor-pointer   hover:bg-gray-700 ${
                  light
                    ? "text-black hover:text-gray-300"
                    : "text-gray-300 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                Filez
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
