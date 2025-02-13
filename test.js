async function test_await() {
  console.log("====================================");
  console.log("Ready for testing async/await:");
  let await_promise = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log(
    "This is 1st text console.log message inside the test_await() function, I will print 4th."
  );
  let data = await await_promise.json();
  console.log("The response of await_promise is:", data);
  console.log(
    "This is 2nd text console.log message inside the test_await() function. I will print 5th or 6th."
  );
}

test_await();
console.log(
  "This is a console.log message outside of functions. I will print 1st."
);

function test_thenMethod() {
  console.log("====================================");
  console.log("Ready for testing then() method:");
  let then_promise = fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(
        "This is a console.log message inside the then() chain, I will print 5th or 6th."
      );
      console.log("The response data of the then() method is:", data);
    })
    .catch((error) => {
      console.error("Error fetching data for then_promise:", error);
    });
  console.log(
    "This is a console.log message inside the test_thenMethod() function. I will print 2nd."
  );
}

test_thenMethod();
console.log("This is the last line of the entire code.I will print 3rd.");