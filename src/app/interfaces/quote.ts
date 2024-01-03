export interface Quote {
    id:                number;
    dateIssue:         Date;
    dateExpiration:    Date;
    deliveryTime:      string;
    paymentcondition:  string;
    store:             string;
    projectVolume:     string;
    projectDuration:   string;
    startDateSupplies: Date;
    edification:       string;
    money:             string;
    state:             number;
    total:             string;
    createdAt:         Date;
    approvalRequest:   boolean;
    items:             Item[];
    work:              Work;
    vendor:            Vendor;
    customers:         Customers;
}

export interface Customers {
    id:           number;
    businessName: string;
    ruc:          string;
    createdAt:    Date;
}

export interface Item {
    id:          number;
    description: string;
    codeproduct: string;
    unit:        string;
    statusRange: boolean;
    amount:      string;
    price:       string;
    total:       string;
    approve:     boolean;
}

export interface Vendor {
    id:        number;
    name:      string;
    dni:       string;
    phone:     string;
    email:     string;
    createdAt: Date;
}

export interface Work {
    id:        number;
    name:      string;
    direction: string;
    phone:     string;
    email:     string;
    contact:   string;
    district:  string;
    createdAt: Date;
    typework:  string;
}
