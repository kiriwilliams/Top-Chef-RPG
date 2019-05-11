-- environment seeds
INSERT INTO environments (background, flavour_text)
VALUES ('http://clipart-library.com/data_images/118642.png', 'Italy');

INSERT INTO environments (background, flavour_text)
VALUES ('http://clipart-library.com/newimages/eiffel-tower-clip-art-3.png', 'France');

INSERT INTO environments (background, flavour_text)
VALUES ('https://www.pngkit.com/png/full/848-8488601_tower-clipart-tokyo-tower.png', 'Japan');

INSERT INTO environments (background, flavour_text)
VALUES ('http://clipart-library.com/data_images/500681.png', 'China');

INSERT INTO environments (background, flavour_text)
VALUES ('http://clipart-library.com/image_gallery2/Taj-Mahal-PNG.png', 'India');

INSERT INTO environments (background, flavour_text)
VALUES ('http://itv-america.com/wp-content/uploads/2017/05/img-11-2x-300x212.png', 'Hells kitchen');

-- npc seeds
INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Rafael', 10, 'http://clipart-library.com/img/1501586.gif', 1);

INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Julia', 10, 'https://i.pinimg.com/originals/10/15/6d/10156d7f767f81df76fb5a6c978579b1.jpg', 2);

INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Hiroyuki', 10, 'https://media.istockphoto.com/vectors/japanese-cook-with-sushi-traditional-food-profession-vector-id939201282?k=6&m=939201282&s=612x612&w=0&h=Kk-Xg1b8nVBNLIio40C_tOZ5jWAACQI7MhcbQ0zid7g=', 3);

INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Chan', 10, 'https://clipground.com/images/asian-cuisine-clipart-13.jpg', 4);

INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Amara', 10, 'https://bestill.nabomat.no/system/images/bjNHrspWWr54aabagV08Sb/medium/000a313c63e8a8446ddcf396a696ca8b_indian-woman-with-indian-food-indian-lady-chef-clipart_1500-1600.jpeg?1495478494', 5);

INSERT INTO npcs (chef_name, score_threshold, npc_img, EnvironmentId)
VALUES ('Gordon', 10, 'https://render.fineartamerica.com/images/rendered/default/greeting-card/images-medium-5/gordon-ramsay-art.jpg?&targetx=-21&targety=0&imagewidth=542&imageheight=700&modelwidth=500&modelheight=700&backgroundcolor=FAFCFB&orientation=1', 6);

-- dishes seeds (italian)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Pizza', 0.0, 0.0, 0.0, 0.0, 0.0, 1);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Lasagna', 0.0, 0.0, 0.0, 0.0, 0.0, 1);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Chicken Parmesan', 0.0, 0.0, 0.0, 0.0, 0.0, 1);

-- dishes seeds (french)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('French Fries', 0.0, 0.0, 0.0, 0.0, 0.0, 2);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Snails', 0.0, 0.0, 0.0, 0.0, 0.0, 2);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Chocolate Souffle', 0.0, 0.0, 0.0, 0.0, 0.0, 2);

-- dishes seeds (japanese)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Sushi', 0.0, 0.0, 0.0, 0.0, 0.0, 3);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Miso Soup', 0.0, 0.0, 0.0, 0.0, 0.0, 3);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Soba', 0.0, 0.0, 0.0, 0.0, 0.0, 3);

-- dishes seeds (chinese)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Ramen', 0.0, 0.0, 0.0, 0.0, 0.0, 4);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Spring Rolls', 0.0, 0.0, 0.0, 0.0, 0.0, 4);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Kung Pao Chicken', 0.0, 0.0, 0.0, 0.0, 0.0, 4);

-- dishes seeds (indian)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Biryani', 0.0, 0.0, 0.0, 0.0, 0.0, 5);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Chicken Masala', 0.0, 0.0, 0.0, 0.0, 0.0, 5);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Samosa', 0.0, 0.0, 0.0, 0.0, 0.0, 5);

-- dishes seeds (Gordon)
INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Omelette', 0.0, 0.0, 0.0, 0.0, 0.0, 6);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Pork Tenderloin', 0.0, 0.0, 0.0, 0.0, 0.0, 6);

INSERT INTO dishes (name, mod_F, mod_J, mod_T, mod_c, mod_I, EnvironmentId)
VALUES ('Calamari', 0.0, 0.0, 0.0, 0.0, 0.0, 6);


