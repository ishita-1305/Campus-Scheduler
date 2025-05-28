import React from "react";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-colSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor .</h2>
            <span className="text-xs bg-white rounded-md text-gray-400 px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor consectetur, adipisicing elit. Ea, aliquid.
          </p>
        </div>
        <div className="bg-colPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor .</h2>
            <span className="text-xs bg-white rounded-md text-gray-400 px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            aliquid.
          </p>
        </div>
        <div className="bg-colYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor .</h2>
            <span className="text-xs bg-white rounded-md text-gray-400 px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
            aliquid.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
