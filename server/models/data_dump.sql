--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.categories (id, name, posts) FROM stdin;
1	Fashion	0
2	Health	0
3	Coding	0
6	Travel	0
7	Culture	0
8	Sport	0
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.users (id, username, hash, description, profile_pic_src) FROM stdin;
42	1234_test	$2b$10$7VtEzf.JNeyuEOZb.jRGkOYNnDbJXcpzU63I6RKMxg8UcvvbNz1RS	\N	\N
1	Emelin Miller	$2b$10$examplePASSWORDsaltveuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa	this is a description	https://picsum.photos/1444/1444
2	Dan	$2b$10$examplePASSWORDsaltveuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa	this is a description	https://picsum.photos/1444/1444
3	Arnoldlebg	$2b$10$examplePASSWORDsaltveuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa	this is a description	https://picsum.photos/1444/1444
4	John Doe	$2b$10$examplePASSWORDsaltveuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa	this is a description	https://picsum.photos/1444/1444
5	billie jogging	$2b$10$examplePASSWORDsaltveuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa	this is a description	https://picsum.photos/1444/1444
6	kélian	$2b$10$ZatOldBNUG5pUHFjwsBchO3k5/8HK6JtT6m2828ImeAfFOYZX4n0u	this is a description	https://picsum.photos/1444/1444
7	kélian2	$2b$10$QuAzfNfAqdeTvWOsna7jY.npbeKlEACPeEilfeE8U0jwqwGyE/c26	this is a description	https://picsum.photos/1444/1444
21	test	$2b$10$6mBMu8U50y7zufRjrSDkHObrPJ5hXHpVJ7O4Ze9AfxRZ26YnJAzGi	this is a description	https://picsum.photos/1444/1444
22	test1	$2b$10$HEuGgRCGvkj/gKIoKONDfu1G4G6Ahqwx6xMrdRk4sfPkjRpqTFycK	this is a description	https://picsum.photos/1444/1444
23	test12	$2b$10$I4/fzjreDmGgvoE5Jhm5aunTW/te2847TsONi7PNdBwAQ39Ignkv2	this is a description	https://picsum.photos/1444/1444
25	test123	$2b$10$ZVHvvT2OJv9ojvODtC49Y.AaOrRQbRPTPfvbHJP5AfNPUBRm6GIei	this is a description	https://picsum.photos/1444/1444
26	stormax181iq	$2b$10$E8NjqDWJJ3aRl/BCYE4hf.LSc2A/bZtyFT6UmestFvzjilCq.M87G	this is a description	https://picsum.photos/1444/1444
27	user	$2b$10$CiZSbGzcoPmxMuqqWbdsIuDZAe7kckJM8ECCkKW6cOjyVSgBgroo6	this is a description	https://picsum.photos/1444/1444
38	testuser	$2b$10$zoLbmFntH4/B2i6308UyWeOcqCbobB/dh7H3Mnw61OwJxU7Jw6cuG	this is a description	https://picsum.photos/1444/1444
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.posts (id, title, content, user_id, created_at, category_id, img_src, likes) FROM stdin;
1	Will Deno2 overtake Node.js	For years, we've been using Node.js for the ba\nckend of our applications, leveraging its non-blocking, event-driven architecture to handle numerous concurrent connections efficiently. However, with the rise of new tec\nhnologies and the evolving needs of our projects, we've decided to explore alternative solutions. After extensive research and testing, we're excited to announce that we'\nll be transitioning to a more robust and scalable framework that promises enhanced performance and security features, ensuring that our applications remain cutting-edge a\nnd reliable for our users.	1	2025-04-22 15:18:48.334564	3	https://picsum.photos/1200/1200	5
2	How to type fast (100 words per minute)	I spent too much time trying to improve my typing speed by doing the wrong things, focusing on memorizing key positions and repetitive drills. However, I've recently discovered that the key to faster and more accurate typing lies in practicing with real-world text, focusing on muscle memory, and using typing software that adapts to my learning pace. By incorporating these methods, I've seen a significant improvement in both my speed and accuracy, making my typing efforts more efficient and productive.	2	2025-04-22 15:21:57.081339	3	https://picsum.photos/1199/1200	3
3	Creating my own database system, from scratch !	I realised that some aspects of the current databases are bad, so I decided to create one myself, focusing on optimizing performance, enhancing security, and improving data integrity. By designing a database tailored to our specific needs, I've been able to address the limitations of existing systems and provide a more efficient and reliable solution for managing our data.	3	2025-04-22 15:24:01.619307	3	https://picsum.photos/1199/1199	0
4	Creating my own database system, from scratch !	I realised that some aspects of the current databases are bad, so I decided to create one myself, focusing on optimizing performance, enhancing security, and improving data integrity. By designing a database tailored to our specific needs, I've been able to address the limitations of existing systems and provide a more efficient and reliable solution for managing our data.	4	2025-04-22 15:24:22.491236	6	https://picsum.photos/2199/1199	0
6	Tutorial - Generate Mock Data	You switch on your favorite mock server tool (yes, Mockoon), and start wondering how you could return a huge amount of realistic posts on a GET /posts endpoint. Here is where the helpers available in Mockoon come into play. By using a combination of repeat, image.avatar, lorem.sentences, etc., you can quickly get a massive amount of random data. Combined with the latency option, you can even simulate a slow server and check how your application behaves under stress. To use the templating system, you only have to use the response body editor and start adding your content	4	2025-04-25 09:35:59.790235	3	https://picsum.photos/400/730	0
5	My journey in Alès	LOREM IPSUM	4	2025-04-22 15:26:39.123254	6	https://picsum.photos/2199/2199	1
8	Elevate Your Style: Top Trends for the Fashion-Forward	Staying on-trend has never been easier with the latest fashion insights at your fingertips. This season, embrace bold colors and statement pieces that reflect your unique personality. Sustainable fashion is also taking center stage, encouraging us to invest in timeless, eco-friendly garments. Don't forget to accessorize with stylish yet practical items like oversized bags and chunky jewelry. Whether you're dressing up for a special occasion or keeping it casual, these trends will ensure you step out in style	1	2025-04-25 09:44:54.001142	1	https://picsum.photos/1881/1803	0
9	Wanderlust Chronicles: Your Guide to Unforgettable Journeys	Traveling opens doors to new experiences and cultures, enriching our lives in countless ways. Whether you're planning a weekend getaway or an extended adventure, exploring the world has never been more accessible. Discover hidden gems off the beaten path, indulge in local cuisines, and immerse yourself in the history and traditions of each destination. Embrace the joy of spontaneous detours and cherish the memories you create along the way. Let your wanderlust lead you to extraordinary places and transformative moments.	4	2025-04-25 09:46:23.405781	6	https://picsum.photos/1702/1803	0
10	Stride into Fitness: Tips for Beginner Runners	Starting your running journey is an exciting step towards a healthier lifestyle. Begin with the right gear, including comfortable running shoes and breathable clothing. Set realistic goals and gradually increase your distance and pace. Incorporate a mix of easy runs, interval training, and rest days to build endurance and prevent injury. Stay motivated by joining a running group or tracking your progress with a fitness app. Most importantly, listen to your body and enjoy the journey to becoming a confident runner.	1	2025-04-25 09:48:08.926411	8	https://picsum.photos/800/400	0
11	Building Strength: A Beginner's Guide to Weightlifting	Embarking on a weightlifting journey can transform your body and boost your confidence. Start with a solid foundation by learning proper form and technique for key exercises like squats, deadlifts, and bench presses. Invest in quality equipment or join a gym that suits your needs. Develop a balanced workout routine that targets all major muscle groups, and don't forget the importance of rest and nutrition. Track your progress and celebrate your gains as you build a stronger, healthier you.	5	2025-04-25 09:48:44.631423	8	https://picsum.photos/1800/1400	0
13	Holistic Health: Nurturing Body, Mind, and Soul	Achieving optimal health involves more than just physical fitness. It's about nurturing your body, mind, and soul. Incorporate a balanced diet rich in nutrients, stay hydrated, and engage in regular physical activity. Prioritize mental well-being through mindfulness practices like meditation and yoga. Foster strong social connections and engage in activities that bring you joy. By taking a holistic approach, you can enhance your overall well-being and lead a happier, healthier life.	1	2025-04-25 09:52:13.8236	2	https://picsum.photos/600/400	0
14	Mastering Python: Essential Tips for Beginner Coders	Embarking on your coding journey with Python is an exciting step towards mastering a valuable skill. Start with the basics of syntax and data structures, then gradually explore more advanced topics like functions and object-oriented programming. Practice regularly by working on small projects and participating in coding challenges. Join online communities and forums to seek help and share knowledge. With dedication and persistence, you'll soon be writing efficient and elegant Python code.	1	2025-04-25 11:40:52.337801	3	https://picsum.photos/800/501	0
16	test	## This is markdown text\nThis is a post actually written on the website	38	2025-05-10 15:10:10.249344	3	https://picsum.photos/933/1006	0
15	Journey Through Europe: Must-See Destinations and Hidden Gems	Europe is a treasure trove of diverse cultures, historic sites, and breathtaking landscapes. From the romantic canals of Venice to the vibrant streets of Barcelona, each destination offers a unique experience. Explore the hidden gems of lesser-known towns and indulge in local cuisines that tell the story of each region. Whether you're a history buff, a food enthusiast, or an adventure seeker, Europe has something to offer everyone.	1	2025-04-25 11:41:53.373973	6	https://picsum.photos/800/1430	1
7	Unlocking Wellness: Simple Steps for a Healthier You	Embarking on a journey to better health doesn't have to be overwhelming. By incorporating small, consistent changes into your daily routine, you can significantly improve your well-being. Start with a balanced diet rich in fruits, vegetables, and whole grains. Regular exercise, even just 30 minutes a day, can boost your energy and mood. Don't forget the importance of adequate sleep and stress management techniques like meditation or yoga. Prioritizing these aspects can lead to a happier, healthier you.	2	2025-04-25 09:43:36.046477	2	https://picsum.photos/2002/1803	0
12	Fall Fashion Trends: Style Inspiration for the Season	As the leaves change color, so does the world of fashion. This fall, embrace rich textures and warm hues that reflect the season's charm. Layering is key, so invest in versatile pieces like trench coats, chunky knits, and ankle boots. Don't shy away from bold prints and statement accessories that add a touch of personality to your outfits. Whether you're updating your wardrobe or seeking inspiration, these trends will keep you stylish and comfortable all season long.	1	2025-04-25 09:51:43.6436	1	https://picsum.photos/800/600	0
17	Discover the world	Traveling is more than just moving from one place to another; it's about experiencing new cultures, tasting exotic cuisines, and creating memories that last a lifetime. Whether you're a seasoned traveler or a first-time adventurer, this guide will help you make the most of your journey.\nPlanning Your Trip\n\n    Choose Your Destination:\n        Research: Use travel guides, blogs, and forums to gather information about potential destinations.\n        Budget: Consider the cost of flights, accommodation, and activities.\n        Season: Check the best time to visit to avoid extreme weather or peak tourist seasons.\n\n    Book Your Flights:\n        Compare Prices: Use flight comparison websites to find the best deals.\n        Flexible Dates: If possible, be flexible with your travel dates to get cheaper fares.\n        Loyalty Programs: Join airline loyalty programs to earn points and enjoy perks.\n\n    Accommodation:\n        Hotels: Ideal for those who prefer comfort and convenience.\n        Hostels: Great for budget travelers and solo adventurers.\n        Vacation Rentals: Perfect for families or groups who want a home-like experience.\n\nPacking Tips\n\n    Essentials: Passport, visas, travel insurance, and any necessary medications.\n    Clothing: Pack versatile clothing that can be layered for different weather conditions.\n    Electronics: Don't forget your phone, charger, and any other essential gadgets.\n    Toiletries: Bring travel-sized toiletries to save space.\n\nExploring Your Destination\n\n    Local Cuisine: Try local dishes and visit popular restaurants and street food markets.\n    Cultural Experiences: Attend local festivals, visit museums, and explore historical sites.\n    Adventure Activities: Depending on your destination, you might enjoy hiking, scuba diving, or skiing.\n\nStaying Safe\n\n    Health: Get any necessary vaccinations and carry a basic first aid kit.\n    Safety: Be aware of your surroundings, avoid risky areas, and keep your valuables secure.\n    Emergency Contacts: Keep a list of emergency contacts, including the local embassy or consulate.\n\nMaking Memories\n\n    Photography: Capture the beauty of your destination with photos and videos.\n    Journaling: Keep a travel journal to document your experiences and reflections.\n    Souvenirs: Bring back unique souvenirs to remind you of your adventures.\n\nTraveling is an enriching experience that broadens your horizons and creates lasting memories. So pack your bags, set off on your journey, and discover the wonders of the world!\n\nEnjoy your travels!	38	2025-05-10 15:14:51.236656	6	https://picsum.photos/353/1000	1
18	We did it !	# This instance of parloir-blog is wonderful !\nHere it is, I did it, every feature I want is working !!	38	2025-05-11 11:58:25.537741	3	https://picsum.photos/1082/340	1
\.


--
-- Data for Name: editors_choice; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.editors_choice (id, post_id, selected_at) FROM stdin;
2	2	2025-04-25 11:42:58.114328
3	3	2025-04-25 11:43:18.098055
4	5	2025-04-25 11:43:21.681568
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.likes (user_id, post_id, liked_at) FROM stdin;
2	1	2025-04-25 14:32:30.180901
3	1	2025-04-25 14:32:33.348336
4	1	2025-04-25 14:32:35.544584
5	1	2025-04-25 14:32:38.480266
5	2	2025-04-25 14:32:49.451338
4	2	2025-04-25 14:32:51.76086
38	1	2025-05-08 15:10:57.698992
38	2	2025-05-10 10:46:45.869272
38	17	2025-05-10 15:24:06.811033
38	18	2025-05-11 11:58:56.660151
38	15	2025-05-10 09:53:25.203794
38	5	2025-05-10 09:57:05.900595
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.categories_id_seq', 8, true);


--
-- Name: editors_choice_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.editors_choice_id_seq', 4, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.posts_id_seq', 18, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.users_id_seq', 43, true);


--
-- PostgreSQL database dump complete
--

