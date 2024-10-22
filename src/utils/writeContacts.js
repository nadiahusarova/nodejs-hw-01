import { promises as fs } from 'fs'; 
import { PATH_DB } from '../constants/contacts.js'; 
export const writeContacts = async (updatedContacts) => {
  try {

    const data = JSON.stringify(updatedContacts, null, 2); 
    await fs.writeFile(PATH_DB, data);
    console.log('Contacts have been written to the file');
  } catch (error) {
    console.error('Error writing contacts to the file:', error);
  }
};
