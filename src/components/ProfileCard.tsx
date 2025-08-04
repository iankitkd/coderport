import { FaUser } from "react-icons/fa";
import Icon from "./Icon";
import { IconName } from "./Icon/Icons";

export default function ProfileCard({ profile }: { profile: Profile }) {
  const { name, image, username, title, location, social, handles } = profile;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-2">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-full w-24 h-24 mb-2">
          {image ? (
            <img
              src={image}
              alt="User image"
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon name="user" className="w-full h-full p-4" />
          )}
        </div>
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-blue-600">@{username}</p>
      </div>

      <div className="border-y border-gray-200 py-2 flex justify-center space-x-6">
        {Object.entries(social).map(([key, value]) => (
          <a href={value} key={key} target="_blank">
            <Icon name={key as IconName} className="text-gray-800 w-8 h-8 hover:text-blue-500 hover:scale-[1.05] transition-colors" />
          </a>
        ))}
      </div>

      <div className="py-2">
        <p className="text-gray-600">{title}</p>
        <p className="text-gray-500 text-sm mt-1">{location}</p>
      </div>

      <div className="">
        <h3 className="font-semibold text-lg text-gray-700 mb-3">Coding Handles</h3>
        <div className="flex flex-col gap-1">
          {Object.entries(handles).map(([key, value]) => (
            <a href={value} key={key} target="_blank">
              <div className="flex items-center justify-between px-4 py-2 rounded-2xl hover:bg-gray-100 group">
                <div className="flex gap-2">
                  <Icon name={key as IconName} className="text-gray-800 w-8 h-8" />
                  <span className="font-medium text-gray-700">{key}</span>
                </div>

                <Icon name="externalLink" className="text-gray-500 w-4 h-4 group-hover:text-blue-600" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
