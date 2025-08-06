import { ProblemsInterface } from "@/types";

export default function ProblemsCard({
  totalSolved,
  problems,
}: {
  totalSolved: number,
  problems?: ProblemsInterface,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 md:max-w-md lg:w-1/2">
      <div className="flex justify-between items-center gap-2 pb-4">
        <h2 className="text-xl font-semibold">Total Problems Solved</h2>
        <div className="text-2xl font-bold">{totalSolved}</div>
      </div>

      <div className="space-y-4">
        {problems && (
          <>
            {problems.school ? (
              <ProblemBar
                difficulty="school"
                solved={problems.school}
                total={totalSolved}
              />
            ) : null}
            {problems.basic && (
              <ProblemBar
                difficulty="basic"
                solved={problems.basic}
                total={totalSolved}
              />
            )}
            <ProblemBar
              difficulty="easy"
              solved={problems.easy}
              total={totalSolved}
            />
            <ProblemBar
              difficulty="medium"
              solved={problems.medium}
              total={totalSolved}
            />
            <ProblemBar
              difficulty="hard"
              solved={problems.hard}
              total={totalSolved}
            />
          </>
        )}
      </div>
    </div>
  );
}

const ProblemBar = ({
  difficulty,
  solved,
  total,
}: {
  difficulty: string;
  solved: number;
  total: number;
}) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case "school":
        return "bg-blue-300";
      case "basic":
        return "bg-green-300";
      case "easy":
        return "bg-green-500";
      case "medium":
        return "bg-yellow-500";
      case "hard":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  const getDifficultyName = () => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  const percentage = Math.round((solved / total) * 100);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{getDifficultyName()}</span>
        <span className="text-gray-600">
          {solved} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${getDifficultyColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
