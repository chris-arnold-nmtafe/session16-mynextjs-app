"use client";
import { useState, useEffect } from "react";
import { Image } from "next/image";
import { sculptureList } from "../data/list.js";
import { Link } from "next/link";
import { usePathname } from "next/navigation";

export const runtime = "edge";

function Header({ title }) {
    return <h1 className="title is-4">{title ? title : "Default title"}</h1>;
}

export default function GalleryItem({ sid }) {
    const [sculpture, setSculpture] = useState(null);
    const index = parseInt(sid) - 1;
    const next_ix = ((index + 1) % sculptureList.length) + 1;
    useEffect(() => {
        const item = sculptureList.find(x => x["id"] == index);
        setSculpture(item);
    }, [sid]);
    const nexturl = () => {
        let url = usePathname();
        if (url === undefined || next_ix === undefined) {
            console.warn("undefined url");
        }
        url = url.substring(0, url.lastIndexOf("/") + 1);
        return url + next_ix;
    };
    const nextUrl = nexturl();
    return (
        <div className="box">
            {sculpture ? (
                <>
                    <Header title="New Gallery" />
                    <h2 className="title is-5">
                        <i>{sculpture.name}</i> by {sculpture.artist}
                    </h2>
                    <a href={nexturl()}>Next</a>
                    <h3 className="subtitle is-6">
                        ({sid} of {sculptureList.length})
                    </h3>
                    <Image
                        src={sculpture.url}
                        alt={sculpture.alt}
                        width={400}
                        height={200}
                        blurDataURL={sculpture.blurDataURL || ""}
                    />

                    <p>{sculpture.description}</p>
                </>
            ) : (
                <p>Loading! Or maybe failed, who knows?</p>
            )}
        </div>
    );
}
export { Header };
