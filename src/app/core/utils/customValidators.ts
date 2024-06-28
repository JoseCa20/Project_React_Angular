import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class customValidators{
    
    static MatchValidator(source: string, target: string): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceCtrl = control.get(source);
            const targetCtrl = control.get(target);

            return sourceCtrl && targetCtrl && sourceCtrl.value != targetCtrl.value
            ? { mismatch: true}
            : null;;
        }
    }

    static EmailValidator(email: string): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {

            const emailControl: string = control.get(email).value; 
            
            if(emailControl.match("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
            + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")){
                return {emailValidate: false};
            }
            return null;          
        }
    }
}