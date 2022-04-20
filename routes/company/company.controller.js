const Company = require('../../Models/company.model')

async function getCompany (req, res) {
  try {
    const companies = await Company.find()
    if (companies) {
      return res.status(200).json(companies)
    } else {
      return res.status(400).json('company not found')
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function createCompany (req, res) {
  try {
    const newCompany = await new Company(req.body).save()
    if (newCompany) {
      return res.status(200).json(newCompany)
    } else {
      return res.status(400).json("Can't create company")
    }
  } catch (err) {
    return res.status(400).json(err)
  }
}

module.exports = {
  getCompany,
  createCompany
}
