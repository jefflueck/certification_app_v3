DROP DATABASE certification;
DROP DATABASE certification_test;
CREATE DATABASE certification;
CREATE DATABASE certification_test;

\connect certification;

DROP TABLE IF EXISTS certifications;
\i /Users/jefflueck/Desktop/Personal/Current_Projects/certification-app-v3/frontend/dbfiles/certification-schema.pgsql
\i /Users/jefflueck/Desktop/Personal/Current_Projects/certification-app-v3/frontend/dbfiles/certification-seed.pgsql

\connect certification_test;

DROP TABLE IF EXISTS certifications;
\i /Users/jefflueck/Desktop/Personal/Current_Projects/certification-app-v3/frontend/dbfiles/certification-schema.pgsql
\i /Users/jefflueck/Desktop/Personal/Current_Projects/certification-app-v3/frontend/dbfiles/certification-seed.pgsql

