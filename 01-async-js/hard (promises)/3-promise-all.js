function wait1(t) {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, t * 1000);
    });
  }
  
  function wait2(t) {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, t * 1000);
    });
  }
  
  function wait3(t) {
    return new Promise((res) => {
      setTimeout(() => {
        res();
      }, t * 1000);
    });
  }
  
  async function calculateTime(t1, t2, t3) {
    let start = +new Date();
  
    return wait1(t1).then(() => {
      return wait2(t2).then(() => {
        return wait3(t3).then(() => {
          const end = +new Date();
          return end - start;
        });
      });
    });
  }
  
  calculateTime(1, 1, 4).then(console.log);
  
  module.exports = calculateTime;