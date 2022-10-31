const arr = [
  { winner: "Alishah", loser: "Bob", loser_points: 3 },
  { winner: "Maria", loser: "Xu Jin", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Maria", loser_points: 4 },
  { winner: "Alishah", loser: "Maria", loser_points: 2 },
  { winner: "Maria", loser: "Xu Jin", loser_points: 3 },
  { winner: "Xu Jin", loser: "Elise", loser_points: 2 },
];

const allPlayerNames = (outcomes) => {
  // IMPLEMENT ME
  const newArr = [];
  outcomes.forEach((outcome) => {
    const { winner, loser } = outcome;
    newArr.includes(winner) ? newArr : newArr.push(winner);
    newArr.includes(loser) ? newArr : newArr.push(loser);
  });
  return newArr;
};

console.log(allPlayerNames(arr));

const doShortly = (callback, delay, data) => {
  // IMPLEMENT ME
  setTimeout(callback, delay, data);
};
doShortly(allPlayerNames, 200, arr);
