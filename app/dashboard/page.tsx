'use client';

import { Dashboard } from "@/components/Dashboard";
import { SidebarDemo } from "@/components/sidebaractual";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  return (
    <div>
        <SidebarDemo />
    </div>
  );
}
