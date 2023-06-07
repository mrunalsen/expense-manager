export class User {
    id: string;
    username: string;
    email: string;
    password: string;
    confirm_password: string;
    firstname: string;
    lastname: string;
    constructor(
        id: string,
        username: string,
        email: string,
        password: string,
        confirm_password: string,
        firstname: string,
        lastname: string,
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.confirm_password = confirm_password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}