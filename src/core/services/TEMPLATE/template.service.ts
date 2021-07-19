import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {TemplateSerializer} from '../../Serializers/TEMPLATE/template.serializer';
import {environment} from "../../../environments/environment";
import {TemplateModel} from "../../../Models/TEMPLATE/template.model";


@Injectable({
	providedIn: 'root'
})

export class TemplateService extends BaseService<TemplateModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/services',
			new TemplateSerializer());
	}


}
