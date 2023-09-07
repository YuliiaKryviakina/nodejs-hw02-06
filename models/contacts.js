const fs = require("fs/promises");

const listContacts = async () => {
  const data = await fs.readFile("./db/contacts.json", "utf8");
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id === contactId);
  return contact;
};

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContacts = contacts.filter((item) => item.id !== contactId);
  await fs.writeFile("./db/contacts.json", JSON.stringify(newContacts));
  return true;
};

const addContact = async (body) => {
  const contacts = await listContacts();
  const newContact = { ...body, id: contacts.length + 1 };
  contacts.push(newContact);
  await fs.writeFile("./db/contacts.json", JSON.stringify(contacts));
  return newContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    return null;
  }
  const updatedContact = { ...contacts[idx], ...body };
  contacts[idx] = updatedContact;
  await fs.writeFile("./db/contacts.json", JSON.stringify(contacts));
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
