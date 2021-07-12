const aliases = (prefix = `src`) => ({
	'@context': `${prefix}/context`,
	'@core': `${prefix}/components/core`,
	'@layouts': `${prefix}/components/layouts`,
	'@pages': `${prefix}/pages`,
	'@styled': `${prefix}/styled`
})

module.exports = aliases
