# Lab 5 - Starter
Dhruv Susheelkar  
Uday Singla  
[Expose](https://3dsa.github.io/Lab5_Starter/expose.html)  
[Explore](https://3dsa.github.io/Lab5_Starter/explore.html)



## Check your understanding:
1. No, I would not use a unit test to test the "message' feature of a messaging application. This is because sending a message is not a standalone task and we would not be able to test how the function would interact with rest of the applicaiton. It is a feature that would require integration with rest of the parts of the system which cannot be tested just through unit tests.
2. Yes, I would implement unit test to test the “max message length” feature of a messaging application as it has a clear defined logic and can be tested alone without any other interactions with rest of the application. It can be tested through unit test as it is small, simple, self-contained and standalone task. We can easily write a unit test to verify if a message longer than 80 characters is either rejected or made shorter depending on the desired outcome.
