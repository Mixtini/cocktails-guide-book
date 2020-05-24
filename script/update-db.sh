echo "\033[32m Start to update database...\033[0m"
cd ../database
firebase database:set / overpartylab-4c6d2-export.json
echo "\033[32m Realtime database is updated!\033[0m"