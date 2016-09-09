/**
 * Created by vincentma on 8/24/16.
 */

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';
import { UsersComponent } from './users.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login.component';
import { LoadingComponent } from './loading.component';
import { ThreadsComponent } from "./threads.component";


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'users',
        component: UsersComponent,
    },
    {
        path: 'threads',
        component: ThreadsComponent,
    },
    {
        path: 'account/login',
        component: LoginComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },

];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent, PostsComponent, UsersComponent, ThreadsComponent, NotFoundComponent, LoginComponent, LoadingComponent];
