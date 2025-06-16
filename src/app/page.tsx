import LandingPage from "@/components/Dashboard/LandingPage";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "UEP Online Attendance Monitoring",
  description: "A platform for monitoring attendance for events held in UEP online",
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
