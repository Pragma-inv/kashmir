import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { BiSelectMultiple } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";

export function TransparentTabs() {
    const data = [
        {
            label: "Industrial",
            value: "industrial",
            imgLink: "/images/theme-img.png",
            point: "industrial",
            text: "900 People like this theme",
        },
        {
            label: "Package",
            value: "package",
            imgLink: "/images/theme-img.png",
            point: "package",
            text: "900 People like this theme",
        },
        {
            label: "Website Theme",
            value: "website theme",
            imgLink: "/images/theme-img.png",
            point: "website theme",
            text: "900 People like this theme",
        },
        {
            label: "Portofolio",
            value: "portofolio",
            imgLink: "/images/theme-img.png",
            point: "portofolio",
            text: "900 People like this theme",
        },
    ];

    return (
        <main className="w-full">
            <Tabs value="html" className="w-full">
                <section className="flex justify-between items-center pt-20">
                    <div className="w-6/12">
                        <TabsHeader
                            className="bg-transparent py-5 space-x-3"
                            indicatorProps={{
                                className:
                                    "bg-gray-900 shadow-none !text-gray-900",
                            }}
                            {...({} as any)}
                        >
                            {data.map(({ label, value }) => (
                                <Tab
                                    key={value}
                                    value={value}
                                    {...({} as any)}
                                    className="text-[#7A7A7A] hover:bg-[#EAEAEA] rounded transition-all ease-in-out duration-500 h-10"
                                >
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </div>
                    <div className="bg-[#EAEAEA] flex items-center rounded py-2 px-3">
                        <IoIosSearch className="text-[#7C7C7C] text-xl" />
                        <input
                            type="text"
                            className="bg-[#EAEAEA] focus:outline-none text-black px-3"
                        />
                    </div>
                </section>
                <TabsBody {...({} as any)} className="mt-10 mx-10">
                    {data.map(({ value, imgLink, text, point }) => (
                        <TabPanel key={value} value={value}>
                            <div className="w-4/12 flex flex-col items-center">
                                <div
                                    className="w-full h-96 flex justify-end"
                                    style={{
                                        backgroundImage: `url(${imgLink})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                    }}
                                >
                                    <span className=" bg-white h-8 flex items-center p-2 border border-[#CCCCCC] rounded">
                                        <FaRegHeart className="text-2xl text-black" />
                                    </span>
                                </div>
                                <div className="w-11/12 py-3 flex justify-between">
                                    <div>
                                        <h1 className="text-black text-lg font-medium">
                                            {point}
                                        </h1>
                                        <p className="text-[#9B9B9B] text-base">
                                            {text}
                                        </p>
                                    </div>
                                    <div className="flex space-x-3">
                                        <span className="flex items-center h-8 p-3 border border-[#CCCCCC] rounded space-x-2">
                                            <h1 className="text-black">
                                                select
                                            </h1>
                                            <BiSelectMultiple className="text-2xl text-black" />
                                        </span>

                                        <span className="h-8 flex items-center p-2 border border-[#CCCCCC] rounded">
                                            <BiDevices className="text-2xl text-black" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </main>
    );
}
