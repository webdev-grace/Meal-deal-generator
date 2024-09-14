
const meals = {
    mains: [
        { name: 'Tuna & Sweetcorn Pasta', image: 'images/mains/154738cc-1b2f-40b7-be1d-8b6875494d6a.avif' },
        { name: 'Chicken & Bacon Pasta', image: 'images/mains/76defb4b-8443-4925-840e-84290d1f5f66.avif' },
        { name: 'Chicken Tomato & Basil Pasta Salad', image: 'images/mains/7df0acaa-96b8-412c-9a2e-8d39c6ab1ee1.avif' },
        { name: 'Honey & Mustard Chicken Pasta', image: 'images/mains/c575651f-4585-4933-a684-e001a2c2c7bc.avif' },
        { name: 'Prawn Mayonnaise Sandwich', image: 'images/mains/a1af70cd-6a52-45a2-9b0c-12f7b7034235.avif' },
        { name: 'Smoked Ham And Cheddar Cheese Sandwich', image: 'images/mains/d037c016-974c-4429-9ceb-a50b3eca2994.avif' },
        { name: 'Coronation Chicken Sandwich', image: 'Images/mains/1cec0d21-53db-4a15-8285-f40bf9c0cd0b.avif' },
        { name: 'Feta Semi Dried Tomato Pasta', image: 'Images/mains/bd411a83-755e-4013-91e5-fa8740079ab5.avif' },
        { name: 'Southern Fried Chicken Pasta', image: 'Images/mains/b84e8794-1d05-4091-b1ce-db4fcd3efc57.avif' },
        { name: 'Cheese Triple Sandwich', image: 'Images/mains/0e9210a2-700d-4f18-8bf3-c7ae7e1b56b4.avif' },
        { name: 'Ploughmans Sandwich', image: 'Images/mains/1acb91cc-9370-41e4-918f-a4b5f992ab4e.avif' },
        { name: 'Tuna & Cucumber Sandwich', image: 'Images/mains/04bc24a5-0aaf-4b6f-afc3-0f784b9d4b52.avif' },
        { name: 'Tuna & Sweetcorn Sandwich', image: 'Images/mains/7ce2e0a7-b878-45e4-9db6-e070c2014b77.avif' },
        { name: 'Chicken Salad Sandwich', image: 'Images/mains/7306ff42-5bab-460f-b084-b8efe8c66a23.avif' },
        { name: 'Free Range Egg Mayonnaise Sandwich', image: 'Images/mains/0e9210a2-700d-4f18-8bf3-c7ae7e1b56b4.avif' },
        { name: 'Prawn Layered Salad', image: 'Images/mains/e1d9f10b-2165-4fe5-8b90-ab1939cc4347.avif' },
        { name: 'Chicken & Bacon Sub', image: 'Images/mains/df2e2d1a-4f3a-42f1-a754-31cc9f749572.avif' },
        { name: 'Tuna Crunch Sub', image: 'Images/mains/bb77f824-dc70-44ff-bdb3-ff5ea5de8641.avif' },
        { name: 'Cheese & Tomato Pasta', image: 'Images/mains/17e272f5-20bb-42e8-8403-e6812e916d67.avif' },
        { name: 'Chicken & Bacon Wrap', image: 'Images/mains/bf271d6b-d617-4f1e-8e17-a484957dbbe9.avif' },
        { name: 'Ham And Cheddar Cheese Sub', image: 'Images/mains/b980da22-b89f-4f08-8e81-68e883b0885f.avif' },
        { name: 'Chicken, Bacon & Stuffing Sandwich', image: 'Images/mains/d159affc-b96f-46a8-831e-13f49d03946d.avif' },
        { name: 'Spicy Chicken Pasta', image: 'Images/mains/5542d6d5-3a00-4b1a-86ee-b5e1a4995757.avif' },
        { name: 'Egg & Bacon Sandwich', image: 'Images/mains/d0721f15-6171-4f00-b089-afff2db4ce92.avif' },
        { name: 'Chicken & Bacon Caesar Salad', image: 'Images/mains/bbde532b-de32-4707-a48e-1e248b3c07b4.avif' },
        { name: 'Cheese & Onion Sandwich', image: 'Images/mains/851424e0-01c4-4b73-89b6-903f1aec5ed9.avif' },
        { name: 'Salmon, Hoisin & Cucumber Mini Maki', image: 'Images/mains/3d25e229-7477-4f1f-944d-f790558a0cdd.avif' },
        { name: 'Egg & Cress Sandwich', image: 'Images/mains/0e24d445-4266-4952-948a-e9a2a666ecf9.avif' },
        { name: 'Just Ham Sandwich', image: 'Images/mains/0c23e074-8028-4c3a-9c4f-7e62437adb5b.avif' },
        { name: 'Hoisin Duck Wrap', image: 'Images/mains/ed73ff81-f509-48e3-af0d-ef118cb6900a.avif' },
        { name: 'Sausage Bacon & & Egg Triple', image: 'Images/mains/1f18b7c9-e353-4791-9567-3807534811ba.avif' },
        { name: 'Bacon Lettuce & Tom Sandwich', image: 'Images/mains/121aa6bf-92de-4f0b-af44-efeb4ec4eb70.avif' },
        { name: 'Chicken Triple Sandwich', image: 'Images/mains/3d3783ce-751c-421c-aeb5-2ce989d555e9.avif' },
        { name: 'Salmon & Tuna Sushi', image: 'Images/mains/1e7e3556-3dcc-4425-9e01-b0098f826ca0.jpg' },
        { name: 'The Chicken Club Sandwich', image: 'Images/mains/8b176562-8164-4fa6-b937-c40eecca6720.avif' },
        { name: 'Pesto Pasta With Semi Dried Tomatoes', image: 'Images/mains/96392942-10de-4613-98b0-db8dc61d5d4c.avif' },
        { name: 'Vegetable Sushi', image: 'Images/mains/508eca5f-8b62-4385-8a4d-a1c7a4de45e1.avif' },
        { name: 'Ham Egg & Coleslaw Salad', image: 'Images/mains/b89e978e-3726-48aa-b70c-84d6c8e98c73.avif' },
        { name: 'Katsu Chicken & Hoisin Duck Sushi', image: 'Images/mains/eb828d41-bac4-49d8-828c-58c90064a2e4.avif' },
        { name: 'Chicken & Sweetcorn Sandwich', image: 'Images/mains/7cbb3cac-9688-44a8-898f-3ccf11b03b85.avif' },
        { name: 'Spicy Bean Wrap', image: 'Images/mains/ed8b759b-fb3a-44d1-9502-05aa3a097849.jpg' },
        { name: 'Pesto Chicken And Sundried Tomato Wrap', image: 'Images/mains/8d062288-a438-48cd-9e69-e6919d81c01f.avif' },
        { name: 'Chicken & Bacon Mayonnaise Sandwich', image: 'Images/mains/a6efadbb-ba9c-445b-93e3-d0e4c283165e.avif' },
        { name: 'Deli Style Cheese & Pickle Sandwich', image: 'Images/mains/63087dda-c7ef-4374-b211-d4df1c3be690.avif' },
        { name: 'Cheese & Pickle Sandwich', image: 'Images/mains/a99dffc7-33e6-4fc4-9a25-515a408d170d.avif' },
        { name: 'Chicken & Stuffing Sandwich', image: 'Images/mains/b1124108-0c9d-4217-bc26-a1e69f638e5a.avif' },
        { name: 'Plant Chef Falafel Houmous Wrap', image: 'Images/mains/3e2d91fd-332f-4ea9-a014-1079becf9f04.avif' },
        { name: 'Bbq Chicken Wrap', image: 'Images/mains/1b39b92c-e3e0-42d5-aa1b-812e78151aaa.avif' },
        { name: 'Fajita Chicken Wrap', image: 'Images/mains/031dce15-6584-4969-9acc-c8b124f76da8.avif' },
        { name: 'Nacho Cheesy Chicken Wrap', image: 'Images/mains/4e5baab3-b5be-49b0-9d96-a868bd289758.jpg' },
        { name: 'Smoked Ham & Mustard Sandwich', image: 'Images/mains/454b136c-ed09-4dff-bb0d-2be445d834a2.avif' },
        { name: 'Plant Chef Hoisin Wrap', image: 'Images/mains/97773c81-99c4-436f-80a7-aedf5163e22c.avif' },
        { name: 'Chicken Vindaloo Sub Roll', image: 'Images/mains/a7e558ba-d9f9-4c9d-801a-88eefcccb29f.avif' },
        { name: 'Chicken Peanut Satay Wrap', image: 'Images/mains/2b5462c7-fddd-46f7-8ada-d33396c733d5.avif' },
        { name: 'Eat Your Greens Feta Salad', image: 'Images/mains/78b114be-164b-484f-b8be-3003ebc24f7e.avif' },
        { name: 'Chicken Salad Sub', image: 'Images/mains/6ffb044d-c498-4925-84c9-44caa2393e60.avif' },
        { name: 'Cheese Sandwich No Mayonnaise', image: 'Images/mains/67a7f99d-5bd6-4a17-8f19-dd1afad967ac.avif' },
        { name: 'Pulled Beef & Red Leicester Sandwich', image: 'Images/mains/4a7c191c-9360-40c7-acbe-c2f662095d94.avif' },
        { name: 'Chicken Bacon & Lettuce Sandwich', image: 'Images/mains/5f2c41f6-21ee-4fa0-b446-67ff0546db35.avif' },
        { name: 'Chicken & Chorizo Sandwich', image: 'Images/mains/c8aadcb1-0cd1-4b56-80b8-84ee938658b9.avif' },
        { name: 'Back at the Ranch Chicken Salad', image: 'Images/mains/f0579729-8b98-45ec-a382-baf610aaff16.avif' },
        { name: 'Salmon, Prawn & Surimi Rolls Sriracha Mayonnaise', image: 'Images/mains/ea2bc3d9-e970-4679-840d-a110077f6fdf.avif' },
        { name: 'Bbq Chicken, Bacon & Cheese Sandwich', image: 'Images/mains/33322abd-6ea1-451f-919e-ecd957fc9353.jpg' },
        { name: 'Smoked Bacon & Ketchup Sandwich', image: 'Images/mains/6090292e-eeeb-4f91-8a2e-c477ab273f73.avif' },
        { name: 'Meatball Marinara', image: 'Images/mains/6ddec68b-63c7-414f-a6bc-02a682be9cdb.avif' },
        { name: 'Deli Meat Feast Sub', image: 'Images/mains/508f0d82-4e29-47c1-8f13-03d4bb4d63e7.avif' },
        { name: 'Gluten Free Chicken & Bacon Mayonnaise Sandwich', image: 'Images/mains/081d7a89-fc8c-4dfc-af19-4782af267e83.avif' },
        { name: 'Mackerel, Salmon & Prawn Sushi', image: 'Images/mains/239c443c-f9ca-4a06-84d9-dbde5a934fb4.avif' },
        { name: 'Chicken Tikkaway Sandwich', image: 'Images/mains/afcc6815-ef6e-4d59-affd-6cb6b5209e38.avif' },
        { name: 'Tandoori Chicken Rice Bowl', image: 'Images/mains/1566ae2f-48a0-410f-a1dd-0a1df8be50b7.avif' },
        { name: 'Fajita Fiesta Chicken Salad', image: 'Images/mains/e4fdbf3f-2ac4-4bc0-8bec-9b4ce844617b.avif' },
        { name: 'Chicken & Chorizo Pasta', image: 'Images/mains/08eb3afa-e897-4742-9e34-b932c80cc807.avif' },
        { name: 'Some Like It Hot Piri Piri Chicken Salad', image: 'Images/mains/a7aca7e3-1089-4237-88d6-a8bef1119c50.avif' },
        { name: 'Plant Chef Sweet Potato & Falafel Salad', image: 'Images/mains/b66066e7-08dd-41fe-a000-c0d63c1cc80b.avif' },
        { name: 'The Ham Cheese & Chicken Triple Sandwich', image: 'Images/mains/dadf7c5b-fc59-4a28-8eb3-33904531c652.avif' },
        { name: 'Sausage Bacon & Egg Sub', image: 'Images/mains/82f62693-ab33-48c5-ba83-b9abe9d23b99.avif' },
        { name: 'Brie & Smoked Bacon Sandwich with Chilli Jam', image: 'Images/mains/c8d54b4d-b058-4db5-8ff7-3a9b25241fa0.avif' },
        { name: 'Hey Pesto Chicken & Mozzarella Sandwich', image: 'Images/mains/718364a1-c08b-4261-b361-9206f2b22ec4.avif' },
        { name: 'Hoisin Duck Noodle Bowl', image: 'Images/mains/69742725-6d42-48f4-8cc7-dc8ddc7e9ab9.avif' },
        { name: 'Southern Fried Chicken Chipotle Mayo Sub', image: 'Images/mains/408ac03e-646b-4038-b8f8-faa88036d3f0.webp' }
    
    ],


    snacks: [
        { name: 'Urban Fruit Snack Pack Strawberry', image: 'Images/Snacks/d308ce51-d0ff-4f45-8c2a-ab15f0d59808_54168186.avif' },
        { name: 'Taste Inc. 100% Chargrilled Chicken Fillet Bbq', image: 'Images/Snacks/a3321f2a-2ccb-4ac5-a253-31c90fbf58f9.avif' },
        { name: 'Fridge Raiders Meat Free Slow Roasted Tasty Bites', image: 'Images/Snacks/8def78d0-9414-4826-b9bd-01e79dab6d5e.avif' },
        { name: 'Peperami Red Hot Stick', image: 'Images/Snacks/d84c335f-87ba-4889-b39a-1420a65bdc91_1230342121.jpg' },
        { name: 'Arla Protein on the go Strawberry yogurt', image: 'Images/Snacks/cfbb4d7a-4f2c-43b7-882f-113a5f6f4743.avif' },
        { name: 'Taste Original Chicken Satay Snack', image: 'Images/Snacks/5100e66e-84f5-4a50-8f83-bd9501df64cd_189109113.avif' },
        { name: 'Propercorn Lightly Sea Salted', image: 'Images/Snacks/afcd1dc4-ee2e-4bfa-9400-6cd7abd696b4_551854546.avif' }, 
        { name: 'Ginsters Cajun Spiced Chicken Bake', image: 'Images/Snacks/8b259dbf-572a-4e02-8cc5-98d5920d048f.avif' },
        { name: 'Plant Chef Carrot & Houmous', image: 'Images/Snacks/16313333-5ca2-4adf-9baf-880e11d9afa1.avif' },
        { name: 'Pringles Pop & Go Original Snacks', image: 'Images/Snacks/236cc1f2-3d0b-46fd-8d64-d2ae73f5c7d5_2062568924.avif' },
        { name: 'Peperami Original Salami', image: 'Images/Snacks/aa49b1ea-d201-4217-a9e8-6d59301b2548_666307612.avif' },
        { name: 'Pringles Sour Cream & Onion Snacks', image: 'Images/Snacks/676f1481-dd6b-4410-92f7-89566cf4d8be_49679827.avif' },
        { name: 'Tyrrells Mixed Root Vegetable Crisps', image: 'Images/Snacks/bd59e710-b06a-4880-8f55-3f5cf9454b94_8262415.avif' },
        { name: 'Walkers Baked Salted Grab Bag Crisps', image: 'Images/Snacks/bdfe6405-c48f-455a-9b4a-a113dc7890a8_1064428724.avif' },
        { name: 'Tesco Green Olives With Herbs', image: 'Images/Snacks/e1f228f9-1180-4c02-ba02-77f3dcc0a45f_868417954.avif' },
        { name: 'Walkers Baked Cheese & Onion Grab Bag Crisps', image: 'Images/Snacks/39b5d7eb-cb98-41bb-b786-c0e6f6a94031_1051728197.avif' },
        { name: 'Kettle Chips Sea Salt & Balsamic Vinegar Crisps', image: 'Images/Snacks/c74698ce-4b9f-4ea0-9454-c417082d343d_2049028157.avif' },
        { name: '2 Mini Melton Mowbray Pork Pies', image: 'Images/Snacks/c34e897c-29e7-46b5-b981-ee7af8656a7d.avif' },
        { name: 'Propercorn Sweet & Salty', image: 'Images/Snacks/a7d6673d-a145-448c-98a5-758e125b0a2f_2132253811.avif' },
        { name: 'Popchips Bbq Popped Potato Chips', image: 'Images/Snacks/25624e9c-ffc1-48ec-a585-539b6aa566cc_2090509158.avif' },
        { name: 'Cocktail Sausages & Ketchup Dip', image: 'Images/Snacks/04ca1eb4-159f-4ddb-9407-382c4044e08d.avif' },
        { name: 'Vegetable Sushi Snack', image: 'Images/Snacks/b7b664f0-b613-470f-99a8-135e69a17ce5.avif' },
        { name: 'Kellogg\'s Nutri-Grain Bars Strawberry', image: 'Images/Snacks/8db259ab-dcda-47a7-ba59-af42600f45da_1882543149.avif' },
        { name: 'Urban Fruit Snack Pack Mango', image: 'Images/Snacks/fb06b447-b86d-41fa-bb65-5f41d592e8c2_1430943179.avif' },
        { name: 'Egg Protein Pot', image: 'Images/Snacks/961a769b-581d-4152-b626-a8b5b99510a0.avif' },
        { name: 'Love,Corn Bbq Roasted Corn Snack', image: 'Images/Snacks/b8598ff0-805f-4f0a-a8ed-50553f216380_1399088037.avif' },
        { name: 'Walkers Max Punchy Paprika Grab Bag Crisps', image: 'Images/Snacks/1a1b2220-4394-4ea4-bc6f-e2fc925110dd_1895406586.webp' },
        { name: 'Love,Corn Sea Salt Roasted Corn Snack', image: 'Images/Snacks/1bb63a54-46a0-4a0a-ad9c-35d653c61564_867852610.avif' },
        { name: 'Graze Dark Chocolate Cherry Tart', image: 'Images/Snacks/323552b8-c0ca-4562-a066-0054e6c27e9b_1403892353.avif' },
        { name: 'Hoisin Duck Sushi', image: 'Images/Snacks/ec78865a-2907-4828-b41e-1ce21b801704.avif' },
        { name: 'Walkers Monster Munch Pickled Onion Crisps', image: 'Images/Snacks/342f9213-c428-4992-b266-67ba8c834599_1058970278.avif' },
        { name: 'Nature Valley Protein Peanut & Chocolate Cereal Bars', image: 'Images/Snacks/b3671847-794d-45dc-b7ec-21adf94f2576_1939238308.jpg' },
        { name: 'Walkers Monster Munch Roast Beef Crisps', image: 'Images/Snacks/499c05e7-2989-4b16-8e51-81d16822c326_1547263516.avif' },
        { name: 'Walkers Sensations Thai Sweet Chilli Grab Bag Crisps', image: 'Images/Snacks/aa26ac8e-82ec-42cb-a3de-8b7d8a24d7af_568083969.avif' },
        { name: 'Nature Valley Crunchy Oats & Honey', image: 'Images/Snacks/6302db1d-88fe-4b0e-8890-f9aff4d6836f_2136364008.avif' },
        { name: 'Smoked Salmon Sushi Snack', image: 'Images/Snacks/5589684b-4079-463f-bff1-6e0e0cdc8336.avif' },
        { name: 'Lion White Duo Chocolate Bar', image: 'Images/Snacks/47d48d5b-aa45-4705-9a0d-6206f9de4e12_42359601.jpg' },
        { name: 'Maltesers Kingsize', image: 'Images/Snacks/2dc93a61-7b62-4ea1-b392-1d79c269d894_406061153.avif' },
        { name: 'Kit Kat Chunky Duo Milk Chocolate Bar', image: 'Images/Snacks/174a9015-21bb-416b-b900-5ccf549709ad_817498091.avif' },
        { name: 'Wall\'s Large Pork Sausage Roll', image: 'Images/Snacks/c6cc3936-2325-405a-a81d-601d84655db1.jpg' },
        { name: 'Soreen Banana Loaf 2 Slices', image: 'Images/Snacks/9011f03a-051d-4acf-b4e7-d550ab6f9c6a.avif' },
        { name: 'Fridge Raiders Poppers Cheese Nacho', image: 'Images/Snacks/9ce00517-43ad-4599-8414-1c30a3533a8f.avif' },
        { name: 'Ginsters Butter Chicken Bake', image: 'Images/Snacks/9bd007c9-545b-4d7f-bbbb-fa18115f8f9f.avif' },
        { name: 'Walls Single Scotch Egg', image: 'Images/Snacks/2f2377b0-621f-41cc-86de-4a18eebc52e8.jpg' },
        { name: 'Strings & Things, Meal Deal Cheestrings Twin Pack', image: 'Images/Snacks/f007fdb4-55da-4480-ab2b-3b84deeb501f_1281839459.avif' },
        { name: 'Mini Savoury Eggs', image: 'Images/Snacks/806e1abf-c218-4043-b033-309b45dbcfb7.avif' },
        { name: 'Chicken Poppers With Tomato Ketchup', image: 'Images/Snacks/99718736-43e7-4c53-9f5b-564cd354a7c3.avif' },
        { name: 'Vegetable Samosa', image: 'Images/Snacks/98471f31-eea9-4c27-971f-d444a343b833.avif' }


    ],

     drinks: [
        { name: 'Tropicana Orange Juice Smooth', image: 'Images/Drinks/decb3789-4eb6-4cba-b5d7-baa22cbd3236.avif' },
        { name: 'Monster Energy Drink Ultra', image: 'Images/Drinks/f5703ce7-8d0e-439d-ae1b-694276223dfb_579682984.avif' },
        { name: 'Buxton Still Natural Mineral Water Sports Cap', image: 'Images/Drinks/b95b4d2c-a188-453b-b76d-40cdb7aad98c_2072502743.avif' },
        { name: 'Fanta Orange', image: 'Images/Drinks/4d1be7a6-1435-4972-a3d7-2497962d0dcf_2057082484.avif' },
        { name: 'Oasis Citrus Punch', image: 'Images/Drinks/badf0e26-2e7d-452f-80e7-277ed48ae662_1183267606.avif' },
        { name: 'Fanta Fruit Twist', image: 'Images/Drinks/9a9332cd-b1a4-409a-b4d8-51df4da68266_437122901.webp' },
        { name: 'Pepsi Max No Sugar Cola Bottle', image: 'Images/Drinks/dafd37ae-69b4-4589-85b3-6879a9edaad2_1516733458.avif' },
        { name: 'Dr Pepper Regular', image: 'Images/Drinks/972abc11-4657-4cdf-8f8f-eeb3cebad7fd_264717848.avif' },
        { name: 'Pepsi Max Cherry No Sugar Cola Bottle', image: 'Images/Drinks/20e80dd0-f745-47f3-8ed2-291d3566afb1_682776356.avif' },
        { name: 'Red Bull Energy Drink', image: 'Images/Drinks/c794e854-9a9a-4a2f-adce-560796347b19_1819876320.avif' },
        { name: 'Monster Energy Drink', image: 'Images/Drinks/986b4cd1-3840-4872-a057-5dfc050f3201_1504525799.avif' },
        { name: 'Oasis Summer Fruits', image: 'Images/Drinks/799b9570-0512-4d97-931c-9da74ed8ae8d_1916100263.avif' },
        { name: 'Coca-Cola Zero Sugar', image: 'Images/Drinks/e1cbf468-9f28-4f45-b282-3f329a42590b_112322922.webp' },
        { name: 'Innocent Strawberry & Banana Smoothie', image: 'Images/Drinks/aa65df54-91ae-4901-9468-6107b176dd48_989555359.avif' },
        { name: 'Fanta Orange Zero', image: 'Images/Drinks/f7b14d82-edce-42da-bd94-7288463a2295_976410821.avif' },
        { name: 'Monster Energy Drink Mango Loco', image: 'Images/Drinks/b3bf5d27-7f4d-4d86-865a-ee9ed3cbeba3_33120012.avif' },
        { name: 'Diet Coke', image: 'Images/Drinks/d836e87c-4357-4996-8939-0c9991cbd11a_108899368.avif' },
        { name: 'Coca-Cola Original Taste', image: 'Images/Drinks/523484e9-9c5e-429a-a27c-5fe2428e5bb1_202753860.jpg' },
        { name: 'Innocent Energise Super Smoothie', image: 'Images/Drinks/470f9bd4-a56e-4c5d-b83a-451224dfd9ef.avif' },
        { name: 'Mountain Dew Citrus Blast Bottle', image: 'Images/Drinks/d2678336-46b4-4fda-b8a6-6fdc810038e4_1631469214.avif' },
        { name: 'Red Bull Sugar Free Energy Drink', image: 'Images/Drinks/a66f04dc-0ab4-4243-bc53-2a5982d81a43_1810825276.avif' },
        { name: 'Evian Natural Bottled Mineral Still Water', image: 'Images/Drinks/bde6661e-9f9e-4a83-82a5-f43280892c04_482212333.avif' },
        { name: 'Red Bull Energy Drink', image: 'Images/Drinks/aab9b31d-1966-4f9d-8799-656226168f3c_620750440.avif' },
        { name: 'Barr Irn Bru', image: 'Images/Drinks/b6f2b6c7-ac2f-47a7-8d7f-147bccf4afb4_414726251.avif' },
        { name: 'Red Bull Energy Drink', image: 'Images/Drinks/f63cf107-b15d-4dfe-a2f4-ea69ce531491_551027690.avif' },
        { name: 'Volvic Natural Bottled Mineral Still Water', image: 'Images/Drinks/967661cc-1906-4a8a-a0ee-cec94f31a468_155274220.avif' },
        { name: 'Copella Apple Juice', image: 'Images/Drinks/ac1f8865-e7fd-41ad-808f-1f766d6f0628.avif' },
        { name: 'Tropicana Multivitamins Juice', image: 'Images/Drinks/891c0531-49dc-49f2-8d07-5e23d162ee73.avif' },
        { name: 'Tropicana Orange Juice Original', image: 'Images/Drinks/891c0531-49dc-49f2-8d07-5e23d162ee73.avif' },
        { name: 'Sprite', image: 'Images/Drinks/090e15d4-0896-40ff-aef6-6fdf3845d85f_1359362132.avif' },
        { name: 'Lipton Ice Tea Lemon Bottle', image: 'Images/Drinks/51e20baf-c8e7-4a61-84ae-7c4381b39cb5_208345299.avif' },
        { name: 'Orangina', image: 'Images/Drinks/2a2c6e61-5fa6-4b6e-890a-47d3d5856ee4_1471794262.avif' },
        { name: 'Purdey\'s Rejuvenate Sparkling Grape & Apple with Ginseng', image: 'Images/Drinks/7def48ce-7d79-4898-a5b1-d231416c7c4a_347067107.avif' },
        { name: 'Diet Coke Caffeine Free', image: 'Images/Drinks/0e09641f-25cb-4829-95c3-02010cc11d0f_803795582.avif' },
        { name: 'Evian Natural Bottled Mineral Still Water', image: 'Images/Drinks/67c85820-f197-481b-87d7-a605f9898a13_817457996.avif' },
        { name: 'San Pellegrino Sparkling Natural Mineral Water', image: 'Images/Drinks/a2d7613d-e814-401b-937b-5e7d6a2971fe_1815601465.avif' },
        { name: 'Fanta Lemon', image: 'Images/Drinks/ad3a4029-8cd0-4a47-bd6d-563ecc841182_1964616034.avif' },
        { name: 'Red Bull Sugar Free Energy Drink', image: 'Images/Drinks/a3a345d4-d44d-45ec-9eb4-33729124e100_1428677311.avif' },
        { name: 'Vita Coco Natural Coconut Water', image: 'Images/Drinks/f91b5ab3-907e-4c3f-917c-2af3fc225d43_1948816552.avif' },
        { name: 'Dr Pepper Zero', image: 'Images/Drinks/ddab1a4e-c1c4-4d7b-8d54-6f446e20f2dd_148038779.avif' },
        { name: 'Harry Bromptons Black Ice Tea With Lemon & Lime', image: 'Images/Drinks/aabfb0ea-fc01-442c-9e36-a6e7ae160e37_1142454641.jpg' },
        { name: 'Juice Burst Apple Juice', image: 'Images/Drinks/75bc96ad-fe2a-411b-ae56-eff82a28611e_1895524435.avif' },
        { name: 'Ribena Blackcurrant Light Bottle', image: 'Images/Drinks/e14af550-9d71-4180-b359-b0d005a5d2cb_607527482.avif' },
        { name: 'Lucozade Original', image: 'Images/Drinks/2e37c8d7-242d-4117-930d-e6196f9e7c41_1605985060.avif' },
        { name: 'Coca-Cola Zero Sugar Cherry', image: 'Images/Drinks/e901088a-390f-49dc-b409-4e16233cf111_755445063.avif' },
        { name: 'Innocent Mango & Passion Fruit Smoothie', image: 'Images/Drinks/2a1789c3-4c23-4561-95dd-f5b0d2081942.avif' },
        { name: 'Innocent Bolt From Blue Juice', image: 'Images/Drinks/959ac7fb-2bd1-4ca0-a194-78f4d3f165fb.avif' },
        { name: 'Red Bull Energy Drink Sugar Free', image: 'Images/Drinks/7d7dc8a5-3fe2-4187-befc-433dcb63ceec_121277657.avif' },
        { name: 'Lucozade Energy Orange', image: 'Images/Drinks/1302d508-a67e-46c3-a78e-d0a27fc82207_445105192.avif' },
        { name: 'Don Simon Mango Passion Fruit & Orange Smoothie', image: 'Images/Drinks/176bed61-a283-4419-ade4-160d9f67bf6d_2121554745.avif' },
        { name: 'Ribena Blackcurrant Bottle', image: 'Images/Drinks/2974c1ee-5c40-48b6-b451-771ba160acf4_1248313742.avif' },
        { name: 'Highland Spring Sports Bottle', image: 'Images/Drinks/f75fb3d7-7dad-4b71-891a-78a1386f1228_2125553898-1.avif' },
        { name: 'Volvic Touch of Fruit Lemon & Lime Still Flavoured Water', image: 'Images/Drinks/14f2cf7e-3164-473e-92be-284ce75c6341_1071231364.jpg' },
        { name: 'Naked Green Machine Apple Banana Smoothie', image: 'Images/Drinks/d4f2c14e-0a84-4c21-9cc0-04718b8cb945.jpg' },
        { name: 'Innocent Tropical Defence Super Smoothie', image: 'Images/Drinks/afb5f7ca-4bfa-48a8-9278-8ed2999e7f1e.avif' },
        { name: 'Lucozade Sport Orange Still', image: 'Images/Drinks/cb39c4b1-1e5e-4af2-b202-b80b58896de5_1713604712.avif' },
        { name: 'Get More Vitamin D Still Water Mango & Passionfruit Drink', image: 'Images/Drinks/a6c3242f-944d-423c-bc8e-95bda9aaab13_95485405.avif' },
        { name: 'Volvic Touch of Fruit Strawberry Still Flavoured Water', image: 'Images/Drinks/9ce5ced7-1a33-44d0-8725-b136f806ddc9_492694917.avif' },
        { name: 'Naked Blue Machine Blueberry Smoothie', image: 'Images/Drinks/6b9a6a5c-cd70-4938-bc5c-da09f3802bc3.avif' },
        { name: 'Rubicon Spring Black Cherry & Raspberry', image: 'Images/Drinks/9caceb5d-20b2-463b-ad98-a2694606b096_22951445.avif' },
        { name: 'Vimto Regular Still', image: 'Images/Drinks/7d8041f5-ddbe-4229-90af-c2582bdf43d0_362595899.avif' },
        { name: 'Capri-Sun Orange', image: 'Images/Drinks/68a8dc21-b585-4272-a813-613d33a3fa10_213059686.avif' },
        { name: 'Tango Orange Original Bottle', image: 'Images/Drinks/708bf9f7-50b2-45a8-b5d1-c34c2e6d098e_46991651.avif' },
        { name: 'Lucozade Energy Zero Pink Lemonade', image: 'Images/Drinks/d9109a2a-ed2d-4a75-9b3b-2e8c2ec039be_776957403.avif' },
        { name: 'Innocent Wonder Green Juice', image: 'Images/Drinks/112bba9c-561b-40ee-a4b8-e230a563f690.avif' },
        { name: 'Innocent Invigorate Super Smoothie', image: 'Images/Drinks/2668e4c9-2185-4e21-80aa-d2ee7fdeeb1d.avif' },
        { name: 'Innocent Berry Set Go Juice', image: 'Images/Drinks/a9e237d0-3be2-4bfb-ad69-0ea134941045.avif' },
        { name: 'Lucozade Sport Raspberry', image: 'Images/Drinks/740a5272-0db7-4217-9104-b47f519838d2_1700300654.jpg' },
        { name: 'Naked Gold Machine Super Smoothie', image: 'Images/Drinks/da9de7e3-8efe-4845-bde3-76ed9863f92c.avif' },
        { name: 'Naked Rainbow Machine Smoothie Drink', image: 'Images/Drinks/056262c0-d3de-4f2e-ad4c-b40143a5ca8c.avif' },
        { name: 'Harry Brompton\'s Black Ice Tea With Peach', image: 'Images/Drinks/2bd7793c-9351-4d13-9be2-e2f34947901d_1546053577.avif' },
        { name: 'Powerade Berry&Tropical Fruit', image: 'Images/Drinks/534c97ee-6979-4e89-ae87-fd43e342bf4a_1263161080.avif' },
        { name: 'Juice Burst Orange Juice Drink', image: 'Images/Drinks/e30ab6fe-a49f-4c3d-8cf8-5626449bf86d_1184858391.avif' }
   

    ]
}

function getRandomMealItem(category) {
    const items = meals[category];
    return items[Math.floor(Math.random() * items.length)];
}

function revealItem(imageId, nameId, item) {
    const imageElement = document.getElementById(imageId);
    const nameElement = document.getElementById(nameId);

    imageElement.src = item.image;
    nameElement.textContent = item.name;

    // Show the image and name with a fade-in effect
    imageElement.style.opacity = 1;
    nameElement.style.opacity = 1;
}

function generateMeal() {
    // Hide previous items but keep the summary visible
    document.querySelectorAll('.meal-item img, .meal-item p').forEach(element => {
        element.style.opacity = 0;
    });

    setTimeout(() => {
        const mainItem = getRandomMealItem('mains');
        const snackItem = getRandomMealItem('snacks');
        const drinkItem = getRandomMealItem('drinks');

        // Reveal each category smoothly
        revealItem('main-image', 'main-name', mainItem);
        revealItem('snack-image', 'snack-name', snackItem);
        revealItem('drink-image', 'drink-name', drinkItem);
    }, 500); // Delay the reveal slightly to allow the fade-out
}

