import React from "react";
import Image from "next/image";
import logoFooter from "../../public/images/logo-footer.png";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <main className="w-full h-[500px] py-5 pt-20 space-y-20">
            <section className="grid grid-cols-3 gap-x-20 w-10/12 mx-auto ">
                <div className="">
                    <Image
                        src={logoFooter}
                        alt="logo-pragma-footer"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex justify-around">
                    <div>
                        <h4 className="text-[#1B1819]">INFORMATION</h4>
                        <ul className="pt-10 space-y-2 text-black">
                            <li>Privacy</li>
                            <li>FAQ</li>
                            <li>Shipping and payment</li>
                            <li>Partners</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[#1B1819]">MENU</h4>
                        <ul className="pt-10 space-y-2 text-black">
                            <li>For a couple</li>
                            <li>For him</li>
                            <li>For her</li>
                        </ul>
                    </div>
                </div>
                <div className=" flex flex-col justify-start items-end">
                    <button className="bg-[#1B1819] text-white py-2 px-10 rounded-xl font-semibold">
                        Request a call
                    </button>
                    <h1 className="text-black pt-4">+1 (999) 999-99-99</h1>
                    <h1 className="text-black">info@logoipsum.com</h1>
                </div>
            </section>
            <section className="grid grid-cols-3 gap-x-20 w-10/12 mx-auto  text-black ">
                <article className="flex space-x-2">
                    <div className="p-3 bg-black rounded-full">
                        <IoPaperPlaneOutline className="text-2xl text-white" />
                    </div>
                    <div className="p-3 bg-black rounded-full">
                        <FaWhatsapp className="text-2xl text-white" />
                    </div>
                </article>
                <article className="font-semibold">
                    <h1>
                        1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
                    </h1>
                </article>
                <article className="flex justify-end space-x-10">
                    <h1 className="text-4xl text-black font-semibold">18+</h1>
                    <h1 className="font-semibold">
                        Scorefor <br /> adults
                    </h1>
                </article>
            </section>
        </main>
    );
};

export default Footer;
