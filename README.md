# Eureka Real Estate - Next.js & Tailwind CSS Template

## Overview

Eureka Real Estate is a modern, feature-rich, and highly customizable web application template designed specifically for real estate agencies. Built with the latest web technologies, it provides a solid foundation for businesses looking to establish a professional online presence. This template can be easily adapted and tailored to match your agency's unique brand identity, services, and property listings.

Whether you're showcasing properties for sale, rent, or offering remodeling services, Eureka Real Estate provides the components and structure to get you started quickly.

## Key Features

- **Modern & Responsive Design:** Crafted with Tailwind CSS for a sleek, mobile-first experience across all devices.
- **Component-Based Architecture:** Leverages React and Next.js for reusable and maintainable UI components.
- **Customizable:** Easily adapt the styling, branding, and content to fit your agency's specific needs.
- **Interactive Elements:** Includes common real estate features like property sliders, image galleries, and contact forms.
- **SEO Friendly:** Built with Next.js, offering server-side rendering and static site generation capabilities for optimal search engine visibility.
- **Developer Friendly:** Clean code structure, TypeScript support, and common development tools pre-configured.

## Tech Stack

This project is built using a modern and robust technology stack:

### Core Framework & UI

- **[Next.js](https://nextjs.org/) (v15+):** A leading React framework for building server-rendered and statically generated web applications. It provides features like routing, image optimization, and API routes.
- **[React](https://react.dev/) (v19):** A JavaScript library for building user interfaces with a component-based architecture.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
  - **[PostCSS](https://postcss.org/):** A tool for transforming CSS with JavaScript plugins.
  - **[Autoprefixer](https://github.com/postcss/autoprefixer):** A PostCSS plugin to parse CSS and add vendor prefixes.
- **[Shadcn/ui](https://ui.shadcn.com/):** (Implied by Radix UI and styling utilities) A collection of beautifully designed, accessible, and customizable React components built on top of Radix UI and Tailwind CSS.
  - **[@radix-ui/\*](https://www.radix-ui.com/):** A collection of unstyled, accessible, and low-level UI primitives for building design systems.
  - **[class-variance-authority (CVA)](https://cva.style/):** For creating and managing component variants with Tailwind CSS.
  - **[clsx](https://github.com/lukeed/clsx):** A tiny utility for constructing `className` strings conditionally.
  - **tailwind-merge:** A utility to intelligently merge Tailwind CSS classes without style conflicts.
  - **tailwindcss-animate:** Adds animation utilities for Tailwind CSS.
- **Lucide React:** A comprehensive library of simply beautiful open-source icons.

### Forms & Validation

- **React Hook Form:** Performant, flexible, and extensible forms with easy-to-use validation.
- **Zod:** A TypeScript-first schema declaration and validation library, often used with React Hook Form.
- **@hookform/resolvers:** Resolvers for React Hook Form to integrate with validation libraries like Zod.

### Client-Side Utilities & Components

- **Embla Carousel React:** A lightweight, unopinionated, and extensible carousel library.
- **Sonner:** An opinionated toast component for React.
- **Recharts:** A composable charting library built on React components.
- **Next Themes:** For easy dark mode and theme switching in Next.js applications.
- **input-otp:** A React component for one-time password (OTP) input.
- **cmdk:** A fast, unstyled command menu React component.
- **react-resizable-panels:** Components for creating resizable panel layouts.

### Development & Tooling

- **TypeScript:** A superset of JavaScript that adds static typing for better code quality and maintainability.
- **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript.
  - **eslint-config-next:** ESLint configuration specifically for Next.js projects.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation & Running

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd eureka-realestate
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
    Open http://localhost:3000 with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
```
