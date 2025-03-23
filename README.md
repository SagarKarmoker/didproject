# DID Manager - Decentralized Identity Solution

## Overview

DID Manager is a modern web application that provides a simple and secure way to manage your decentralized identities. Built with Next.js and React, this application allows users to take control of their online presence through a decentralized identity solution.

## Features

- **Identity Management**: Create and manage multiple decentralized identities for different contexts (work, personal, social)
- **Credential Management**: Store and manage your digital credentials securely
- **Web3 Integration**: Seamlessly connect with your preferred Web3 wallet
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Dark/Light Mode**: Support for both dark and light themes

## Tech Stack

- **Frontend**: Next.js 15, React 19
- **Authentication**: Privy for Web3 authentication
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Custom UI components with Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Type-safe code

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Privy account for authentication (get API keys from [Privy](https://privy.io))

### Installation

1. Clone the repository

```bash
git clone https://github.com/SagarKarmoker/didproject.git
cd didproject
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_CLIENT_ID=your_privy_client_id
```

4. Start the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── dashboard/        # Dashboard page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   └── ...               # Other components
├── lib/                  # Utility functions
├── providers/            # React context providers
│   ├── authDashboard.tsx # Authentication wrapper for dashboard
│   ├── privyProvider.tsx # Privy authentication provider
│   └── themeProvider.tsx # Theme provider
├── public/               # Static assets
└── ...                   # Configuration files
```

## Usage

### Authentication

The application uses Privy for Web3 authentication. Users can connect their wallets or use embedded wallets provided by Privy.

### Dashboard

After authentication, users are redirected to the dashboard where they can:

- View and manage their identities
- Monitor active sessions
- Manage credentials
- View usage statistics

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.