import {ModelBase} from "../../../Models/Base/base.model";

export interface Serializer {
	fromJson(json: any): ModelBase;

	fromJsonList(json: any):[];

	toJson(resource: ModelBase): any;

	status(status: any): any;

	toFormData(fromData:any):FormData;
}
