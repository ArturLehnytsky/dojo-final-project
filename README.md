# Dojo Final Project

A test automation framework built with Playwright for automated web testing.

## Project Overview

This project provides automated tests for web applications using Playwright. It includes UI and API testing capabilities with a structured approach to test organization.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Installation

Clone the repository and install dependencies:

```shell script
git clone <repository-url>
cd dojo-final-project
npm install
```


## Project Structure

```
dojo-final-project/
├── app/                # Application related code
│   ├── api/            # API testing utilities
│   └── ui/             # UI components and page objects
├── tests/              # Test files
│   ├── fixures/        # Test data and fixtures
│   ├── search.spec.ts  # Search functionality tests
│   └── wishlist-logged-user.spec.ts # Favorite list functionality tests
├── utils/              # Utility functions and helpers
│   └── users.ts        # User-related utilities
├── .github/            # GitHub configuration files
├── .gitignore          # Git ignore file
├── .prettierrc         # Prettier configuration
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Locked versions of dependencies
├── playwright.config.ts # Playwright configuration
└── README.md           # Project documentation
```


## Configuration

The project uses the following configuration files:
- `playwright.config.ts` - Playwright test runner configuration
- `.prettierrc` - Code formatting rules
- `.env` - Environment variables (create based on instructions below)

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
BASE_URL=<your-base-url>
USERNAME=<test-username>
PASSWORD=<test-password>
```


## Running Tests

### Run all tests

```shell script
npx playwright test
```


### Run a specific test file

```shell script
npx playwright test tests/search.spec.ts
```


### Run tests in UI mode

```shell script
npx playwright test --ui
```


### Run tests with specific browser

```shell script
npx playwright test --project=chromium
```


## Debugging Tests

### Show browser during test execution

```shell script
npx playwright test --headed
```


### Debug tests with Playwright Inspector

```shell script
npx playwright test --debug
```


## Code Formatting

The project uses Prettier for code formatting:

