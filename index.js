let n = 5;

// Top half
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  if (i === 1) {
    row += "*";
  } else {
    row += "*";
    for (let s = 1; s <= 2 * i - 3; s++) {
      row += " ";
    }
    row += "*";
  }

  console.log(row);
}

// Bottom half
for (let i = n - 1; i >= 1; i--) {
  let row = "";

  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  if (i === 1) {
    row += "*";
  } else {
    row += "*";
    for (let s = 1; s <= 2 * i - 3; s++) {
      row += " ";
    }
    row += "*";
  }

  console.log(row);
}
