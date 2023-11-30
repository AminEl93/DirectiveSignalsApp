import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './product-page.component.html'
})

export class ProductPageComponent {

    private fb = inject(FormBuilder);  // Es lo mismo que: "constructor(private fb: FormBuilder) { }"
    public color: string = 'verde';

    public colorForm: FormGroup = this.fb.group({
        name: [ '', [Validators.required, Validators.minLength(6), Validators.email] ]
    });

    changeColor() {
        this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    }
}
