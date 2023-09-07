const contacts = require("../models/contacts");
const controllerWrapper = require("../helpers/controllerWrapper");
const errorHandler = require("../helpers/errorsHandler");

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const contact = await contacts.getContactById(req.params.contactId);

  if (!contact) {
    // res.status(404).json({ message: "Not found" });
    // return;
    throw errorHandler(404, "Not found");
  }
  res.json(contact);
};

const removeContact = async (req, res) => {
  const contact = await contacts.removeContact(req.params.contactId);
  if (!contact) {
    // res.status(404).json({ message: "Not found" });
    // return;
    throw errorHandler(404, "Not found");
  }
  res.json({ message: "contact deleted" });
};

const addContact = async (req, res) => {
  const contact = await contacts.addContact(req.body);

  if (Object.keys(req.body).length === 0) {
    // res.status(400).json({ message: "missing fields" });
    // return;
    throw errorHandler(400, "missing fields");
  }

  if (typeof contact === "string") {
    if (contact === "must be a string") {
      // res.status(400).json({ message: contact });
      // return;
      throw errorHandler(400, contact);
    }
    const errorMessage = `missing required ${contact} field`;
    // res.status(400).json({ message: errorMessage });
    // return;
    throw errorHandler(400, errorMessage);
  }
  res.status(201).json(contact);
};

const updateContact = async (req, res) => {
  const contact = await contacts.updateContact(req.params.contactId, req.body);
  console.log(contact);
  if (Object.keys(req.body).length === 0) {
    // res.status(400).json({ message: "missing fields" });
    // return;
    throw errorHandler(400, "missing fields");
  }
  console.log(`contact: ${contact}`);
  if (contact === null) {
    // res.status(404).json({ message: "Not found" });
    // return;
    throw errorHandler(404, "Not found");
  }

  if (typeof contact === "string") {
    console.log(contact);

    if (contact === "must be a string") {
      // res.status(400).json({ message: contact });
      // return;
      throw errorHandler(400, contact);
    }
    const errorMessage = `missing required ${contact} field`;
    // res.status(400).json({ message: errorMessage });
    throw errorHandler(400, errorMessage);
  }
  res.status(200).json(contact);
};

module.exports = {
  listContacts: controllerWrapper(listContacts),
  getContactById: controllerWrapper(getContactById),
  removeContact: controllerWrapper(removeContact),
  addContact: controllerWrapper(addContact),
  updateContact: controllerWrapper(updateContact),
};
