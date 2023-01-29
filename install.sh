#!/bin/bash

sudo mkdir -p ~/gcp-get-oauth2-token
cd ~/gcp-get-oauth2-token
wget https://github.com/jhonnygo/gcp-get-oauth2-token/raw/main/gcp-get-oauth2-token.tar
sudo tar xf gcp-get-oauth2-token.tar && sudo rm -rf gcp-get-oauth2-token.tar
sudo mkdir -p /usr/local/scripts/gcp-get-oauth2-token
sudo mv config /usr/local/scripts/gcp-get-oauth2-token/
sudo mv helpers /usr/local/scripts/gcp-get-oauth2-token/
sudo mv scripts /usr/local/scripts/gcp-get-oauth2-token/
sudo mv main.sh /usr/local/bin/gcp-get-oauth2-token.sh
sudo chmod +x /usr/local/bin/gcp-get-oauth2-token.sh
sudo rm -rf ~/gcp-get-oauth2-token
sudo apt-get -y install shc > /dev/null 2>&1
sudo shc -Uf /usr/local/bin/gcp-get-oauth2-token.sh -o /usr/local/bin/gcp-get-oauth2-token > /dev/null 2>&1
sudo rm -rf /usr/local/bin/gcp-get-oauth2-token.sh
sudo rm -rf /usr/local/bin/gcp-get-oauth2-token.sh.x.c
cd ~

exit
