const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What should we call you? ', (name) => {
  

  rl.question('What is your favorite pastime? ', (pastime) => {
    

    rl.question('What is something your proud of? ', (proud) => {
      

      rl.question('Where do you want to travel to the most? ', (travel) => {
        

        rl.question('If you were an animal what animal would you be? ', (animal) => {
          

          rl.question('Who is your favorite artist or band? ', (music) => {
            

            rl.question('Tell me your best joke? ', (joke) => {
              console.log(`Hi I am ${name}, I enjoy ${pastime}. One thing I am proud of is ${proud}. I love to travel, the first place I would go is ${travel}. If I were an animal I would be a ${animal}. My favorite artist or band would be ${music}. Heres a good joke for you! ${joke}`);
              
              rl.close();
            });
          });
        });
      });
    });
  });
});