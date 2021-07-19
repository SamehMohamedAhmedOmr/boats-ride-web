import {ModelBase} from '../Base/base.model';

export class WaterSportBookingModel extends ModelBase {

  public name!: string;
  public email!: string;
	public phone!: string;
  public water_sport!: string;
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
      'water_sport': this.water_sport,
      'message': this.message,
    };
	}


}
