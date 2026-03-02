# Personal Portfolio

This is a personal portfolio website built with Next.js, React, and Tailwind CSS. It's designed to showcase my skills, professional experience, and personal projects in a clean and modern interface.

## 🚀 Features

- **Blazing Fast**: Built with Next.js for static site generation and optimal performance.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Modern Tech Stack**: Utilizes the latest web development technologies.
- **Project Showcase**: A dedicated section for projects with links to live demos and source code.
- **Experience Timeline**: A chronological overview of my professional journey.
- **Contact Form**: A working contact form powered by Resend to ensure messages are delivered.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Email**: [Resend](https://resend.com/)
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 📦 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18.x or higher)
- npm

### Installation & Setup

1.  **Clone the repository.**

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Resend API key. You can get a free key from [resend.com](https://resend.com).

    ```env
    RESEND_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:9002`.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file in the root directory contains the necessary build settings. Simply connect your Git repository to Netlify for automatic deployments.
