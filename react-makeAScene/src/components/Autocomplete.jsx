import React, { useState, useEffect, useMemo } from "react";
import "../css/Autocomplete.css"

function Autocomplete({
    placeholder = "Search...",
    onSelect,
}) {
    const [query, setQuery] = useState("");
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const MOCK_TAGS = [
        { id: 1, name: "animals" },
        { id: 2, name: "animal rescue" },
        { id: 3, name: "animal welfare" },
        { id: 4, name: "music" },
        { id: 5, name: "rock music" },
        { id: 6, name: "classical music" },
        { id: 7, name: "gnomes" },
        { id: 8, name: "testing something" },
        { id: 9, name: "volunteering" },
    ];

    useEffect(() => {
        if (!query.trim()) {
            setOptions([]);
            return;
        }

        const timeoutId = setTimeout(() => {
            setLoading(true);

            const filtered = MOCK_TAGS.filter(tag =>
                tag.name
                    .toLowerCase()
                    .includes(query.toLowerCase())
            );

            setOptions(filtered);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div className="autocomplete">
            <input
                className="text-input"
                type="text"
                value={query}
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
            />

            {(loading || options.length > 0) && (
                <div className="autocomplete-dropdown">
                    {loading && <div>Loading...</div>}

                    {!loading &&
                        options.map((option) => (
                            <div
                                key={option.id}
                                className="autocomplete-option"
                                onClick={() => {
                                    onSelect(option);
                                    setQuery(option.name);
                                    setOptions([]);
                                }}
                            >
                                {option.name}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}

export default Autocomplete;