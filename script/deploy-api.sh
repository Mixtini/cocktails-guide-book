echo "\033[32m Start to deploy API service...\033[0m"
echo "\033[32m Firebase login\033[0m"
firebase login
cd ..
echo "\033[32m Deploy firebase functions\033[0m"
firebase deploy --only functions
echo "\033[32m Deploy is done!\033[0m"
