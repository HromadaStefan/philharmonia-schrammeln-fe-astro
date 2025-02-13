import { Carousel } from "flowbite-react";
import { useLayoutEffect, useState } from "react";
import axios from "axios";
import "./carousel.css"
import {useFetchData} from "../services/react/UseFetchData.tsx";

export function HomeCarousel() {
    const { data, loading, error } = useFetchData("carousel"); // Nutze die Hook für den API-Call
    const [active, setActive] = useState(null);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="h-56 sm:h-64 xl:h-[800px] 2xl:h-[800px]">
            <Carousel className="rounded-none">
                {data.data.images.map((post) => (
                    <img
                        key={post.id}
                        src={"http://localhost:1337" + post.formats.large.url}
                        alt="Missing image"
                        className="w-full h-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
    );
}