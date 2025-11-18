### 1.Explain the difference between any, unknown, and never types in TypeScript.

----
<table border="1" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <th>টাইপ</th>
      <th>বর্ণনা</th>
      <th>টাইপ চেকিং</th>
      <th>যেকোনো ভ্যালু রাখা যাবে?</th>
      <th>সরাসরি ব্যবহার করা নিরাপদ?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>any</code></td>
      <td>যেকোনো ভ্যালু রাখা যায় (যেমন: string, number, object — সব কিছু)</td>
      <td>TypeScript কোনো চেক করবে না</td>
      <td>হ্যাঁ</td>
      <td>না — ভুল হলেও এরর দেখাবে না, বাগ ধরা খুব কঠিন হয়ে যায়</td>
    </tr>
    <tr>
      <td><code>unknown</code></td>
      <td>এটিও যেকোনো ভ্যালু গ্রহণ করতে পারে</td>
      <td>ব্যবহারের আগে অবশ্যই টাইপ চেক করতে হবে (যেমন: typeof দিয়ে)</td>
      <td>হ্যাঁ</td>
      <td>হ্যাঁ — <code>any</code>-এর চেয়ে অনেক বেশি নিরাপদ</td>
    </tr>
    <tr>
      <td><code>never</code></td>
      <td>এমন টাইপ যা কখনো কোনো ভ্যালু পায় না (যেমন: সবসময় error থ্রো করে বা infinite loop)</td>
      <td>সম্পূর্ণ নিরাপদ (কারণ রানটাইমে কোনো ভ্যালু থাকে না)</td>
      <td>না — কোনো ভ্যালু অ্যাসাইন করা যায় না</td>
      <td>না — এটি ব্যবহার করা যায় না (কারণ এর কোনো ভ্যালু নেই)</td>
    </tr>
  </tbody>
</table>


### 2. Provide an example of using union and intersection types in TypeScript.

<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>বৈশিষ্ট্য</th>
      <th>Union Type (`|`)</th>
      <th>Intersection Type (`&`)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>অর্থ</strong></td>
      <td>“টাইপ A <strong>অথবা</strong> টাইপ B” — যেকোনো একটি টাইপ হতে পারে</td>
      <td>“টাইপ A <strong>এবং</strong> টাইপ B” — দুটো টাইপের <strong>সব প্রোপার্টি একসাথে</strong> থাকতে হবে</td>
    </tr>
    <tr>
      <td><strong>সিম্বল</strong></td>
      <td><code>|</code></td>
      <td><code>&</code></td>
    </tr>
    <tr>
      <td><strong>উদাহরণ</strong></td>
      <td>
        <code>let value: string | number;
value = "hello"; 
value = 42; </code>
      </td>
      <td>
        <code>type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;

const p: Staff = {
  name: "রহিম",
  id: 101
}; </code>
      </td>
    </tr>
    <tr>
      <td><strong>ব্যবহারের ক্ষেত্র</strong></td>
      <td>যখন একটি ভ্যারিয়েবল একাধিক টাইপের হতে পারে (যেমন: ID হতে পারে string বা number)</td>
      <td>যখন দুটি বা ততোধিক টাইপের সব ফিচার একসাথে দরকার (যেমন: ইউজার + অ্যাডমিন)</td>
    </tr>
  </tbody>
</table>