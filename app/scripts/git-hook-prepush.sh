# $? 0: successfully end, 1: some issue
echo "\033[32m[pre-push] Start prepush check\033[0m"

# Check for eslint
echo "\033[34m[pre-push] Check for yarn...\033[0m"
which yarn &> /dev/null
if [[ "$?" == 1 ]]; then
    echo "\033[31m\xE2\x9C\x96 Please install Yarn\033[0m"
    exit 1
fi
echo "\033[32m\xE2\x9C\x94 Pass for checking Yarn \033[0m"

# Eslint check all files under src/
echo "\033[34m[pre-push] Eslint check all files under src/...\033[0m"
yarn lint
if [[ "$?" == 1 ]]; then
    echo "\033[31m\xE2\x9C\x96 ESlint check fail, abort git push\033[0m"
    exit 1
fi
echo "\033[32m\xE2\x9C\x94 Pass for Eslint check \033[0m"

# Jest test
echo "\033[34m[pre-push] Jest test/...\033[0m"
yarn test
if [[ "$?" == 1 ]]; then
    echo "\033[31m\xE2\x9C\x96 Test fail, abort git push\033[0m"
    exit 1
fi
echo "\033[32m\xE2\x9C\x94 Pass for Jest test check \033[0m"

echo "\033[32m[pre-push] successfully\033[0m"