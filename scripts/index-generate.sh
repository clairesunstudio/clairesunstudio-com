# run from project root --> $ source scripts/index-generate.sh
export_file=src/Data/projectData.js

> $export_file |
echo "module.exports = " >> $file |
tree -J public/projects >> $file
