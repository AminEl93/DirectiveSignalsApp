import { Component, OnInit, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
    templateUrl: './properties-page.component.html'
})

export class PropertiesPageComponent implements OnInit {

    public counter = signal(1);

    public user = signal<User>({
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg'
    });
  
    public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

    ngOnInit(): void {
        setInterval(() => {
            this.counter.update(current => current + 1);        
        }, 1000)
    }

    onFieldUpdated(field: keyof User, value: string) {
        this.user.update(current => {
            return {
                ...current,
                [field]: value
            };
        });
        
        // Opción no recomendada
        /* 
        this.user.set({
            ...this.user(),
            [field]: value,
        });
        */

        // Opción decrapitada
        /*
        this.user.mutate(current => {
            switch(field) {
                case 'email':
                    current.email = value;
                break;

                case 'first_name':
                    current.first_name = value;
                break;

                case 'last_name':
                    current.last_name = value;
                break;

                case 'id':
                    current.id = Number(value);
                break;
            }
        });
        */        
    }
}
