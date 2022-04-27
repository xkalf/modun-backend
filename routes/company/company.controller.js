const Company = require('../../Models/company.model')
const Sector = require('../../Models/sector.model')
const User = require('../../Models/user.model')

async function getCompany (req, res) {
  try {
    const companies = await Company.find().populate('products.product')
    if (companies) {
      return res.status(200).json(companies)
    } else {
      return res.status(500).json('company not found')
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function createCompany (req, res) {
  try {
    const newCompany = await new Company(req.body).save()
    if (newCompany) {
      return res.status(200).json(newCompany)
    } else {
      return res.status(500).json("Can't create company")
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function updateCompany (req, res) {
  try {
    const { id } = req.params
    const updatedCompany = Company.findByIdAndUpdate(
      id, {
        $set: req.body
      },
      {
        new: true
      }
    )
    if (updatedCompany) return res.status(200).json(updatedCompany)
    else return res.status(500).json("Can't update")
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function addProduct (req, res) {
  try {
    const { companyId, product, quantity, perCost } = req.body
    const company = await Company.findById(companyId)
    const products = company.products
    const companyProduct = products.find(el => el.product.toString() === product)
    if (companyProduct) {
      companyProduct.quantity += quantity
    } else {
      company.products.push({ product, quantity, perCost })
    }
    await company.save()
    return res.status(200).json(company)
  } catch (err) {
    return res.status(500).json(err)
  }
}

async function getProducts (req, res) {
  try {
    const { id } = req.params
    const company = await Company.findById(id).populate('products.product')
    if (company) return res.status(200).json(company.products)
    else return res.status(500).json('Company not found')
  } catch (error) {
    return res.status(500).json(error)
  }
}

async function sendToSector (req, res) {
  try {
    const { user, sectorId, product, quantity } = req.body
    const currentUser = await User.findById(user)
    const company = await Company.findById(currentUser.company)
    const sector = await Sector.findById(sectorId)
    const companyProduct = company.products.find(el => el.product.toString() === product)
    const sectorProduct = sector.products.find(el => el.product.toString() === product)

    if (!companyProduct) return res.status(500).json({ err: 'Product not found' })

    if (companyProduct.quantity > quantity) companyProduct.quantity -= quantity
    else return res.status(500).json({ err: 'Company quantity less than' })

    if (sectorProduct) sectorProduct.quantity += quantity
    else sector.products.push({ product, quantity })

    await sector.save()
    await company.save()
    return res.status(200).json('Successfully sended')
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports = {
  getCompany,
  createCompany,
  addProduct,
  sendToSector,
  updateCompany,
  getProducts
}
