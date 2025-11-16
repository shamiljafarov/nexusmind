import React from "react";
import "./Filters.scss";

export default function Filters({ filters, setFilters }) {
  const toggle = (key, value) => {
    const arr = filters[key];
    const updated = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];

    setFilters({ ...filters, [key]: updated });
  };

  const clearAll = () =>
    setFilters({ specialization: [], years: [], search: "" });

  return (
    <div className="filters">
      <div className="header">
        <h3>Filter by</h3>
        <button onClick={clearAll} className="clear">
          Clear Filters
        </button>
      </div>

      <div className="section">
        <h4>Specialization</h4>
        {[
          "Anxiety",
          "Depression",
          "Trauma",
          "Relationship Issues",
          "Grief and Loss",
        ].map((s) => (
          <label key={s}>
            <input
              type="checkbox"
              checked={filters.specialization.includes(s)}
              onChange={() => toggle("specialization", s)}
            />
            {s}
          </label>
        ))}
      </div>

      <div className="section">
        <h4>Years of Experience</h4>
        {["1-5", "5-10", "10+"].map((y) => (
          <label key={y}>
            <input
              type="checkbox"
              checked={filters.years.includes(y)}
              onChange={() => toggle("years", y)}
            />
            {y} Years
          </label>
        ))}
      </div>
    </div>
  );
}
