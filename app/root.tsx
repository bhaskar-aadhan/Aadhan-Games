import React from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";
import { LinksFunction } from '@remix-run/cloudflare';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "icon", href: '/favicon.svg' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            // staleTime: 2000,
          },
        },
      }),
  )
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="stylesheet" href="https://use.typekit.net/kqs3lto.css"></link>
      </head>
      <body
        style={{
          backgroundPosition: "cover",
          overflow: ['/terms', '/test']?.includes?.(location.pathname) ? 'auto' : 'hidden',
          // background: 'linear-gradient(to right, #001357, #36003A) no-repeat center center',
          // overflow: 'auto'
        }}
        className="font_proximanova"
      >
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "b177480361274c029fe043a7ae993596"}'></script>
        <QueryClientProvider client={queryClient}>
          <NextUIProvider>
            {children}
          </NextUIProvider>
          <ScrollRestoration />
          <Scripts />
        </QueryClientProvider>
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation()
  const navbarTag = getNavbarTag(location.pathname);
  return (
    <div
      style={{
        height: "100dvh",
        overflow: ['/terms', '/test']?.includes?.(location.pathname) ? 'auto' : 'hidden',
        // overflow: 'auto',
      }}
      className="outlet_container w-full h-full relative"
    >
      <div className="header_container w-full h-full">
        <div className="flex_center gap-[1rem] w-full h-full py-[2rem]">
          <div className="aadhan__nav_logo w-[45px]">
            <img src="/favicon.svg" alt="aadhan" className="w-full rounded-lg" />
          </div>
          <div className="h-[70%] border-[1px] border-gray-300"></div>
          <div className="font_spacegrotesk text-[1.55rem] font-bold">{navbarTag?.toUpperCase()}</div>
        </div>
      </div>
      <div className="main_container w-full h-full">
        <Outlet />
      </div>
    </div>
  )
}

const getNavbarTag = (data: any) => {
  switch (data) {
    case '/sudoko':
      return 'Sudoko';
    case '/spelling-bee':
      return 'Spelling Bee';
    case '/dotrush':
      return 'Dot Rush';
    case '/2048':
      return '2048';
    case '/bubbleshooter':
      return 'Bubble Shooter';
    case '/lineupdots':
      return 'Line Up Dots';
    case '/cosmoslines':
      return 'Cosmos Lines';
    default:
      return 'Games'
  }
}