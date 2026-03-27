import moment from "moment";

export function testTest(msg) {
  alert("hello there: " + msg);
}

testTest("hello from test");

export function dateTest(date) {
  return moment(date).daysInMonth();
}
