import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		IntroComponent,
		DialogueComponent
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
