# Calorie Calculator

## Description

This project is a landing page developed with **Vite** and **React** that allows users to calculate their ideal weight using the Devine formula and their daily caloric intake needed to reach that ideal weight using the Harris-Benedict formula. Users enter their data such as age, weight, height, gender, and level of physical activity, and the system provides personalized calculations based on that information.

## Devine Formula

- **Female:** Ideal weight (kg) = 45.5 + 2.3 × (Height in inches − 60)
- **Male:** Ideal weight (kg) = 50+2.3 × (Height in inches − 60)

## Harris-Benedict Formula

- **Female:** TMB = 447.593 + (9.247 × Weight in kg) + (3.098 × Height in cm) − (4.330 × Age)
- **Male:** TMB = 88.362 + (13.397 × Weight in kg) + (4.799 × Height in cm) − (5.677 × Age)
- **Exercise Level:**
	- Sedentary: 1.2
	- Light Activity: 1.375
	- Moderate Activity: 1.55
	- High Activity: 1.725
	- Very High Activity: 1.9

    TMB x Exercise Level = result kcal/day

## Characteristics

- **Interactive Form:** Captures the user's age, weight, height, gender, and level of physical activity.
- **Ideal Weight Calculation:** Uses the Devine formula to calculate the ideal weight based on the user's height.
- **Daily Caloric Intake Calculation:** Uses the Harris-Benedict formula to calculate the calories needed to reach the ideal weight.
- **Multi-language Support:** Implemented with `react-i18next` to offer the application in various languages.
- **Modern Interface:** Uses `SweetAlert2` to display elegant and interactive alerts.
- **Navigation**: Implemented with `react-router-dom` for a smooth user experience.

## Technologies Used

- **Vite:** A fast development tool for frontend applications.
- **React:** A JavaScript library for building user interfaces.
- **react-hook-form:** Form management and validation in React.
- **react-router-dom:** Navigation and routing in React applications.
- **react-i18next:** Internationalization and multi-language support.
- **SweetAlert2:** Interactive and stylized alerts.

## installation

Follow these steps to install and run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jhonv4sq/calorie-calculator.git
   cd calorie-calculator

2. **Install dependencies:**
   ```bash
   npm install

3. **Start the development server:**
   ```bash
   npm run dev
