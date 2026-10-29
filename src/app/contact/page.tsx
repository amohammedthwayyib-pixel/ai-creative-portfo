import type { Metadata } from "next";
import { Contact } from "@/components/Sections";
export const metadata: Metadata = { title: "Contact" };
export default function Page() {
  return <main className="pt-16"><Contact /></main>;
}
