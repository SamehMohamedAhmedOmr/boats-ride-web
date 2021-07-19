import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {YachtBookingModel} from "../../../Models/yachts/yacht.booking.model";

export class YachtBookingSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): YachtBookingModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: YachtBookingModel): any {
    return {
      'name': model.name,
      'email': model.email,
      'phone': model.phone,
      'yacht_id': model.yacht,
      'message': model.message,
    };
	}

	toFormData(object: any): FormData {
		// @ts-ignore
    return null;
	}

	public adapt(item: any): YachtBookingModel {
    return new YachtBookingModel(item.id);
	}

	status(status: any): any {

		return {
			'is_active' : status,
		};
	}

}
