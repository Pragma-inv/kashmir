import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination() {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActive(index),
        } as any);

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <main className="flex items-center gap-4 ">
            <Button
                {...({} as any)}
                variant="text"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4 text-black" />
            </Button>
            <div className="flex items-center gap-2  ">
                <IconButton
                    {...getItemProps(1)}
                    className="text-black w-10 bg-transparent hover:border-2 hover:border-[#009BF7] focus:border-2 focus:border-[#009BF7]"
                >
                    1
                </IconButton>
                <IconButton
                    {...getItemProps(2)}
                    className="text-black w-10 bg-transparent hover:border-2 hover:border-[#009BF7] focus:border-2 focus:border-[#009BF7]"
                >
                    2
                </IconButton>
                <IconButton
                    {...getItemProps(3)}
                    className="text-black w-10 bg-transparent hover:border-2 hover:border-[#009BF7] focus:border-2 focus:border-[#009BF7]"
                >
                    3
                </IconButton>
                <IconButton
                    {...getItemProps(4)}
                    className="text-black w-10 bg-transparent hover:border-2 hover:border-[#009BF7] focus:border-2 focus:border-[#009BF7]"
                >
                    4
                </IconButton>
                <IconButton
                    {...getItemProps(5)}
                    className="text-black w-10 bg-transparent hover:border-2 hover:border-[#009BF7] focus:border-2 focus:border-[#009BF7]"
                >
                    5
                </IconButton>
            </div>
            <Button
                {...({} as any)}
                variant="text"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === 5}
            >
                <ArrowRightIcon
                    strokeWidth={2}
                    className="h-4 w-4 text-black"
                />
            </Button>
        </main>
    );
}
