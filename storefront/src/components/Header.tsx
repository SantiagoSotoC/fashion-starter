"use client"

// External components
import * as React from "react"
import { usePathname } from "next/navigation"
import { twJoin } from "tailwind-merge"
import { Popover, Select } from "react-aria-components"

// Modules
import LocalizedClientLink from "@modules/common/components/localized-client-link"

// Components
import { Button, Drawer, Icon, Input, Layout, LayoutColumn, Link } from "./"

// Components
import {
  UiSelectButton,
  UiSelectIcon,
  UiSelectListBox,
  UiSelectListBoxItem,
  UiSelectValue,
} from "@/components/ui/Select"

export function Header() {
  const pathName = usePathname()

  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div
      className={twJoin(
        "top-0 left-0 w-full max-md:bg-grayscale-50 fixed max-md:px-8",
        (pathName === "/cutup" ||
          pathName === "/cutup/about" ||
          pathName === "/cutup/inspiration" ||
          pathName === "/cutup/collection") &&
          "md:text-white",
        pathName === "/cutup/checkout" && "hidden"
      )}
    >
      <Layout>
        <LayoutColumn>
          <div className="flex justify-between items-center h-18 md:h-21">
            <h1 className="font-medium text-md">
              <Link href="/cutup">SofaSocietyCo.</Link>
            </h1>
            <div className="flex items-center gap-8 max-md:hidden">
              <Link href="/cutup/about">About</Link>
              <Link href="/cutup/inspiration">Inspiration</Link>
              <Link href="/cutup/shop">Shop</Link>
            </div>
            <div className="flex items-center gap-3 lg:gap-6 max-md:hidden">
              <Select defaultSelectedKey="hr" className="w-16">
                <UiSelectButton className="bg-transparent border-0 h-auto !gap-0 !p-1 w-full">
                  <UiSelectValue />
                  <UiSelectIcon className="text-current" />
                </UiSelectButton>
                <Popover className="max-w-61 w-full">
                  <UiSelectListBox>
                    <UiSelectListBoxItem id="hr">HR</UiSelectListBoxItem>
                    <UiSelectListBoxItem>Afghanistan</UiSelectListBoxItem>
                    <UiSelectListBoxItem>Albania</UiSelectListBoxItem>
                    <UiSelectListBoxItem>Algeria</UiSelectListBoxItem>
                    <UiSelectListBoxItem>Andorra</UiSelectListBoxItem>
                  </UiSelectListBox>
                </Popover>
              </Select>
              <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  (pathName === "/cutup" ||
                    pathName === "/cutup/about" ||
                    pathName === "/cutup/inspiration" ||
                    pathName === "/cutup/collection") &&
                    "md:text-white"
                )}
              >
                <Icon name="search" className="w-5 h-5" />
              </Button>
              {/* <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  pathNameParts.length < 2 && "md:text-white"
                )}
              >
                <Icon name="user" className="w-6 h-6" />
              </Button> */}
              <LocalizedClientLink href="/cart">
                <Button
                  variant="ghost"
                  className={twJoin(
                    "p-1",
                    (pathName === "/cutup" ||
                      pathName === "/cutup/about" ||
                      pathName === "/cutup/inspiration" ||
                      pathName === "/cutup/collection") &&
                      "md:text-white"
                  )}
                >
                  <Icon name="case" className="w-6 h-6" />
                </Button>
              </LocalizedClientLink>
            </div>
            <div className="flex items-center gap-7 md:hidden">
              <LocalizedClientLink href="/cart">
                <Button
                  variant="ghost"
                  className={twJoin(
                    "p-1",
                    (pathName === "/cutup" ||
                      pathName === "/cutup/about" ||
                      pathName === "/cutup/inspiration" ||
                      pathName === "/cutup/collection") &&
                      "md:text-white"
                  )}
                >
                  <Icon name="case" className="w-6 h-6" />
                </Button>
              </LocalizedClientLink>
              <Button
                variant="ghost"
                className={twJoin(
                  "p-1",
                  (pathName === "/cutup" ||
                    pathName === "/cutup/about" ||
                    pathName === "/cutup/inspiration" ||
                    pathName === "/cutup/collection") &&
                    "md:text-white"
                )}
                onClick={() => setIsMenuOpen(true)}
              >
                <Icon name="menu" className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </LayoutColumn>
      </Layout>
      <Drawer
        isOpened={isMenuOpen}
        onCloseClick={() => setIsMenuOpen(false)}
        onBackdropClick={() => setIsMenuOpen(false)}
      >
        <div className="flex flex-col text-white h-full">
          <div className="flex items-center pb-6 mb-8 pt-5 w-full border-b border-white px-8">
            <Button
              variant="ghost"
              className="text-white p-1"
              onClick={() => setIsMenuOpen(true)}
            >
              <Icon name="search" className="w-6 h-6" />
            </Button>
            <Input placeholder="Search" className="h-auto bg-black px-1" />
          </div>
          <div className="text-lg flex flex-col gap-8 font-medium px-8">
            <Link href="/cutup/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/cutup/inspiration"
              onClick={() => setIsMenuOpen(false)}
            >
              Inspiration
            </Link>
            <Link href="/cutup/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </div>
          <Select defaultSelectedKey="hr" className="mt-auto ml-8 mb-8">
            <UiSelectButton className="bg-transparent border-0 max-md:text-base gap-2 p-1 w-auto">
              <UiSelectValue />
              <UiSelectIcon className="text-current w-6 h-6" />
            </UiSelectButton>
            <Popover className="max-w-61 w-full">
              <UiSelectListBox>
                <UiSelectListBoxItem id="hr">HR</UiSelectListBoxItem>
                <UiSelectListBoxItem>Afghanistan</UiSelectListBoxItem>
                <UiSelectListBoxItem>Albania</UiSelectListBoxItem>
                <UiSelectListBoxItem>Algeria</UiSelectListBoxItem>
                <UiSelectListBoxItem>Andorra</UiSelectListBoxItem>
              </UiSelectListBox>
            </Popover>
          </Select>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
