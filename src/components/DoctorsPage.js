import React, { useMemo, useState } from "react";
import doctorsData from "../data/doctorData"; // your big array
import "../styles/main.css"; // keep using your theme css

// Helper: flatten the nested doctorsData to list of doctors with metadata
const flattenDoctors = (data) => {
  const list = [];
  data.forEach((group) => {
    const category = group.category || "";
    const subcategory = group.subcategory || "";
    const docs = group.doctors || [];
    docs.forEach((d) => {
      list.push({
        ...d,
        category,
        subcategory,
      });
    });
  });
  return list;
};

export default function Doctorsnav() {
  const allDoctors = useMemo(() => flattenDoctors(doctorsData), []);
  const categories = useMemo(
    () => Array.from(new Set(doctorsData.map((g) => g.category))).filter(Boolean),
    []
  );

  // map category -> subcategories
  const subcatsByCategory = useMemo(() => {
    const map = {};
    doctorsData.forEach((g) => {
      if (!g.category) return;
      map[g.category] = map[g.category] || new Set();
      if (g.subcategory) map[g.category].add(g.subcategory);
    });
    // convert sets to arrays
    Object.keys(map).forEach((k) => (map[k] = Array.from(map[k])));
    return map;
  }, []);

  // UI state
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;
  const [activeDoctor, setActiveDoctor] = useState(null); // for modal

  // filter logic
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allDoctors;

    if (selectedCategory !== "All") {
      list = list.filter((d) => d.category === selectedCategory);
    }

    if (selectedSubcategory !== "All") {
      list = list.filter((d) => d.subcategory === selectedSubcategory);
    }

    if (q.length > 0) {
      list = list.filter((d) => {
        return (
          (d.name || "").toLowerCase().includes(q) ||
          (d.city || "").toLowerCase().includes(q) ||
          (d.address || "").toLowerCase().includes(q) ||
          (d.contact || "").toLowerCase().includes(q)
        );
      });
    }
    return list;
  }, [allDoctors, query, selectedCategory, selectedSubcategory]);

  // pagination
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  // handlers
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubcategory("All");
    setPage(1);
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
    setPage(1);
  };

  return (
    <div className="doctor-page container">
      <h1 className="page-title">Doctors Directory</h1>

      {/* Search + filters */}
      <div className="filters-row">
        <input
          className="search-input"
          placeholder="Search by name, city, hospital, contact..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
        />

        <div className="filter-controls">
          <div className="category-tabs">
            <button
              className={`tab ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryClick("All")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            className="subcat-select"
            value={selectedSubcategory}
            onChange={handleSubcategoryChange}
          >
            <option value="All">All Subcategories</option>
            {selectedCategory === "All"
              ? // aggregate all subcats
                Array.from(
                  new Set(doctorsData.flatMap((g) => (g.subcategory ? [g.subcategory] : [])))
                ).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))
              : subcatsByCategory[selectedCategory]?.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
          </select>
        </div>
      </div>

      {/* Results summary */}
      <div className="results-meta">
        <span>
          Showing <strong>{filtered.length}</strong> results
        </span>
        <span>Page {page} of {pageCount}</span>
      </div>

      {/* Grid */}
      <div className="doctor-grid">
        {pageItems.length === 0 ? (
          <div className="no-results">No doctors found.</div>
        ) : (
          pageItems.map((d, idx) => (
            <div className="doctor-card" key={`${d.name}-${idx}`}>
              <div className="card-head">
                <h3 className="doc-name">{d.name}</h3>
                <div className="doc-type">
                  <small>{d.subcategory}</small>
                </div>
              </div>
              <p><strong>City:</strong> {d.city || "—"}</p>
              <p><strong>Hospital / Address:</strong> {d.address || "—"}</p>
              <p><strong>Contact:</strong> {d.contact || "—"}</p>
              <div className="card-actions">
                <button className="btn-primary" onClick={() => setActiveDoctor(d)}>
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination-row">
        <button
          className="page-btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>

        {/* show up to 5 page numbers */}
        {Array.from({ length: pageCount }, (_, i) => i + 1)
          .slice(Math.max(0, page - 3), Math.min(pageCount, page + 2))
          .map((pnum) => (
            <button
              key={pnum}
              className={`page-num ${pnum === page ? "active" : ""}`}
              onClick={() => setPage(pnum)}
            >
              {pnum}
            </button>
          ))}

        <button
          className="page-btn"
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          disabled={page === pageCount}
        >
          Next
        </button>
      </div>

      {/* Modal for details */}
      {activeDoctor && (
        <div className="modal-overlay" onClick={() => setActiveDoctor(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveDoctor(null)}>
              ×
            </button>
            <h2>{activeDoctor.name}</h2>
            <p><strong>Category:</strong> {activeDoctor.category}</p>
            <p><strong>Subcategory:</strong> {activeDoctor.subcategory}</p>
            <p><strong>City:</strong> {activeDoctor.city}</p>
            <p><strong>Address:</strong> {activeDoctor.address}</p>
            <p><strong>Contact:</strong> {activeDoctor.contact}</p>
            {activeDoctor.specialization && (
              <p><strong>Specialization:</strong> {activeDoctor.specialization}</p>
            )}
            <div style={{ marginTop: 12 }}>
              <button className="btn-primary" onClick={() => setActiveDoctor(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
