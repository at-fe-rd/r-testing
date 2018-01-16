#About Testing Summary

##Different Types of Tests
Most apps will require both unit tests and functional tests, and many complex apps will also require integration tests.

**Unit tests** ensure that individual components of the app work as expected. Assertions test the component API.

**Integration tests** ensure that component collaborations work as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)

**Functional tests** ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.

You should isolate unit tests, integration tests, and functional tests from each other so that you can easily run them separately during different phases of development. During continuous integration, tests are frequently used in three ways:

During development, for developer feedback. Unit tests are particularly helpful here.
In the staging environment, to detect problems and stop the deploy process if something goes wrong. Typically the full suite of all test types are run at this stage.
In the production environment, a subset of production-safe functional tests known as smoke tests are run to ensure that none of the critical functionality was broken during the deploy process.

Which Test Types Should You Use? All of Them.

In order to understand how different tests fit in your software development process, you need to understand that each kind of test has a job to do, and those tests roughly fall into three broad categories:

User experience tests (end user experience)
Developer API tests (developer experience)
Infrastructure tests (load tests, network integration tests, etc…)

##We only focus on Unit test.

Unit tests should be:

* Dead simple.
* Lightning fast.
* A good bug report.

What do I mean by **“a good bug report?”**

I mean that whatever test runner and assertion library you use, a failing unit test should tell you at a glance:

* Which component is under test?
* What is the expected behavior?
* What was the actual result?
* What is the expected result?
* How is the behavior reproduced?

The first four questions should be visible in the failure report. The last question should be clear from the test’s implementation.

 Some assertion types are not capable of answering all those questions in a failure report, but most equal, same, or deepEqual assertions should. In fact, if those were the only assertions in any assertion library, most test suites would probably be better off. Simplify.

Reading here for more detail:

https://www.sitepoint.com/javascript-testing-unit-functional-integration/