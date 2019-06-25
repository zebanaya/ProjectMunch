import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';

export const appRoutes: Routes = [
    {
        path: '',
        children: [
            { path: 'events', component: EventsComponent},
            { path: 'faq', component: FaqComponent },
            { path: 'signup', component: SignupComponent }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
