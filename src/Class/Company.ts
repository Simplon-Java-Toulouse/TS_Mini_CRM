import {ICompany, IEmployee} from "@/Interfaces";

export default class Company implements ICompany {
    private _employee: IEmployee[];
    private _name: string;
    private _region: string;
    private _website: string;
    private _zipCode: number;

    constructor(employee: IEmployee[], name: string, region: string, website: string, zipCode: number) {
        this._employee = employee;
        this._name = name;
        this._region = region;
        this._website = website;
        this._zipCode = zipCode;
    }

    get employee(): IEmployee[] {
        return this._employee;
    }

    set employee(value: IEmployee[]) {
        this._employee = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get region(): string {
        return this._region;
    }

    set region(value: string) {
        this._region = value;
    }

    get website(): string {
        return this._website;
    }

    set website(value: string) {
        this._website = value;
    }

    get zipCode(): number {
        return this._zipCode;
    }

    set zipCode(value: number) {
        this._zipCode = value;
    }

}
