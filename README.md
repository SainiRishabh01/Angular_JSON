# 🧩 Angular JSON Forms Project — Technical Assignment

This project is a **technical assignment** built using **Angular 15**, **jsonforms.io**, and **Tailwind CSS**, designed to demonstrate dynamic form generation using JSON configurations, custom renderers, and responsive UI design.

---

## 🚀 Objective

The goal of this project is to showcase:
- Dynamic UI generation using [jsonforms.io](https://jsonforms.io)
- Integration of custom Angular renderers
- Responsive and styled forms using Tailwind CSS
- Real-time validations and interactivity within the form

---

## 📁 Project Structure

src/ ├── app/ │ ├── components/ # Custom components and renderers │ ├── forms/ # JSON schemas and UI schemas │ ├── services/ # Data or utility services │ └── app.module.ts ├── assets/ │ └── ... ├── styles.css # Tailwind base styles └── ...

yaml
Copy
Edit

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/angular-jsonforms-project.git
cd angular-jsonforms-project
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the project
bash
Copy
Edit
ng serve
Visit http://localhost:4200 in your browser.

🔧 Technologies Used
Angular 15

JSONForms (@jsonforms/angular)

Tailwind CSS

RxJS / TypeScript

📄 JSON Form Structure
Each form is built from:

Schema: Defines the data structure

UI Schema: Defines how the form should be rendered

Example:
schema.json

json
Copy
Edit
{
  "type": "object",
  "properties": {
    "firstName": { "type": "string" },
    "age": { "type": "number" }
  },
  "required": ["firstName"]
}
uischema.json

json
Copy
Edit
{
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "scope": "#/properties/firstName"
    },
    {
      "type": "Control",
      "scope": "#/properties/age"
    }
  ]
}
🎨 Features Implemented
✅ Phase 1: Project Setup
Angular 15 initialized

Tailwind CSS configured

Project structured into reusable modules and components

✅ Phase 2: JSON Forms Integration
Dynamic form generation using JSON schemas

Two separate JSON configurations for different layouts

✅ Phase 3: Custom Renderers
Custom Angular component replacing a default input field

Maintains consistent style and behavior with UI design

✅ Phase 4: Responsive Design & Styling
Tailwind used for layout and form styling

Responsive design for mobile and desktop devices

✅ Phase 5: Validations & Interactivity
Validation rules enforced from JSON schema

Interactive dropdown affecting other fields dynamically

Real-time validation feedback with UX cues

✅ Phase 6: Finalization
Fully functional application

No runtime errors

Documentation and video demo included
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
