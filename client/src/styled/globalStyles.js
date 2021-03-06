import { createGlobalStyle } from 'styled-components'
import { fz, family } from '@styled/fonts'
import { black, grey } from '@styled/colors'

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	line-height: 1;
}
ol,
ul {
	list-style: none;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html,
body {
	padding: 0;
	margin: 0;
	font-family: ${family['default']};
	font-size: ${fz[400]};
	line-height: 1;
	color: ${black};
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-color: ${grey[50]};
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}

*:focus {
	outline: 0;
}

input {
	border: 0;
	background-color: transparent;
}

input,
input:focus {
	outline: 0;
}

button {
	border: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
.heading {
	font-family: ${family['heading']};
	font-weight: normal;
	margin-top: 0;
	margin-bottom: 0;
}

/* TEMP */
*:focus {
	outline: 0;
}

`
