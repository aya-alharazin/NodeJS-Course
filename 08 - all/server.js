require('dotenv').config()
const app = require('./app')
const { connectDB, closeDB } = require('./config/db')

const PORT = process.env.PORT || 5000

const startServer = async () => {
    try {
        await connectDB()                    // 1. connect to DB first
        console.log('MongoDB connected ✅')

        const server = app.listen(PORT, () => {
            console.log(`Server running on port ${PORT} ✅`)
        })

        // 2. close when the process stops
        process.on('SIGINT', async () => {       // Ctrl+C
            console.log('Shutting down...')
            await closeDB()
            server.close()
            process.exit(0)
        })

        process.on('SIGTERM', async () => {      // system kill signal
            console.log('Shutting down...')
            await closeDB()
            server.close()
            process.exit(0)
        })

    } catch (err) {
        console.error('Failed to connect to DB ❌', err)
        process.exit(1)                      // stop the app if DB fails
    }
}

startServer()