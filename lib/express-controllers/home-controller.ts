import { Request, Response } from 'express';
import { IDataContact } from '../models/idata';
import { ContactsDataSet } from "../dummy-data-set/data-set";

export class HomeController {
    
    public contacts: IDataContact[];

    /**
     *
     */
    constructor() {
        this.contacts = ContactsDataSet;
        console.log(this.contacts);
    }

    public addContact(req: Request, res: Response) {
        try {
            const newContact = req.body as IDataContact;
            if (newContact === undefined || newContact === null) {
                res.json({ message: "Data is not valid Contact info" });
            }
            const exitsContact = this.contacts.filter(x => x.name == newContact.name) !== null ? true : false;
            if (exitsContact) {
                res.json({ message: "Contatc has been exists" });
            }
            this.contacts.push(newContact);
            res.json(newContact);

        } catch (e) {
            res.json(e)
        }
    }

    public getAllContacts(req: Request, res: Response) {
        res.json(ContactsDataSet);
    }
}