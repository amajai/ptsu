import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogueComponent } from './dialogue/dialogue.component';
import { PhraseEntryComponent } from './phrase-entry/phrase-entry.component';
import { PhraseSendComponent } from './phrase-send/phrase-send.component';
import { PhraseGuessComponent } from './phrase-guess/phrase-guess.component';
import { PhraseItemComponent } from './phrase-item/phrase-item.component';
import { SendAnimationComponent } from './send-animation/send-animation.component';
import { TypedTextComponent } from './typed-text/typed-text.component';
import { PtsuMainComponent } from './ptsu-main/ptsu-main.component';

const routes: Routes = [{ path: '', component: PtsuMainComponent }];

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		IntroComponent,
		DialogueComponent,
		PhraseEntryComponent,
		PhraseSendComponent,
		PhraseGuessComponent,
		PhraseItemComponent,
		SendAnimationComponent,
		TypedTextComponent,
		PtsuMainComponent
	],
	imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
