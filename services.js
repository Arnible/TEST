import { db } from "./db.js";

export function login(name, password) {
  const user = db.students.find(s => s.name === name);
  if (!user || user.password !== password) {
    throw new Error("Invalid login");
  }
  return user;
}
