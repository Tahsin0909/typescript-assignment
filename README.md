Explain the difference between any, unknown, and never types in TypeScript.
১) any

যেকোনো ভ্যালু রাখা যায় (string, number, object—সব)

TypeScript কোনো চেক করবে না

ভুল হলেও error দিবে না

beginner দের জন্য dangerous, কারণ bug ধরা কঠিন হয়

উদাহরণ:

let x: any;

x = 10;
x = "hello";
x = true;

x.nonExistingFunction(); // কোনো error দিবে না (dangerous)

২) unknown

এটাও যেকোনো ভ্যালু নিতে পারে

কিন্তু ব্যবহার করার আগে type check করতে হবে

এটি নিরাপদ version of any

উদাহরণ:

let y: unknown;

y = "hello";
y = 20;

// সরাসরি ব্যবহার করলে error
// y.toUpperCase(); ❌

// আগে চেক করতে হবে
if (typeof y === "string") {
  y.toUpperCase(); // এখন ঠিক আছে ✔️
}


unknown = নিরাপদ any
any = খুব বেশি ফ্রি, তাই ভুল ধরতে পারে না

৩) never

এমন টাইপ যা কখনো কোনো ভ্যালু পায় না

যেমন:

সবসময় error throw করে

বা কোনো infinite loop

উদাহরণ ১: Error throw

function fail(message: string): never {
  throw new Error(message);
}


উদাহরণ ২: Infinite loop

function loopForever(): never {
  while (true) {}
}

never = কোনো দিন ভ্যালু রিটার্ন হবে না


Provide an example of using union and intersection types in TypeScript.

Union টা কী?

একটা ভেরিয়েবল একাধিক টাইপের যেকোনো একটি হতে পারে।

উদাহরণ:

let value: string | number;

value = "hello"; // ঠিক
value = 100;     // ঠিক


Union = OR
(দুইটার যেকোনো একটা)

আরও উদাহরণ:
function printId(id: string | number) {
  console.log(id);
}

printId("123");
printId(456);

Intersection টা কী?

দুইটা টাইপ একসাথে merge হয়ে যায়।
মানে: দুটার সব property ই থাকতে হবে।

উদাহরণ:

type A = { name: string };
type B = { age: number };

type C = A & B;  // merge

const person: C = {
  name: "Tahsin",
  age: 21,
};


Intersection = AND
(দুটোই থাকতে হবে)

আরেকটা উদাহরণ:
type X = { id: number };
type Y = { isAdmin: boolean };

type User = X & Y;

const u: User = {
  id: 1,
  isAdmin: true,
};

Union vs Intersection (সহজ তুলনা)
টাইপ	মানে	উদাহরণ
**Union (	)**	যেকোনো একটাই
Intersection (&)	দুটাই একসাথে	{name} & {age}