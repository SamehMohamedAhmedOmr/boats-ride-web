import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {WaterSportBookingModel} from "../../../Models/Booking/water.sport.booking.model";

export class WaterSportBookingSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WaterSportBookingModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WaterSportBookingModel): any {
    return {
      'name': model.name,
      'email': model.email,
      'phone': model.phone,
      'water_sport_id': model.water_sport,
      'message': model.message,
    };
	}

	toFormData(object: any): FormData {
		// @ts-ignore
    return null;
	}

	public adapt(item: any): WaterSportBookingModel {
    return new WaterSportBookingModel(item.id);
	}

	status(status: any): any {

		return {
			'is_active' : status,
		};
	}

}
