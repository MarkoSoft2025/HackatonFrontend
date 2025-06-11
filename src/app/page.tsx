import LandingPage from "@/components/Dashboard/LandingPage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "UEP Online Attendance Mointoring",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <LandingPage />
      </DefaultLayout>
    </>
  );
}
