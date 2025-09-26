import { Component, viewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements AfterViewInit {
  contactForm = viewChild.required(NgForm);
  successMessage = '';
  errorMessage= '';
  isSubmitting = false;
  

  ngAfterViewInit() {}

  async onSubmit() {
    const form = this.contactForm();
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        const control = form.control.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    
    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        'service_l88duhk',        // Your service ID
        'contact_form_template',   // Your template ID
        {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        },
        'aTUZJIln5wguVs-rp'          
      );

      console.log('SUCCESS!', response.status, response.text);
      this.successMessage = 'Message sent successfully!';
      form.resetForm();

      setTimeout(() => {
        this.successMessage = '';
      }, 5000);

    } catch (error) {
      console.error('FAILED...', error);
      this.errorMessage = '❌ Failed to send message. Please try again.';
    } finally {
      this.isSubmitting = false;
    }
  }
}