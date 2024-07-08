INSERT INTO recipes (user_id, title, description, ingredients, directions, category_id, created_at, updated_at)
VALUES 
(1, 'Spaghetti Carbonara', 'A classic Italian pasta dish.', 'Spaghetti, Eggs, Pancetta, Parmesan, Black Pepper', '1. Cook spaghetti. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all.', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Chocolate Cake', 'Rich and moist chocolate cake.', 'Flour, Sugar, Cocoa powder, Baking powder, Eggs, Milk, Oil', '1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake.', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
