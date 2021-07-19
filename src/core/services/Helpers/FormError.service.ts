import {Injectable} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable({
	providedIn: 'root'
})

export class FormErrorService {
	constructor() {}

	public markAsTouched(controls: any){
		let invalid:[] = [];
		Object.keys(controls).forEach(controlName => {
				controls[controlName].markAsTouched();
				if (controls[controlName].invalid){
					// @ts-ignore
          invalid.push(controlName);
				}

				// loop to show languages errors
				if(controlName == 'languages') {
					// @ts-ignore
					let lang_objects = controls[controlName].controls;
					Object.keys(lang_objects).forEach(object_index => {
						let lang_controls = lang_objects[object_index].controls;
						Object.keys(lang_controls).forEach(controlName => {
							lang_controls[controlName].markAsTouched();
						});
					});
				}
			}
		);
		return invalid;
	}

	public isControlHasError(form:FormGroup, controlName:string, validationType:string){
		const control = form.controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.dirty || control.touched);
	}

	public isLanguageHasError(form:FormGroup, index:number , controlName: string, validationType: string): boolean {
		let control = form.controls['languages'];
		// @ts-ignore
		control = control.controls[index].controls[controlName];
		if (!control) {
			return false;
		}
		return control.hasError(validationType) && (control.dirty || control.touched);
	}
}
