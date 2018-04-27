------------------------
--Table create scripts--
------------------------

--USERS TABLE--
create TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(20)NOT NULL,
last_name VARCHAR(20)NOT NULL,
username VARCHAR(20)NOT NULL,
password VARCHAR(200)NOT NULL,
email VARCHAR(200)NOT NULL,
user_type VARCHAR(20)NOT NULL
);

--GUEST_USERS TABLE--
create TABLE guest_users(
id SERIAL PRIMARY KEY,
name VARCHAR,
email VARCHAR(200)
);

--INFORMATION TABLE--
CREATE TABLE information(
id SERIAL PRIMARY KEY,
description VARCHAR,
category VARCHAR
);

--EVENTS TABLE--
CREATE TABLE events(
id SERIAL PRIMARY KEY,
title VARCHAR NOT NULL,
date DATE NOT NULL,
time TIME NOT NULL,
description VARCHAR NOT NULL,
notes VARCHAR NOT NULL,
category VARCHAR NOT NULL,
photo_url VARCHAR NOT NULL,
age_group VARCHAR,
price MONEY
);

--MAP TABLE--
CREATE TABLE map(
id SERIAL PRIMARY KEY,
location_name VARCHAR,
lat DECIMAL NOT NULL,
long DECIMAL NOT NULL,
reveal_type VARCHAR
);

--ARTIFACT TABLE--
CREATE TABLE artifact(
id SERIAL PRIMARY KEY,
type VARCHAR NOT NULL,
year VARCHAR,
material VARCHAR,
artist_name VARCHAR,
title VARCHAR,
description VARCHAR,
extended_description VARCHAR,
media_url VARCHAR,
view_count INTEGER
);

--MAP_ARTIFACT_JOIN TABLE--
CREATE TABLE map_artifact_join(
id SERIAL PRIMARY KEY,
artifact_id INTEGER REFERENCES artifact(id),
location_id INTEGER REFERENCES map(id),
main_photo BOOLEAN,
priority INTEGER
);

----------------------------
--------Data import---------
----------------------------

