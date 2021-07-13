const aliases = (prefix = `src`) => ({
	'@src': `${prefix}/`,
	'@context': `${prefix}/context`,
	'@core': `${prefix}/components/core`,
	'@layouts': `${prefix}/components/layouts`,
	'@pages': `${prefix}/pages`,
	'@styled': `${prefix}/styled`
})

module.exports = aliases
