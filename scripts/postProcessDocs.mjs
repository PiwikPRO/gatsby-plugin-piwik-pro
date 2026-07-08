import { readFileSync, writeFileSync } from 'node:fs'

// assumes this script is ran from /plugin
const README = '../README.md'

const file = readFileSync(README, 'utf-8')

const formattedOutput = file
  .split('\n')
  // remove the auto-generated index heading
  .filter((line) => !line.includes('## @piwikpro/gatsby-plugin-piwik-pro'))
  // remove duplicated header
  .filter((line) => !line.includes('### Functions'))
  // rename the index group heading
  .map((line) => line.replace('### Namespaces', '### Table of contents'))
  // restore the title level lowered by concat-md
  .map((line) =>
    line.replace(
      '## Piwik PRO Library for Gatsby',
      '# Piwik PRO Library for Gatsby'
    )
  )
  // strip the package-name prefix from anchors
  .map((line) =>
    line.replaceAll('gatsby-plugin-piwik-pronamespaces', 'namespaces')
  )
  // keep separators between sections, not between properties
  .filter((line) => line.trim() !== '***')
  // re-add a separator after each section anchor (skip the readme title)
  .map((line) =>
    line.startsWith('<a name="') && !line.includes('name="readmemd"')
      ? `${line}\n\n\n***\n`
      : line
  )
  .join('\n')

// concat-md sorts directories alphabetically, so "gatsby-plugin-piwik-pro"
// lands before the table of contents. Reorder to: intro, contents, namespaces,
// type aliases/variables. Anchors are document-wide, so links still work.
const lines = formattedOutput.split('\n')
const namespacesStart = lines.findIndex((line) =>
  line.includes('<a name="namespaces')
)
const contentsStart = lines.findIndex((line) =>
  line.includes('<a name="globalsmd"')
)
const typeAliasesStart = lines.findIndex((line) =>
  line.includes('<a name="type-aliases')
)

const canReorder =
  namespacesStart !== -1 &&
  contentsStart !== -1 &&
  typeAliasesStart !== -1 &&
  namespacesStart < contentsStart &&
  contentsStart < typeAliasesStart

const reordered = canReorder
  ? [
      ...lines.slice(0, namespacesStart),
      ...lines.slice(contentsStart, typeAliasesStart),
      ...lines.slice(namespacesStart, contentsStart),
      ...lines.slice(typeAliasesStart),
    ].join('\n')
  : formattedOutput

writeFileSync(README, reordered)
