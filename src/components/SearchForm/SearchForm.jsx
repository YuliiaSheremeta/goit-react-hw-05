import { useState } from "react";

export default function SearchForm({ onSubmit }) {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(query);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={handleChange} placeholder="Search movies..." />
            <button type="submit">Search</button>
        </form>
    );
}