User Story 2:
As a teacher, I want to be able to log in to my user account on the website, so that I can access personalized content and track my progress on educational resources.

Task:
* Create a login form that requires email and password
* Validate the input and display error messages if necessary
* Authenticate the user's credentials with the database
* Create a session for the user
* Redirect the user to the dashboard after successful login

Acceptance Criteria:
* The login form should have fields for email and password.
* The form should not submit if either field is empty or if the email format is invalid.
* If the email or password is incorrect, an error message should be displayed to the user.
* If the email and password are correct, the user should be authenticated and redirected to the dashboard.
* If the user has forgotten their password, there should be a link to reset it.
* If the user is already logged in, they should not be able to access the login page.
* If the user logs out, their session should be destroyed and they should be redirected to the login page.
