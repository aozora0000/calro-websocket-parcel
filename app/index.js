const path = require('path')
const carlo = require('carlo')
const Bundler = require('parcel-bundler')


const bootstrap = async () => {
    const outDir = path.join(__dirname, 'dist')
    const entryFile = path.join(__dirname, 'src', 'index.html')
    const opts = {
        outDir,
        outFile: 'index.html',
        sourceMaps: true,
        hmr: false
    }

    const bundler = new Bundler(entryFile, opts)
    await bundler.bundle()
    const cApp = await carlo.launch()
    await cApp.exposeFunction('cwd', () => process.cwd())
    await cApp.exposeFunction('cpu', () => process.cpuUsage())
    await cApp.exposeFunction('memory', () => process.memoryUsage())

    cApp.serveFolder(outDir)
    await cApp.load('index.html')
}

bootstrap()