import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { Results, CTA, Services } from "@/components/Sections";

export default function Home() {
  return <main><Hero /><Work limit={3} filters={false} /><Services /><Results /><CTA /></main>;
}
