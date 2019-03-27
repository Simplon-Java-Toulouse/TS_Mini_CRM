import {ICompany, IEmployee} from "../Interfaces";

export default class Employee implements IEmployee {
    private _company: ICompany;
    private _description: string;
    private _email: string;
    private _first_name: string;
    private _last_name: string;
    private _phone: string;

    constructor(company: ICompany, description: string, email: string, first_name: string, last_name: string, phone: string) {
        this._company = company;
        this._description = description;
        this._email = email;
        this._first_name = first_name;
        this._last_name = last_name;
        this._phone = phone;
    }

    get company(): ICompany {
        return this._company;
    }

    set company(value: ICompany) {
        this._company = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get first_name(): string {
        return this._first_name;
    }

    set first_name(value: string) {
        this._first_name = value;
    }

    get last_name(): string {
        return this._last_name;
    }

    set last_name(value: string) {
        this._last_name = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}
