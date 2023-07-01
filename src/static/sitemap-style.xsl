<?xml version="1.0" encoding="UTF-8"?>
	<xsl:stylesheet version="2.0"
		xmlns:html="http://www.w3.org/TR/REC-html40"
		xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
		xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
		xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<title>Ulka Sitemap</title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<style type="text/css">
				body {
					background: #202123;
					color: #d2d2d2;
				}

				table {
					width: 100%;
					border-spacing: 0 10px;
				}

				div {
					width: 90%;
					max-width: 1100px;
					margin: auto;
				}

				a {
					color: #58a6ff;
					text-decoration: none;
					border-bottom: 0.1rem dotted #58a6ff;
					font-size: 20px;
				}

				a:hover {
					border-bottom-style: solid;
				}

				td {
					padding: 15px;
					background: #000;
				}

			</style>
		</head>
		<body>
		<div>
			<h1>Sitemap</h1>
			<hr/>
			<table>
				<tbody>
					<xsl:for-each select="sitemap:urlset/sitemap:url">
						<tr>
							<td>
								<xsl:variable name="itemURL">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:variable>
								<a href="{$itemURL}">
									<xsl:value-of select="sitemap:loc"/>
								</a>
							</td>
						</tr>
					</xsl:for-each>
				</tbody>
			</table>
		</div>
		</body>
		</html>
	</xsl:template>
	</xsl:stylesheet>