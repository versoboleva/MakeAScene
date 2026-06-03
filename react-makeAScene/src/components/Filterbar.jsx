import React, { useState, useEffect } from "react";
import FilterList from "./FilterList"
import "../css/Filterbar.css";

function Filterbar({ isOpen, onClose, filter = [] }) {
    const [whenMode, setWhenMode] = useState("current");
    return (
        <>
            {isOpen && (
                <div
                    className="filterbar-overlay"
                    onClick={onClose}
                />
            )}

            <div className={`filterbar ${isOpen ? "open" : ""}`}>
                <div className="filterbar-content">

                    <div className="filterbar-header">
                        <h2 className="filterbar-title">Filter</h2>
                    </div>

                    <div className="section">
                        <h3 className="section-title">
                            Subscribed
                        </h3>

                        <FoldableSection title="Initiatives">
                            <FilterList
                                filter={
                                    filter?.initiatives
                                        ?.subscribed || []
                                }
                            />
                        </FoldableSection>

                        <FoldableSection title="Tags">
                            <FilterList
                                filter={
                                    filter?.tags?.subscribed ||
                                    []
                                }
                            />
                        </FoldableSection>
                    </div>

                    <div className="section">
                        <h3 className="section-title">
                            Where?
                        </h3>

                        <FilterList
                            filter={
                                filter?.location?.subscribed ||
                                []
                            }
                        />

                        <input
                            className="text-input"
                            type="text"
                            placeholder="Other location"
                        />
                    </div>


                    <div className="section">
                        <h3 className="section-title">
                            When?
                        </h3>

                        <select
                            className="select-input"
                            value={whenMode}
                            onChange={(e) => setWhenMode(e.target.value)}
                        >
                            <option value="current">
                                Current / Upcoming
                            </option>

                            <option value="specific">
                                Specific Date
                            </option>

                            <option value="interval">
                                Time Interval
                            </option>
                        </select>

                        {/* SPECIFIC DATE */}

                        {whenMode === "specific" && (
                            <input
                                className="date-input"
                                type="date"
                            />
                        )}

                        {/* INTERVAL */}

                        {whenMode === "interval" && (
                            <div className="date-group">

                                <input
                                    className="date-input"
                                    type="date"
                                />

                                <input
                                    className="date-input"
                                    type="date"
                                />

                            </div>
                        )}
                    </div>


                    <div className="section">
                        <h3 className="section-title">
                            What?
                        </h3>

                        <FoldableSection title="Initiatives">
                            <FilterList
                                filter={
                                    filter?.initiatives
                                        ?.common || []
                                }
                            />
                        </FoldableSection>

                        <FoldableSection title="Tags">
                            <FilterList
                                filter={
                                    filter?.tags?.common || []
                                }
                            />
                        </FoldableSection>

                        <FoldableSection title="Age Guides">
                            <FilterList
                                filter={
                                    filter?.ageGuides || []
                                }
                            />
                        </FoldableSection>

                        <input
                            className="text-input"
                            type="text"
                            placeholder="Other tags"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function FoldableSection({ title, children }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="foldable">
            <button
                className="foldable-header"
                onClick={() => setOpen(!open)}
            >
                <span>{title}</span>
                <span>{open ? "^" : "v"}</span>
            </button>

            {open && (
                <div className="foldable-content">
                    {children}
                </div>
            )}
        </div>
    );
}


export default Filterbar;