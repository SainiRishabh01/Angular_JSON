export const schema = {
    type: 'object',
    properties: {
      fullName: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 6 },
      gender: { type: 'string', enum: ['Male', 'Female', 'Other'] },
      country: { type: 'string' },
      terms: { type: 'boolean' }
    },
    required: ['fullName', 'email', 'password', 'terms']
  };
  
  export const uischema = {
    type: 'VerticalLayout',
    elements: [
      { type: 'Control', scope: '#/properties/fullName' },
      { type: 'Control', scope: '#/properties/email' },
      { type: 'Control', scope: '#/properties/password' },
      { type: 'Control', scope: '#/properties/gender' },
      { type: 'Control', scope: '#/properties/country' },
      { type: 'Control', scope: '#/properties/terms' }
    ]
  };
  