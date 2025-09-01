import { PlatformsType, ProblemsInterface } from "@/types";

export default function ProblemsCard({
  platform,
  totalSolved,
  problems,
}: {
  platform: PlatformsType,
  totalSolved: number,
  problems?: ProblemsInterface,
}) {
  return (
    <div className="">
      <div className="flex justify-between items-center gap-2 pb-2">
        <h3 className="text-lg font-semibold">Solved on {platform}</h3>
        <div className="text-xl font-bold">{totalSolved}</div>
      </div>

      <div className="space-y-4 pb-3">
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
        <span className="font-medium text-secondary-foregrounds">{getDifficultyName()}</span>
        <span className="text-tertiary-foreground">
          {solved} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${getDifficultyColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
