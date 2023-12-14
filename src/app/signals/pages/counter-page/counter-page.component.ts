import { Component, computed, signal } from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html'
})

export class CounterPageComponent {
    
    public counter = signal(0);
    public squareCounter = computed(() => this.counter() * this.counter());
    
    increaseBy(value: number) {  
        this.counter.update(current => current + value);
    }
}
