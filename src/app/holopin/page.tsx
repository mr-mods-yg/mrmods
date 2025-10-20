import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <section className="w-full max-w-2xl mb-16">
        <Link className="text-lg underline" href={"/"}>Go back</Link>
        <h3 className="text-3xl md:text-4xl mt-5 font-bold tracking-tight">Holopin Badges</h3>
        <h3 className="text-sm md:text-base my-5 tracking-tight">Here are some of my Holopin badges that I have earned.</h3>

        <div className="w-full aspect-[3.08/1] relative">
          <Image
            src="/holopin.png"
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h3 className="text-sm md:text-base my-5 tracking-tight">I earned most of these badges by contributing during the Hacktoberfest 2023 by submitting 4 validated pull requests to GitHub repositories,
          improving codebases, and enhancing project functionality.</h3>

      </section>

    </main>
  );
}
