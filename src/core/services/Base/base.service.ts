import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Serializer} from '../../Serializers/Base/Serializer';
import {ExportSerializer} from '../../Serializers/Base/export.serializer';
import {ModelBase} from "../../../Models/Base/base.model";
import {ExportModel} from "../../../Models/Base/export.model";
import {PaginateParams} from "../../../Models/Base/paginateParams.interface";


export class BaseService<T extends ModelBase> {

	constructor(
		protected http: HttpClient,
		protected url: string,
		protected endpoint: string,
		protected serializer: Serializer) {}

	public create(item: T): Observable<T> {
		return this.http
			.post<T>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
			.pipe(map(data => this.serializer.fromJson(data) as T));
	}

	public createFormData(item : any): Observable<T> {
		return this.http
			.post<T>(`${this.url}${this.endpoint}`, this.serializer.toFormData(item))
			.pipe(map(data => this.serializer.fromJson(data) as T));
	}

	public update(id:number, item: T): Observable<T> {
		return this.http
			.put<T>(`${this.url}${this.endpoint}/${id}`,
				this.serializer.toJson(item))
			.pipe(map(data => this.serializer.fromJson(data) as T));
	}

	public changeStatus(id:number, status: any): Observable<T> {
		return this.http
			.put<T>(`${this.url}${this.endpoint}/${id}`,
				this.serializer.status(status))
			.pipe(map(data => this.serializer.fromJson(data) as T));
	}

	public updateFormData(id: number,item : any): Observable<any> {
		return this.http
			.post<T>(`${this.url}${this.endpoint}/${id}`+'?_method=PUT',
				this.serializer.toFormData(item))
			.pipe(map(data => this.serializer.fromJson(data) as T));
	}

	public get(id: number, get_all:boolean = true): Observable<T> {
		return this.http
			.get(`${this.url}${this.endpoint}/${id}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as T));
	}

	public list(paginationParams: PaginateParams, paginate = 1, extra_filters = {}): Observable<T[]> {
		let params = {};
		if (paginationParams) {
			if (paginationParams.search_key) {
				// @ts-ignore
        params['search_key'] = paginationParams.search_key;
			}
			if (paginationParams.active) {
        // @ts-ignore
        params['is_active'] = paginationParams.active;
			}
			if (paginationParams.per_page) {
        // @ts-ignore
        params['per_page'] = paginationParams.per_page;
			}
			if (paginationParams.sort_order) {
        // @ts-ignore
        params['sort_order'] = paginationParams.sort_order;
			}
			if (paginationParams.next_page_index) {
        // @ts-ignore
        params['page'] = paginationParams.next_page_index + 1;
			}
			if (paginate) {
        // @ts-ignore
        params['is_pagination'] = 1;
			}
		}
		params = {...params, ...extra_filters };

		return this.http.get(`${this.url}${this.endpoint}`, {
			params: params
		}).pipe(map((data: any) => this.serializer.fromJsonList(data) as T[]));
	}

	public exportExcelSheet(paginationParams : PaginateParams): Observable<ExportModel> {
		let params = {};
		if (paginationParams) {
      // @ts-ignore
      if(paginationParams.search_key) { params['search_key'] = paginationParams.search_key; }
      // @ts-ignore
      if(paginationParams.active) { params['is_active'] = paginationParams.active; }
		}

		let exportSerializer = new ExportSerializer();

		return this.http.get (`${this.url}${this.endpoint}/sheet/export` , {
			params: params
		}).pipe(map((data: any) => exportSerializer.fromJson(data) as ExportModel));
	}

	public delete(id: number) {
		return this.http
			.delete(`${this.url}${this.endpoint}/${id}`);
	}

}
