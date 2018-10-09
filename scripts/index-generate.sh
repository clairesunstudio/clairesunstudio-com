# run from project root --> $ source scripts/index-generate.sh
export_file=src/Data/projectData.js

> $export_file |
echo "module.exports = " >> $export_file |
tree -J public/projects >> $export_file
done
