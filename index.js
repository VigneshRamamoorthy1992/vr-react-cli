#!/usr/bin/env node
let shell = require('shelljs')
let colors = require('colors')
let fs = require('fs')
let templates = require('./templates/templates.js')
let storeTemplates = require('./templates/storeTemplates.js')

let command = process.argv[2]
let appName = process.argv[3]
let appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
  if (command === "new") {
    let success = await createDmReactApp()
    if (!success) {
      console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
      return false;
    }
    await cdToAppDir()
    await installPackages()
    await startApp()
    console.log("All done")
  } else if (command === "c" || command === "component") {
    await createComponentDir()
    await createComponent()
  } else if (command === "s" || command === "start") {
    console.log('calling start app');
    await startApp()
  } else if (command === "r" || command === "redux") {
    await createComponentDir()
    await createStore()
  }
}

// create new
const createDmReactApp = () => {
  return new Promise(resolve => {
    if (appName) {
      shell.mkdir(appName)
      shell.cd(appName)
      shell.exec('git clone https://github.com/VigneshRamamoorthy1992/client.git')
      console.log("\ncheckout completed \n".green)
      resolve(true)
    } else {
      console.log("\nNo app name was provided.".red)
      console.log("\nProvide an app name in the following format: ")
      console.log("\ncreate-react-redux-router-app ", "app-name\n".cyan)
      resolve(false)
    }
  })
}
const cdToAppDir = () => {
  return new Promise(resolve => {
    console.log("\ncd..\n".green)
    shell.cd('client')
    resolve()
  })
}
const startApp = () => {
  return new Promise(resolve => {
    console.log("\n starting app\n".green)
    shell.exec(`npm start`, () => {
      console.log("\n Application is running..\n".green)
      resolve()
    })
  })
}
const installPackages = () => {
  return new Promise(resolve => {
    console.log("\nInstalling packages..\n".cyan)
    console.log("\nplease wait.. this might take few minutes..\n".cyan)
    shell.exec(`npm install`, () => {
      console.log("\nFinished installing packages\n".green)
      resolve()
    })
  })
}

// create component
const createComponent = () => {
  console.log("\n file generation path.. \n".cyan, `${appDirectory}`)
  return new Promise(resolve => {
    let promises = []
    userComponentAppend = ['.tsx', '.css', '.test.tsx']
    console.log("\ngenerating files.. \n".green)
    Object.keys(templates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        var result = templates[fileName].replace(/placeholder/g, `${appName}`);
        fs.writeFile(`${appDirectory}/${appName}${userComponentAppend[i]}`, result, function (err) {
          if (err) { return console.log(err) }
          res()
        })
      })
    })
    console.log("\nfiles generated successfully.. \n".green)
    Promise.all(promises).then(() => { resolve() })
  })
}

// create store
const createStore = () => {
  console.log("\n file generation path.. \n".cyan, `${appDirectory}`)
  return new Promise(resolve => {
    let promises = []
    console.log("\ngenerating store files.. \n".green)
    Object.keys(storeTemplates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        var result = storeTemplates[fileName].replace(/placeholder/g, `${appName}`);
        var finalResult = result.replace(/phCap/g, `${appName.toUpperCase()}`);
        var finalUpdatedResult = finalResult.replace(/sholder/g, `${appName.charAt(0).toLowerCase() + appName.slice(1)}`);
        fs.writeFile(`${appDirectory}/${fileName}`, finalUpdatedResult, function (err) {
          if (err) { return console.log(err) }
          res()
        })
      })
    })
    console.log("\nstore files generated successfully.. \n".green)
    Promise.all(promises).then(() => { resolve() })
  })
}

const createComponentDir = () => {
  return new Promise(resolve => {
    console.log("\ncreating new path..\n".green)
    shell.mkdir(appName)
    resolve()
  })
}

run()
