import { useState } from "react";
import css from './SearchForm.module.css'

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
        <form onSubmit={handleSubmit} className={css.form}>
            <input className={css.input} type="text" value={query} onChange={handleChange} placeholder="Search movies..." />
            <button className={css.button} type="submit">Search</button>
        </form>
    );
}