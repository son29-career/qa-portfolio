# Test Plan — SauceDemo E-commerce Web Application

**Document Version:** 1.0  
**Prepared By:** QA Tester  
**Project Type:** Independent Manual Testing Practice  
**Application Under Test:** https://www.saucedemo.com/  
**Test Type:** Functional, UI, Negative, and Exploratory Testing

## 1. Objective

The objective of this test plan is to evaluate the core functionality of the SauceDemo e-commerce web application and verify that users can log in, browse products, manage their shopping cart, and complete the checkout process.

Testing will also cover invalid inputs, boundary conditions where applicable, and user interface behavior to identify defects that could affect functionality or user experience.

## 2. Scope of Testing

### In Scope

- User login with valid and invalid credentials
- Login validation and error messages
- Product inventory display
- Product sorting
- Adding and removing products from the cart
- Shopping cart contents and item quantities, where supported
- Checkout information form validation
- Checkout overview and order completion
- Navigation between application pages
- Basic UI consistency and usability observations

### Out of Scope

- Payment gateway integration and actual financial transactions
- Production security and penetration testing
- Load, stress, and performance testing
- Compatibility across an exhaustive range of browsers and devices
- Backend database validation
- Third-party integrations not exposed by the demo application

## 3. Test Approach

Testing will be performed manually through the web browser before relying on automation.

The following techniques will be used:

- **Positive testing:** Verify expected behavior with valid inputs.
- **Negative testing:** Verify handling of invalid or missing inputs.
- **Exploratory testing:** Explore workflows and interactions beyond the predefined cases.

Test cases will be documented before execution where practical. Actual results will be compared against expected results, and failures will be investigated and documented.

## 4. Test Environment

- **Application:** SauceDemo public demo website
- **Browser:** Chrome Browser
- **Operating System:** Windows 11 
- **Test Data:** Demo credentials and non-sensitive sample checkout information
- **Testing Method:** Manual testing

## 5. Test Data

Test data will include:

- Valid demo user credentials
- Invalid username or password
- Empty login fields
- Products available in the inventory
- Different product combinations in the shopping cart
- Missing and valid checkout information

Only authorized demo credentials and non-sensitive test information will be used.

## 6. Entry Criteria

Testing may begin when:

- The application is accessible.
- The required demo credentials are available.
- The browser and operating environment are ready.
- The initial test scenarios and test data have been prepared.

## 7. Exit Criteria

Testing will be considered complete for this exercise when:

- All planned test cases have been executed or assigned a documented status.
- Failed test cases have supporting evidence where practical.
- Identified defects have been documented with reproducible steps.
- Blocked and unexecuted cases have explanations.
- A test execution summary has been prepared.

Completion of this exercise does not guarantee that the application is defect-free.

## 8. Defect Reporting

Any observed defect will be documented with:

- Defect ID
- Summary/title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity and priority, where justified
- Status
- Supporting screenshots or other evidence

Defects will be reported only when they can be reproduced or when the observation and its limitations are clearly explained.

## 9. Risks and Assumptions

- The demo application may contain intentional defects or behavior designed for testing practice.
- The application or its behavior may change without notice.
- No formal business requirements or acceptance criteria have been supplied; expected results will be based on observable functionality and clearly stated assumptions.
- Third-party services and production integrations are outside the scope of this exercise.

## 10. Deliverables

- Test plan
- Test scenarios and test cases
- Test execution results
- Defect report, if applicable
- Test execution summary

## 11. Approval

**Prepared By:** QA Tester  
**Review Status:** Draft — pending review  
**Approval:** Not applicable to this independent practice project
