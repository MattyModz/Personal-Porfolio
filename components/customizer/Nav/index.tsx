"use client";
import { useState } from "react";
import { useGlobalContext } from "../../../Context/status";
export default function Doorpartnav() {
  const [activeTab, setActiveTab] = useState(0);

  // const tabComponents = {
  //   Door: <DoorComponent />,
  //   Ironongery: <IronongeryComponent />,
  // }

  const { setTab } = useGlobalContext();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const tabs = [
    { name: "Door", href: "#" },
    { name: "Ironmongery", href: "#" },
  ];

  const handleTabClick = (tabName, index) => {
    setActiveTab(index);
    setTab(tabName);
  };

  return (
    <div className="">
      <div className=" pb-8 ">
        <div className="border-b  border-gray-200">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab, i) => (
              <div
                key={tab.name}
                onClick={() => handleTabClick(tab.name, i)}
                className={classNames(
                  activeTab === i
                    ? "border-[#FA9D22] text-black dark:text-white"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "w-1/4 border-b-2 py-4 px-1 text-center text-sm font-medium"
                )}
                aria-current={activeTab === i ? "page" : undefined}
              >
                {tab.name}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
