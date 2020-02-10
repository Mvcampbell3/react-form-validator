## React Form Validator

The purpose of this project is to create a solid client-side form validation process using React Hooks.

### Process

By using useState and useEffect hooks within the LoginForm component, the state is binded with input elements. When those inputs trigger onChange events, they update the state. When state gets updated, the dependant useEffect hook runs, which checks to see if the current state meets the correct criteria for the input.

For example, let's take a look at the password input. The input directly sets the password state using setPassword that was created in the useState hook. The useEffect hook the runs when ever the password state is changed checks the password string to make sure it meets the following: 

 - Contains a uppercase letter
 - Contains a number
 - Has at least 6 characters

Each of those criteria match up with a state boolean variable. Using those variables, and the ones from username, email, and the second password, we have another useEffect hook which gates the submit button's appearance and onClick functionality. 

### Conclusion

While this process is not overly complex, it is the cornerstone of ensuring that the server recieves only good data. We can then process that data into our database, confident that the validation criteria we have set up to gate our database and server is met. The benefit to this process is there should be no server interaction with our form unless the user has met every criteria. The feedback is instant. The server and database do not have to waste resources processing and evaluating bad data. This, in turn, improves performance across an entire appliation.