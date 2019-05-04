const Mail = require('../services/Main')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail({
      form: '"Diego Fernandes" <devcaruso@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: `purchase`,
      context: { user, content, ad }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
