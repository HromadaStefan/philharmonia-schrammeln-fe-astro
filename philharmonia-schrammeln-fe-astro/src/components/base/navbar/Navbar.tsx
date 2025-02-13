import { useState } from "react";
import { Navbar } from "flowbite-react";
import {useFetchData} from "../../services/react/UseFetchData.tsx";

export function SchrammelNavbar() {
    const { data, loading, error } = useFetchData("Navbar"); // Nutze die Hook für den API-Call
    const [active, setActive] = useState(null);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <Navbar fluid rounded className="p-7">
            <Navbar.Brand >
                <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white md:ml-12">
                    {data.data.Title}
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {data.data.items.map((item, index) => (
                    <Navbar.Link
                        key={index}
                        href={item.url}
                        onClick={() => setActive(index)}
                        className={`px-4 py-2 rounded-lg transition-all ${
                            active === index
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                    >
                        {item.label}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}
