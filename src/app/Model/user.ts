
/**
 * User entity
 */
export class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;

  constructor( id: number, firstname: string, lastname: string,
      email: string, gender: string, ipaddress: string) {
     this.id = id;
     this.first_name = firstname;
     this.last_name = lastname;
     this.email = email;
     this.gender = gender;
     this.ip_address = ipaddress;

    }

    // more logic for user functionalty will be implemented in this class

}
