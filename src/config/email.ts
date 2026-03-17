// Email configuration for form submissions
// Get your free access key from https://web3forms.com

export const EMAIL_CONFIG = {
  // Web3Forms access key
  accessKey: '7427ea16-15ca-4658-a8c1-5ab8e5520f91',
  recipientEmail: 'stephenmayowa112@gmail.com', // Test email - replace with official email later
};

export async function sendFormEmail(data: {
  subject: string;
  fromName: string;
  formType: string;
  fields: Record<string, any>;
}) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: EMAIL_CONFIG.accessKey,
        subject: data.subject,
        from_name: data.fromName,
        email: EMAIL_CONFIG.recipientEmail,
        ...data.fields,
        form_type: data.formType,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Email submission error:', error);
    return false;
  }
}
