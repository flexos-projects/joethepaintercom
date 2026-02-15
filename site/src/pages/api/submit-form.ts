import type { APIRoute } from 'astro';
import { validateConsultationForm, validateContactForm } from '@/utils/formValidation';
import type { ConsultationFormData, ContactFormData, FormSubmissionResponse } from '@/types/forms';

// Ensure Formspree endpoint is set in environment variables
const FORMSPREE_ENDPOINT_URL = import.meta.env.FORMSPREE_ENDPOINT_URL;

export const POST: APIRoute = async ({ request }): Promise<Response> => {
  if (!FORMSPREE_ENDPOINT_URL) {
    console.error('FORMSPREE_ENDPOINT_URL is not defined. Please set it in your environment variables.');
    return new Response(JSON.stringify({
      success: false,
      message: 'Server configuration error. Please try again later.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const formData = await request.json();
    const formType = formData._formType; // Custom field to distinguish forms

    let errors: any = {};
    let validatedData: ConsultationFormData | ContactFormData;

    if (formType === 'consultation') {
      validatedData = formData as ConsultationFormData;
      errors = validateConsultationForm(validatedData);
    } else if (formType === 'contact') {
      validatedData = formData as ContactFormData;
      errors = validateContactForm(validatedData);
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: 'Invalid form type specified.'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (Object.keys(errors).length > 0) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Validation failed. Please check your inputs.',
        errors
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Prepare data for Formspree. Formspree expects simple key-value pairs.
    const formspreeData = new FormData();
    for (const key in formData) {
      formspreeData.append(key, formData[key]);
    }

    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT_URL, {
      method: 'POST',
      body: formspreeData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (formspreeResponse.ok) {
      return new Response(JSON.stringify({
        success: true,
        message: 'Your request has been successfully sent!'
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      const formspreeError = await formspreeResponse.json();
      console.error('Formspree submission error:', formspreeError);
      return new Response(JSON.stringify({
        success: false,
        message: formspreeError.error || 'Failed to send your message. Please try again later.',
        errors: formspreeError.errors // Formspree might return specific field errors
      }), {
        status: formspreeResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('API route error:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'An unexpected error occurred. Please try again later.'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
---