const os = require('os');
const fs = require('node:fs');

const freeMem = os.freemem();
const totalMem = os.totalmem();
const cpu = os.cpus();


function pcInfo(){
    function bytesToGB(bytes) {
      return (bytes / (1024 * 1024 * 1024)).toFixed(2); // 1 GB = 1024 * 1024 * 1024 bytes
    }

    function printInfo() {
        return `Total memory: ${bytesToGB(totalMem)} GB
    Free memory: ${bytesToGB(freeMem)} GB
    Used memory: ${bytesToGB(totalMem - freeMem)} GB
    CPU: ${cpu[0].model}
    CPU cores: ${cpu.length}`;
    }

    const data = printInfo();
    fs.writeFile('pc_info.txt', data, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
}

exports.info = pcInfo;