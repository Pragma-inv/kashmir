import React from "react";
import imageHero from "../../public/images/image-hero.png";
import Image from "next/image";
import CS_Description from "@/components/section/CS_Description";
import CS_Themes from "@/components/section/CS_Themes";
import CS_TabsThemes from "@/components/section/CS_TabsThemes";
import CS_WebDeliver from "@/components/section/CS_WebDeliver";
import CS_PricingSales from "@/components/section/CS_PricingSales";

export default function Home() {
    return (
        <main>
            <section
                className="h-screen w-full overflow-hidden"
                style={{
                    backgroundImage: 'url("/images/bg-hero.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "0px 40%",
                    backgroundPositionX: "center",
                    backgroundPositionY: "center",
                }}
            >
                <div className="h-screen w-full grid grid-cols-2 items-center px-52">
                    <article className="w-11/12 font-semibold">
                        <h1 className="text-6xl tracking-wide leading-tight">
                            Platform Undangan{" "}
                            <span className="font-light italic pr-2">
                                Pernikahan
                            </span>
                            digital
                        </h1>
                        <p className="py-2">
                            Solusi pernikahan lebih hemat, praktis, dan kekinian{" "}
                            <br />
                            dengan e-invitation yang disebar otomatis.
                        </p>
                        <button className="mt-5 py-3 px-5 bg-[#F8F2F2] text-black rounded-full">
                            Buat Sekarang Gratis
                        </button>
                    </article>

                    <article className=" flex justify-center">
                        <Image
                            src={imageHero}
                            alt="image-hero"
                            width={500}
                            height={500}
                            className="w-11/12"
                        />
                    </article>
                </div>
            </section>
            <section className="w-10/12 mx-auto ">
                <CS_Description />
                <CS_Themes />
                <CS_TabsThemes />
                <CS_WebDeliver />
                <CS_PricingSales />
            </section>
        </main>
    );
}
