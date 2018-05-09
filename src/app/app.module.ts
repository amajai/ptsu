import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { PhraseEntryComponent } from './phrase-entry/phrase-entry.component';
import { PhraseSendComponent } from './phrase-send/phrase-send.component';
import { PhraseGuessComponent } from './phrase-guess/phrase-guess.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		IntroComponent,
		DialogueComponent,
		PhraseEntryComponent,
		PhraseSendComponent,
		PhraseGuessComponent
	],
	imports: [BrowserModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
