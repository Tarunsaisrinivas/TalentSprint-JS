function longestWord(paragraph) {
  const words = paragraph.split(/\s+/);
  let longest = "";

  for (let w of words) {
    if (w.length > longest.length) {
      longest = w;
    }
  }

  console.log("Longest Word:", longest);
  console.log("Length:", longest.length);
}

longestWord("This is a demonstration of finding the largestwordhere");
