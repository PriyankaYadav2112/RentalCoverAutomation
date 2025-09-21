# Instant Quote Playwright Test Automation

## Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- Google Chrome, Firefox, or WebKit browsers (Playwright will install these automatically)
- (Optional) Python 3.x and virtual environment if integrating with Python tools

## Setup Steps
1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd rentalcoverautomation
   ```
   
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```
4. **Run the tests**
   ```bash
   npx playwright test
   ```
   To run a specific test with slow motion for debugging:
   ```bash
   npx playwright test tests/instantQuote.spec.ts
   ```
   For step-by-step debugging:
   ```bash
   PWDEBUG=1 npx playwright test tests/instantQuote.spec.ts
   ```


If you encounter any issues or have questions, please refer to the comments in the code or reach out to the project maintainer.
