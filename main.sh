#!/bin/bash

## AUX VARS
PROCESS=1
TEMP=''

# Find node binary
NODE_BINARY=$(which node)

if [ $? -ne 0 ]; then
        echo ""
        echo "##############################################"
        echo "#  ***** ERROR REQUESTING WITH NODE ******   #"
        echo "#    We did not find node on your system     #"
        echo "#       Install node on your system          #"
        echo "##############################################"
        echo ""
        exit
fi

while [ $PROCESS -eq 1 ]
do
	sleep 1
	TOKEN=$(node /usr/local/scripts/gcp-get-oauth2-token/scripts/getOauth2Token.js) > /dev/null 2>&1
    if [ $? -ne 0 ]; then
    	clear >$(tty)
        echo ""
        echo "#############################################################"
        echo "#  ************* ERROR REQUESTING YOUR TOKEN *************  #"
        echo "#  Check your configuration file in the following path:     #"
        echo "#  /usr/local/scripts/gcp-get-oauth2-token/config/config.js #"
        echo "#############################################################"
        echo ""
        exit
    fi

	TOKEN_CP=$TOKEN
	TOKEN_TEMP=$(echo "${TOKEN_CP//./}")
	CHARS_IN_TOKEN=$(echo -n "$TOKEN_TEMP" | wc -c)

	# If token length is < 500 characters keep requesting token
	# displaying dots until process is (0)
	if [ $CHARS_IN_TOKEN -lt 500 ]; then
		TEMP+="."
        	clear >$(tty)
        	echo "Processing your token request $TEMP"
		PROCESS=1
	else
		PROCESS=0
	fi

done

clear >$(tty)

echo $TOKEN

exit
