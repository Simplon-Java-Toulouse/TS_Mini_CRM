// write you're interfaces here...
export interface ICompany {
    name: string;
    website: string;
    employee: IEmployee[];
    region: string;
    zipCode: number;
}

export interface IEmployee {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    company: ICompany;
    description: string;
}
