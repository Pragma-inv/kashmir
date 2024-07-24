"use client";
import React from "react";
import { TransparentTabs } from "./$elements/Tabs";
import { DefaultPagination } from "./$elements/Pagination";
const CS_TabsThemes = () => {
    return (
        <main className="w-full">
            <section className="px-10">
                <TransparentTabs />
            </section>
            <section className="w-full flex justify-end px-10 ">
                <DefaultPagination />
            </section>
        </main>
    );
};

export default CS_TabsThemes;
