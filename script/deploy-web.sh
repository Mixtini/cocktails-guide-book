echo "\033[32m Start to deploy web portal...\033[0m"
echo "\033[32m Build react project\033[0m"
cd ../app/src && yarn build
echo "\033[32m Copy build file into firebase public folder\033[0m"
cd ..
cp -a dist/. ../public
echo "\033[32m Firebase login\033[0m"
firebase login
cd ..
echo "\033[32m Deploy firebase hosting\033[0m"
firebase deploy --only hosting
echo "\033[32m Deploy is done!\033[0m"