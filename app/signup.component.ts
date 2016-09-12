/**
 * Created by vincentma on 9/11/16.
 */

import { Component, OnInit, trigger, state, style, animate, transition, group } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { EventsService } from './events.service';
import { SignUpForm } from "./forms";

@Component({
    templateUrl: 'app/templates/signup.component.html',
    providers: [],
    animations: [
        trigger('flyInOut', [
            state('in', style({transform: 'translateY(0)', opacity: 1})),
            transition('void => *', [
                style({transform: 'translateY(50px)', opacity: 0}),
                group([
                    animate('1.0s 0.1s ease', style({
                        transform: 'translateY(0)',
                    })),
                    animate('1.0s ease', style({
                        opacity: 1
                    }))
                ])
            ]),
            transition('* => void', [
                group([
                    animate('1.0s ease', style({
                        transform: 'translateY(50px)',
                    })),
                    animate('1.0s 0.2s ease', style({
                        opacity: 0
                    }))
                ])
            ])
        ])
    ]
})
export class SignUpComponent implements OnInit{
    private signupForm = new SignUpForm('', '', '');

    constructor(private _router: Router,
                private _userService: UserService,
                private _eventsService: EventsService) {}

    ngOnInit() {
    }

    signUp() {
        console.log('signup clicked');
    }
}