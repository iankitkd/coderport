import { PlatformRating } from "@/types";
import Icon from "./Icon";
import { IconName } from "./Icon/Icons";

export default function RatingsCardr({ratings}: {ratings: PlatformRating[]}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 md:max-w-md">
      <h2 className="font-semibold text-xl">Contest Ratings</h2>
      <div className="">
        {ratings.map((rating, value) => (
          <div key={rating.name} className="flex items-center justify-between px-2 py-2 rounded-2xl hover:bg-gray-100 hover:cursor-pointer group">
            <div className="flex gap-2">
              <Icon name={rating.name as IconName} className="text-gray-800 w-8 h-8" />
              <span className="font-medium text-gray-700">{rating.name}</span>
            </div>

            <div className="font-bold text-lg text-gray-800">{rating.rating}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
