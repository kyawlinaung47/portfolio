
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import pg from 'pg'

// Initialize the database pool
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })

// Instantiate the Prisma driver adapter
const adapter = new PrismaPg(pool)

// Pass the adapter to your Prisma Client
export const prisma = new PrismaClient({ adapter })
