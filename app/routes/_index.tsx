import type { MetaFunction } from "@remix-run/cloudflare";
import { GamesList } from '~/components';

export const meta: MetaFunction = () => {
  return [
    { title: "Aadhan | Games" },
    {
      name: "description",
      content: "Welcome to Aadhan Games!",
    },
    {
      property: "og:image",
      content: '/favicon.svg',
      itemsprop: 'image',
    },
    {
      property: "og:title",
      content: 'Aadhan | Games'
    },
    {
      property: "og:description",
      content: 'Welcome to Aadhan Games!'
    },
    {
      property: "og:type",
      content: 'games'
    },
    {
      property: "og:url",
      content: 'https://games.aadhan.in',
    }
  ];
};

export default function Index() {
  return <GamesList />;
}