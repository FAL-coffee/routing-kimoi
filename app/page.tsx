import Link from "next/link";
export default function Home() {
  return (
    <div className="flex gap-4 mt-10 mb-5">
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/parallel">Parallel Routeing Demo</Link>
      </div>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="/intercepting">Intercepting Routeing Demo</Link>
      </div>
    </div>
  );
}
