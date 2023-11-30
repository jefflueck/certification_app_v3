CREATE TABLE certifications (
    id SERIAL PRIMARY KEY,
    industry TEXT,
    name TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
