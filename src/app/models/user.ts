import { TypeRoles } from './type-roles.enum'
export class User {
    public name: string;
    public email: string;
    public role: TypeRoles;

    constructor(obj?: any) {
        if (obj) {
            this.name = obj.fullName;
            this.email = obj.email;
            switch (obj.role) {
                case "APPLICANT":        
                this.role = TypeRoles.Applicant;
                  break;
                case "ADMINISTRATOR":        
                this.role = TypeRoles.Administrator;
                  break;
                case "OFFERER":        
                this.role = TypeRoles.Offerer;
                  break;
              }
            
        }
    }
}