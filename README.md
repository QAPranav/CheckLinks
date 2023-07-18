# Checklinks Repository

## Overview

Checklinks is a repository that utilizes [Playwright Test](https://playwright.dev/docs/test/) to dynamically check links on any website. By providing the page URL and the web element with an anchor attribute, you can easily verify the validity of links present on the page.

The main purpose of this repository is to automate the link checking process, making it efficient and reliable, while saving time and effort in manual link verification.

## Prerequisites

Before running the link checks, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org) (version 12 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/QAPranav/Checklinks.git
```
Install the project dependencies by running the following command:

```bash
npm install
```
# How to Use
To dynamically check links on a specific website, follow these steps:

Set the BASE_URL environment variable to the URL of the website you want to test.
```bash
$env:BASE_URL = 'https://example.com/';
```
Set the WebElement environment variable to the CSS selector of the web element containing the anchor elements you want to check.
```bash
$env:WebElement = '#main a';
```
Run the following command to start the link checking process:
```bash
npx playwright test
```
Playwright Test will open the specified website in a browser, find the specified web element, and check all anchor elements within that web element for valid links.

# Results
The test execution will generate a report with the results of the link checks. Any broken or invalid links will be reported, allowing you to identify and fix any issues on the website.

# Contributions
Contributions to this repository are encouraged and appreciated! If you encounter any bugs, have ideas for improvements, or want to add new features, feel free to submit a pull request.

# License
Checklinks is licensed under the MIT License. You are free to use, modify, and distribute the code as per the terms of the license.

# Additional Resources
- Playwright Test Documentation
- Playwright Documentation
- GitHub Repository
