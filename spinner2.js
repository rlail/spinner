const spinnerFrames = ['|', '/', '-', '\\'];
let delay = 100;

process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (let i = 0; i < 12; i++) {
  setTimeout(() => {
    const frame = spinnerFrames[i % spinnerFrames.length];
    process.stdout.write(`\r${frame}   `);
    
    if (i === 11) {
      process.stdout.write('\n');
    }
  }, delay);
  
  delay += 200;
}