--INSERT ARTIFACT--
BEGIN;
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (9,'','year...','','','poem title here','poem description here...','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (1,'sculpture','1776','stone','Tony Caponi','Pompei','Description of Pompei','Extended description of Pompei','',45);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (7,'bathroom','2336','plastic','John','Bathroom','Description','More description here','',105);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (10,'sculpture','1234','jk','klj','new sculpture','<p>jkj</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (11,'sculpture','1234','jk','klj','new sculpture','<p>jkj</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (12,'sculpture','dk','kj','kj','sculp','<p>jk</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (13,'sculpture','fd','f','f','fd','<p>f</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (14,'sculpture','f','fd','fd','f','<p>fd</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (15,'sculpture','df','fd','fd','f','<p>dfd</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (16,'sculpture','df','fd','f','fdd','<p>sdf</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (17,'sculpture','sdfs','sfd','dfd','dfd','<p>dfs</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (18,'sculpture','fda','fda','fdf','fdad','<p>dsf</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (19,'sculpture','1234','no','k','new sculpture','<p>description</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (25,'sculpture','1900','gold','Capones','new sculpture','<p>blah blah blah blah</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (26,'sculpture','1900','silver','capones','new sculp','<p>blah blah blah blah</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (27,'sculpture','1900','silver','capones','new sculp','<p>wrar</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (28,'sculpture','1200','yes','df','new one','<p>here is the description!!!</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (40,'sculpture','1980-1987','Relief','','Pompeii','<p>In 70 A.D. Mount Vesuvius erupted and buried the city of Pompeii preserving the ancient Roman city and its victims for modern viewers. Caponi imagined how people might have responded to the tragedy. huddling together for protection. and like an archeological dig. only part of the subject is visible. The rest is still buried in the hill. Pompeii was modeled in place out of clay, local dirt and cement. Molds were made and cast in Caponi''s studio at Macalester College. The finished pieces were then returned to the site. </p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (41,'sculpture','1968','Welded Metal, Stainless Steel and Fieldstone','','Struggle of the Elements','<p></p><p>By transforming old car bumpers into a work of art. Struggle of the Elements dynamically embodies Caponi''s physical strength in the shaping of the metal and his love of stone. </p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (42,'sculpture','1982-2005','Shaped Concrete','','Snake','<p></p><p></p><p>The snake at Caponi Art Park is like no other in nature with the head of a rattlesnake and the body of an anaconda. The sculpture was shaped directly in place using poured concrete. This material requires quick work as the concrete sets rapidly. and once it''s set you can''t change it. Consistent with the philosophy of the park. this sculpture is an integral part of the hill that supports the studio. </p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (43,'sculpture','1986','2-ton Granite Bolder','','Nugget','<p></p><p></p><p></p><p>Nugget is a good example of Caponi''s use of stone. The stone''s exterior is left almost untouched as he worked the interior to discover its natural variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design. </p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (44,'sculpture','1967','Limestone','','Lovers','<p></p><p></p><p></p><p></p><p>Caponi sculpted this limestone boulder as an abstrac - tion of love and fertility. Caponi carved in response to information given him by the stone and coaxed out the form hidden within. </p><p><br/></p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (46,'photo','','','','','','','https://cdn.filestackcontent.com/fC3LXsa1TdSgsqsKJHDM',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (48,'photo','','','','','<p>A Walk in Outerspace</p>','','https://cdn.filestackcontent.com/JiB8f8jQCGp0IAB9GvUO',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (49,'sculpture','1968','Corten Steel, Rebar, Granite','','A Walk in Outerspace','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (50,'photo','','','','','<p>Base of sculpture</p>','','https://cdn.filestackcontent.com/Nn9Dw68QQGONb3ubNzTH',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (53,'sculpture','1967','','','Praying Mantis','<div>&#34;Not your fathers Cadillac&#34;</div><div><br/></div><p>Caponi created this work out of 1960''s era Cadillac car parts. The sculpture was originally installed outside a private home in St. Paul It was stolen in the 1970s, put up for ransom, and then dropped off of a highway bridge. In 2011 the piece was donated to the Art Park, restored and given a permanent home. </p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (54,'video','','','','','','','https://www.youtube.com/embed/VwibC_6tgsM',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (57,'sculpture','2016','','','Coiled Perch','<div></div><p>Coiled Perch was made possible by a generous donation from the Italian Cultural Center. The functional bench fractures and twists into the ground, echoing the natural decay found throughout the woods in the park. </p><p><br/></p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (45,'poem','','','','','<p>An ideal grows from the soil of experience,</p><p>in the light of wisdom and time,</p><p>reaches full bloom, then seeds into words</p><p>WORDS!  That''s all there is to an ideal that is not replanted,</p><p>by each person in the soil of new experiences.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (55,'poem','','','','','<p><b>​</b><i><b>A</b>s fact,</i></p><p><i>by whatever name you know me,</i></p><p><i>that I may be:</i></p><p><i>a cheat and honest man,</i></p><p><i>a father, husband and son;</i></p><p><i>cruel, biased and kind;</i></p><p><i>ignorant, stupid and wise.</i></p><p><i>As truth,</i></p><p><i>by whatever name you call me,</i></p><p><i>you won''t understand</i></p><p><i>unless you know the proportion</i></p><p><i>of all these things I am.</i></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (47,'photo','','','','','<p>Anthony Caponi</p>','','https://cdn.filestackcontent.com/u4cuo3OSACFBDuldwtap',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (52,'photo','1986','2 ton granite boulder','Anthony Caponi','Mars','<p class=''p1''>Nugget is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design.</p><p><br/></p><p><br/></p><p><br/></p>','','https://cdn.filestackcontent.com/na2aQWoKSAkbq2FzKg7r',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (76,'photo','','','','','','','https://cdn.filestackcontent.com/pTYnIhgQIKrMkZrCNRSA',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (61,'sculpture','2018','','Mary Mosman','Gacrux','','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (59,'photo','','','','','<p>Artist, Korrin Lohmann</p>','','https://cdn.filestackcontent.com/FYppmaetTtK18mcJx6Zw',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (66,'sculpture','1968','Corten Steel, Rebar, Granite','Anthony Caponi','A Walk in Outerspace','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (67,'sculpture','1900','Wood','Anthony Caponi','This star lookin thing','<p>skej,f</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (77,'photo','','','','','','','https://cdn.filestackcontent.com/clrBsbBYT0CVde7kB94C',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (70,'sculpture','1989','Steel','Anthony Caponi','Walk acroos the universe','<p>Metal Sculpture</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (79,'photo','','','','','<p>Anthony Caponi</p>','','https://cdn.filestackcontent.com/xuLYyEkMS5Kbfz4V9Er3',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (80,'photo','','','','','','','https://cdn.filestackcontent.com/P6uYro74SwaXI0cLLjbU',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (81,'photo','','','','','','','https://cdn.filestackcontent.com/6aRmJLcQS7uIHqkvwhyV',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (82,'photo','','','','','','','https://cdn.filestackcontent.com/tvJnciBFR5uqLdwSjyaN',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (83,'photo','','','','','','','https://cdn.filestackcontent.com/j9tlhvbQSAybuJez6os1',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (84,'photo','','','','','<p>Anthony Caponi</p>','','https://cdn.filestackcontent.com/2bo6n8aVR6qGadvqnbik',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (85,'photo','','','','','','','https://cdn.filestackcontent.com/RArmOPprQpqRBHZVQcOG',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (86,'photo','','','','','','','https://cdn.filestackcontent.com/fRRAm5IiTaaCjqPxmefB',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (89,'photo','','','','','','','https://cdn.filestackcontent.com/YoAYjWdRZFg9mOoLjQvn',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (90,'photo','','','','','<p>A Walk in Outerspace</p>','','https://cdn.filestackcontent.com/qKObfOWATgWZvFs69CO5',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (97,'','','','','','','','rY0Nrue93IM',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (98,'','','','','','','','rY0Nrue93IM',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (100,'video','','','','','<p>Top 10 Most Talented Sculptors</p>','','https://www.youtube.com/embed/N6-2QulDrZ4',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (101,'poem','','','','The Farmers Garden','<p>With His multi-bladed plow on finger tips</p><p>The Farmer each season works the earth;</p><p>Raking the soil with impartial symmetry</p><p>Through tangled weeds and tired flowers</p><p>To plant new seeds on fresh graves,</p><p>Bone-dust, and dissolves flesh,</p><p>He grips within the tomb of His fist.</p><p>He gives it shape, holds it a moment,</p><p>In the open cradle of His hand,</p><p>Then returns it, gently, to His garden.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (104,'writing','','','','Creativity','<p><i>Creative involvement of body and mind is a spiritual experience that brings heaven to earth and the awareness of a supreme order into every humble task one performs.</i>​</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (72,'poem','','','','Thought and Feeling','<div><p style=''text-align: center;''>I feel, &#34;therefore I am.&#34;</p><p style=''text-align: center;''>I am, before I think.</p><p style=''text-align: center;''>I think to expand and protect what I am.</p></div>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (87,'poem','','','','','<p>Man sees himself through love and labor;</p><p>as he touches the world of spirit and forms with</p><p>the ungloved hands of his mind and body;</p><p>as he lets reality touch him with the weight</p><p>of mountains and the spirit of open skies;</p><p>as he views his objects of love and self expression,</p><p>and hears his soul exclaim, &#34;That, and that,</p><p>I am!&#34;</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (88,'writing','','','','','<p>Mamma remained the loving parent I had known as a child.</p><p>Her love never faltered, even as she became one of that special kind of people who </p><p>left their roots in another land like cut flowers, soaking in stagnant water, </p><p>living their life through rootless stems.</p><p>This description also fit my father and many of our neighbors.</p><p>It fit Aunt Tomassina who had brought my young cousins to this country, ten years earlier.</p><p>This was a community of laborers who, after months of unemployment, now worked for the WPA at minimal wages.</p><p>Working people did not suffer great shock from economic reserves.</p><p>When their fortune stumbled, it didn''t have far to fall.</p><p>They were close to the ground and grew from it let their daily food on unclaimed open land.</p><p>They raised their hopes and expectations for their children,</p><p>to achieve the dream that eluded them in this &#34;land or opportunity&#34;.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (75,'writing','','','','','<p>I pointed at bread, under a glass counter, and a woman gave me the whole loaf.</p><p>I really wanted a sandwich but thought better than to point at a whole ham.</p><p>I put a fistful of change on the counter, then picked up what the lady had not taken.</p><p>I saw a man with a cart full of bananas, a fruit i had only seen in pictures, and watched how other people selected and paid for their purchase. I did likewise and paid with a large enough coin that would spare me from conceding I didn''t understand the asking price, or the change owed me. </p><p>With the novel fruit in my arms, I sneaked behind some freight cars, with the apprehension Adam and Even must have felt when they succumbed to the lure of the forbidden fruit.</p><p>My first bite filled the mouth with tasteless slime. </p><p>The spitting and the tossing of the bananas was one reflex.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (73,'writing','','','','','<p>From where I stand,</p><p>faith carries more truth than a half-spun thought</p><p>and weighs much less than fear of death.</p><p>Sorrow or compassion is evidence of life.</p><p>The deceased does not suffer from his own passing.</p><p>If eternal I am, I must have died many times</p><p>as a consequence of having lived.</p><p>My proof of eternal resurrection is my last arrival.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (105,'writing','','','','Gravel Pit of Words','<p>For the person who uses words like so many empty boxes stacked in the warehouse of his mind, waiting to be filled with meaning, his harvest will be more words, defined by other words, as empty boxes fitted within boxes within boxes, until containers become contents and all content is no more than empty containers.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (58,'poem','','','','Reflected Light','<p style=''text-align: center;''>Under the spell</p><p style=''text-align: center;''>Of a frowning rock,</p><p style=''text-align: center;''>Under </p><p style=''text-align: center;''>A vaulted twilight,</p><p style=''text-align: center;''>Hell''s dilated vision</p><p style=''text-align: center;''>Bares the layers</p><p style=''text-align: center;''>Of crusted time</p><p style=''text-align: center;''>And I behold</p><p style=''text-align: center;''>The gray pastures</p><p style=''text-align: center;''>Of Altamira</p><p style=''text-align: center;''>Where bison and deer</p><p style=''text-align: center;''>And woolly mammoths</p><p style=''text-align: center;''>Lick</p><p style=''text-align: center;''>Their charcoal shadows.</p><p style=''text-align: center;''><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (60,'poem','','','','within a passing shadow','<div><p style=''text-align: center;''>An owl blinked and night came,</p><p style=''text-align: center;''>Before my day would yield its sun.</p><p style=''text-align: center;''>The cows returning to the barn</p><p style=''text-align: center;''>Pressed a full udder between their thighs;</p><p style=''text-align: center;''>The tulips, in shock, closed their petals;</p><p style=''text-align: center;''>And I lay awake in the passing shadow;</p><p style=''text-align: center;''>Until</p><p style=''text-align: center;''>The moon, warm with tomorrows sun,</p><p style=''text-align: center;''>Tipped as it rose through the woods</p><p style=''text-align: center;''>Spilling its light in the cup of my senses,</p><p style=''text-align: center;''>Soothing the night with the touch of tepid milk.</p><p style=''text-align: center;''>​</p></div>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (74,'poem','','','','Art is of Man','<div><p style=''text-align: center;''>Born of chaos</p><p style=''text-align: center;''>and the need to harmonize;</p><p style=''text-align: center;''>Born of boredom</p><p style=''text-align: center;''>And the need to vitalize;</p><p style=''text-align: center;''>Born of complexity</p><p style=''text-align: center;''>and the need to clarify;</p><p style=''text-align: center;''>Born of ambiguity</p><p style=''text-align: center;''>and the need to emphasize;</p><p style=''text-align: center;''>Born of ideas</p><p style=''text-align: center;''>and the need to visualize;</p><p style=''text-align: center;''>Born of hate</p><p style=''text-align: center;''>and the need to transform it;</p><p style=''text-align: center;''>Born of pain</p><p style=''text-align: center;''>and the need to share its meaning;</p><p style=''text-align: center;''>Born of pleasure</p><p style=''text-align: center;''>and the need to intensify it;</p><p style=''text-align: center;''>Born of love</p><p style=''text-align: center;''>and the need to express it.</p></div>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (106,'anecdote','','','','','<p><b>W</b>ith unencumbered innocence we, the children of the mountains, understood​ without reference to reason or words.</p><p>No one tried to explain the imposing reality of Monte Vettore.</p><p>No one offered to take apart knowledge and make of a mountain a gravel pit of words.</p><p>We were born to meaning.</p><p>We were born of the world to grateful parents who embraced a child as the embodiment of love and God''s gift of life.</p><p>We were substance and spirit, creatures and creators.</p><p>We touched earth with our barefooted senses and felt as one with the world.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (103,'writing','','','','','<p>The Sunday Mass went beyond mere ritual.</p><p>The service included everything but the choir.</p><p>Don Alfonso gave an emotional sermon for a congregation of two, counting the Major who understood no Italian.</p><p>With arms raised high, the good monk thanked God for having sent the Allied troops to liberate his people.</p><p>&#34;You have come as the Archangel with the flaming sword to do battle with Satan.&#34;</p><p>The people on the streets, out of envy or spite, told me how a few weeks before,</p><p>Don Alfonso had thanked God and the Germans for defending Rome with the same Archangel and his flaming sword.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (111,'sculpture','1971','Red granite','Anthony Caponi','Cornerstone','<p>Cornerstone represents the duality of humankind - the intellectual progression of man. On one side cuneiform letters to musical notes in Beethoven''s 5th symphony to the mathematics of Einstein''s equation. On the other side, the organic, natural forms that still resonate with our caveman nature.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (113,'sculpture','1957','Reinforced concrete','Anthony Caponi','Adam''s Rib','<p>Caponi manipulated and abstracted forms as he modeled this figure in clay. He later cast in concrete, an experiment that he hoped would prove concrete to be affordable, castable and permanent material to stand up to Minnesota''s harsh weather.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (114,'sculpture','1957','Reinforced Concrete','Anthony Caponi','Adam''s Rib','<p>Caponi manipulated and abstracted forms as he modeled this figure in clay. He later cast in concrete, an experiment that he hoped would prove concrete to be affordable, castable and permanent material to stand up to Minnesota''s harsh weather.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (115,'sculpture','1968','Corton steel, rebar, granite','Anthony Caponi','Walk in Outer Space','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (116,'photo','','','','','<p>Pompeii</p>','','https://cdn.filestackcontent.com/GKMPtHSTESz4oUqReHB0',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (117,'sculpture','1970','Saw blades','Anthony Caponi','Monument to a Lumberjack','<p>When Caponi first purchased this land it was covered with fallen trees. These two person saw blades were used to clear trails and create a lawn that was the beginning of making the park. After the saw blades were too dull for use, he created this monument to the Lumberjacks that helped build Minnesota.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (118,'sculpture','1970','Saw blades','Anthony Caponi','Monument to a Lumberjack','<p>When Caponi first purchased this land it was covered with fallen tress. These two person saw blades were used to clear trails and create a lawn that was the beginning of making the park. After the saw blades were too dull for use, he created this monument to the lumberjacks that helped build Minnesota.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (119,'photo','','','','','<p>Pompeii close up</p>','','https://cdn.filestackcontent.com/qn6jXGJGRDuKGibsxKax',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (120,'sculpture','1990','Granite','Anthony Caponi','Two Lovers','','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (121,'sculpture','2010','Rebar','Korrin Lohmann','Coiled Perch','<p>Coiled Perch was made possible by a generous donation from the Italian Cultural Center. The functional bench fractures and twists into the ground, echoing the natural decay found throughout the woods in the park. </p><p><br/></p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (123,'photo','','','','','','','https://cdn.filestackcontent.com/tQ4Z94ooRYqVDpwIvUHb',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (126,'sculpture','tfghvmbn','fghvjbmn','fyghjvbmn','ytfjvhjb','<p>vjghbmn</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (127,'photo','','','','','<p>Mars</p>','','https://cdn.filestackcontent.com/xAi7zNZlRMCrPui6LN6u',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (147,'sculpture','','','','Ampetheater','<p>Ampetheater</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (145,'sculpture','4','','','picnic','<p>https://boiling-oasis-78196.herokuapp.com/#!/admin/manageadmins<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (137,'sculpture','1900','wood','Anthony Caponi','sculpture','<p>here is a sculpture</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (138,'sculpture','1960','Stone','Caponi','Mars','<p>Mars is here</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (142,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (148,'sculpture','1969','Granite','Anthony Caponi','Mars','<p class=''p1''>Mars is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design. <br/></p><p><br/></p><p><br/></p><p><br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (143,'photo','','','','','<p>Leaf Canopy</p>','','https://cdn.filestackcontent.com/cu3QGdpGTQidnP0lEN5v',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (150,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design. <br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (107,'anecdote','1988','','','mars','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (146,'sculpture','','','','bathroom','<p>You know what a bathroom is</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (152,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars is a great statue.</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (144,'sculpture','','','','mars','<p>This sculpture was inspired by the first walk in space when the astronauts were connected to the safety of the space capsule by only a thin umbilical cord. Here the umbilical cord wraps around a granite Earth that provides the source of life. While modern technology has removed the need for a physical attachment while in space. our connection to Mother Earth remains unchanged. In the construction of Walk in Outer Space. Caponi used a new -space age-material-CORTEN steel-where the surface rust creates a protective coating for the metal.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (122,'sculpture','1985','Granite','Anthony Caponi','Mars!','<p>Granite, siiliar to ars</p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (154,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design.<br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (156,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design. <br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (158,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars is a good example of Caponi’s use of stone. the stone exterior is left almost untouched as he worked the interior to discover its nature variations. The subject matter of the sculpture is the stone itself. The marks left by the tools have become an element of the design. <br/></p>','','',0);
INSERT INTO ARTIFACT (id,type,year,material,artist_name,title,description,extended_description,media_url,view_count) VALUES (160,'sculpture','1969','Granite','Anthony Caponi','Mars','<p>Mars sculpture.</p>','','',0);
--ROLLBACK
--COMMIT

--INSERT EVENTS--
BEGIN;
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (8,'Hot Art! Workshops','2018-07-17','18:00:00','Learn how to translate your design into an open faced sand mold that will be filled with molten metal at the community iron pour. Students will gain a basic understanding of metal casting and come away with an object of their design. All ages are welcome! No previous experience required. Families with young children can work together. Extra molds will be available at the pour for last minute enthusiasts. Price per pour.','Add sign up link.','Workshop','https://cdn.filestackcontent.com/T0cwYvkyRkefI3bpQPtz','12+','$(35.00');
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (6,'Round the Bend Music & Beer: Sawtooth Brothers w/ Stanton West','2018-08-17','17:30:00','Join us at the park for an evening celebrating music, beer, and food. Grab a blanket, bring friends, family or your dog and relax under the leafy canopy. Enjoy your favorite music while you sip on a beer from Eagan’s Bald Man Brewing Company and have a bite to eat from the food trucks.','Bald Man Brewing Company','Music','https://cdn.filestackcontent.com/ELR4O9ZqTjunXcxhzlHx','free for children under 12','$15.00');
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (10,'Kevin Kling & Simone Perrin','2018-08-19','18:30:00','Kevin Kling and Simone Perrin collaborate to create a performance that covers a range of humor, tenderness and music. Kevin Kling, best known for his (popular commentaries on National Public Radio’s All Things Considered and his storytelling stage shows, delivers hilarious, often tender stories. Kling’s autobiographical tales are as enchanting as they are true to life: hopping freight trains, getting hit by lightning, performing his banned play in Czechoslovakia, growing up in Minnesota, and eating things before knowing what they are. Joining Kling will be theater actress, composer, vocalist and accordionista Simone Perrin, who has been featured on A Prairie Home Companion and performs frequently with Kevin.','Add purchase link','Music','https://cdn.filestackcontent.com/WLBMUHUBS1O8tkTKmr4u','free for (children under 12','$5.00');
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (4,'Round the Bend Music & Beer: Elizabeth Ghandour','2018-07-13','18:30:00','Join us at the park for an evening celebrating music, beer, and food. Grab a blanket, bring friends, family or your dog and relax under the leafy canopy. Enjoy your favorite music while you sip on a beer from Eagan’s Bald Man Brewing Company and have a bite to eat from the food trucks.','Bald Man Brewing Company','Music','https://cdn.filestackcontent.com/fN9oZBTgfmsoZTsGZg1q','free for children under 12(','$15.00');
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (3,'Round the Bend Music & Beer: AHI with Land at Last','2018-06-08','17:30:00','Join us at the park for an evening celebrating music, beer, and food. Grab a blanket, bring friends, family or your dog and relax under the leafy canopy. Enjoy your favorite music while you sip on a beer from Eagan’s Bald Man Brewing Company and have a bite to eat from the food trucks.','Bald Man Brewing Company','Music','https://cdn.filestackcontent.com/xG47IrFJRyyNagmTRErA','free for children under 12','$15.00');
INSERT INTO events (id,title,date,time,description,notes,category,photo_url,age_group,price) VALUES (7,'Hot Art! Workshops','2018-07-14','10:00:00','Learn how to translate your design into an open faced sand mold that will be filled with molten metal at the community iron pour. Students will gain a basic understanding of metal casting and come away with an object of their design. All ages are welcome! No previous experience required. Families with young children can work together. Extra molds will be available at the pour for last minute enthusiasts. Price per pour.','Add sign up link.','Workshops','https://cdn.filestackcontent.com/eGaqiob1Q0Ko8G826gHS','12+','$35.00');
--ROLLBACK
--COMMIT

--INSERT USERS--
BEGIN;
INSERT INTO users(id,first_name,last_name,username,password,email,user_type) VALUES (37,'Steven','Reid','admin','$2a$10$MYCgCIjWXi01XVZ94mQgfusdo494Xt.FYWjLjDTOHQDfw5C2NM2EG','steven@caponiartpark.org','')
--ROLLBACK
--COMMIT

--INSERT MAP--
BEGIN;
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (9,'Struggle of the Elements',44.80479332170508,-93.15334187829228,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (10,'Snake',44.80502930052672,-93.15306024634572,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (13,'Cornerstone',44.805588794843025,-93.15182106578084,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (15,'Lovers',44.805642079732976,-93.15154211604329,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (17,'Queen',44.805980818239775,-93.15039413058491,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (18,'Lovely Lookout',44.80618253797854,-93.15268473708363,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (19,'Quant Arrival',44.80603029673155,-93.15311925494404,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (20,'Shelter',44.80582477041079,-93.15302805983754,'bathroom');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (21,'Eternal Struggles',44.8058476067048,-93.15328018748494,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (23,'Reflected Light',44.80543274595372,-93.15311925494404,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (25,'Labrinth',44.80617873195231,-93.1510754116747,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (27,'The Eye',44.805219605325114,-93.15308706843587,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (28,'Genesis',44.80517773832338,-93.15291004264088,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (31,'Within a Passing Shadow',44.80504642798425,-93.15436648213597,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (33,'Overlook',44.80435561649623,-93.1530039199564,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (34,'David Culver',44.803843687495,-93.15416799866887,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (35,'Picnic Area',44.80375043599823,-93.15413044774266,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (36,'Bathroom',44.80393693884105,-93.15288858496876,'bathroom');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (37,'Amphitheater',44.80367811840714,-93.15245943152638,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (38,'Leaf Canopy',44.80584950972873,-93.15398024403783,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (39,'Crest',44.80629100962174,-93.15308438622685,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (8,'Pompeii',44.80483709204329,-93.15385418021413,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (51,'Adam''s Rib',44.80527479359893,-93.15326141202183,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (52,'Walk in Outer Space',44.805175835276906,-93.15344916665288,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (53,'Monument to a Lumberjack',44.80529382402602,-93.15293418252202,'static');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (54,'Two Lovers',44.805236732725916,-93.15312193715306,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (56,'Coiled Perch',44.805518382591465,-93.15158234917851,'proximity');
INSERT INTO map (id,location_name,lat,long,reveal_type) VALUES (72,'name',44.8058076431842,-93.1539748796198,'proximity');
--ROLLBACK
--COMMIT

--INSERT INTO MAP_ARTIFACTS_JOIN--
BEGIN;
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (167,101,54,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (219,143,72,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (220,123,72,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (221,55,72,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (222,103,72,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (223,106,72,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (224,54,72,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (182,127,38,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (183,142,38,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (184,104,38,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (186,127,39,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (187,144,39,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (53,40,8,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (54,41,9,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (55,42,10,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (57,44,15,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (58,45,10,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (188,145,35,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (189,146,36,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (61,47,10,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (62,46,10,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (190,147,37,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (73,58,23,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (75,60,31,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (95,80,15,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (96,73,15,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (99,104,13,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (100,60,13,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (101,106,13,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (102,111,13,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (111,114,51,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (112,89,51,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (113,73,51,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (114,107,51,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (115,77,51,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (116,115,52,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (117,48,52,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (118,50,52,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (119,60,52,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (120,104,52,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (122,73,8,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (123,107,8,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (124,76,53,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (125,117,53,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (126,118,53,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (127,105,53,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (128,107,53,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (129,86,10,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (130,105,10,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (131,119,8,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (132,116,8,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (134,74,39,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (135,60,38,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (141,82,28,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (142,107,28,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (144,100,27,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (148,74,18,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (149,103,19,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (150,75,17,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (151,73,33,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (152,120,54,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (153,83,54,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (155,106,54,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (161,122,56,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (162,123,56,TRUE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (163,59,56,FALSE,0);
INSERT INTO map_artifact_join (id,artifact_id,location_id,main_photo,priority) VALUES (164,100,13,FALSE,0);
--ROLLBACK
--COMMIT

--INSERT INFORMATION--
BEGIN;
INSERT INTO information (id,description,category) VALUES (16,'Cars and bicycles are not allowed beyond the parking lot. A bike rack is available for your use.','guideline');
INSERT INTO information (id,description,category) VALUES (17,'Please help keep the park clean by using trash receptacles located throughout the park.','guideline');
INSERT INTO information (id,description,category) VALUES (19,'Please do not climb on the moss. The moss is a part of the art and difficult to maintain.','guideline');
INSERT INTO information (id,description,category) VALUES (20,'Children should be supervised at all times.','guideline');
INSERT INTO information (id,description,category) VALUES (22,'Buildings located on park property are closed to the public.','guideline');
INSERT INTO information (id,description,category) VALUES (21,'Children are encouraged to touch the sculptures, however, for safety''s sake and to prevent damage, please do not climb on the art.','guideline');
INSERT INTO information (id,description,category) VALUES (31,'Dogs are allowed.','guideline');
INSERT INTO information (id,description,category) VALUES (15,'Park trails are for pedestrians only.','guideline');
--ROLLBACK
--COMMIT

--INSERT GUEST_USERS--
BEGIN;
INSERT INTO guest_users (id,name,email) VALUES (9,'Christiana','christiana.routon@gmail.com')
--ROLLBACK
--COMMIT