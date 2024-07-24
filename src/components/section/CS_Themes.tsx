import React from "react";
import Image from "next/image";
import { BiSelectMultiple } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiDevices } from "react-icons/bi";

const CS_Themes = () => {
    const LIST_THEMES_PICKS = [
        {
            id: 0,
            imgLink: "/images/theme-img.png",
            label: "Home properties and architecture design web",
            text: "900 People like this theme",
        },
        {
            id: 1,
            imgLink: "/images/theme-img.png",
            label: "Home properties and architecture design web",
            text: "900 People like this theme",
        },
    ];
    return (
        <main className="w-full mt-96">
            <article>
                <h1 className="text-4xl font-semibold text-[#1E1E1E]">
                    Themes Picks
                </h1>
            </article>
            <article className="grid grid-cols-2 justify-items-center pt-10">
                {LIST_THEMES_PICKS.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="w-11/12 flex flex-col items-center"
                        >
                            <Image
                                src={item.imgLink}
                                alt="theme photo"
                                width={500}
                                height={500}
                                className="w-full"
                            />
                            <div className="w-11/12 py-3 flex justify-between">
                                <div>
                                    <h1 className="text-black text-lg font-medium">
                                        {item.label}
                                    </h1>
                                    <p className="text-[#9B9B9B] text-base">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="flex space-x-3">
                                    <span className="flex items-center h-8 p-3 border border-[#CCCCCC] rounded space-x-2">
                                        <h1 className="text-black">select</h1>
                                        <BiSelectMultiple className="text-2xl text-black" />
                                    </span>
                                    <span className="h-8 flex items-center p-2 border border-[#CCCCCC] rounded">
                                        <FaRegHeart className="text-2xl text-black" />
                                    </span>
                                    <span className="h-8 flex items-center p-2 border border-[#CCCCCC] rounded">
                                        <BiDevices className="text-2xl text-black" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </article>
        </main>
    );
};

export default CS_Themes;
