import type { Metadata } from "next";
import { Skills, Workflow, Certifications } from "@/components/Sections";
export const metadata: Metadata = { title: "Skills" };
export default function Page() {
  return <main className="pt-16"><Skills /><Workflow /><Certifications /></main>;
}
