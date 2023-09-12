import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import { authOptions } from "@/lib/auth";

const Dashboard = async ({}) => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  return <pre>{JSON.stringify(session)}</pre>;
};

export default Dashboard;
