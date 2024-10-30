![Alt text](/src/assets/media/password_input_preview.png)

# Password Component
## Why?

In today’s digital landscape, security is paramount, and password management is one of the main pillars of effective web security. To enhance security, especially for companies, password requirements must be clear, yet user-friendly. Balancing usability and security in the signup process is essential.

A thoughtfully designed password field improves user experience, even when multiple security requirements are in place. Our component aims to simplify this experience, helping users understand and meet password requirements with ease.
## Design Choices for an Effective Password Field

 **1. Legibility and Clarity**

- **Preemptive Requirement Display**  
    Display password requirements above the input field. This helps users understand the necessary criteria before they begin typing, reducing errors and saving time.

- **Show/Hide Password Toggle**  
    Including a toggle for showing or hiding the password allows users to review their input as needed, ensuring accuracy without the frustration of hidden text.

 **2. Progressive Requirement Validation**

Guiding users with feedback as they type can reduce frustration. Here’s how we handle this:

- **Non-Intrusive Error Checking**  
    Avoid interrupting users with error messages as they type. Instead, wait until they finish typing or shift focus away from the input field.

- **Dynamic Requirement Validation**  
    Highlight each fulfilled requirement in real-time to reassure users they’re on the right track.

- **Clear Error Indication**  
    If a user tries to submit or leave the field without meeting all requirements, use a subtle cue—like a red border around the input field—to indicate an issue without disruptive alerts.

 **3. Meaningful Error Messages**

Error messages should be clear, polite, and easy to understand. Short, precise messages help users quickly identify and correct issues.

- **Simple Language**  
    Avoid technical terms. Use clear, everyday language to help users understand what to fix. Instead of “Invalid password,” try “Add at least one uppercase letter.”

- **Keep it Short**  
    Limit messages to one or two sentences. Clear, direct messages reduce frustration and help users focus.

- **Be Specific and Polite**  
    Point out what’s missing in a friendly way. For example, “Please add a special character for a stronger password.”


# How to run the project?

- Install project dependencies by running:
`npm install` or `yarn install`
- [Run the project](https://angular.io/guide/setup-local#run-the-application)

# References

- [Login & Signup Flows: Basics and Best Practices](https://app.uxcel.com/courses/common-patterns/loginsignup-best-practices-854)
- [Error messages guidelines](https://www.nngroup.com/articles/error-message-guidelines/)
