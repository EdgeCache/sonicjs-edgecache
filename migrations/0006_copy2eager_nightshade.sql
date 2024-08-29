CREATE TABLE `employees` (
	`id` text PRIMARY KEY NOT NULL,
	`firstName` text,
	`lastName` text,
	`email` text,
	`password` text,
	`role` text,
	`createdOn` integer,
	`updatedOn` integer
);--> statement-breakpoint

ALTER TABLE employees ADD `fullName` text;--> statement-breakpoint
ALTER TABLE employees ADD `phone` text;--> statement-breakpoint
ALTER TABLE employees ADD `jobTitle` text;--> statement-breakpoint
ALTER TABLE employees ADD `department` text;--> statement-breakpoint
ALTER TABLE employees ADD `gender` text;--> statement-breakpoint
ALTER TABLE employees ADD `region` text;
