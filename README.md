# 🥗 Restaurant Web Server

![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=flat&logo=fastify&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg?style=flat&logo=typescript)
![EJS](https://img.shields.io/badge/EJS-Server%20Side-green)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

> A dynamic, server-side rendered website built with Fastify, TypeScript, and EJS.

## Overview

This project demonstrates how to build a monolithic web application using **Node.js** and **Fastify**. Unlike a standard API that returns JSON, this server handles **Server-Side Rendering (SSR)** to deliver fully formed HTML pages to the browser.

It features a responsive UI for a restaurant named _"The Happy Place"_, complete with dynamic routing, static asset serving, and logic-driven templates.

## Key Features

- **Server-Side Rendering (SSR):** Uses **EJS** to inject server data (menu items, opening hours) directly into HTML before sending it to the client.
- **Dynamic Logic:** Automatically detects the current day of the week to highlight today's opening hours in the UI.
- **Static Asset Serving:** Configured Fastify to securely serve CSS and images via the `@fastify/static` plugin.
- **Responsive Design:** A custom CSS Grid layout that adapts from desktop (3 columns) to mobile (1 column).
- **MVC Architecture:** Separates Data (JSON), Logic (Server Routes), and Views (EJS Templates) for clean code organization.

## 🛠️ Tech Stack

| Category       | Technology     | Purpose                            |
| :------------- | :------------- | :--------------------------------- |
| **Framework**  | **Fastify**    | High-performance Web Server        |
| **Language**   | **TypeScript** | Type safety & Modern Syntax        |
| **Templating** | **EJS**        | HTML Generation & Logic            |
| **Styling**    | **CSS3**       | Grid, Flexbox & Responsive Layouts |
| **Tooling**    | **pnpm**       | Package Management                 |

## Getting Started

### Prerequisites

- Node.js installed (v18+)
- **pnpm** installed (Run `npm install -g pnpm`)

### Installation

1.  **Clone the repository**

    ```bash
    git clone [https://github.com/taophycc/restaurant-web-server.git](https://github.com/taophycc/restaurant-web-server.git)
    cd restaurant-web-server
    ```

2.  **Install dependencies**

    ```bash
    pnpm install
    ```

3.  **Start the Server**

    - **Development Mode** (Auto-restart on save):
      ```bash
      pnpm dev
      ```
    - **Production Mode**:
      ```bash
      pnpm start
      ```

4.  **Visit the App**
    Open your browser and navigate to: `http://localhost:3000`

## 📂 Project Structure

```text
├── public/            # Static Assets (Publicly accessible)
│   └── css/
│       └── style.css  # Main Stylesheet
├── src/
│   ├── data/          # Data Models (Menu items, Opening Hours)
│   └── index.ts      # Main Server Entry Point & Routes
├── views/             # EJS Templates
│   ├── index.ejs      # Home Page
│   ├── menu.ejs       # Menu Page
│   └── hours.ejs      # Opening Hours Page
├── package.json       # Dependencies & Scripts
└── tsconfig.json      # TypeScript Configuration
```
