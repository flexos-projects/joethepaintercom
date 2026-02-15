export interface ConsultationFormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  projectType: '' | 'Painting Services' | 'Handy Services' | 'Both Painting & Handy Services';
  serviceLocation: string;
  projectDetails: string;
  preferredContact: 'Phone Call' | 'Email' | '';
  howDidYouHear?: string;
}

export interface ConsultationFormErrors {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  projectType?: string;
  serviceLocation?: string;
  projectDetails?: string;
  preferredContact?: string;
  howDidYouHear?: string;
}

export interface ContactFormData {
  yourName: string;
  yourEmail: string;
  yourMessage: string;
}

export interface ContactFormErrors {
  yourName?: string;
  yourEmail?: string;
  yourMessage?: string;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  errors?: ConsultationFormErrors | ContactFormErrors;
}
---