import { IconType } from "react-icons";
import { FaLaptopCode, FaTrophy } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

import { StatsInterface } from "@/types";

export default function StatsSection({stats}: {stats: StatsInterface}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mb-6 md:max-w-md lg:max-w-full">
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
        label="Total active days on codeforces"
      /> */}
    </div>
  );
}

const StatCard = ({
  title,
  value,
  Icon,
  label,
}: {
  title: string;
  value?: number;
  Icon: IconType;
  label?: string;
}) => {

  return (
    <div className="bg-white rounded-xl shadow py-8 px-4 flex items-center hover:scale-[1.03] transition-all duration-300 relative">
      <div className="text-2xl mr-3"><Icon /></div>
      <div className="w-full flex items-center justify-between">
        <div className="text-xl text-gray-600 font-medium">{title}</div>
        <div className="text-3xl font-bold text-gray-800">{value ?? "-"}</div>
      </div>

      {label && (
        <div className="absolute top-1 right-1 group">
          <span><MdInfoOutline size={16} /></span>
          <div className="z-10 absolute top-0 right-4 min-w-50 px-2 py-1 rounded-xl hidden group-hover:block bg-gray-100 text-xs font-light transition-all duration-300">{label}</div>
        </div>
      )}
    </div>
  );
};
