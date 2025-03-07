# Xchangify - Currency Converter App 🚀
Xchangify is a fast, intuitive currency converter app offering real-time rates and smooth conversions. With a sleek, responsive design, it ensures a seamless experience for travelers and businesses, keeping you up-to-date with dynamic currency changes. Transform your currency handling with Xchangify!

This is a [React](https://reactjs.org/) project created with [Vite](https://vitejs.dev/), leveraging the power of [TypeScript](https://www.typescriptlang.org/) to deliver a fast, modern, and type-safe currency conversion experience.

## Key Features of **Xchangify**

*Xchangify* comes packed with the following robust features, ensuring that your currency conversion needs are met with efficiency and ease:

### 1. **Real-Time Currency Exchange Rates**
- Xchangify fetches real-time exchange rates from an external API, powered by an API key.
- Exchange rates are automatically updated based on the latest market data, providing you with the most accurate and up-to-date information.

### 2. **Exchange Rates for Three Currencies Simultaneously**
- The app allows you to convert between **three different currencies** at once.
- This feature is perfect for comparing exchange rates and conversions between multiple currencies, all in one go.
- Users can easily remove one, two, or all three currencies from the list whenever they no longer wish to track them.
- Whether you’re removing a single currency or resetting everything, the process is quick and simple, giving you complete control over your conversions and the flexibility to start fresh anytime.

### 3. **Local Storage for Currency Exchange Rates**
- Xchangify stores the latest exchange rates in **local storage**, which reduces the need for frequent API calls.
- When you reload the app, it loads the most recent exchange rates from local storage, ensuring faster load times and a more responsive experience.
- The app also stores the exchange rates in *real-time* (e.g., 1/23/2025, 11:05:07 PM), so you always know when the data was last updated.

### 4. **Erase Option ("Boom! All Gone" Button)**
- The app features a convenient Erase Option button, which, when clicked, clears all input fields and removes any previously loaded or cached exchange rates. 
- This gives users a quick and easy way to reset the app to its initial state, allowing them to start fresh without needing to manually clear each field or worry about old data affecting their experience.

### 5. **Light and Dark Theme Toggle**
- Xchangify includes a **theme toggle** feature that lets you easily switch between **Light** and **Dark** modes.
- This feature ensures that the app is optimized for visibility in any environment, whether you're working in bright sunlight or in a low-light setting.

### 6. **Extensive List of Currencies with Symbols**
- Xchangify supports a wide range of global currencies, giving users the flexibility to choose from various countries and their respective currency symbols.
- The list includes popular currencies, as well as some lesser-known ones, providing a comprehensive experience for users worldwide.

Here’s a list of the supported countries and their currencies:

- **Nepalese Rupee (NPR)** - रू
- **US Dollar (USD)** - $
- **Euro (EUR)** - €
- **Japanese Yen (JPY)** - ¥
- **British Pound (GBP)** - £
- **Australian Dollar (AUD)** - A$
- **Canadian Dollar (CAD)** - C$
- **Swiss Franc (CHF)** - CHF
- **Chinese Renminbi (CNY)** - ¥ (or C¥)
- **Swedish Krona (SEK)** - kr
- **Mexican Peso (MXN)** - $
- **New Zealand Dollar (NZD)** - NZ$
- **Singapore Dollar (SGD)** - S$
- **Hong Kong Dollar (HKD)** - HK$
- **Norwegian Krone (NOK)** - kr
- **South Korean Won (KRW)** - ₩
- **Turkish Lira (TRY)** - ₺
- **Indian Rupee (INR)** - ₹
- **Russian Ruble (RUB)** - ₽
- **Brazilian Real (BRL)** - R$
- **South African Rand (ZAR)** - R
- **Danish Krone (DKK)** - kr
- **Polish Złoty (PLN)** - zł
- **Thai Baht (THB)** - ฿
- **Israeli New Shekel (ILS)** - ₪
- **Indonesian Rupiah (IDR)** - Rp

---

## Getting Started

To get started with **Xchangify**, follow these simple setup instructions:

### 1. Clone the repository

First, clone the repository to your local machine:
```bash 
git clone https://github.com/binayakbartaula11/Xchangify.git
```
Navigate to the project directory:
```bash
cd Xchangify
```

### 2. Install Essential Dependencies

Install the core dependencies for React and TypeScript:

```bash
npm install react react-dom typescript
```

For Vite: Install the Vite build tool and the necessary React plugin:

```bash
npm install --save-dev vite @vitejs/plugin-react @types/react @types/react-dom
```

### 3. Install Development Tools

For better code quality and consistent formatting, install ESLint and Prettier:

```bash
npm install --save-dev typescript eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```

### 4. Install Additional UI and Tools (Optional)

To enhance the app’s functionality and appearance, you can install the following:

**For UI Styling:**
Install popular UI libraries such as Material-UI, styled-components, or TailwindCSS:

```bash
npm install @mui/material @emotion/react @emotion/styled styled-components tailwindcss postcss autoprefixer
```

For API Fetching
Install Axios to fetch real-time exchange rate data:
```bash
npm install axios
```

### 5. API Key Setup

To securely store and use your API keys in the app, follow these steps:

1. Create a `.env` file in the root directory of your project if it doesn’t already exist.

2. Add your API keys to the .env.local file. For example, if you’re using an external API (like an exchange rate API), you'll need to add your API key like this:
```env
VITE_API_KEY=<your-api-key>
```

By following these steps, your API keys will be securely stored and available for use in the app. You can access them in your app code using `import.meta.env.VITE_API_KEY`.

### 6. Running the Development Server

To start the development server:

```bash
npm run dev
```

This will launch the application locally at http://localhost:3000, offering a fast and efficient development environment.

### Development Flow

The project is set up for smooth and efficient development. You can modify the files within the src directory, and Vite's Hot Module Replacement (HMR) ensures fast updates and an interactive development experience.
**Key Points:**
- Source Code: All project code is located in the `src` directory. This is where you'll make the majority of your changes.
- Fast Development: Thanks to Vite's HMR, any updates you make to the code will automatically reflect in the browser without needing a full page reload.
- Interactive Updates: Vite allows for real-time, instant feedback when you change the code, creating an optimal workflow for fast iteration.

---

## File Structure

Here's the file structure of the Xchangify app:

```graphql
Xchangify/
├── node_modules/             # Dependencies (auto-generated)
├── public/                   # Static files (e.g., favicon.png)
│   └── favicon.png           # Favicon for the app
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   │   ├── ConversionHistory.tsx  # Component for showing past conversions
│   │   ├── CurrencySelect.tsx    # Dropdown for selecting currencies
│   │   ├── Footer.tsx           # Footer component for the app
│   │   └── ThemeToggle.tsx      # Theme toggle button (dark/light)
│   ├── types/                # TypeScript type definitions
│   │   └── currency.ts        # Currency-related types
│   ├── utils/                # Utility functions and API calls
│   │   └── api.ts             # Helper functions for fetching currency data
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   ├── main.tsx              # Entry point for rendering React
│   └── vite-env.d.ts         # TypeScript environment declarations
├── .env                      # Environment variables (e.g., API keys)
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # Main HTML file
├── package.json              # Project dependencies & scripts
├── package-lock.json         # Lock file for dependencies
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Documentation
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # TypeScript config for app
├── tsconfig.node.json        # TypeScript config for Node.js
├── vite.config.ts            # Vite configuration file
```

---

## Project Initialization

To reset the project to its default state, use the following command:

```bash
npm run reset
```

This will move the current code to a backup folder (src-example) and create a new, empty src directory, providing you with a clean slate to begin fresh development. Alternatively, if you'd like to create a new project, follow these steps:

**Vite Setup:**

To create a new Vite project with React and TypeScript:

```bash
npm create vite@latest Xchangify --template react-ts
```

**During Setup**:
- Project Name: Specify a name for your project (e.g., Xchangify).
- Package Manager: Select react-ts for a React project with TypeScript.

Navigate to the project directory:

```bash
cd Xchangify
```

---

## Key Features
- ⚡ Fast Development: Vite ensures a speedy development environment with instant Hot Module Replacement (HMR).
- 🌍 Real-time Exchange Rates: Fetch live exchange rates and perform seamless currency conversions.
- 🧑‍💻 TypeScript Support: Enjoy type-safe development with autocompletion and type inference.
- 🎨 Customizable UI: Easily style your app with TailwindCSS or Material UI.
- 🔧 Optimized for Performance: Benefit from Vite’s optimized builds, tree-shaking, and code-splitting.

---

## Live Demonstration 🌐

Ready to simplify your currency conversions? Check out the live version of **Xchangify** hosted on [Explore Demo](https://xchangify.netlify.app/). Effortlessly convert currencies, track real-time rates, and enhance your financial planning in just a few clicks. How seamless can your global transactions be? 🌍💱

---

## Learn More

For in-depth knowledge and guides on TypeScript and React with TypeScript, refer to the following resources:

- **[Vite Documentation](https://vite.dev/)**: Explore the core concepts of Vite, its features, and advanced configurations for React and TypeScript projects.
- **[React Documentation](https://reactjs.org/docs/getting-started.html)**: Learn how to build interactive UIs using React, including guides on how to integrate TypeScript effectively.
- **[TypeScript Documentation](https://www.typescriptlang.org/docs/)**: Official documentation for TypeScript, including setup, features, and advanced topics like type inference and generics.
- **[Vite + React Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)**: Discover how Vite integrates with React, along with TypeScript support, and how it improves the development experience.

---

## Join the Community

Explore these communities and get involved in the broader ecosystem of TypeScript, Vite, and React development:

- **[Vite GitHub Repository](https://github.com/vitejs/vite)**: Explore the open-source Vite repository, contribute, and learn from the broader community.
- **[React GitHub Repository](https://github.com/facebook/react)**: The source code for React, including discussions on TypeScript usage and integration with React projects.
- **[TypeScript GitHub Repository](https://github.com/Microsoft/TypeScript)**: Access the source code and contribute to TypeScript's development. Find discussions and resources on TypeScript features, updates, and best practices.
- **[Vite Discord](https://discord.com/invite/vitejs)**: Join the Vite Discord server for discussions, help, and sharing knowledge about Vite and its ecosystem.
- **[React Community Support](https://reactjs.org/community/support.html)**: Access resources and channels for React-related support, including TypeScript-specific help.
- **[TypeScript Community](https://www.typescriptlang.org/community)**: Find resources, events, and forums dedicated to TypeScript discussions and support.

---
