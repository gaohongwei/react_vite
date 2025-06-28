const FakeData = [
  {
    name: "a1",
    email: "a1@gmail.omc",
  },
  {
    name: "a2",
    email: "a3@gmail.omc",
  },
]

/*
  Promise Take a fun
  This fun takes two arguments
*/
async function fakeApi() {
  return new Promise((resolve, reject) => resolve(FakeData))
}

export { fakeApi }
