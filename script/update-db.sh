echo "\033[32m Start to update database...\033[0m"
cd ../firebase/database
firebase database:set / cocktails-guide-api-service-export.json -f
echo "\033[32m Realtime database is updated!\033[0m"