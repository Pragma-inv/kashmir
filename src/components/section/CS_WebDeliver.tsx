import React from "react";
import Image from "next/image";

const CS_WebDeliver = () => {
    const LIST_ARTICLE = [
        {
            id: 0,
            img: "/images/1.png",
            label: "Pilih Tema",
            text: "Pilih paket theme atau bisa custom desain chat ke wa",
        },
        {
            id: 1,
            img: "/images/2.png",
            label: "Isi Form",
            text: "Isi nama mempelai dan info lainya di form yang sudah kami sediakan",
        },
        {
            id: 2,
            img: "/images/3.png",
            label: "Upload Foto",
            text: "Kasih hastag # di foto IG fotonya langsung masuk web. Foto tamu juga di kasih tau ya hastag nya biar ada di web",
        },
        {
            id: 3,
            img: "/images/4.png",
            label: "Udah Beres",
            text: "Nah tingal nungu aja nih kita siapin smua yang udah di request tadi.",
        },
    ];

    const LIST_FEEDBACK = [
        {
            id: 0,
            img: "/images/ava.jpg",
            domicile: "Jakarta",
            name: "Joe Taslim",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 1,
            img: "/images/ava.jpg",
            domicile: "pontianak",
            name: "Albar Kerbek",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 2,
            img: "/images/ava.jpg",
            domicile: "Bandung",
            name: "Albar Rendang",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 3,
            img: "/images/ava.jpg",
            domicile: "Semarang",
            name: "Albar Widodo",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 4,
            img: "/images/ava.jpg",
            domicile: "Padang",
            name: "Albar Novianto",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 5,
            img: "/images/ava.jpg",
            domicile: "Aceh",
            name: "Albar Yuliandra",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 6,
            img: "/images/ava.jpg",
            domicile: "Medan",
            name: "Albar Andromeda",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
        {
            id: 7,
            img: "/images/ava.jpg",
            domicile: "Maumere",
            name: "Albar Herisandi",
            text: "Gampang banget, bikin undangan pernikahan digital cuma perlu daftar dan isi data. Gak sampe 10 menit, jreeng.. langsung jadi dan bisa dibagiin.",
        },
    ];

    return (
        <main className="w-full h-screen mt-20">
            <section className="w-full h-2/3 flex flex-col justify-center">
                <article className="text-center">
                    <h4 className="text-[#007EAE] text-base font-semibold">
                        END-TO-END, WE DELIVER.
                    </h4>
                    <h1 className="text-4xl font-semibold text-[#3F3A3A]">
                        Simple, process
                    </h1>
                </article>
                <article className="grid grid-cols-4 justify-items-center py-24 w-9/12 mx-auto">
                    {LIST_ARTICLE.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center w-72"
                            >
                                <div>
                                    <Image
                                        src={item.img}
                                        alt="image logo"
                                        width={200}
                                        height={200}
                                        className="w-32"
                                    />
                                </div>
                                <div className="text-center space-y-3 pt-4 h-40 w-60 ">
                                    <h1 className="text-xl font-semibold text-[#5C5C5C]">
                                        {item.label}
                                    </h1>
                                    <p className="text-sm text-[#4C4C4C]">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </article>
            </section>
            <section>
                <article className=" overflow-x-scroll no-scrollbar space-x-10 md:flex">
                    {LIST_FEEDBACK.map((item, index) => {
                        return (
                            <div key={index} className="w-96 rounded">
                                <div className="w-96 h-60 p-5 rounded-lg text-white">
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src={item.img}
                                            alt="image"
                                            width={200}
                                            height={200}
                                            className="w-16 rounded-full"
                                        />
                                        <div className="-space-y-1">
                                            <h1 className="text-black font-semibold">
                                                {item.name}
                                            </h1>
                                            <h1 className="text-sm text-gray-300">
                                                {item.domicile}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <p className="text-black text-base font-light">
                                            {item.text}
                                        </p>
                                    </div>
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

export default CS_WebDeliver;
