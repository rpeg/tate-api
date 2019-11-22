CREATE SEQUENCE IF NOT EXISTS comments_id_seq;

CREATE TABLE "public"."comments" (
    "id" int4 NOT NULL DEFAULT nextval('comments_id_seq'::regclass),
    "artID" int4,
    "content" varchar(255) NOT NULL,
    "name" varchar(255),
    "userID" int4,
    CONSTRAINT "comments_artid_foreign" FOREIGN KEY ("artID") REFERENCES "public"."art"("id"),
    PRIMARY KEY ("id")
);