build:
	rm -rf public
	hugo

deploy: build
	aws s3 sync public/ s3://oddenmath.com --acl public-read --delete
	aws configure set preview.cloudfront true
	aws cloudfront create-invalidation --distribution-id E1Z6A8K5R2OO8H --paths '/*'