import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';
import { auditSchema } from './audit';
import * as posts from './posts';
import * as comments from './comments';
import * as userKeys from './userKeys';
import * as userSessions from './userSessions';
import { ApiConfig } from '../routes';
import { isAdmin, isAdminOrEditor, isAdminOrUser } from '../config-helpers';
export const tableName = 'employees';

export const route = 'employees';

// id, full name, email, phone, job title, department, sex, region
export const definition = {
  id: text('id').primaryKey(),
  firstName: text('firstName'),
  lastName: text('lastName'),
  fullName: text('fullName'),
  email: text('email'),
  phone: text('phone'),
  jobTitle: text('jobTitle'),
  department: text('department'),
  gender: text('gender'),
  region: text('region'),
  password: text('password'),
  role: text('role').$type<'admin' | 'user'>()
};

export const table = sqliteTable(tableName, {
  ...definition,
  ...auditSchema
});

export const relation = relations(table, ({ many }) => ({
  posts: many(posts.table),
  comments: many(comments.table),
  keys: many(userKeys.table),
  sessions: many(userSessions.table)
}));

export const access: ApiConfig['access'] = {
  operation: {
    read: true,
    create: true,
    update: isAdminOrUser,
    delete: isAdminOrUser
  }
};
