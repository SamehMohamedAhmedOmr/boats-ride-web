import {ModelBase} from '../Base/base.model';

export class YachtBookingModel extends ModelBase {

  public name!: string;
  public email!: string;
	public phone!: string;
  public yacht!: string;
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
      'yacht': this.yacht,
      'message': this.message,
    };
	}


}
