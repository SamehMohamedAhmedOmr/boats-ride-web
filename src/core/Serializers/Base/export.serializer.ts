import {ExportModel} from "../../../Models/Base/export.model";

export class ExportSerializer {

	public fromJson(json: any): ExportModel {
		let item = json.body;
		return new ExportModel(
			item.link
		);
	}

}

