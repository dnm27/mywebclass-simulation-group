User Story 1:
As a teacher, I want to be able to create a user account on the website, so that I can access personalized content and track my progress on educational resources.

Task:
* Create a user registration form with required fields (such as name, email, and password)
* Validate the input and display error messages if necessary
* Store user information in the database
* Send a confirmation email to the user's email address
* Display a success message after registration is complete

Acceptance Criteria:
* The user registration form must have required fields such as name, email, and password.
* If any of the required fields are not filled, an error message should be displayed prompting the user to fill all required fields.
* If the email entered is not in a valid format, an error message should be displayed prompting the user to enter a valid email.
* If the password entered is less than 8 characters or doesn't contain at least one uppercase letter, one lowercase letter, and one number, an error message should be displayed prompting the user to enter a stronger password.
* Upon successful registration, the user's information should be stored in the database.
* A confirmation email should be sent to the user's email address with a link to confirm their account.
* After successful registration, a success message should be displayed to the user.
* If a user with the same email already exists, an error message should be displayed prompting the user to enter a different email.
