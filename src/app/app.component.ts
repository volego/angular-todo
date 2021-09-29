import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

    constructor(
        private translateService: TranslateService
    ) {
        // устанавливаем язык по умолчанию
        this.translateService.setDefaultLang(localStorage.getItem('language')??'ru');
    }

    setLanguage(languageCode: string) {
        // устанавливаем выбранный язык
        this.translateService.use(languageCode);

        localStorage.setItem('language',languageCode);
        // для примера переводим строку вне шаблона, используя
        // для этого TranslateService
        //this.translateService.get('info.about').pipe(first()).subscribe((value) => console.log(value));
    }
}
