// 'use client'
// import { useRouter } from "next/router";
import { useParams, useRouter } from "next/navigation";
import { topics } from "../../api/topics";
import Link from "next/link";

const Learn = ({ params }: { params: { name: string } }) => {
  // const {name} = useParams();
  // const router = useRouter();
  // const { name } = router;
  // console.log('name => ', name);
  console.log("params.name => ", params.name);
  const topic = topics.find((topic) => topic.name === params.name);
  console.log("topic => ", topic);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <button className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Link href="/learn">{"< back "}</Link>
        </button>
      </div>

      <h2 className="text-2xl font-semibold">Learn {topic?.name}</h2>
      <div className="">{topic?.about}</div>
    </main>
  );
};

export default Learn;
