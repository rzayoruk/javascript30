const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
]

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
]
// who were born between 1500 and 1600
const fifteen = inventors.filter(
  (inventor) => Math.floor(inventor.year / 100) == 15
)
console.table(fifteen)

//return an array of inventors first and last name
const fullNames = inventors.map(
  (inventor) => inventor.first + " " + inventor.last
)
console.table(fullNames)

//sort the inventors by birthday, oldest to youngest
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1))
console.table(ordered)

//How many years did all inventors live
const totalYears = inventors.reduce(
  (acc, inventor) => (acc += inventor.passed - inventor.year),
  0
)
console.log(totalYears)

//sort the inventors by years lived
const fromOldest = inventors.sort((a, b) =>
  b.passed - b.year > a.passed - a.year ? 1 : -1
)
console.table(fromOldest)

// create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector(".mw-category")
// const links = Array.from(category.querySelectorAll("a"))
// const de = links
//   .map((link) => link.textContent)
//   .filter((streetName) => streetName.includes("de"))

//sort the people alphabetically by last name
const sortedByLastName = people.map((both) => both.split(", ")[1]).sort()
console.log(sortedByLastName)

// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
]

const sum = data.reduce(function (acc, vehicle) {
  if (!acc[vehicle]) acc[vehicle] = 0

  acc[vehicle]++
  return acc
}, {})
console.log(sum)
