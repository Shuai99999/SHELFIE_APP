import {
  Client,
  Account,
  Avatars,
  Databases,
  TablesDB,
} from "react-native-appwrite";
// import { Client, Account, Avatars, Databases, TablesDB } from "appwrite";

import "react-native-url-polyfill/auto";

const client = new Client()
  .setEndpoint("https://tor.cloud.appwrite.io/v1")
  .setProject("6970151500065332510d");

const tablesDB = new TablesDB(client);

export { client, tablesDB };

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
