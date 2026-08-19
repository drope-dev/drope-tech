import fs from 'node:fs'
import path from 'node:path'

const inputPath = process.argv[2]
const outputDir = process.argv[3] ?? 'public/images/c4'

if (!inputPath) {
  console.error('Usage: node scripts/render-c4.mjs <scene.excalidraw> [output-dir]')
  process.exit(1)
}

const scene = JSON.parse(fs.readFileSync(inputPath, 'utf8'))
const elements = scene.elements.filter((element) => !element.isDeleted)

const blocks = [
  { id: 'system-landscape', title: '1 — System Landscape', x: -2973, y: -1194, width: 1000, height: 520 },
  { id: 'system-context', title: '2 — System Context', x: -1914, y: -1193, width: 1000, height: 520 },
  { id: 'container-diagram', title: '3 — Container Diagram — Use Pera', x: -853, y: -1194, width: 1300, height: 520 },
  { id: 'component-diagram', title: '4 — Component Diagram — Use Pera API', x: -2974, y: -614, width: 1370, height: 740 },
]

const escapeXml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&apos;')

const getBounds = (element) => {
  if (element.type === 'rectangle' || element.type === 'text') {
    return { x: element.x, y: element.y, width: element.width, height: element.height }
  }

  const points = element.points ?? []
  const xs = points.map(([x]) => element.x + x)
  const ys = points.map(([, y]) => element.y + y)
  return {
    x: Math.min(...xs),
    y: Math.min(...ys),
    width: Math.max(...xs) - Math.min(...xs),
    height: Math.max(...ys) - Math.min(...ys),
  }
}

const intersects = (a, b) => (
  a.x < b.x + b.width &&
  a.x + a.width > b.x &&
  a.y < b.y + b.height &&
  a.y + a.height > b.y
)

const renderText = (element, offsetX, offsetY) => {
  const lines = element.text.split('\n')
  const textAlign = element.textAlign ?? 'left'
  const x = (textAlign === 'center' ? element.x + element.width / 2 : element.x) - offsetX
  const y = element.y - offsetY
  const lineHeight = (element.fontSize ?? 16) * (element.lineHeight ?? 1.25)
  const tspans = lines.map((line, index) => (
    `<tspan x="${x}" dy="${index === 0 ? 0 : lineHeight}">${escapeXml(line)}</tspan>`
  )).join('')

  const anchor = textAlign === 'center' ? 'middle' : textAlign === 'right' ? 'end' : 'start'
  return `<text x="${x}" y="${y}" fill="${element.strokeColor ?? '#1f2937'}" font-family="Arial, Helvetica, sans-serif" font-size="${element.fontSize ?? 16}" text-anchor="${anchor}" dominant-baseline="hanging">${tspans}</text>`
}

const renderRectangle = (element, offsetX, offsetY) => {
  const fill = element.backgroundColor && element.backgroundColor !== 'transparent'
    ? element.backgroundColor
    : 'none'
  const dash = element.strokeStyle === 'dashed' ? ' stroke-dasharray="10 8"' : ''
  const radius = element.roundness ? 12 : 0
  return `<rect x="${element.x - offsetX}" y="${element.y - offsetY}" width="${element.width}" height="${element.height}" rx="${radius}" fill="${fill}" stroke="${element.strokeColor ?? '#475569'}" stroke-width="${element.strokeWidth ?? 2}"${dash}/>`
}

const renderPath = (element, offsetX, offsetY) => {
  const points = (element.points ?? []).map(([x, y]) => `${element.x + x - offsetX},${element.y + y - offsetY}`).join(' ')
  const isArrow = element.type === 'arrow' && element.endArrowhead !== null
  return `<polyline points="${points}" fill="none" stroke="${element.strokeColor ?? '#475569'}" stroke-width="${element.strokeWidth ?? 2}" stroke-linecap="round" stroke-linejoin="round"${isArrow ? ' marker-end="url(#arrow)"' : ''}/>`
}

const renderBlock = (block) => {
  const padding = 20
  const view = { x: block.x - padding, y: block.y - padding, width: block.width + padding * 2, height: block.height + padding * 2 }
  const selected = elements.filter((element) => intersects(getBounds(element), block))
  const content = selected.map((element) => {
    if (element.type === 'rectangle') return renderRectangle(element, view.x, view.y)
    if (element.type === 'text') return renderText(element, view.x, view.y)
    if (element.type === 'arrow' || element.type === 'line') return renderPath(element, view.x, view.y)
    return ''
  }).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${view.width} ${view.height}" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(block.title)}</title>
  <desc id="description">Diagrama C4 da Use Pera</desc>
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto" markerUnits="strokeWidth">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="${view.width}" height="${view.height}" fill="#ffffff"/>
  ${content}
</svg>
`
}

fs.mkdirSync(outputDir, { recursive: true })
for (const block of blocks) {
  fs.writeFileSync(path.join(outputDir, `${block.id}.svg`), renderBlock(block))
}

console.log(`Rendered ${blocks.length} C4 diagrams to ${outputDir}`)
