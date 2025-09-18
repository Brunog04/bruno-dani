import { Routes } from '@angular/router';
import { TimelineComponent } from './timeline.component/timeline.component';
import { HomeComponent } from './components/home/home';
import { PlanosComponent } from './planos.component/planos.component';

export const routes: Routes = [
    {
        path: 'timeline',
        component: TimelineComponent
    },
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'planos',
        component: PlanosComponent
    }
];
