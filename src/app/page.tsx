import CreateInput from "@/components/create-input";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <div className="w-3/4 mx-auto mt-40">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/2 relative">
              <Image
                src="blob.svg"
                className="absolute -top-3/4 -z-10"
                draggable={false}
                width={500}
                height={500}
                alt="blob"
              />

              <h1 className="font-extrabold text-4xl mt-10">
                Short your boring urls
              </h1>
              <h2 className="font-extrabold text-2xl">
                And never see another long link again
              </h2>

              <Button asChild>
                <Link href="#create" className="mt-4">
                  Get started
                </Link>
              </Button>
            </div>

            <Image
              className="hidden md:block 2xl:w-[500px]"
              src="illustr1.svg"
              alt="illustration"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div
          id="create"
          className="mt-80 2xl:mt-auto w-full h-40 bg-[#18181b] flex flex-col md:flex-row items-center p-10 justify-between"
        >
          <p className="font-bold text-2xl">Make your link short now</p>
          <CreateInput />
        </div>

        <Footer />
      </main>
    </>
  );
}
