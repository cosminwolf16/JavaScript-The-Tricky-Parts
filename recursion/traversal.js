const filesystem = {
  documents: {
    files: ['tax.txt', 'resume.pdf', 'picture.png'],
  },
  work: {
    urgent: {
      files: ['project-b.pdf'],
    },
    lowPrio: {
      files: ['budget.xlsx'],
    },
  },
};

console.log(getFileNames(filesystem));

function getFileNames(fs) {
  const allFiles = [];
  for (const identifier in fs) {
    if (Array.isArray(fs[identifier])) {
      allFiles.push(...fs[identifier]);
    } else {
      allFiles.push(...getFileNames(fs[identifier]));
    }
  }
  return allFiles;
}
