"use client"
import React, { useState} from "react"
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar"
import {
  IconAugmentedReality,
  IconBrandTabler,
  IconQuestionMark,
  IconUserBolt,
} from "@tabler/icons-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Dashboard } from "./Dashboard"
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/clerk-react"
import {  LogInIcon, LogOutIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Ask a Doubt",
      href: "#",
      icon: <IconQuestionMark className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Take a Quiz",
      href: "#",
      icon: <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
    {
      label: "Generate",
      href: "#",
      icon: <IconAugmentedReality className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
    },
  ]
  const [open, setOpen] = useState(false)
  const { isSignedIn } = useAuth()
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen",
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <div className="mt-8 flex flex-col gap-4">
              {isSignedIn ? (
                <SidebarLink
                  link={{
                    label: "",
                    href: "#",
                    icon: (
                      <AnimatePresence>
                        <motion.div
                          key="user-button"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                        >
                          <UserButton
                            appearance={{
                              elements: {
                                userButtonBox: {
                                  flexDirection: "row-reverse",
                                },
                              },
                            }}
                            showName={open}
                          />
                        </motion.div>
                      </AnimatePresence>
                    ),
                  }}
                />
              ) : (
                <>
                  <SidebarLink
                    link={{
                      label: theme === "dark" ? "Light Mode" : "Dark Mode",
                      href: "#",
                      icon: (
                        <button
                          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                          className=" rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                        >
                          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>
                      ),
                    }}
                  />
                  <SidebarLink
                    link={{
                      label: "Sign in",
                      href: "#",
                      icon: (
                        <button>
                          <SignInButton>
                          <LogOutIcon />
                        </SignInButton>
                        </button>
                      ),
                    }}
                  />
                  <SidebarLink
                    link={{
                      label: "Sign up",
                      href: "#",
                      icon: (
                        <button>
                        <SignUpButton>
                          <LogInIcon />
                        </SignUpButton>
                        </button>
                      ),
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  )
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium whitespace-pre">
        Aitor
      </motion.span>
    </Link>
  )
}

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black dark:text-white py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  )
}

