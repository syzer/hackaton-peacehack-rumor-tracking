/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

import Thing from '../api/thing/thing.model'
import User from '../api/user/user.model'
import Message from '../api/message/message.model'

Message.find({}).remove()
  .then(() => {
    Message.create(
      {
        date: Date.now(),
        "img": "https://pbs.twimg.com/media/BqyHXLkCQAEE2hf.jpg",
        "text": "reader will be distracted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default model text, and a search",
        "notify": "me",
        "blocked": false
      },
      {
        date: Date.now(),
        "text": "ted by the readable content of a page when looking at  web page editors now use Lorem Ipsum as their default m",
        "notify": "me",
        "blocked": false,
        "img": "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
      },
      {
        date: Date.now(),
        "text": "web page editors now use Lorem Ipsum as their default m!",
        "notify": "me",
        "blocked": false,
        "img": "http://p.fod4.com/p/media/15622856b6/5x8xefLwQaWQND3oZPvw_Simpsons Stare.gif"
      },
      {
        date: Date.now(),
        "text": "Here's what Brexit actually means for the UK",
        "notify": "me",
        "blocked": false,
        "img": "http://static3.uk.businessinsider.com/image/57cd2cf8dd0895ec388b4a5e-839/heres-what-brexit-actually-means-for-the-uk.jpg"
      })
  })
  .then(() => {
    console.log('finished populating messages')
  })

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
      + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
      + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
      + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
      + 'tests alongside code. Automatic injection of scripts and '
      + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
      + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
      + 'payload, minifies your scripts/css/images, and rewrites asset '
      + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
      + 'and openshift subgenerators'
    })
  })

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
      .then(() => {
        console.log('finished populating users')
      })
  })
