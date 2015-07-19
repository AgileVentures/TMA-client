# TMA-client  [![Build Status][semaphore-badge]][semaphore] [![Coverage Status][coverage-badge]][coverage]
[oo-sw]: http://opensource.org/osd
[about-us]: http://www.agileventures.org/about-us
[members]: http://www.agileventures.org/users
[av-logo]: https://raw.githubusercontent.com/AgileVentures/agileventures-profile/master/small_avatar.png

[pivotal]: https://www.pivotaltracker.com/n/projects/1321640

[tma-api]: https://github.com/AgileVentures/TakeMeAway
[iojs-install]: https://github.com/coolaj86/iojs-install-script

[semaphore-badge]: https://semaphoreci.com/api/v1/projects/a3a87934-7f5f-482b-9d5e-c75f444eb1bd/416848/badge.svg
[semaphore]: https://semaphoreci.com/agileventures/tma-client
[coverage-badge]: https://codeclimate.com/github/AgileVentures/TMA-client/badges/coverage.svg
[coverage]: https://codeclimate.com/github/AgileVentures/TMA-client/coverage

Repository for a sample client application for [TakeMeAway API][tma-api]


## Demo

Check out [development.tma-client.divshot.io](http://development.tma-client.divshot.io)

## Development


1. Fork and clone the repository
2. Install nodejs using nvm (If you don't have it already. Recommended version `iojs-v1.6.4` or `node v0.12.2`)

  ```shell
  $ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.1/install.sh | bash
  $ source ~/.nvm/nvm.sh
  ```

  Add the last line to your ~/.bashrc, ~/.profile, or ~/.zshrc file to have it automatically sourced upon login.

  ```shell
  $ nvm install iojs-v1.6.4
  or
  $ nvm install 0.12.2
  ```

3. Install `grunt-cli` and `bower`

  ```shell
  $ npm install -g grunt-cli bower
  ```

4. Install project dependencies

  ```shell
  $ cd /path/to/project
  $ npm install && bower install
  ```

5. Add Stripe Public Token
  
  In `Gruntfile.js`, look for `// Environment Variables` and add your `STRIPE_PUBLISHABLE_KEY` ngconstant for the `development` and `production` environments. To get a Stripe account: https://stripe.com/

  ```javascript
    ENV: {
      name: 'development',
      STRIPE_PUBLISHABLE_KEY: 'xxxxxxxx'
    }
  ```

6. Run all tests

  ```shell
  $ grunt test
  ```

7. Run the application

  ```shell
  $ grunt serve
  ```

<br>

## Contributing
In the spirit of [open source software][oo-sw], **everyone** is encouraged to help
improve this project.


Here are some ways *you* can contribute:
* by [reporting][pivotal] bugs
* by [suggesting new features][pivotal]
* by writing code (**no patch is too small**: fix typos, add comments, clean up
  inconsistent whitespace)
* by [refactoring][pivotal] code
* by closing [issues][pivotal]

Eager to get started? Check out our [Project Setup](https://github.com/AgileVentures/TMA-client/wiki/Project-Setup)
page

## About AgileVentures
<br>
[![AgileVenture][av-logo]][about-us]

Agile Ventures is a non-profit organization dedicated to crowdsourced learning and project development. We run a [project incubator](http://www.agileventures.org/projects) that stimulates and supports development of social innovations, [open source projects and free software][oo-sw]. But first and foremost, we are a [place for learning][about-us] and personal development with [members][members] from across the world with various levels of competence and experience in software development.

We are proudly using Agile methods and Ruby on Rails as the framework to deliver well tested and solid software.

The principal organization behind this project is AGILEVENTURES NONPROFIT LTD., a nonprofit organization registered in the UK, company number: 08929160
