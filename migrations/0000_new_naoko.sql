CREATE TABLE "signups_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"signed_up_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "signups_table_email_unique" UNIQUE("email")
);
