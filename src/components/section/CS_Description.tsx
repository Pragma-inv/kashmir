import React from "react";
import imgArticle from "../../../public/images/image-hero.png";
import Image from "next/image";

const CS_Description = () => {
    const LIST_CARD = [
        {
            id: 0,
            name: "satu",
        },
        {
            id: 1,
            name: "dua",
        },
        {
            id: 2,
            name: "tiga",
        },
        {
            id: 3,
            name: "empat",
        },
        {
            id: 4,
            name: "lima",
        },
        {
            id: 5,
            name: "enam",
        },
        {
            id: 6,
            name: "tujuh",
        },
        {
            id: 0,
            name: "satu",
        },
        {
            id: 1,
            name: "dua",
        },
        {
            id: 2,
            name: "tiga",
        },
        {
            id: 3,
            name: "empat",
        },
        {
            id: 4,
            name: "lima",
        },
        {
            id: 5,
            name: "enam",
        },
        {
            id: 6,
            name: "tujuh",
        },
    ];
    return (
        <main className="w-full h-screen py-24 space-y-20">
            <section className="grid grid-cols-2">
                <article className="">
                    <h1 className="text-4xl font-semibold text-[#343434]">
                        Undangan Digital <br /> Untuk moment spesial
                    </h1>
                    <p className="w-10/12 pt-5 text-base text-[#343434] tracking-wide">
                        Most companies today rely on multiple apps, along with
                        both premise and cloud-based services to help their
                        business run smoothly. However, because apps and
                        platforms are rapidly increasing and evolving, it
                        becomes difficult to streamline technologies which can
                        ultimately prevent a
                    </p>
                </article>
                <article className="flex justify-center">
                    <Image
                        src={imgArticle}
                        alt="image-content"
                        width={500}
                        height={500}
                    />
                </article>
            </section>
            <section>
                <article>
                    <h1 className="w-4/12 text-4xl font-semibold text-[#343434]">
                        <span className="text-[#0054E2] italic">#Pragma</span>{" "}
                        The Committed Long Lasting Love
                    </h1>
                </article>
                <article className="my-10 hidden overflow-x-scroll no-scrollbar space-x-10 md:flex">
                    {LIST_CARD.map((item, index) => {
                        return (
                            <div key={index} className="w-96 h-11/12 rounded">
                                <div className="w-96 h-[60vh] rounded-lg bg-[#B8B8B8] text-white flex justify-center items-center">
                                    <h1 className="">{item.name}</h1>
                                </div>
                            </div>
                        );
                    })}
                    ;
                </article>
            </section>
        </main>
    );
};

export default CS_Description;
