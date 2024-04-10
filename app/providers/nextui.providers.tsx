"use client"

import { NextUIProvider } from "@nextui-org/react";
import React, {createContext} from "react";

// const ThemeContext = createContext({})

export default function NextUiProvider({children}: {children: React.ReactNode}){
  return (
       <NextUIProvider>
        {children}
      </NextUIProvider>
  )
}