import React, { useState, useEffect } from "react";
import {Check, X} from "lucide-react";
import "../css/Filter.css"

function Filter({ name, setting, onChange }) {
    const handleCheckClick = () => {
        onChange(setting === "include" ? "none" : "include");
    };

    const handleXClick = () => {
        onChange(setting === "exclude" ? "none" : "exclude");
    };

    return (
        <div className={`filterbox ${setting}`}>
            <div
                className={`check ${
                    setting === "include"
                        ? "active"
                        : setting === "exclude"
                        ? "deactivated"
                        : "default"
                }`}
                onClick={handleCheckClick}
            >
                <Check />
            </div>

            <div className="name">
                <p>{name}</p>
            </div>

            <div
                className={`x ${
                    setting === "exclude"
                        ? "active"
                        : setting === "include"
                        ? "deactivated"
                        : "default"
                }`}
                onClick={handleXClick}
            >
                <X />
            </div>
        </div>
    );
}

function FilterList({ filter = [] }) {
    const [filters, setFilters] = useState(filter);

    const updateFilter = (name, newSetting) => {
        setFilters(prev =>
            prev.map(item =>
                item.name === name
                    ? { ...item, setting: newSetting }
                    : item
            )
        );
    };

    const order = {
        include: 0,
        none: 1,
        exclude: 2,
    };

    const sortedFilters = [...filters].sort(
        (a, b) => order[a.setting] - order[b.setting]
    );

    return (
        <div className="filterlist">
            {sortedFilters.map((item) => (
                <Filter
                    key={item.name}
                    name={item.name}
                    setting={item.setting}
                    onChange={(newSetting) =>
                        updateFilter(item.name, newSetting)
                    }
                />
            ))}
        </div>
    );
}

export default FilterList;