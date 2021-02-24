import { CompletedChallenges } from './components/completed-challenges/CompletedChallenges';
import { ExperienceBar } from './components/experience-bar/ExperienceBar';
import { Profile } from './components/profile/Profile';

export default function Home() {
  return (
    <div className="container flex flex-col px-8 pt-10 mx-auto my-0">
      <ExperienceBar />
      <section className="grid content-center h-screen grid-cols-2 gap-24">
        <div className="">
          <Profile />
          <CompletedChallenges />
        </div>
        <div className="">
          <Profile />
          <CompletedChallenges />
        </div>
      </section>
    </div>
  );
}
 