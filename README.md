# graphql-july
TEMPLATE / EXAMPLE FROM https://graphql.org/learn/
setver.js SLIGHTLY MODIFIED
json.txt (NEEDED FOR "curl" TEST FROM cmd)
	{"data":{"hello":"Hello world!"}}
ACCORDING TO FOLLOWING ARTICLE
	https://develop.zendesk.com/hc/en-us/articles/360001068567-Installing-and-using-cURL
		curl -X POST ^
			-H "Content-Type: application/json" ^
				-d @json.txt ^
					http://localhost:4002/graphql
