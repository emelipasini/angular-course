import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Bienvenid@s:";
    message = "Esperando...";
    disabled = false;

    operandA = 0;
    operandB = 0;
    result = 0;

    calculate(): void {
        this.result = this.operandA + this.operandB;
    }

    modifyTitle(): void {
        this.message = "Tocaste el boton!";
    }
}
