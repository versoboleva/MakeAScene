import React, { useState, useEffect } from "react";
import {Check, X} from "lucide-react";
import "../css/Filter.css"

function Filter({ name, setting }) {
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
            >
                <X />
            </div>
        </div>
    );
}

function FilterList({ filter = [] }) {
    const order = {
        include: 0,
        none: 1,
        exclude: 2,
    };

    const sortedFilters = [...filter].sort(
        (a, b) => order[a.setting] - order[b.setting]
    );

    return (
        <div className="filterlist">
            {sortedFilters.map((item, index) => (
                <Filter
                    key={index}
                    name={item.name}
                    setting={item.setting}
                />
            ))}
        </div>
    );
}

export default FilterList;