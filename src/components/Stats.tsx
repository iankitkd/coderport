import { IconType } from "react-icons";
import { FaLaptopCode, FaTrophy } from "react-icons/fa";

import { StatsInterface } from "@/types";

export default function Stats({stats}: {stats: StatsInterface}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mb-6">
      <StatCard
        title="Total Questions"
        value={stats.totalSolved}
        Icon={FaLaptopCode}
      />
      <StatCard
        title="Contests"
        value={stats.contests}
        Icon={FaTrophy}
      />
      {/* <StatCard
        title="Active Days"
        value={stats.activeDays}
        Icon={FaCalendar}
      /> */}
    </div>
  );
}

const StatCard = ({
  title,
  value,
  Icon,
}: {
  title: string;
  value?: number;
  Icon: IconType;
}) => {

  return (
    <div className="bg-white rounded-xl shadow py-8 px-4 flex items-center hover:scale-[1.03] transition-all duration-300">
      <div className="text-2xl mr-3"><Icon /></div>
      <div className="w-full flex items-center justify-between">
        <div className="text-xl text-gray-600 font-medium">{title}</div>
        <div className="text-3xl font-bold text-gray-800">{value ?? "-"}</div>
      </div>
    </div>
  );
};
