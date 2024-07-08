DROP TABLE recipe_category;

CREATE TABLE recipe_category (
    recipe_category_id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(recipe_id),
    category_id INTEGER REFERENCES categories(category_id)
);
