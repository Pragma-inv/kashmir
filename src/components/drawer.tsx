"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Alert,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    InformationCircleIcon,
    ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function SidebarWithBurgerMenu() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = ({ value }: any) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton
                variant="text"
                size="lg"
                onClick={openDrawer}
                {...({} as any)}
            >
                {isDrawerOpen ? (
                    <XMarkIcon className="h-6 w-6 stroke-2 text-black rounded-md " />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-2 text-black rounded-md" />
                )}
            </IconButton>
            <Drawer open={isDrawerOpen} onClose={closeDrawer} {...({} as any)}>
                <Card
                    color="white"
                    shadow={false}
                    className="h-screen w-full p-4"
                    {...({} as any)}
                >
                    {/* <div className=" flex items-center gap-4 -space-x-3 ">
                        <Image
                            src={"/images/logo.png"}
                            width={80}
                            height={80}
                            alt=""
                            className="w-14"
                        />
                        <div className="-space-y-1 pt-2 ">
                            <h1 className="text-black text-sm font-semibold">
                                Cipta Kirana Karya
                            </h1>
                            <h1 className="text-black font-light text-xs">
                                Indonesian Asphalt
                            </h1>
                        </div>
                    </div> */}
                    <List {...({} as any)} className="pt-5 px-5">
                        <ListItem className="p-3" {...({} as any)}>
                            <ListItemPrefix {...({} as any)}>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Link href={"/main/portofolio"} target="_parent">
                                <Typography
                                    {...({} as any)}
                                    color="blue-gray"
                                    className="mr-auto font-normal text-base"
                                >
                                    Track Record
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem {...({} as any)} className="p-3">
                            <ListItemPrefix {...({} as any)}>
                                <InformationCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Link href={"/main/about"} target="_parent">
                                <Typography
                                    {...({} as any)}
                                    color="blue-gray"
                                    className="mr-auto font-normal text-base"
                                >
                                    About Us
                                </Typography>
                            </Link>
                        </ListItem>
                        <ListItem {...({} as any)} className="p-3">
                            <ListItemPrefix {...({} as any)}>
                                <ChatBubbleBottomCenterIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                {...({} as any)}
                                color="blue-gray"
                                className="mr-auto font-normal text-base"
                            >
                                <Link
                                    href={"/assets/price.pdf"}
                                    target="_blank"
                                >
                                    Our Price
                                </Link>
                            </Typography>
                        </ListItem>
                    </List>
                    <Alert open={openAlert} className="mt-auto">
                        <Typography
                            {...({} as any)}
                            variant="h6"
                            className="mb-1"
                        >
                            Our Social Media
                        </Typography>
                        <div className="">
                            <p className="text-white text-xs font-light">
                                Follow us to see developments and information
                                about cipta kirana karya and information about
                                road asphalt.
                            </p>
                        </div>
                        <div className="flex space-x-2 items-center pt-5">
                            <Link
                                href={
                                    "https://www.facebook.com/cipta.k.karya.9?mibextid=ZbWKwL"
                                }
                                target="_blank"
                            >
                                <FaFacebookF className="text-white text-3xl hover:bg-blue-700 w-8 h-8 p-2 rounded-xl cursor-pointer" />
                            </Link>
                            <Link
                                href={
                                    "https://www.instagram.com/ciptakiranakarya/"
                                }
                                target="_blank"
                            >
                                <FaInstagram className="text-white text-3xl hover:bg-[#E1306C] w-8 h-8 p-1 rounded-xl cursor-pointer" />
                            </Link>
                            <MdOutlineEmail className="text-white text-3xl hover:bg-red-600 w-8 h-8p-1 rounded-xl cursor-pointer" />
                        </div>
                    </Alert>
                </Card>
            </Drawer>
        </>
    );
}
