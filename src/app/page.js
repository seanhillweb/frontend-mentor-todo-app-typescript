import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <div className="container">
      <main className="mx-auto mt-[45px] flex max-w-[540px] flex-col gap-y-8 md:mt-[76px]">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[26px] font-bold uppercase leading-[1.2em] tracking-[0.45em] text-white md:text-[38px]">
            Todo
          </h1>
          <ThemeSwitch />
        </div>
      </main>
    </div>
  );
}
