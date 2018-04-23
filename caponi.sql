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

--ADD RECORDS TO INFORMATION--
INSERT INTO information (description) VALUES ('Park trails are for pedestrians only.');
INSERT INTO information (description) VALUES ('Cars and bicycles are not allowed beyond the parking lot. A bike rack is available for your use.');
INSERT INTO information (description) VALUES ('Please help keep the park clean by using trash receptacles located throughout the park.');
INSERT INTO information (description) VALUES ('Dogs are welcome. Please keep dogs on a leash and pick up after them to keep the park clean.');
INSERT INTO information (description) VALUES ('Please do not climb on the moss. The moss is a part of the art and difficult to maintain.');
INSERT INTO information (description) VALUES ('Children should be supervised at all times. Children are encouraged to touch the sculptures, however, for safety sake and to prevent damage, please do not climb on the art.');
INSERT INTO information (description) VALUES ('Buildings located on park property are closed to the public.');

--ADD USERS
INSERT INTO users (first_name, last_name, username, password, email) VALUES ('Steven', 'Read', 'psychosuzi', '$2a$10$T21OgP/JnpLSFYuakLcPk.feCc9xy6.YGkFlkgt23tRxT59VeWQuO', 'steven@caponiartpark.org');