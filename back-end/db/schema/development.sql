-- Insert into USERS table
INSERT INTO users (username, email, password, profile_pic, bio, created_at, updated_at)
VALUES 
('john_doe', 'john@example.com', 'password123', 'path/to/profile_pic.jpg', 'Love cooking!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('jane_smith', 'jane@example.com', 'password456', 'path/to/profile_pic2.jpg', 'Baking enthusiast.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert into CATEGORIES table
INSERT INTO categories (category_name)
VALUES 
('Appetizer'),
('Main Course'),
('Dessert');

-- Insert into RECIPES table
INSERT INTO recipes (user_id, title, description, ingredients, directions, category_id, created_at, updated_at)
VALUES 
(1, 'Spaghetti Carbonara', 'A classic Italian pasta dish.', 'Spaghetti, Eggs, Pancetta, Parmesan, Black Pepper', '1. Cook spaghetti. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine all.', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(2, 'Chocolate Cake', 'Rich and moist chocolate cake.', 'Flour, Sugar, Cocoa powder, Baking powder, Eggs, Milk, Oil', '1. Mix dry ingredients. 2. Add wet ingredients. 3. Bake.', 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Insert into SAVE_RECIPE table
INSERT INTO save_recipe (user_id, recipe_id, created_at)
VALUES 
(1, 2, CURRENT_TIMESTAMP),
(2, 1, CURRENT_TIMESTAMP);

-- Insert into LIKES table
INSERT INTO likes (user_id, recipe_id, created_at)
VALUES 
(1, 2, CURRENT_TIMESTAMP),
(2, 1, CURRENT_TIMESTAMP);

-- Insert into COMMENTS table
INSERT INTO comments (user_id, recipe_id, comment_text, created_at)
VALUES 
(1, 2, 'This cake is amazing!', CURRENT_TIMESTAMP),
(2, 1, 'Delicious pasta recipe!', CURRENT_TIMESTAMP);

-- Insert into RECIPE_CATEGORY table
INSERT INTO recipe_category (recipe_id, category_id)
VALUES 
(1, 2),
(2, 3);
