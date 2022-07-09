import fs from "fs"

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",")
  })

// enum - enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1
  }
}

console.log(`Man United won ${manUnitedWins} games`)
