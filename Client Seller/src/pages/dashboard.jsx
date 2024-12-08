import React from "react";
import { BarChart } from "../components/Dashboard/Barchart";

const Dashboard = () => {
  return (
    <section  className="h-[90vh]">
      <div>
        <h1 className="font-bold text-3xl">Dashboard</h1>

        {/* chart */}
        <div>
          <h1 className="mt-5 font-semibold">Total users </h1>
          <BarChart />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
