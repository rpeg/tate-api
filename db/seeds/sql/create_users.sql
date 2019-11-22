CREATE SEQUENCE IF NOT EXISTS users_id_seq;

CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "age" int4 NOT NULL,
    "location" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);