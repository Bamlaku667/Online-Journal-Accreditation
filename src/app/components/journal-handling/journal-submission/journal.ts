export interface Journal {
    id: number; 
    letter_of_application: any;
    title: string;
    full_Journal: any;
    department: string;
    description: string;
    // contributors: contributor[];
}

export interface contributor {
    name: string;
    email: string;
    department: string;
    institue: string;
    img_url: string;
}