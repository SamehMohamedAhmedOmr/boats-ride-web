import {ModelBase} from '../Base/base.model';

export class ContactUsBookingModel extends ModelBase {

  public name!: string;
  public email!: string;
	public phone!: string;
  public message!: string;

	constructor(id: number = 0){
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'email' : this.email,
			'phone': this.phone,
      'message': this.message,
    };
	}


}
