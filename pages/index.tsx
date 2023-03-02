import CreateInput from "@/components/create-input";
import DashboardButton from "@/components/dashboard-button";

export default function Home() {
  return (
    <>
      <main>
        <div className="mx-auto mt-40 flex flex-col items-center justify-center text-center w-full">
          <h1 className="text-6xl font-extrabold text-center">Shorty</h1>
          <h2 className="text-xl text-center mb-5">Short your boring urls</h2>
          <CreateInput />
          <div className="mt-4">
            <DashboardButton />
          </div>
        </div>
      </main>
    </>
  );
}
