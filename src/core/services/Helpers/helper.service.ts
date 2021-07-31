import {Injectable} from '@angular/core';
import {NavigationEnd} from '@angular/router';
import {FormGroup} from "@angular/forms";
import {errors} from "../../../Models/Base/errors.interface";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() {
  }

  showingErrors(handler: errors) {
    let messages = [];
    for (let errors in handler.errors) {
      // @ts-ignore
      for (let error of handler.errors[errors]) {
        messages.push(error);
      }
    }
    return messages.join('<br>');
  }

  public prepareNames(languages: [], iso: string, is_name = 1) {
    // @ts-ignore
    let target_language = languages.find(language => language.lang == iso);
    let name = '';
    if (!target_language) {
      // @ts-ignore
      target_language = languages.find(language => language.lang == 'en');
    }

    if (is_name) {
      // @ts-ignore
      name = target_language.name;
    } else {
      // @ts-ignore
      name = target_language.title;
    }

    return name;
  }

  // @ts-ignore
  public routingSubscribe(component) {
    return component.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        component.initialiseComponent();
      }
    });
  }

  // @ts-ignore
  public pushMultiSelect(event, Selection, originalSource) {
    if (event.isUserInput) {
      let id = event.source.value;
      let check = event.source.selected;

      if (check) {
        // @ts-ignore
        let item = originalSource.find(element => element.id == id);
        // @ts-ignore
        let element_exist = Selection.find(element => element.id == id);

        if (!element_exist) {
          Selection.push(item);
        }
      } else {
        // @ts-ignore
        Selection = Selection.filter(element => element.id != id);
      }
    }
    return Selection;
  }

  public popFromForm(form: FormGroup, form_name: string, item_id: number) {
    let listControl = form.controls[form_name].value;

    if (listControl) {
      listControl = listControl.filter((element: number) => element != item_id);
    }
    return listControl;
  }

  // @ts-ignore
  public popFromSelectionList(Selection, item_id) {
    // @ts-ignore
    return Selection.filter(element => element.id != item_id);
  }

  // @ts-ignore
  public maxNumberOfPages(resp) {
    return (resp['pagination'] ? resp['pagination'].last_page : 1);
  }

}
