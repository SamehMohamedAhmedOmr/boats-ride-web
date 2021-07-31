import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ContactUsBookingModel} from "../../../Models/Booking/contact.us.booking.model";

export class ContactUsBookingSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ContactUsBookingModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ContactUsBookingModel): any {
    return {
      'name': model.name,
      'email': model.email,
      'phone': model.phone,
      'message': model.message,
    };
	}

	toFormData(object: any): FormData {
		// @ts-ignore
    return null;
	}

	public adapt(item: any): ContactUsBookingModel {
    return new ContactUsBookingModel(item.id);
	}

	status(status: any): any {

		return {
			'is_active' : status,
		};
	}

}
