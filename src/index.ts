import { CSVFileReader } from "./CSVFileReader"

const reader = new CSVFileReader("football.csv")
reader.read()

// enum - enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0

for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1
  }
}

console.log(`Man United won ${manUnitedWins} games`)
