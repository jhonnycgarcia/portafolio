import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  preview = false;
  confirmForm = false;
  showSpinner = false;
  showResponse = false;
  formResponse = '';
  formData: any;

  constructor( private contactService: ContactService ) {
    this.buildForm(); // Crear formControls
  }

  ngOnInit(): void {}

  private buildForm(): void{
    this.contactForm = new FormGroup({
      nameInput: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]),
      emailInput: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      messageInput: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(250)
      ])
    });
  }

  public get nameField(): AbstractControl { return this.contactForm.get('nameInput'); }
  public get emailField(): AbstractControl { return this.contactForm.get('emailInput'); }
  public get messageField(): AbstractControl { return this.contactForm.get('messageInput'); }

  onSubmit(event: Event): void{
    event.preventDefault();
    if (this.contactForm.valid) { // formulario validado correctamente
      this.formData = this.contactForm.value;
      this.preview = true;  // mostrar confirmacion
    }else{
      this.contactForm.markAllAsTouched();  // Marcar todos los elementos como tocados
    }
  }

  confirmSubmit(status= false): void{
    if (status) {
      this.showSpinner = true;  // spinner de carga
      this.confirmForm = true;

      this.sendForm();
    }else{
      this.preview = false;
      this.confirmForm = false;
    }
  }

  sendForm(): void {
    this.contactService.sendMail(this.formData)
    .subscribe(
      (data: any) => {
        this.showSpinner = false;
        this.showResponse = true;
        this.formResponse = '¡Listo!, me pondré en contacto contigo en la brevedad posible';
        // console.log('Success');
        // console.log(data);
      },
      (err: any) => {
        this.showSpinner = false;
        this.showResponse = true;
        this.formResponse = 'Ocurrido un inconveniente, intenta de nuevo y si el error persiste, ponte en contacto conmigo a través de los enlaces alternos que he dejado en esta sección';
        // console.log('Error');
        // console.log(err);
        }
      );
  }
}
