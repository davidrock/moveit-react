import { CompletedChallenges } from './components/completed-challenges/CompletedChallenges';
import { Countdown } from './components/countdown/Countdown';

import { ExperienceBar } from './components/experience-bar/ExperienceBar';
import { Profile } from './components/profile/Profile';

import Head from 'next/head';

export default function Home() {
  return (
    <div className="container flex flex-col px-8 pt-10 mx-auto my-0">
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <ExperienceBar />
      <section className="grid content-center h-screen grid-cols-2 gap-24">
        <div className="">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className="">
          <Profile />
          <CompletedChallenges />
        </div>
      </section>
    </div>
  );
}
 