import User from '../models/User.js'
import { asyncHandler } from '../middlewares/asyncHandler.js'
import { generateToken } from '../utils/generateToken.js'

function sendAuthResponse(res, user, statusCode = 200) {
  res.status(statusCode).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  })
}

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Name, email, and password are required.')
  }

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    res.status(409)
    throw new Error('User already exists.')
  }

  const user = await User.create({ name, email, password })
  sendAuthResponse(res, user, 201)
})

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400)
    throw new Error('Email and password are required.')
  }

  const user = await User.findOne({ email })

  if (!user || !(await user.matchPassword(password))) {
    res.status(401)
    throw new Error('Invalid email or password.')
  }

  sendAuthResponse(res, user)
})
