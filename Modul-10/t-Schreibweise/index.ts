function generic<T>(arg: T): T {
  return arg;
}

const stringGeneric = generic<string>("ABC");
const numberGeneric = generic<number>(1);

type Student<T, S> = {
  id: T;
  name: S;
};

const student: Student<number, string> = { id: 1, name: "Name" };

// ________________________________________________________
// object schreibweise

type Student1<n, s> = {
  id: n;
  name: s;
};

/**
 * {
 * "0":Student0,
 * "1":Student1
 * }
 */

type StudentList = { [key: string]: Student1<number, string> };

const studentList: StudentList = { 0: { id: 0, name: "Ahmad" } };

studentList["1"] = { id: 1, name: "Mahmoud" };

// ________________________________________________________
// type Combination

type OtherHandle = {
  other: number;
  //   handle: "Other";
};

type DataHandel = {
  data: string;
  //   handle: "Data";
};

type CombinedType = OtherHandle & DataHandel;
type CombinedType1 = OtherHandle | DataHandel;

const comdined: CombinedType = { data: "DATA", other: 1 };
const comdined1: CombinedType1 = { data: "DATA" };
