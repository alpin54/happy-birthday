import Chrome from "@/components/Chrome";
import Hero from "@/sections/Hero";
import Birthday from "@/sections/Birthday";
import Gallery from "@/sections/Gallery";
import Letter from "@/sections/Letter";
import Reasons from "@/sections/Reasons";
import Future from "@/sections/Future";
import Finale from "@/sections/Finale";

export default function Home() {
  return (
    <Chrome>
      <main>
        <Hero /><Birthday /><Gallery /><Letter /><Reasons /><Future /><Finale />
      </main>
    </Chrome>
  );
}
