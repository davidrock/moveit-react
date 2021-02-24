import Head from 'next/head';
import { ExperienceBar } from './components/ExperienceBar';

export default function Home() {
  return (
    <div className="container mx-auto pt-10 px-8 flex flex-col">
      <ExperienceBar />
    </div>
  );
}
