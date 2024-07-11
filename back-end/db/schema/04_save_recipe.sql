DROP TABLE IF EXISTS save_recipe;

CREATE TABLE save_recipe (
    save_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    recipe_id INTEGER REFERENCES recipes(recipe_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);