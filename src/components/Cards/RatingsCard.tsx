import Icon from "../Icon";
import { IconName } from "../Icon/Icons";
import { PlatformRating, PlatformsType } from "@/types";

interface RatingsCardProps {
  selectedPlatform: PlatformsType;
  setSelectedPlatform: (name: PlatformsType) => void;
  ratings: PlatformRating[]
}

export default function RatingsCard({selectedPlatform, setSelectedPlatform, ratings}: RatingsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-full">
      <h2 className="font-semibold text-xl">Contest Ratings</h2>
      <div className="">
        {ratings.map((rating) => (
          <div 
            key={rating.name} 
            className={`grid grid-cols-5 items-center px-2 py-2 rounded-2xl 
              ${selectedPlatform == rating.name ? "bg-gray-200": ""} hover:bg-gray-100 hover:cursor-pointer group`}
            onClick={() => setSelectedPlatform(rating.name)}
          >
            <div className="flex gap-2 col-span-3">
              <Icon name={rating.name as IconName} className="text-gray-800 w-8 h-8" />
              <span className="font-medium text-gray-700">{rating.name}</span>
            </div>

            <div className="flex items-center gap-1 col-span-2">
              <span className="font-bold text-lg">{(rating.rating > 0) ? rating.rating : ""}</span>
              <span className="font-extrabold px-1">{rating.title ? "-": ""}</span>
              <span className={`font-semibold capitalize ${rating.color}`}>{rating.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
