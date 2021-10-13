// Overview
// Interviewing for software engineering role at NYC office.
// Has 4 total rounds.

// Round 1
// Question
// Tell me about the a exciting problem you had to solve recently.

// Question
// Write a producer class, which takes messages and sends them to a pre-defined network endpoint. Contraints:

// The class should have some caching in place, that it should not try to send message as it gets them.
// The class will be instantiated from a single process. The instance may be shared across multiple processes.
// The constructor should take 2 arguments
// First argument should be the max count of messages. At any instant producer cannot hold more messages that this count.
// Second argument should be the "max time allowed for each message to be held". At any instant, the producer cannot hold any message to time more than this argument.
// The class should expose a public "SendMessage" API which takes a string as a message, and sends it.
// Discussion
// Try to get more constraints, such as what is the expected least count for the second argument to the contructor.

// Round 2
// Questions on architecture
// What is virtual memory and why is it needed?
// Describe the uses of "private, protected and public" in objective oriented programming.
// What is the difference between process and thread.
// Describe issues with concurrent memory access by various threads and how to resolve it.
// Describe the neccessity for virtual methods.
// Why C++ desctructors are genrally declared virtual.
// Question
// Some behavioral questions arond my previous work.

// Question
// Write an API that takes input string in the form of "<2 characters denoting the length of next message><message>" and prints the message.
// Input is guaranteed to be valid.

// Example
// PrintMessage("02bc101234567890") prints "bc1234567890"

// Follow up
// The input is valid, but is broken across multiple invocations.

// Example
// PrintMessage("02bc1012345")
// PrintMessage("67890")
// This should also print "bc1234567890"

// Question
// You have a singly linked list, where the tail could be null, or could be pointing to another node of the linked list.
// Write an API to return true, if and only if, the tail is pointing to another node of the linked list.

// Question
// Given (n+1) and (n+3) are prime numbers, prove that n+2 is always divisible by 6 (with one exception).
// Explain the exception as well.

// Round 3
// Question on architecture
// linked list vs. arrays
// Conceptual difference
// Big O notation for insertion
// Is there a perf difference for "summing up all elements" for large structures (count of elements > 10^6). If yes, estimate the difference.
// How do you start on a new projects.
// How do you estimate a project's success.
// If you authoring a service, what metrics would you add to the service.
// Round 4
// Question
// Design google maps, optiomize for faster "shortest time" quries between 2 points.
// The complete map data could not fit into one machine. How would you parition the data to fit on mutiple machines.
// Question
// Given a list of 3 co-ordinates of n triagles, such as the triangles cover some cartesian space completely without overlapping, write a function that takes an point in the 2-D space and returns the triangle that encapsulates that point. Return -1, if no such triangle is found.