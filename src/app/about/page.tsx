import type { Metadata } from "next";
import { About, Experience, Education } from "@/components/Sections";
export const metadata: Metadata = { title: "About" };
export default function Page() {
  return <main className="pt-16"><About /><Experience /><Education /></main>;
}
