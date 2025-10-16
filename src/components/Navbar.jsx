// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Navbar({ logo, links }) {
  return (
    <header className="bg-white border-b border-gray-200 relative z-50 py-6 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="mx-6 text-3xl font-bold">
          <span className="text-sky-700">Travel</span>Site
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="justify-between">
            <div className="link-container flex items-center">
              {links.map((item) => (
                <NavigationMenuItem key={item.label || item.to}>
                  {item.links ? (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="flex flex-col bg-white p-2">
                          {item.links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              className="px-3 py-2 rounded-md hover:bg-gray-100 transition"
                            >
                              {link.text}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.to}
                      className="px-3 py-2 rounded-md hover:bg-gray-100 transition inline-block"
                    >
                      {item.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </div>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </header>
  );
}
